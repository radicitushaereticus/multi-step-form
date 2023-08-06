import React, {useState} from 'react'
import Info from './Info'
import Plans from './plans';
import Addons from './Addons';

export default function Main({step, nextStep, previousStep, isStepValid,setStepValid}) {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        selectedPlan:{},
        isYearly: false,
        addons: new Map(),     
    })

   console.log(formData)

    const currentStep = () =>  {
        switch(step) {
            case 0:
                return <Info formData={formData} setFormData={setFormData} setStepValid={setStepValid}/>;
            
            case 1:
                return <Plans formData={formData} setFormData={setFormData}/>

            case 2:
                return <Addons formData={formData} setFormData={setFormData}/>
        }
    }



  return (
    <div className="flex flex-col p-7 flex-grow justify-between  bg-white col-span-2">
        {/*Form / conditional steps rendered*/}
        {currentStep()}

        {/* Buttons here to change step state*/}

        <div className="navigationContainer flex flex-row justify-end w-full">
            {step > 0 && <button className='rounded bg-white py-4 px-6 text-third mr-auto' onClick={previousStep}>Go Back</button> }
            <button disabled={!isStepValid} className='rounded bg-third py-4 px-6 text-white place-self-end disabled:bg-third/50'onClick={nextStep}>Next Step</button>
        </div>
        
    </div>
  )
}
