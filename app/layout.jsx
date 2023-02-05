"use client"
import Nav from './(component)/Nav'
// import Sidebar from './(component)/Sidebar'
import './globals.css'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import Footer from './(component)/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className=' dark:bg-black bg-white '>
<ThemeProvider attribute="class">

<Nav/>
{children}
<Footer/>
  </ThemeProvider>     
        </body>
    </html>
  )
}
