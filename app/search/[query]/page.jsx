import React from 'react'
import XCard from '@/app/(component)/Card';


const page =async  ({params:{query}}) => {
    async function getData(){
        return fetch(`https://api.escuelajs.co/api/v1/products/?title=${query}`)
          .then(res=>res.json())
         
        }

        const pro = await getData()

        // console.log(pro)
        // const pro = await getData();


  return (
    
    <div className=' text-black px-2 py-5 dark:text-white min-h-screen' >

    <p className='py-2 sticky top-16 bg-white dark:bg-black z-20'>{pro.length} results for {query}</p>
    <div className='flex flex-wrap justify-center'>
      {
          pro.map((product)=>(
              <XCard item={product}/>
              ))
            }
        </div>
            </div>
        
    
  )
}

export default page