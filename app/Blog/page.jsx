import Link from 'next/link'
import React from 'react'
import {use} from 'react'

async function getPosts(){
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
return data.json();
}

const page = () => {
  let posts = use(getPosts());
  console.log(posts) 
  return (
    <div className=' px-2 py-5   ' >
          {
            posts.map((item)=>(
              <ul>
              
              <li className='px-2 py-2 bg-gray-400  dark:bg-gray-800 my-2' key={item.id} >{item.title}</li>
                <li >{item.body}</li> 
              </ul>
            ))
          }
      </div>
  )
}

export default page