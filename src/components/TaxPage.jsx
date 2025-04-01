import React from 'react'
import TextBox from './TextBox'
import { BsThreeDotsVertical } from "react-icons/bs";
import ItemDetailsTable from './ItemDetailsTable';
import SalesOrder from './SalesOrder';
import Footer from './Footer';
import OrderCard from './OrderCard'; 

const TaxPage = () => {
  return (
    <>
    <div className='flex flex-col gap-10'>

        <div className='p-4 flex justify-between '>
            <div className='flex flex-row gap-6 ml-3'>
              
                <TextBox username='Create Invoice'/>
                
                <TextBox username="Edit"/>
                <TextBox username="Archive"/>
            </div>


            <div className='flex flex-row gap-3 ml-3'>
            <TextBox username='Download'/>
            <TextBox username='Print'/>
            <BsThreeDotsVertical className='text-2xl text-black'/>
            </div>
        </div>


        <div className='mx-5 rounded-md border border-gray-200 shadow-md p-4'>
          <div className="flex flex-wrap justify-between">
            <OrderCard 
              title="Total Stock Price" 
              value="$ 2,480,000.00" 
              trend="up" 
            />
            <OrderCard 
              title="Expiring Today" 
              value="0 kg" 
            />
            <OrderCard 
              title="Expiring Within 30 Days" 
              value="100 kg" 
            />
            <OrderCard 
              title="Expiry Stock Price" 
              value="$ 20,000.00" 
            />
            <OrderCard 
              title="Avg. No. of Stock expiring this year" 
              value="250 kg" 
              border={false} 
            />
          </div>
        </div>

        <div className='border border-gray-200 shadow-xs rounded-md p-10 mr-5 ml-5'>
        <SalesOrder/>
        </div>

        <div className='border border-gray-200 shadow-xs rounded-md p-10 mr-5 ml-5'>
        
        <ItemDetailsTable/>
        </div>

        <Footer/>



    </div>
    </>
  )
}

export default TaxPage