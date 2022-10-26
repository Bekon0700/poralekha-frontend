import {Outlet} from 'react-router-dom'
import FooterMain from '../main-footer/FooterMain'
import ScrollToTop from '../scroll-to-top/ScrollToTop'
import TopNav from '../top-nav/TopNav'

const Main = () => {
  return (
    <div>
        <ScrollToTop />
        <TopNav />
        <Outlet />
        <FooterMain />
    </div>
  )
}

export default Main