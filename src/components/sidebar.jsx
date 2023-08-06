import React from 'react'
import bgImage from '../assets/bg-sidebar-desktop.svg';

function Step({step, label, isCurrent}){

  return(

       <div className="flex flex-row justify-start gap-x-5 text-white">
               <span className={`flex items-center justify-center h-10 w-10 rounded-full border-solid border-white font-Ubuntu border-2 ${isCurrent ? 'bg-stepBg text-black' :'text-white' }`}>
                   {step}
               </span>
   
              <div className="flex flex-col">
                <h5 className='text-secondary font-Ubuntu font-bold '>STEP {step}</h5>
                <h4 className='text-white font-bold font-Ubuntu tracking-wide'>{label}</h4>
              </div>
           
        </div>
      )
}

export default function Sidebar({steps, currentStep}) {

  return (
    <div className="flex flex-col	p-7 flex-grow justify-sart items-start rounded-xl gap-y-12 " 
         style={{backgroundImage:`url(${bgImage})`, backgroundSize: 'cover'}} >

        {steps.map((step, index) => <Step {...step} isCurrent={index === currentStep}></Step>)}
        
     </div>
  )
}
