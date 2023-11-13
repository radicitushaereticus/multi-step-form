import React from 'react'
import formatPrice from '../utils/formatPrice';


export default function Summary({formData,setFormData, goToStep}) {
    const isYearly = formData.isYearly

    function renderAddons () {
        let addonsList = [];

        for (const [key,value] of formData.addons){
            addonsList.push(
                <div className='flex flex-row text-coolGrey'>
                    <h1>{`${value.name}`}</h1>
                    <h1 className='ml-auto text-marineBlue'>
                        + {formatPrice(value,isYearly)}
                    </h1>
                </div>
            )
        }

        return addonsList
    }

  return (
    <div className='flex flex-col'>
        <div className="heading mb-10">
            <h1 className='font-Ubuntu text-third text-3xl font-bold'>Finishing up</h1>
            <p className='text-coolGrey'>Double-check everything looks OK before confirming</p>
         </div>

         <div className='flex flex-col w-full bg-lightBg rounded-md p-8 gap-y-6'>
            <div className='flex flex-row'>
                <div className='flex flex-col items-start'>
                    <h1 className='text-marineBlue font-bold '>{formData.selectedPlan.name}</h1>
                    <button className="text-coolGrey underline hover:text-PurplishBlue" onClick={() => goToStep(1)}>Change</button>
                </div>
                <h2 className='text-third font-bold ml-auto'>{formatPrice(formData.selectedPlan,isYearly)}</h2>
            </div>
            <hr />
            {renderAddons()}
         </div>
         
         <div className='p-8 flex flex-row items-center text-coolGrey'>
            <h1>Total ({isYearly ? "per year" : "per month"})</h1>
            <h1 className='ml-auto text-PurplishBlue font-bold text-xl'>+ {formatPrice((formData.selectedPlan),isYearly)}</h1>
         </div>
         

    </div>
  )
}
