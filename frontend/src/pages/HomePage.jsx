import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimiterUI from '../components/RateLimiterUI';

const HomePage = () => {
  const [ isRateLimit, setIsRateLimit ] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />

      {
        isRateLimit && <RateLimiterUI />
      }
    </div>
  )
}

export default HomePage