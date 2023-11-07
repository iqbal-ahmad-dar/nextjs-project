import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ToggleContextProvider } from '@/utils/helpers'


import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   

    <ToggleContextProvider> 
     
     <Header />
 
    </ToggleContextProvider>
   
  )
}
