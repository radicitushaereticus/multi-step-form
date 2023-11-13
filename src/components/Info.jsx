import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

const InfoSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email:Yup.string().email("Invalid email").required("This field is required"),
    phone:Yup.string().required("This field is required"),
});

function InputField ({label,name,type,value,placeholder,onChange,onBlur,error}) {
    return(
        <>
            <div className='flex flex-row items-center'>
                <label className='text-marineBlue' htmlFor={name}>{label}</label>
                {error && <div className='text-StrawberryRed ml-auto font-bold text-xs'>{error}</div>}
            </div>
            <input type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} 
                className={`mt-1 mb-6 block w-full px-3 py-3 bg-white border border-slate-300  text-sm shadow-sm placeholder-coolGrey
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-red-500 invalid:text-StrawberryRed
                focus:invalid:border-red-500 focus:invalid:ring-StrawberryRed ${error && "border-StrawberryRed"} rounded-md cursor-pointer hover:border-PurplishBlue`} 
            />
            
        </>
    );
}

export default function Info({formData, setFormData, onValidityChange}) {

    const formik = useFormik({
    
        initialValues : {
             name:formData.name,
             email:formData.email,
             phone:formData.phone
         },
 
         validationSchema: InfoSchema,
 
         onSubmit: () => {},

         validateOnMount: true,
 
     })

    const fields = [
        { label: "Name", type: "text", name: "name", placeholder:"e.g. Stephen King"},
        { label: "Email address", type: "email", name: "email", placeholder:"e.g. stephenking@lorem.com"},
        { label: "Phone Number", type: "tel", name: "phone", placeholder:"e.g. +1 234 567 890"}
    ];

    useEffect(()=> {
        setFormData(prevState => (
            {
                ...prevState,
                ...formik.values
            }
        ))
    },[formik.values])

    useEffect(()=> {
        onValidityChange(formik.isValid)
    },[formik.isValid, onValidityChange])


    return (

        <div className='flex flex-col px-2'>
    
            <div className='mb-10'>
                <h1 className='font-Ubuntu text-third text-3xl font-bold'>Personal info</h1>
                <p className='text-gray-400'> Please provide your name, email address, and phone number.</p>
            </div>
    

            {fields.map(field => (
                    <InputField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        error={formik.errors[field.name] && formik.touched[field.name] && formik.errors[field.name]}
                        onBlur={formik.handleBlur}
                    />
            ))}
    
    
        </div>
    )
  
    }
