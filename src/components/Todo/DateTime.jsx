import React, { useEffect, useState } from 'react'

const Data = () => {

  const [dateTime , setDateTime] = useState("")

  useEffect (() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
  
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
  
    return () => clearInterval(interval);
  },[])

  return (
    <div>
      <h3 className='date-time'>{dateTime}</h3>
    </div>
  )
}

export default Data
