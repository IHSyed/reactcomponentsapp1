//import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Hero from '@/components/Hero'
import Image from "@/components/Icons/Cart.png"



export default function Home() {
  return (

    <div>
    < Button className="flex"> 
    
    <img src="./Cart.png" alt="Shopping Cart" width={100} height={100}  />
    </Button>
    <br />
    <Hero />
    </div>
  
  )
}
