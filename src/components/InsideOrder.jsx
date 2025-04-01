import React from 'react'

const InsideOrder = ({text1="CompanyData", text2="Companydata2"}) => {
  return (
    <div className='flex flex-col p-3'>
        <h1 className='text-md text-gray-500'>{text1}</h1>
        <h1 className='text-md text-black font-medium'>{text2}</h1>
    </div>
  )
}

export default InsideOrder