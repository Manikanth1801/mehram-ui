import { FC, ReactElement, useEffect, useState } from "react"
import GlobalContext from "./context"

interface GlobalProviderInterface {
    children: ReactElement
}

const GlobalProvider: FC<GlobalProviderInterface> = ({ children }) => {
    const [isLogin, setIsLogin] = useState<boolean>(true),
        [isLoading, setIsLoading] = useState<boolean>(false),
        [isMobile, setIsMobile] = useState<boolean>(false),
        [activeTab, setActiveTab] = useState<number>(0);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Attach the event listener directly to the window object
        window.addEventListener('resize', handleResize);

        // Initial call to set isMobile state based on the window width
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <GlobalContext.Provider
            value={{
                isLogin,
                setIsLogin,
                isLoading,
                setIsLoading,
                isMobile,
                setIsMobile,
                activeTab,
                setActiveTab
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider