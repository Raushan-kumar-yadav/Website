
import Hero from '@/components/hero'
import Brand from "@/components/Brands";
import Feature from '@/components/feature';
import Review from "@/components/review"
import Overview from '@/components/overview';
import Cta from '@/components/cta';

const Home = () => {
  return (
    <div className='Home'>
      
      <main>
        <Hero />
        <Brand />
        <Feature />
        <Review/>
        <Overview />
        <Cta/>
      </main>
    </div>
  )
}

export default Home;