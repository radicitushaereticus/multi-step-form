import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

const InfoSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email:Yup.string().email("Invalid email").required("Required"),
    phone:Yup.string().required("Required"),
});

function InputField ({label,name,type,value,onChange,onBlur,error}) {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} className='mt-1 mb-6 block w-full px-3 py-2 bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500' 
            />
            {error && <div className='text-red-600'>{error}</div>}

        </>
    );
}

export default function Info({formData, setFormData,setStepValid}) {

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
        { label: "Name", type: "text", name: "name"},
        { label: "Email address", type: "email", name: "email"},
        { label: "Phone Number", type: "tel", name: "phone" }
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
        setStepValid(formik.isValid)
    },[formik.isValid, setStepValid])


    return (

        <div className='flex flex-col'>
    
            <div className='mb-10'>
                <h1 className='font-Ubuntu text-third text-3xl font-bold'>Personal info</h1>
                <p className='text-gray-400'> Please provide your name, email address, and phone number.</p>
            </div>
    

            {fields.map(field => (
                    <form onSubmit={formik.handleSubmit}>
                    <InputField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        error={formik.errors[field.name] && formik.touched[field.name] && formik.errors[field.name]}
                        onBlur={formik.handleBlur}
                    />
                </form>
            ))}
    
    
        </div>
    )
  
    }
