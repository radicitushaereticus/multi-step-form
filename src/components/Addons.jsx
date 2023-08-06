import React from 'react'

const addOns = [
    {
        name:'Online service',
        description:'Access to multiplayer games',
        pricing:{
            monthly:"1$/mo",
            yearly:"10$/yr"
        },
        id:"online-service"
    },
    {
        name:'Larger storage',
        description:'Extra 1TB of cloud save',
        pricing:{
            monthly:"2$/mo",
            yearly:"20$/yr"
        },
        id:"larger-storage"
    },
    {
        name:'Customizable profile',
        description:'Custom theme on your profile',
        pricing:{
            monthly:"2$/mo",
            yearly:"20$/yr"
        },
        id:"customizable-profile"
    },

]


export default function Addons({formData,setFormData}) {
    const isYearly = formData.isYearly;

    function handleChange(addon){
        setFormData(prevState => {
            const addons = new Map(prevState.addons)
            if (addons.has(addon.id)){
                addons.delete(addon.id)
            } else {
                addons.set(addon.id,addon)
            } 

            return {
                ...prevState,
                addons,
            }
        })   

    }

  return (
    <div className='flex flex-col gap-y-10'>

        <div className="heading">
                <h1 className='font-Ubuntu text-third text-3xl font-bold'>Pick add-ons</h1>
                <p className='text-third'>Add-ons help enhance your gaming experience.</p>
        </div>


        <ul className='grid grid-cols-1 w-full gap-y-5'>

                {addOns.map(addOn => (
                    <li key={addOn.id} className='flex flex-row p-8 justify-start border-2 border-purple rounded-lg peer-checked:bg-lightBg'>
                        <input 
                            type="checkbox" 
                            checked={formData.addons.has(addOn.id)}
                            onChange={()=> handleChange(addOn)}
                            className='peer place-self-center relative h-5 w-5 mr-5 border rounded-lg' 
                        />

                        <div>
                            <h3 className='text-third font-bold text-lg'>{addOn.name}</h3>
                            <p className='text-gray-400'>{addOn.description}</p>
                        </div>
                        <p className='text-purple-600 ml-auto'>+{isYearly ? addOn.pricing.yearly : addOn.pricing.monthly}</p>
                    </li>
                ))}
        </ul>
        
    </div>
  )
}
