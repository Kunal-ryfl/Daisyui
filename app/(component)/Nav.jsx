"use client"
import React,{useState,useEffect} from 'react'
import { useTheme } from 'next-themes'
import {MdOutlineWbSunny} from 'react-icons/md'
import {MdOutlineNightlight} from 'react-icons/md'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import {FcStumbleupon} from 'react-icons/fc'

export default function Nav() {

  const [route, setRoute] = useState()

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(route!== '' && route !== undefined )router.push(`/search/${route}`);
  };

  const [mounted, setMounted] = useState(false);
        // useEffect only runs on the client, so now we can safely show the UI
        useEffect(() => {
          setMounted(true)
        }, [])
        
        if (!mounted) {
            return <div  className='  dark:bg-black px-96 md:px-12   md:w-[85%] mx-auto h-14 md:h-[90px]  flex items-center justify-between'>
              
            </div>
          }
  const { theme, setTheme } = useTheme()

  return (

<div className=" z-50 sticky top-0 navbar dark:bg-black    bg-white ">
  <div className="navbar-start flex items-center justify-center  md:block">
    
<Link href={"/"}>
   <FcStumbleupon className=' text-5xl md:3xl'/>
</Link>
{/* <div className="drawer absolute top-8">
  <input id="my-drawer" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div> */}

  </div>
  <div className="navbar-center">
    {/* <a className="btn btn-ghost normal-case text-xl">LOGO</a> */}
    <form onSubmit={handleSubmit} >
  <input  type="text" onChange={(e)=>{setRoute(e.target.value)}} id='search' placeholder="search for products"   className="input bg-gray-100 border-2  dark:bg-base-100 input-bordered w-48 md:w-72" />
    </form>
  </div>
  <div className="navbar-end">
    {/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> */}

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      { theme=='dark'?
                <button className='  px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={() => setTheme('light')}><MdOutlineWbSunny/></button>:
                <button className='  px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={() => setTheme('dark')}><MdOutlineNightlight/></button>
       }
      </div>
    </button>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-slate-50 text-black dark:text-white menu-compact dropdown-content mt-3 p-2 shadow  dark:bg-base-100 rounded-box w-52 ">
        <Link href={"/"}> <li><a>Homepage</a></li> </Link>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    
  </div>
</div>
  );
}