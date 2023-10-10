import {FC} from 'react'
import { Layout as AntLayout } from 'antd';
import styles from './footer.module.scss'

const Footer:FC = () => {
  return (
    <>
    <AntLayout.Footer className={styles.test_class} > All rights to Manikantha Panigrahi</AntLayout.Footer>
    </>
  )
}

export default Footer