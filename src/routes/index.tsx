import { appRoutes } from '@/constants';
import { FC } from 'react'
import { Routes, Route } from "react-router-dom";


const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        {
          appRoutes.map((approute, index) => (
            <><Route key={index} path={approute.route} element={<approute.element />} />
            </>
          ))
        }
        
      </Routes>
    </>
  )
}

export default AppRoutes