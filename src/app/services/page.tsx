// src/app/services/page.tsx
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { practiceAreas } from '@/data/practice-areas';
import { Metadata } from 'next';
import Link from 'next/link';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'תחומי עיסוק | משרד עורכי דין פוארטי-סולומונוב',
  description: 'תחומי העיסוק של משרד עורכי דין פוארטי-סולומונוב - דיני בנקאות, מקרקעין, נזיקין, חברות, חוזים, ירושה והוצאה לפועל',
  keywords: ['תחומי עיסוק', 'דיני בנקאות', 'דיני מקרקעין', 'דיני נזיקין', 'דיני חברות', 'דיני חוזים', 'דיני ירושה', 'הוצאה לפועל'],
};

// Icons mapping for practice areas
const iconMap: { [key: string]: JSX.Element } = {
  'real-estate': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  'banking': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'torts': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  'corporate': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'contracts': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'inheritance': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'execution': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  'labor': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              תחומי עיסוק
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              משרדנו מתמחה במגוון רחב של תחומי משפט, ומעניק שירות מקצועי ומסור ללקוחות פרטיים ועסקיים
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Card 
                key={area.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {iconMap[area.id] || (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    )}
                  </div>
                  <CardTitle className="text-xl text-primary-900">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 line-clamp-3">
                    {area.shortDescription}
                  </p>
                  
                  {/* Show first 3 services */}
                  <ul className="mb-6 space-y-2">
                    {area.services.slice(0, 3).map((service, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-secondary-600 mt-0.5">✓</span>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                    {area.services.length > 3 && (
                      <li className="text-sm text-gray-500 pr-5">
                        ועוד {area.services.length - 3} שירותים...
                      </li>
                    )}
                  </ul>
                  
                  <Link href={`/services/${area.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                      למידע נוסף
                      <svg className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-[-4px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            למה לבחור במשרד פוארטי-סולומונוב?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'ניסיון רב שנים',
                description: 'מעל 25 שנות ניסיון בתחומי המשפט השונים',
                icon: '⚖️'
              },
              {
                title: 'מקצועיות ומסירות',
                description: 'טיפול מקצועי ומסור בכל תיק ותיק',
                icon: '🎯'
              },
              {
                title: 'ייצוג מוביל',
                description: 'ייצוג בנקים ומוסדות מובילים במשק',
                icon: '🏛️'
              },
              {
                title: 'זמינות ושירות',
                description: 'מענה מהיר וזמינות מלאה ללקוחותינו',
                icon: '📞'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
            לקוחותינו
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              משרדנו גאה לייצג מגוון רחב של לקוחות, ביניהם:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-primary-900 mb-2">בנקים מובילים</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>בנק הפועלים בע״מ</li>
                  <li>בנק הפועלים - אגף משכן</li>
                  <li>בנק לאומי לישראל בע״מ</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-primary-900 mb-2">חברות עסקיות</h3>
                <p className="text-gray-600">
                  חברות מסחריות, חברות נדל״ן וחברות היי-טק
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-primary-900 mb-2">לקוחות פרטיים</h3>
                <p className="text-gray-600">
                  אלפי לקוחות פרטיים מרוצים לאורך השנים
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            זקוקים לייעוץ משפטי מקצועי?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            אנו כאן כדי לסייע לכם בכל שאלה או בעיה משפטית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                קבלו ייעוץ ראשוני
              </Button>
            </Link>
            <a href="tel:04-8700026">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                התקשרו: 04-8700026
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}