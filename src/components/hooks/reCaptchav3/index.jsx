import React, { useEffect, useState } from 'react'



const useRecapthcaV3 = () => {

  const reCaptchaKey = process.env.SITE_KEY;

  const [isRecapthcaReady, setIsRecapthcaReady] = useState(false)
  
  

  useEffect(() => {
    if(window.grecaptcha) {
        setIsRecapthcaReady(true)
    } else {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`
        script.async = true 
        script.defer = true 
        document.head.appendChild(script)
    }
  }, [])

    return (
    <div>useRecapthcaV3</div>
  )
}

export default useRecapthcaV3