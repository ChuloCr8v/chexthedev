import {FaTwitter, FaLinkedin, FaGithub, FaHome} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return(
      <div 
      className="social-icons flex flex-col justify-center items-center space-y-1 fixed top-10 left-2">
      
        <div 
          className="group icon-contain transform transition-all 3000 border-2 border-white-800 p-1 hover:border-pink-600 animate-bounce hover:translate-x-10 ">
           <Link href="/">
            <FaHome className="group-hover:text-pink-600 transform bounce text-white text-xl" />
           </Link>
        </div>
        
        <a href="https://www.github.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
            <div 
              className="group icon-contain transition-all 3000 border-2 border-white p-1 hover:border-yellow-400 transform hover:translate-x-10 ">
              <FaGithub className="group-hover:text-yellow-400 text-white text-xl" />
            </div>
         </a>
          
        <a href="https://www.linkedin.com/in/bonaventure-nkematu-77b563148" target="_blank" rel="noopener noreferrer">
            <div
              className="group icon-contain transition-all 3000 border-2 border-white p-1 hover:border-yellow-400 transform hover:translate-x-10">
              <FaLinkedin className="group-hover:text-yellow-400 text-white text-xl" />
            </div>
        </a>
        
        <a href="https://www.twitter.com/ChuloCr8v" target="_blank" rel="noopener noreferrer">
            <div
              className="group icon-contain transition-all 3000 border-2 border-white p-1 hover:border-yellow-400 transform hover:translate-x-10">
                <FaTwitter className="group-hover:text-yellow-400 text-white text-xl" />
            </div>
        </a>
       
      </div>
    )
}

export default Footer 