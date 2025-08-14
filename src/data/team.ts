export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  education?: string[];
  barAdmission?: {
    year: number;
    description: string;
  };
  specializations?: string[];
  positions?: string[];
  description?: string;
  image?: string;
  email?: string;
  phone?: string;
  order: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'vered-fuarty',
    name: 'ורד פוארטי-סולומונוב',
    title: 'עו״ד',
    role: 'שותפה ומייסדת',
    education: [
      'בוגרת אוניברסיטת שפילד באנגליה'
    ],
    barAdmission: {
      year: 1994,
      description: 'חברה בלשכת עורכי הדין בישראל משנת 1994'
    },
    specializations: [
      'דיני מקרקעין',
      'דיני בנקאות',
      'ליטיגציה',
      'דיני חוזים',
      'דיני ירושה וצוואות',
      'דיני עבודה',
      'הוצאה לפועל'
    ],
    positions: [
      'יושבת ראש ועדת הערר לענייני ארנונה שלצד עיריית חיפה'
    ],
    description: 'עורכת דין ורד פוארטי-סולומונוב משמשת מזה שנים כיושבת ראש ועדת הערר לענייני ארנונה, שלצד עיריית חיפה. בתפקידה זה היא נדרשת לתת החלטות שונות בעררים על חיובים בארנונה. המדובר בתפקיד מעין שיפוטי, הדורש ידע רב בתחום, כמו גם מזג שיפוטי ויכולת לקבל החלטות הרות גורל.',
    email: 'vered@fuarty-law.co.il',
    order: 1
  },
  {
    id: 'ofer-solomonov',
    name: 'עופר סולומונוב',
    title: 'עו״ד',
    role: 'שותף ומייסד',
    education: [
      'בוגר המחזור השני של הפקולטה למשפטים באוניברסיטת חיפה'
    ],
    barAdmission: {
      year: 1997,
      description: 'חבר בלשכת עורכי הדין בישראל משנת 1997'
    },
    specializations: [
      'דיני נזיקין',
      'פיצויים לנפגעי תאונות דרכים',
      'דיני חברות',
      'דיני חוזים',
      'דיני עבודה',
      'דיני בנקאות',
      'היי-טק',
      'הוצאה לפועל'
    ],
    positions: [
      'מזכיר של חברה ציבורית הנסחרת בבורסה לניירות ערך',
      'חבר בוועדת מחשבים שלצד ועד מחוז חיפה של לשכת עורכי הדין',
      'חונך של עורכי דין בראשית דרכם, מטעם מחוז חיפה של לשכת עורכי הדין'
    ],
    description: 'עורך דין סולומונוב מילא וממלא תפקידים שונים ובכללם, מזכיר של חברה ציבורית הנסחרת בבורסה לניירות ערך, חבר בוועדת מחשבים שלצד ועד מחוז חיפה של לשכת עורכי הדין וחונך של עורכי דין בראשית דרכם.',
    email: 'ofer@fuarty-law.co.il',
    order: 2
  },
  {
    id: 'baruch-yuzbagi',
    name: 'ברוך יוזבגי',
    title: '',
    role: 'אחראי מנהלה',
    barAdmission: {
      year: 2001,
      description: 'משמש כאחראי מנהלה במשרד מאז שנת 2001'
    },
    specializations: [
      'ביצוע פרוצדורות בבתי המשפט',
      'הליכים בלשכת ההוצאה לפועל',
      'פרוצדורות בלשכת רישום המקרקעין (טאבו)',
      'הליכים ברשות מקרקעי ישראל',
      'הליכים בחברות משכנות',
      'פרוצדורות ברשויות המס',
      'הליכים ברשם החברות',
      'הליכים ברשם המשכונות',
      'הליכים ברשות הרישוי'
    ],
    description: 'לברוך מומחיות בביצוע פרוצדורות שונות בבתי המשפט, בלשכת ההוצאה לפועל ובמוסדות רשמיים נוספים. בנוסף בקיא ברוך בביצוע פרוצדורות סבוכות בלשכת רישום המקרקעין (טאבו), ברשות מקרקעי ישראל, בחברות משכנות ובמוסדות נוספים.',
    order: 3
  }
];

// Helper function to get team member by id
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

// Helper function to get partners only
export const getPartners = (): TeamMember[] => {
  return teamMembers.filter(member => member.role.includes('שותף'));
};

// Helper function to get attorneys only
export const getAttorneys = (): TeamMember[] => {
  return teamMembers.filter(member => member.title === 'עו״ד');
};