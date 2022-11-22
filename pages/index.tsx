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
      {/* <TopSection /> */}

      <ContainerLayout>
        <div className='mt-12 mb-[80px] grid gap-9'>

          {/* Top Block */}
          <div className='grid grid-cols-[500px_1fr] md:grid-cols-[auto] md:grid-rows-[auto_auto] md:gap-5'>
            <div className='flex flex-col gap-3'>
              <h2 className='leading-none'>Self-sustaining wood processing enterprise</h2>
              <div>
                <p className='max-w-[400px]'>with the goal of full processing cycle. From planning mill till finger jointing elements and down to pallet and pellet production.</p>
              </div>
              <div>
                <a href="#contacts" className='fw-400 contact_us__btn'>
                  <button className='py-1.5 px-4 border-1-2 border-rad-4'>Contact Us</button>
                </a>
              </div>
            </div>
            <img src="/img/tc3.jpeg" alt="" srcSet="" className='flex border-rad-3' />
          </div>

          {/* Additional Info */}
          <div>
            <hr className="hr-1-3 mb-5" />
            <p className='max-w-[550px] opacity-70 fs-8'>
              What started as simple wood processing company back in 2012,
              making knot free components with a few employees and 400m2
              meters of production plant has grown in to big scale plant
              covering over 4000 m2 of production floor, employing
              over 60 people on daily basis.</p>
          </div>



          <Section header='History' content={<HistorySection />} />
          <Section header='Products' content={<ProductSection />} />
          <Section header='Gallery' content={<GallerySection />} />
          <Section header='Contacts' content={<ContactsSection />} sectionClass="bg-slate-900 text-white px-10 py-10 border-rad-3" />
        </div>
      </ContainerLayout>


    </>
  )
}

