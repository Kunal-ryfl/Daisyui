"use client"
// import Nav from './(component)/Nav'
// import Sidebar from './(component)/Sidebar'
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './globals.css'
import { Inter } from '@next/font/google'
// import { ThemeProvider } from 'next-themes'
import Footer from './(component)/Footer'
import {FcStumbleupon} from 'react-icons/fc'
import {MdOutlineWbSunny} from 'react-icons/md'
import {MdOutlineNightlight} from 'react-icons/md'


const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {

 const [theme,setTheme] = useState(null)
  const [route, setRoute] = useState()

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(route!== '' && route !== undefined )router.push(`/search/${route}`);
  };

  return (
    <html className={inter.className }>
      <body className=' dark:bg-black bg-white '>

<div className="drawer " >
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content ">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar bg-base-300 sticky top-0 z-50">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 justify-between"> <Link href={'/'}> <FcStumbleupon className=' text-5xl md:3xl'/></Link> 
      
      <div className=' flex ml-2'>

      <form onSubmit={handleSubmit} >
 <input  type="text" onChange={(e)=>{setRoute(e.target.value)}} id='search' placeholder="search for products"   className="input bg-gray-100 border-2  dark:bg-base-100 input-bordered w-48  md:w-72" />
    </form>
    { theme=='dark'?
                <button className=' md:hidden  px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={handleThemeSwitch}><MdOutlineWbSunny/></button>:
                <button className=' md:hidden px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={handleThemeSwitch}><MdOutlineNightlight/></button>
              }
              </div>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
        

          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
          { theme=='dark'?
                <button className='  px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={handleThemeSwitch}><MdOutlineWbSunny/></button>:
                <button className='  px-2 py-2 rounded text-gray-400 text-2xl  ' onClick={handleThemeSwitch}><MdOutlineNightlight/></button>
       }
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
    <Footer/>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4  w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>




  {/* </ThemeProvider>      */}
        </body>
    </html>
  )
}
