import { appRoutes, authRoutes } from '@/constants';
import GlobalContext from '@/context/context';
import { FC, useContext } from 'react'
import { Routes, Route } from "react-router-dom";


const AppRoutes: FC = () => {
  const { isLogin } = useContext(GlobalContext);
  return (
    <>
      <Routes>
        {
          appRoutes.map((approute, index) => (
            <><Route key={index} path={approute.route} element={<approute.element />} />
            </>
          ))
        }
        {isLogin && authRoutes.map((authRoute, index) => (
          <Route key={index} path={authRoute.route} element={<authRoute.element />} />
        ))}


      </Routes>
    </>
  )
}

export default AppRoutes