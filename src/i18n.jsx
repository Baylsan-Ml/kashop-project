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
          "Logout":"Logout",
          "Tokyo's Beika Ward": "Tokyo's Beika Ward",
          "Support": "Support",
          "Information":"Information",
          "Privicy Policy":"Privicy Policy",
          "Customer Services":"Customer Services",
          "Shipping & Return":"Shipping & Return",
          "Terms & Conditions":"Terms & Conditions",
          "Refud Policy":"Refud Policy",
          "Contact Us":"Contact Us",
          "About Us":"About Us",
          "FAQ's":"FAQ's",
          "Store Location":"Store Location",
          "Call Us":"Call Us",
          "Have Something in Mind?":"Have Something in Mind?",
          "Send":"Send",
          "Check out our products, don't forget to add your favorites to cart":
          "Check out our products, don't forget to add your favorites to cart",
          "Action":"Action",
          "Quantity Total": "Quantity Total",
          "Price":"Price",
          "Product Name":"Product Name",
          "Remove":"Remove",
          "Cart Total":"Cart Total",
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
          "Logout":"تسجيل الخروج",
          "Tokyo's Beika Ward":"طوكيو حي بيكا",
          "Support":"الدعم",
          "Information":"معلومات",
          "Privicy Policy":"سياسة الخصوصية",
          "Customer Services":"خدمة العملاء",
          "Shipping & Return":"الشحن والإرجاع",
          "Terms & Conditions":"الشروط والأحكام",
          "Refud Policy": "سياسة الاسترداد",
          "Contact Us":"تواصل معنا",
          "About Us":"نبذة عنا",
          "FAQ's":"الأسئلة الشائعة",
          "Store Location":"موقع المتجر",
          "Call Us":"اتصل بنا",
          "Have Something in Mind?":"ألديك أي سؤال؟",
          "Send":"ارسال",
          "Check out our products, don't forget to add your favorites to cart":
          "تصفح منتجاتنا ولا تنسَ اضافة ما تحب للسلة",
          "Action":"الإجراء",
          "Quantity	Total":"الكمية الإجمالية",
          "Price":"السعر",
          "Product Name":"اسم المنتج",
          "Remove":"حذف",
          "Cart Total":"إجمالي السلة "
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

   
  });

  export default i18n;