import { Dispatch, SetStateAction, createContext } from "react";

export interface GlobalContextInterface {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    isMobile: boolean;
    setIsMobile: Dispatch<SetStateAction<boolean>>;
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

const initialValues = {
    isLogin: true,
    setIsLogin: () => { },
    isLoading: false,
    setIsLoading: () => { },
    isMobile: false,
    setIsMobile: () => { },
    activeTab: 0,
    setActiveTab: () => { }
} as GlobalContextInterface;

const GlobalContext = createContext(initialValues)
export default GlobalContext