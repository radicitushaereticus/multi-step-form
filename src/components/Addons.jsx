import React from 'react'
import formatPrice from '../utils/formatPrice';

const addOns = [
    {
        name:'Online service',
        description:'Access to multiplayer games',
        pricing:{
            monthly:1,
            yearly:10
        },
        id:"online-service"
    },
    {
        name:'Larger storage',
        description:'Extra 1TB of cloud save',
        pricing:{
            monthly:2,
            yearly:20
        },
        id:"larger-storage"
    },
    {
        name:'Customizable profile',
        description:'Custom theme on your profile',
        pricing:{
            monthly:2,
            yearly:20
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
                <p className='text-coolGrey'>Add-ons help enhance your gaming experience.</p>
        </div>


        <ul className='grid grid-cols-1 w-full gap-y-5'>

                {addOns.map(addOn => (
                    <li key={addOn.id} className='block'>
                         <label htmlFor={addOn.id} className='checkbox-label flex flex-row p-6 items-center border rounded-lg cursor-pointer '>
                            <input 
                                type="checkbox" 
                                checked={formData.addons.has(addOn.id)}
                                onChange={()=> handleChange(addOn)}
                                className='peer place-self-center relative h-5 w-5 mr-5 border rounded-lg ' 
                                id={addOn.id}
                             />

                            <div>
                                <h3 className='text-third font-bold text-lg'>{addOn.name}</h3>
                                <p className='text-gray-400'>{addOn.description}</p>
                            </div>

                            <p className='text-PurplishBlue ml-auto'>+{formatPrice(addOn,isYearly)}</p>
                        </label>
                    </li>
                ))}
        </ul>
        
    </div>
  )
}
