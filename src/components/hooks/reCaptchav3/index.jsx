import React,{ useEffect, useState, useCallback } from 'react'



const useRecaptchaV3 = () => {

  const SiteKey = process.env.SITE_KEY;


// State Management 
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)
  
  
// isRecapthcaReady is a state variable 

  useEffect(() => {
    if(window.grecaptcha) {
        setIsRecaptchaReady(true)
    } 
    // Loads reCAPTCHA script API by creating a script element & appending it to document's head
    else {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${SiteKey}`
        script.async = true 
        script.defer = true 
        document.head.appendChild(script)
        script.onload = () => {setIsRecaptchaReady(true)}
    }
  }, [SiteKey])


  // Hook
  const executeRecaptcha = useCallback(async (action) => {
    
    if(isRecaptchaReady && window.grecaptcha) {
      // Is used to trigger a reCAPTCHA action
      return await window.grecaptcha.execute(SiteKey, {action})
    }
  }, [isRecaptchaReady, SiteKey])

    return executeRecaptcha;

 
}

export default useRecaptchaV3;