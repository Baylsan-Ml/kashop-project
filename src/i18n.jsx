import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Products": "Products",
          "Categories":"Categories",
          "Cart":"Cart",
          "Login":"Login",
          "Register":"Register",
          "Logout":"Logout"
        }
      },
       ar: {
        translation: {
          "Home": "الصفحة الرئيسية",
          "Products": "المنتجات",
          "Categories":"التصنيفات",
          "Cart":"السلة",
          "Login":"تسجيل الدخول",
          "Register":"انشاء حساب",
          "Logout":"تسجيل الخروج"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

   
  });

  export default i18n;