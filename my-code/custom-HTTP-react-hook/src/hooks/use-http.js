import { useState } from "react";

const useHttp = (requstConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requstConfig.url, {
            method: requstConfig.method ? requstConfig.method : 'GET',
            headers: requstConfig.headers ? requstConfig.headers : {},
            body: JSON.stringify(requstConfig.body) ? JSON.stringify(requstConfig.body) : null
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data)
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };

    return {
        isLoading, 
        error, 
        sendRequest
    }
}

export default useHttp;