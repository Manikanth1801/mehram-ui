import { FC, ReactElement } from 'react'
import Header from './header'
import Footer from './footer'

interface PageLayoutInterface {
  children?: ReactElement;
}

const Layout: FC<PageLayoutInterface> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout