import { FC } from 'react'
import styles from './footer.module.scss'
import { Row, Typography } from 'antd'

const Footer: FC = () => {
  return (
    <>
      <div className={styles.footer_main} >
        <Row align='middle' justify='center'>
          <Typography>
           💡 All rights to Manikantha Panigrahi 🚨
          </Typography>
        </Row>
      </div>
    </>
  )
}

export default Footer