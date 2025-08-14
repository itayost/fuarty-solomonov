// src/data/site-config.ts

export const siteConfig = {
  // שם המשרד
  name: 'משרד עורכי דין פוארטי-סולומונוב',
  nameEn: 'Fuarty-Solomonov Law Office',
  
  // תיאור
  description: 'משרד עורכי דין מוביל בחיפה עם למעלה מעשור של ניסיון במגוון תחומי המשפט',
  
  // כתובת
  address: {
    street: 'דרך העצמאות 55',
    streetEn: '55 Haazmaut Rd.',
    city: 'חיפה',
    cityEn: 'Haifa',
    country: 'ישראל',
    countryEn: 'Israel',
    zipCode: '3303328',
    fullAddress: 'דרך העצמאות 55, חיפה, 3303328',
    fullAddressEn: '55 Haazmaut Rd. Haifa, Israel 3303328',
    googleMapsUrl: 'https://maps.google.com/?q=דרך העצמאות 55 חיפה',
  },
  
  // פרטי קשר
  contact: {
    phone: '04-8700026',
    phoneFormatted: '04-8700026',
    phoneHref: 'tel:048700026',
    fax: '04-8700028',
    email: 'office@fuarty-law.co.il',
    emailHref: 'mailto:office@fuarty-law.co.il',
  },
  
  // שעות פעילות
  officeHours: {
    regular: {
      days: 'ראשון-חמישי',
      hours: '09:00-18:00'
    },
    friday: {
      days: 'שישי',
      hours: '09:00-13:00'
    },
    saturday: {
      days: 'שבת',
      hours: 'סגור'
    }
  },
  
  // רשתות חברתיות (להוסיף אם יש)
  social: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  
  // SEO
  seo: {
    title: 'משרד עורכי דין פוארטי-סולומונוב | חיפה',
    titleTemplate: '%s | פוארטי-סולומונוב עורכי דין',
    description: 'משרד עורכי דין מוביל בחיפה המתמחה בדיני בנקאות, נדל״ן, נזיקין, חברות וירושה. ייעוץ וייצוג משפטי מקצועי עם ניסיון של למעלה מעשור.',
    keywords: [
      'עורך דין חיפה',
      'עורכי דין חיפה',
      'דיני בנקאות',
      'דיני נדלן',
      'תאונות דרכים',
      'הוצאה לפועל',
      'דיני ירושה',
      'פוארטי סולומונוב',
    ],
  },
  
  // לוגו וצבעים
  brand: {
    logo: '/logo.png', // נעדכן כשיהיה לוגו
    favicon: '/favicon.ico',
    primaryColor: '#102a43',
    secondaryColor: '#b8862b',
  },
  
  // נתונים סטטיסטיים
  stats: {
    yearsOfExperience: 10,
    satisfiedClients: 1000,
    successRate: 95,
    teamMembers: 10,
  }
};

export type SiteConfig = typeof siteConfig;