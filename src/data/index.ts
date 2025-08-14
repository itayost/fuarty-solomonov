// ייצוא כל המידע מקובץ אחד מרכזי
export * from './practice-areas';
export * from './site-config';
export * from './team';

// ייצוא נוסף של קבועים שימושיים
export const siteConfig = {
  name: 'משרד עורכי דין פוארטי-סולומונוב',
  title: 'פוארטי-סולומונוב | משרד עורכי דין בחיפה',
  description: 'משרד עורכי דין מוביל בחיפה עם למעלה מעשור של ניסיון. מתמחים בדיני בנקאות, נדל״ן, נזיקין, חברות, ירושה והוצאה לפועל.',
  keywords: [
    'עורך דין חיפה',
    'משרד עורכי דין חיפה',
    'פוארטי סולומונוב',
    'דיני בנקאות',
    'דיני נדל״ן',
    'דיני נזיקין',
    'תאונות דרכים',
    'הוצאה לפועל',
    'צוואות וירושה',
    'דיני חברות',
    'עורך דין מקרקעין חיפה',
    'עורך דין בנקאות'
  ],
  url: 'https://www.fuarty-law.co.il',
  locale: 'he_IL',
  type: 'website',
  image: '/images/og-image.jpg',
  twitterHandle: '@fuartylaw',
  facebookPage: 'https://www.facebook.com/fuartylaw'
};

// Navigation items for the website
export const navigationItems = [
  { href: '/', label: 'בית', order: 1 },
  { href: '/about', label: 'אודות המשרד', order: 2 },
  { href: '/practice-areas', label: 'תחומי התמחות', order: 3 },
  { href: '/team', label: 'הצוות שלנו', order: 4 },
  { href: '/articles', label: 'מאמרים ועדכונים', order: 5 },
  { href: '/contact', label: 'צור קשר', order: 6 }
];

// Social media links
export const socialLinks = {
  facebook: 'https://www.facebook.com/fuartylaw',
  linkedin: 'https://www.linkedin.com/company/fuarty-solomonov',
  instagram: 'https://www.instagram.com/fuartylaw',
  youtube: 'https://www.youtube.com/channel/fuartylaw'
};

// Quick contact for CTAs
export const quickContact = {
  phoneDisplay: '04-8700026',
  phoneLink: 'tel:048700026',
  whatsapp: 'https://wa.me/972487000026',
  emailDisplay: 'office@fuarty-law.co.il',
  emailLink: 'mailto:office@fuarty-law.co.il'
};

// Awards and recognitions (אם יש)
export const awards = [
  // {
  //   year: 2023,
  //   title: 'משרד השנה בתחום הבנקאות',
  //   organization: 'לשכת עורכי הדין'
  // }
];

// Testimonials (אם תרצו להוסיף)
export const testimonials = [
  // {
  //   id: 1,
  //   name: 'לקוח מרוצה',
  //   company: 'חברה פרטית',
  //   text: 'שירות מקצועי ומסור',
  //   rating: 5
  // }
];

// FAQ - שאלות נפוצות
export const faq = [
  {
    question: 'כמה זמן לוקח להגיש תביעה?',
    answer: 'משך הזמן תלוי בסוג התביעה ובמורכבותה. נשמח לייעץ לכם בפגישה ראשונית.'
  },
  {
    question: 'האם הייעוץ הראשוני כרוך בתשלום?',
    answer: 'פגישת הייעוץ הראשונית כרוכה בתשלום סמלי. נא ליצור קשר לתיאום.'
  },
  {
    question: 'באילו אזורים אתם פועלים?',
    answer: 'אנו מייצגים לקוחות בכל רחבי הארץ, עם דגש על אזור חיפה והצפון.'
  },
  {
    question: 'האם אתם מטפלים גם בתיקים קטנים?',
    answer: 'כן, אנו מטפלים בתיקים בכל הגדלים ומספקים את אותה רמת שירות מקצועית לכל לקוח.'
  }
];

// Office features - מה שמייחד את המשרד
export const officeFeatures = [
  {
    icon: '⚖️',
    title: 'ניסיון של למעלה מעשור',
    description: 'מומחיות מוכחת באלפי תיקים'
  },
  {
    icon: '🏛️',
    title: 'ייצוג בנקים מובילים',
    description: 'אמון של המוסדות הפיננסיים הגדולים'
  },
  {
    icon: '🌍',
    title: 'קשרים בינלאומיים',
    description: 'שיתוף פעולה עם משרדים בחו״ל'
  },
  {
    icon: '👥',
    title: 'צוות מקצועי ומנוסה',
    description: 'עורכי דין ואנשי מקצוע מובילים'
  },
  {
    icon: '📍',
    title: 'מיקום אסטרטגי',
    description: 'סמוך לבתי המשפט וקריית הממשלה'
  },
  {
    icon: '💼',
    title: 'מגוון תחומי התמחות',
    description: 'פתרון כולל תחת קורת גג אחת'
  }
];