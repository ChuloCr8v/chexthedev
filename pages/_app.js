import Layout from '../pages/layout/Layout' 
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useState, useEffect } from "react"; 
import { useRouter } from "next/router"; 
import Loading from "../comps/Loading" 

function MyApp({ Component, pageProps }) {
  
  const router = useRouter(); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => { 
    const handleStart = (url) => { 
      url !== router.pathname ? setLoading(true) : setLoading(false); 
    }; 
    const handleComplete = (url) => setLoading(false); 
    router.events.on("routeChangeStart", handleStart); 
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete); 
  }, [router]); 

  return (
 <Layout>
 <Component {...pageProps} />
 <Loading Loading={Loading} />
 </Layout >
) 
}

export default MyApp
