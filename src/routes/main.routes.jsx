import Login from "../pages/login/Login";
import Main from "../pages/main/main";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import TermsConditions from "../pages/terms.conditions/terms.conditions";
import RefundPolicy from "../pages/refund.policy/refund.policy";
import PrivacyPolicy from "../pages/privacy.policy/privacy.policy";

import Dash from "../pages/dashboard.user/dashboard.user";
import HomePage from "../pages/home/home.page";
import Faqs from "../pages/faqs/faqs";
import HowItWorks from "../pages/how-it-works/how-it-works";
import Documents from "../pages/documents";
import BlogLayout from "../pages/blog/blog-layout";
import Blog from "../pages/blog/blog";
import Blog6 from "../pages/blog.posts/blog.posts.6";
import BlogId from "../pages/blog/blogId";
import PaymentSuccess from "../pages/PaymentStatus/PaymentSuccess";
import PaymentFailed from "../pages/PaymentStatus/PaymentFailed";
//import CaptchaCard from "../components/organisms/captcha.card/captcha.card";
import CaptchaDemo from "../pages/captchademo/index";
import KnowMore from "../pages/knowmore";
import CourseVideo from "../pages/coursevideo";
import EduPortal from "../pages/educationPortal";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },

  {
    path: "/",
    component: Main,
    exact: true,
  },

  {
    path: "/dash",
    component: Dash,
    exact: true,
  },

  {
    path: "/payment-success",
    component: PaymentSuccess,
    exact: true,
  },

  {
    path: "/payment-failed",
    component: PaymentFailed,
    exact: true,
  },

  {
    path: "/captcha-demo",
    component:CaptchaDemo ,
    exact: true,
  },

  {
    path: "/know-more",
    component:KnowMore ,
    exact: true,
  },

  {
    path: "/course",
    component:CourseVideo ,
    exact: true,
  },

  {
    path: "/edu-portal",
    component:EduPortal ,
    exact: true,
  },

  {
    path: "/about",
    title: "About Us",
    component: About,
    description: "About Us",
    id: "about",
  },
  {
    path: "/contact",
    title: "Contact Us",
    component: Contact,
    description: "Contact Us",
    id: "contact",
  },
  {
    title: "blog",
    path: "/blog",
    component: BlogLayout,
    description: "blog",
    id: "blog",
  },
  // {
  //   title: "blogID",
  //   path: "/blog/:id",
  //   component: BlogId,
  //   description: "blogID",
  //   id: "blogID",
  // },
  {
    title: "blogID",
    path: "/blogID/:id",
    component: BlogId,
    description: "blogID",
    id: "blogID",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    component: PrivacyPolicy,
    description: "Privacy Policy",
    id: "privacy-policy",
  },
  {
    path: "/refund-policy",
    title: "Refund Policy",
    component: RefundPolicy,
    description: "Refund Policy",
    id: "refund-policy",
  },
  {
    path: "/terms-conditions",
    title: "Terms and Conditions",
    component: TermsConditions,
    description: "Terms and Conditions",
    id: "terms-conditions",
  },
  {
    path: "/faqs",
    title: "FAQs",
    component: Faqs,
    description: "FAQs",
    id: "faqs",
  },
  {
    path: "/how-it-works",
    title: "How it works",
    component: HowItWorks,
    description: "How it works",
    id: "how-it-works",
  },
  {
    path: "/documents",
    component: Documents,
    description: "Documents",
    id: "documents",
  },
  {
    path: "/d",
    component: HomePage,
  },
];
