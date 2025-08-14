import Button from '@/components/ui/Button';
import Link from 'next/link';

const PRACTICE_AREAS = [
  'דיני בנקאות',
  'הוצאה לפועל',
  'נזיקין ותאונות דרכים',
  'מקרקעין ונדל״ן',
  'ירושה וצוואות',
  'דיני מסחר וחברות',
  'דיני חוזים'
];

const QUICK_LINKS = [
  { href: '/about', label: 'אודות המשרד' },
  { href: '/team', label: 'הצוות שלנו' },
  { href: '/services', label: 'תחומי עיסוק' },
  { href: '/articles', label: 'מאמרים ועדכונים' },
  { href: '/careers', label: 'קריירה' },
  { href: '/contact', label: 'צור קשר' }
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10">
                  <svg className="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">פוארטי-סולומונוב</div>
                  <div className="text-xs text-gray-400">משרד עורכי דין</div>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                למעלה מעשור של מצוינות משפטית. המשרד שלנו מתמחה במגוון רחב של תחומים משפטיים ומספק שירות מקצועי ואישי.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-lg font-semibold text-secondary-400">תחומי עיסוק</h3>
            <ul className="space-y-3">
              {PRACTICE_AREAS.map((area) => (
                <li key={area}>
                  <Link
                    href={`/services#${area.replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-300 hover:text-secondary-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-secondary-500">⚖</span>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-lg font-semibold text-secondary-400">קישורים מהירים</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & CTA */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-lg font-semibold text-secondary-400">צור קשר</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm text-gray-300">
                  <p>רחוב הנמל 53</p>
                  <p>קריית הממשלה, חיפה</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:04-8555555" className="text-sm text-gray-300 hover:text-secondary-400 transition-colors">
                  04-855-5555
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:office@fuarty-law.co.il" className="text-sm text-gray-300 hover:text-secondary-400 transition-colors">
                  office@fuarty-law.co.il
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-300">
                  <p>ראשון - חמישי: 8:30 - 18:00</p>
                  <p>שישי וערבי חג: 8:30 - 13:00</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="md" fullWidth>
              קבע פגישת ייעוץ
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} משרד עורכי דין פוארטי-סולומונוב. כל הזכויות שמורות.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-secondary-400 transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-secondary-400 transition-colors">
                תנאי שימוש
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-secondary-400 transition-colors">
                הצהרת נגישות
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-secondary-400 transition-colors">
                מפת אתר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}