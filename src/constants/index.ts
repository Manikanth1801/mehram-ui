import { RouteInterface } from "../interface"
import { AboutPage, BookingPage, ContactPage, CustomizationPage, HomePage, LoginPage, PrivacyPage, RefundPage, SponsorsPage, TermsConditionPage } from "../pages"

export const appRoutes:RouteInterface[] = [
    {
        label:"Home",
        route:'/home',
        description:"",
        icon:'',
        element:HomePage 
    },
    {
        label:"Contact us",
        route:'/contact-us',
        description:"",
        icon:'',
        element:ContactPage
    },
    {
        label:"About us",
        route:'/about',
        description:"",
        icon:'',
        element:AboutPage
    },
    {
        label:"Bookings",
        route:'/book-tickets',
        description:"",
        icon:'',
        element:BookingPage
    },
    {
        label:"Sponsorships",
        route:'/Sponsors',
        description:"",
        icon:'',
        element:SponsorsPage
    },
    {
        label:"Terms and Conditions",
        route:'/terms-conditions',
        description:"",
        icon:'',
        element:TermsConditionPage
    },
    {
        label:"Privacy policies",
        route:'/privacy',
        description:"",
        icon:'',
        element:PrivacyPage
    },
    {
        label:"Refund policies",
        route:'/refund',
        description:"",
        icon:'',
        element:RefundPage
    },
    {
        label:"Login",
        route:'/login',
        description:"",
        icon:'',
        element:LoginPage
    },
]

export const authRoutes:RouteInterface[] = [
    {
        label:"Web customizations",
        route:'/customizations',
        description:"",
        icon:'',
        element:CustomizationPage
    },
]