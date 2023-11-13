import React from 'react'
import bgImage from '../assets/bg-sidebar-desktop.svg';

function Step({step, label, isCurrent}){

  return(

       <div className="flex flex-row justify-start gap-x-5 text-white">
               <span className={`flex items-center justify-center h-10 w-10 rounded-full border-solid border border-white font-Ubuntu ${isCurrent ? 'bg-stepBg text-black border-0 border-stepBg' :'text-white' } `}>
                   {step}
               </span>
   
              <div className="hidden md:flex md:flex-col">
                <h5 className='text-secondary font-Ubuntu '>STEP {step}</h5>
                <h4 className='text-white font-bold font-Ubuntu tracking-wide'>{label}</h4>
              </div>
           
        </div>
      )
}

export default function Sidebar({steps, currentStep}) {

  return (
    <div className="flex flex-row w-screen min-h-[200px] md:flex-col md:w-1/3	p-10 md:p-7 justify-center items-start md:justify-sart md:items-start md:rounded-lg gap-y-8 gap-x-4 md:flex-grow md:pb-[350px] " 
          style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover', backgroundPosition:'10% 86%'}} >

        {steps.map((step, index) => <Step {...step} isCurrent={index === currentStep}></Step>)}
     
     </div>
  )
}
