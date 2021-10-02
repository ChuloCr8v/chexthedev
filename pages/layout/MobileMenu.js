import {FaHome, FaUser, FaTools, FaBriefcase, FaIdCard} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {AnimatePresence} from 'framer-motion'

const MobileMenu= () => {
  return(
    <AnimatePresence >
    <motion.nav className="border-2 border-white relative z-40 px-4 py-1"
    initial = {{ x: -50, opacity: 0}} 
    animate = {{ x: 20, opacity: 1 }} 
    exit = {{ x: -20, opacity: 0}} 
    transition = {{ type: "spring", stiffness: 200}} 
    >
    <div className="bg-gray-800 h-full w-full absolute top-0 left-0 "></div>
      <ul className="flex relative justify-center items-center space-x-3">
        
        <li className="text-white text-md text-center hover:text-pink-600 duration-300 absolute left-0 bottom-full ">
          <Link href="/"> 
            <motion.div
            initial = {{x: 100, opacity: 0}}
            animate = {{ x: 0, opacity: 1}}
            transition = {{delay: 1, type: "spring", stiffness: 200, duration: 2}}
            >
                <FaHome className="text-4xl bg-gray-800 p-2 border-white border-2 hover:text-yellow-400 hover:border-yellow-400" />
            </motion.div>
   
          </Link>
        </li>
        <li className="text-white text-md text-center hover:text-yellow-400 duration-300 ">
          <Link href="/aboutme"> 
          About 
   
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-yellow-400 duration-300"  >
          <Link href="/mystacks"> 
     
          Skills 
    
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-yellow-400 duration-300" >
          <Link href="/myportfolio"> 
    
          Portfolio 
          </Link>
        </li>
        
        <li className="text-white text-md text-center hover:text-yellow-400 duration-300" >
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