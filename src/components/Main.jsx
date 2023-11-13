import React, {useCallback, useState} from 'react'
import Info from './Info'
import Plans from './Plans';
import Addons from './Addons';
import Summary from './Summary';
import ThankYou from './ThankYou';


export default function Main({step, nextStep,previousStep, goToStep}) {
    
    const [canProceed,setCanProceed] = useState(false)
    const [isSummaryConfirmed, setIsSummaryConfirmed] = useState(false);

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        selectedPlan:{},
        isYearly: false,
        addons: new Map(), 
        Total:0,    
    })
   
    const CurrentStep = () =>  {
        switch(step) {
            case 0:
                return <Info formData={formData} setFormData={setFormData} onValidityChange={onValidityChange}/>;
            
            case 1:
                return <Plans formData={formData} setFormData={setFormData} onValidityChange={onValidityChange} />

            case 2:
                return <Addons formData={formData} setFormData={setFormData} onValidityChange={onValidityChange}/>

            case 3: 
                if (isSummaryConfirmed) {
                    return <ThankYou />
                } else {
                    return <Summary formData={formData} setFormData={setFormData} goToStep={goToStep} />
                } 
        }
    }

    const onValidityChange = useCallback((isValid) => {
        setCanProceed(isValid);
    },[])

    // Handle summary confirmation 
    const handleSummaryConfirmation = () => {
        setIsSummaryConfirmed(true);
    }


  return (
    
    <div className='flex flex-col md:w-2/3 py-7 px-6 md:w-2/3 justify-between bg-white  mt-[-80px] m-8 md:mt-0 md:mb-0 md:rounded-r-lg rounded-lg'>
        {/*Form / conditional steps rendered*/}
        
        {CurrentStep()}

        {/*Navigation buttons to move from one step to another*/}

        <div className="navigationContainer flex flex-row justify-end mt-10 absolute md:relative bottom-0 left-0 w-screen md:w-full bg-white py-4 px-4 md:px-0 md:py-0 ">
            {step > 0 && !isSummaryConfirmed && <button className='rounded bg-white py-4 px-6 text-coolGrey hover:text-third mr-auto' onClick={previousStep}>Go Back</button> }

            {step === 3 && isSummaryConfirmed ? null : (
                <button disabled={!canProceed} 
                className={`rounded-md ${step === 3 ? 'bg-PurplishBlue' : 'bg-marineBlue'} py-3 px-6 text-white place-self-end disabled:bg-third/50`}
                onClick={ step === 3 ? handleSummaryConfirmation : nextStep}>
                {step === 3 ? "Confirm" : "Next Step"}
                </button>
            )}
        </div>
    </div>
  )
}
