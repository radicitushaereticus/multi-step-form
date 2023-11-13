import React from 'react'
import thankYouIcon from '../assets/icon-thank-you.svg'

export default function ThankYou() {
  return (
    <div className='flex flex-col h-full items-center justify-center gap-y-8'>
         <img src={thankYouIcon}  width="80" height="80" className='' />
         <h1 className='text-third font-bold text-2xl'>Thank you!</h1>
         <p className='text-center text-gray-400'>
            Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel
            free to email us at support@loremgaming.com
         </p>
    </div>
  )
}
