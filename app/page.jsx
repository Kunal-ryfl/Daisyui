// "use client"
import { Inter } from '@next/font/google'
// import { Card,Text } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })
import XCard from './(component)/Card'
import Time from './(component)/Time';

async function getData(){
return fetch('https://api.escuelajs.co/api/v1/products')
  .then(res=>res.json())
 
}

export default async function page() {
  
  const pro = await getData();
//  console.log("length = ",pro[0])

return (
  <>
  <div className=' text-black px-2 py-5 dark:text-white'>
  {/* <Time/> */}
    <div className='flex flex-wrap justify-center'>
 {
  pro.map((product)=>(
    <XCard item={product}/>
  ))
 }

    </div>  

  </div>
  </>
)
}