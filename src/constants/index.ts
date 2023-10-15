import { RouteInterface } from "../interface";
import {
  AboutPage,
  BookingPage,
  ContactPage,
  CustomizationPage,
  HomePage,
  LoginPage,
  PrivacyPage,
  RefundPage,
  SponsorsPage,
  TermsConditionPage,
} from "../pages";

export const appRoutes: RouteInterface[] = [
  {
    label: "Home",
    route: "/home",
    description: "",
    icon: "",
    element: HomePage,
    navVisible: true,
  },
  {
    label: "Contact us",
    route: "/contact-us",
    description: "",
    icon: "",
    element: ContactPage,
    navVisible: true,
  },
  {
    label: "About us",
    route: "/about",
    description: "",
    icon: "",
    element: AboutPage,
    navVisible: true,
  },
  {
    label: "Bookings",
    route: "/book-tickets",
    description: "",
    icon: "",
    element: BookingPage,
    navVisible: true,
  },
  {
    label: "Sponsorships",
    route: "/Sponsors",
    description: "",
    icon: "",
    element: SponsorsPage,
    navVisible: true,
  },
  {
    label: "Terms and Conditions",
    route: "/terms-conditions",
    description: "",
    icon: "",
    element: TermsConditionPage,
    navVisible: false,
  },
  {
    label: "Privacy policies",
    route: "/privacy",
    description: "",
    icon: "",
    element: PrivacyPage,
    navVisible: false,
  },
  {
    label: "Refund policies",
    route: "/refund",
    description: "",
    icon: "",
    element: RefundPage,
    navVisible: false,
  },
  {
    label: "Login",
    route: "/login",
    description: "",
    icon: "",
    element: LoginPage,
    navVisible: false,
  },
];

export const authRoutes: RouteInterface[] = [
  {
    label: "Web customizations",
    route: "/customizations",
    description: "",
    icon: "",
    element: CustomizationPage,
    navVisible: true,
  },
];
