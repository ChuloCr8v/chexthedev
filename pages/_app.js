import Layout from '../comps/Layout' 
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import AOS from 'aos'; 
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return (
 <Layout>
 <Component {...pageProps} />
 </Layout >
) 
}

export default MyApp
