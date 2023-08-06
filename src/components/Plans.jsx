import React, { useState } from 'react'
import arcadeIcon from '../assets/icon-arcade.svg'
import advancedIcon from '../assets/icon-advanced.svg'
import proIcon from '../assets/icon-pro.svg'


export default function Plans({formData, setFormData}) {
    const isYearly = formData.isYearly


    const plans = [
        {   
            name:"Arcade",
            pricing: {
                monthly:'9$/mo',
                anually:'90$/yr',
            },
            icon: arcadeIcon,
            color:"#FFAF7E",
            id:"arcade-option"
        },
        {
            name:"Advanced",
            pricing: {
                monthly:'12$/mo',
                anually:'120$/yr',
            },
            icon:advancedIcon,
            color:"#F9818E",
            id:"advanced"
        },
        {
            name:"Pro",
            pricing: {
                monthly:'15$/mo',
                anually:'150$/yr',
            },
            icon:proIcon,
            color:"#483EFF",
            id:"pro"
        }
    ]

    function handlePlanChange(selectedPlan) {
        setFormData(prevState => (
            {
                ...prevState,
                selectedPlan,
            }
        ))
    }

    function handlePricingChange () {
        setFormData(prevState => (
            {
                ...prevState,
                isYearly: !prevState.isYearly
            }
        ))
        
    }



    return (
        <div className='flex flex-col gap-y-10'>
            <div className="heading">
                <h1 className='font-Ubuntu text-third text-3xl font-bold'>Select your plan</h1>
                <p className='text-third'>You have the option of monthly or yearly billing.</p>
            </div>
        
            <ul className="grid w-full gap-6 md:grid-cols-3 ">
                {plans.map(plan => (
                <li className="flex flex-col" key={plan.id}>
                    <input 
                        type="radio" 
                        name="plan" 
                        id={plan.id} 
                        checked={plan.id === formData.selectedPlan.id}
                        onChange={() => handlePlanChange(plan)}
                        className="hidden peer" 
                        required
                    />
                    <label htmlFor={plan.id} className="flex flex-col flex-grow  w-full p-5 text-third bg-white border-2 border-gray-200 rounded-lg cursor-pointer  border-third peer-checked:border-someBlue peer-checked:bg-lightBg hover:text-third peer-checked:text-third text-third bg-white hover:bg-lightBg">                           
                        <div className="block">
                            <img src={plan.icon} alt={plan.name} width="40" height="40" className='mb-10' />
                            <div className="w-full text-lg font-semibold">{plan.name}</div>
                            <div className="w-full text-sm">{isYearly ? plan.pricing.anually : plan.pricing.monthly}</div>
                            {isYearly && <div className='w-full text-sm text-third'>2 months free</div>}
                        </div>
                    </label>
                </li>      
                ))}
            </ul>

            <div className='flex  justify-center items-center gap-x-2 bg-lightBg p-4 rounded-md'>
                    <label className={`${!isYearly && 'text-third font-bold'}`}>Monthly</label>

                    <label className="relative inline-flex items-center cursor-pointer">
                                
                        <input type="checkbox" className="sr-only peer" checked={formData.isYearly} onClick={handlePricingChange}/>
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-third"></div>
                                
                    </label>
                    <label className={`${isYearly && 'text-third font-bold'}`}>Yearly</label>
            </div>
    
        </div>
      )
}
