import React,{ useState } from 'react'

export function useMultistep(steps) {
  const [step,setStep] = useState(0)
  const [isStepValid,setStepValid] = useState(false)

  function previousStep() {
    setStep(step => {
      if(step <= 0) return step 
      return step - 1
    } )
}

function nextStep() {
  setStep(step => {
    if(step >= steps.length - 1 )return step
    return step +1 
  })

}
  
  return ({ step,
      nextStep,
      previousStep,
      setStepValid,
      isStepValid,
    })
}