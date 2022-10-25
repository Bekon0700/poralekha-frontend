import {Outlet} from 'react-router-dom'
import FooterMain from '../main-footer/FooterMain'
import TopNav from '../top-nav/TopNav'

const Main = () => {
  return (
    <div>
        <TopNav />
        <Outlet />
        <FooterMain />
    </div>
  )
}

export default Main