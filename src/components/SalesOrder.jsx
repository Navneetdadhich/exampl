import React from 'react'
import InsideOrder from './InsideOrder'
import SideCard from './SideCard'

const SalesOrder = () => {
  return (

      <>
      <div  className="w-full h-10 border-b-2 border-blue-200 
      ">

      <h2 className='font-medium text-gray-500'>Sales Order Details</h2>
      </div>
      
    <div className='flex flex-row max-w-4xl gap-20 items-center justify-between'>


        <div className='flex flex-col gap-8'>
        <InsideOrder text1="Company Name" text2="XYZ Pharmacy Pvt. Ltd." />
        <InsideOrder text1="Sales Order No" text2="AS-ER-WQ-5-XCS" />
        <InsideOrder text1="Expected Shipment Date" text2="30 Nov, 2024" />
        </div>

        <div className='flex flex-col gap-8'>
        <InsideOrder text1="Customer Name" text2="Vijay Prakash" />
        <InsideOrder text1="Sales Order Date" text2="20 Nov, 2024" />
        <InsideOrder text1="Payment Terms" text2="Quarterly" />
        </div>

        <div className='flex flex-col h-20 gap-8'>
        
        <InsideOrder text1="Reference Number" text2="3456-2342556" />
        <InsideOrder text1="Delivery Method" text2="3456364567" />
        </div>

        <SideCard/>

    </div>
      </>
  )
}

export default SalesOrder