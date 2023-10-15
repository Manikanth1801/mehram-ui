import { appRoutes, authRoutes } from '@/constants'
import GlobalContext from '@/context/context'
import { Col, Row, Typography } from 'antd'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './header.module.scss'

const Header: FC = () => {
  const navigate = useNavigate(),
    { isLogin, activeTab, setActiveTab } = useContext(GlobalContext),
    handleClick = (i: number, route: any) => {
      navigate(route?.route)
      console.log(i)
      setActiveTab(i)
    };
  return (
    <>
      <Row gutter={16} className={`${styles.header_main} flex text-center`}>
        {appRoutes.filter(item => item.navVisible != false).map((route, index) => (
          <Col key={index} span={3}>
            <Typography className={`text-neutral-50 hover ${index === activeTab ? 'item_selected' : null}`} onClick={() => handleClick(index, route)}>
              {route?.label}
            </Typography>
          </Col>
        ))}
        {
          isLogin && authRoutes.filter(item => item.navVisible != false).map((route, index) => (
            <Col key={index} span={4}>
              <Typography className={`text-neutral-50 hover ${index === activeTab ? 'item_selected' : null}`} onClick={() => handleClick(index, route)}>
                {route.label}
              </Typography>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Header