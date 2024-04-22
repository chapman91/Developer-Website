import { useEffect, useState, useCallback } from 'react'



const useRecapthcaV3 = () => {

  const reCaptchaKey = process.env.SITE_KEY;


// State Management 
  const [isRecapthcaReady, setIsRecapthcaReady] = useState(false)
  
  
// isRecapthcaReady is a state variable 

  useEffect(() => {
    if(window.grecaptcha) {
        setIsRecapthcaReady(true)
    } 
    // Loads reCAPTCHA script by creating a script element & appending it to document's head
    else {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`
        script.async = true 
        script.defer = true 
        document.head.appendChild(script)
        script.onload = () => {setIsRecapthcaReady(true)}
    }
  }, [reCaptchaKey])


  // Hook
  const executeRecapthca = useCallback(async (action) => {
    
    if(isRecapthcaReady && window.grecaptcha) {
      // Is used to trigger a reCAPTCHA action
      return await window.grecaptcha.execute(reCaptchaKey, {action})
    }
  }, [isRecapthcaReady, reCaptchaKey])

    return executeRecapthca;
 
}

export default useRecapthcaV3;