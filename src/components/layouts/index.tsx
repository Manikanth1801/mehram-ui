import { FC, ReactElement } from 'react'
import Header from './header'
import Footer from './footer'
import { Layout as AntLayout } from 'antd'
import styles from './layout.module.scss'

interface PageLayoutInterface {
  children?: ReactElement;
}

const Layout: FC<PageLayoutInterface> = ({ children }) => {
  return (
    <>
      <AntLayout>
        <AntLayout.Header className={`flex items-center ${styles.header_main}`}>
          <Header />
        </AntLayout.Header>
        <AntLayout.Content className={``}>
          {children}
        </AntLayout.Content>
        <AntLayout.Footer>
          <Footer />
        </AntLayout.Footer>
      </AntLayout>

    </>
  )
}

export default Layout