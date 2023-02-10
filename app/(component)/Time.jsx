"use client"

import React from 'react'
import useSWR from 'swr'
    async function getData(){
        return fetch('https://worldtimeapi.org/api/timezone/Asia/kolkata', { next: { revalidate: 1 } })
          .then(res=>res.json())
         
        }

// export default async function Time() {
//     const t  =await getData();
//     // console.log("t = ", t)
//     return (
//       		<div>
//        			<h2>SWR</h2>
      
//         <div> t ={t.datetime}</div>
//       		</div>
//        			)} 
      
       

// "use client"

// // import useSWR from "swr"
// import Link from "next/link"

const fetcher = (path) => fetch('https://worldtimeapi.org').then(res => res.json())

export default  function  Clientpage() {
	const { data }= useSWR('/api/timezone/Asia/kolkata',fetcher)
  console.log("t = ",data)
	return (
		<div>
			<h2>SWR</h2>
			{/* {characters?.data?.results?.map(c =>
				<ul key={c.id}>
					<Link href={`/staticprops/${c.name}`}>
						<li>
							{c.name}
						</li>
					</Link>
				</ul>
			)} */}

<div> t ={data?.datetime}</div>

		</div>
	)
}


