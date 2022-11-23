// import Head from 'next/head'
import Header from "../src/components/Header"
// import TopSection from "../src/components/TopSection"

// page components
import { ContainerLayout } from 'src/components/Layout'
import { Section } from 'src/components/Section'
import HistorySection from 'src/components/HistorySection'
import ProductSection from 'src/components/ProductSection'
import GallerySection from 'src/components/GallerySection'
import ContactsSection from 'src/components/ContactsSection'


export default function Home() {
  return (
    <>
      <Header />

      <hr className="hr-1-3" />

      <ContainerLayout>
        <div className='mt-12 mb-[80px] grid gap-9'>

          {/* Top Block */}
          <div className='grid grid-cols-[520px_1fr] md:grid-cols-[auto] md:grid-rows-[auto_auto] md:gap-5'>
            <div className='flex flex-col gap-3'>
              <h2 className='leading-none fw-500 md:max-w-[300px] font-serif'>Self-sustaining wood processing enterprise</h2>
              <div>
                <p className='max-w-[400px] '>
                  with the goal of full processing cycle.
                  From planning mill and finger jointing elements,
                  down to pallet and pellet production.</p>
              </div>
              <div>
                <a href="#contacts" className='fw-400 contact_us__btn'>
                  <button className='py-1.5 px-4 border-rad-4 bg-amber-500 hover:bg-amber-600 text-white hover:border-transparent'>Contact Us</button>
                </a>
              </div>
            </div>
            <img src="/img/tc3.jpeg" alt="territory view" srcSet="" className='flex border-rad-3' />
          </div>

          {/* Additional Info */}
          <div>
            <hr className="hr-1-3 mb-5" />
            <p className='max-w-[550px] opacity-80 fs-8'>
            What started as a simple wood processing company back in 2012, 
            making knot free components with a few employees and 400m2 
            meters of production plant has grown into a big scale 
            plant covering over 4000m2 of the production floor, 
            employing over 60 people on a daily basis.</p>
          </div>

          <Section header='History' content={<HistorySection />} />
          <Section header='Products' content={<ProductSection />} />
          <Section header='Gallery' content={<GallerySection />} />

          {/* Video Container */}
          <div>
            <div className="flex-center">
              <video
                poster="/img/tc3.jpeg"
                preload="none"
                controls src="/mp4/factory.mp4"
                className="border-rad-1 w-full h-[370px] max-w-[700px] max-h-[600px] border-[3px] border-amber-400 border-2-3-- "></video>
            </div>
          </div>

          <Section header='Contacts' content={<ContactsSection />} sectionClass="bg-amber-600 text-white px-10 py-8 border-rad-3" />
        </div>
      </ContainerLayout>
    </>
  )
}

