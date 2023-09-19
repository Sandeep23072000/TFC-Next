"use client";
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import HomeBanner from '@/component/HomeBanner';
import SpecialMenu from '@/component/SpecialMenu';
import TodayMenu from '@/component/TodayMenu';
import FromOurMenu from '@/component/FromOurMenu';
import Reservation from '@/component/Reservation';
import CustomerComment from '@/component/CustomerComment';
import MasterChefs from '@/component/MasterChefs';
import MapFrame from '@/component/MapFrame';
import NewsBlog from '@/component/NewsBlog';

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      {/* <main id="bg">
        <div id="loading-area" className="loading-page-3">
          <img src="../assets/images/loading.gif" alt="" />
        </div>
        <div className="page-wraper">
          <Header />
          <HomeBanner />
          <SpecialMenu />
          <TodayMenu />
          <FromOurMenu />
          <Reservation />
          <CustomerComment />
          <MasterChefs />
          <NewsBlog />
          <MapFrame />
          <Footer />
          <div className="scroltop-progress scroltop-primary">
            <svg width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </div>
      </main> */}
    </>
  )
}

const HomePage = dynamic(() => Promise.resolve(Home), {
  ssr: false
})

export default HomePage;