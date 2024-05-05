import React, { useState } from 'react'


const ResultModal = ({ onClose }) => {
 
    return (
        <div
         
            id='container'
            className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'
        >
            <div className='w-2/5 rounded bg-white '>
                <div className={` items-center justify-center  flex flex-col`}>
                    <div className='font-medium text-gray-900  text-base mt-7'>Are you sure you want to deassign the<span className='font-bold'> Seller {sellerName}</span></div>
                    <div className='font-medium text-gray-900  text-base '> from  <span className='font-bold'>CM {cmName}</span> ?</div>
                    <div className='flex gap-x-5 my-7'>
                        <button  className='py-2 px-14 bg-white text-gray-900 rounded-full border border-solid border-gray-900'>No</button>
                        <button
                         className='py-2 px-14 bg-red-600 text-white rounded-full'>Yes</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultModal