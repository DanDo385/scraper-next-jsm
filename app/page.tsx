//Import scraper
import { getAllProducts } from "@/lib/actions";
//Import image
import Image from 'next/image';
//Import components
import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import ProductCard from "@/components/ProductCard";


const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flew-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Let's get scraping!
              <Image 
                src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>
            
            <h1 className = "head-text">
              Unleash the Power of Web Scraping with
              <span className = "text-primary"></span>
               Next.js, MongoDB, Cheerio, Puppeteer, and BrightData!
            </h1>

            <p className="mt-6">
              First run at a fully automated limited release item bot monitoring sites of 
              the user's choosing, searching for specified items by product code, size input, 
              and automating checkout...
            </p>

            <Searchbar />
           </div>
          <HeroCarousel />
        </div>
      </section>

      <section className = "trending-section">
        <h2 className = "section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;

