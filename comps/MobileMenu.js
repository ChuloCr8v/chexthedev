import {FaHome, FaUser, FaTools, FaBriefcase, FaIdCard} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {AnimatePresence} from 'framer-motion'

const MobileMenu= () => {
  return(
    <AnimatePresence >
    <motion.nav className="border-2 bg-blur-300 bg-black border-white px-4 py-1"
    initial = {{ x: -50, opacity: 0}} 
    animate = {{ x: 20, opacity: 1 }} 
    exit = {{ x: -20, opacity: 0}} 
    transition = {{ type: "spring", stiffness: 200}} 
    >
      <ul className="flex justify-center items-center space-x-3">
        
        <li className="text-white text-md text-center hover:text-pink-600 duration-300 ">
          <Link href="/aboutme"> 
          About 
   
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-pink-600 duration-300"  >
          <Link href="/mystacks"> 
     
          Skills 
    
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-pink-600 duration-300" >
          <Link href="/myportfolio"> 
    
          Portfolio 
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-pink-600 duration-300" >
          <Link href="/contactme">
        
          Contact 
         
          </Link>
        </li>
      </ul>   
      
    </motion.nav>
    </AnimatePresence>
  )
}

export default MobileMenu