// src/app/services/[slug]/page.tsx
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getPracticeAreaById, practiceAreas } from '@/data/practice-areas';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JSX } from 'react';

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = getPracticeAreaById(params.slug);
  
  if (!area) {
    return {
      title: 'תחום עיסוק לא נמצא',
    };
  }

  return {
    title: `${area.title} | משרד עורכי דין פוארטי-סולומונוב`,
    description: area.fullDescription,
    keywords: [area.title, ...area.services.slice(0, 5), 'עורך דין חיפה'],
  };
}

// Icons mapping for services
const serviceIcons: { [key: string]: JSX.Element } = {
  'real-estate': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  'banking': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'torts': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  'corporate': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'contracts': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'inheritance': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'execution': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  'labor': (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

// Related areas mapping
const relatedAreasMap: { [key: string]: string[] } = {
  'real-estate': ['banking', 'contracts', 'execution'],
  'banking': ['real-estate', 'execution', 'corporate'],
  'torts': ['labor', 'contracts'],
  'corporate': ['contracts', 'banking', 'labor'],
  'contracts': ['corporate', 'real-estate', 'torts'],
  'inheritance': ['real-estate', 'contracts'],
  'execution': ['banking', 'real-estate', 'contracts'],
  'labor': ['contracts', 'corporate', 'torts'],
};

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = getPracticeAreaById(params.slug);

  if (!area) {
    notFound();
  }

  const relatedAreas = (relatedAreasMap[area.id] || [])
    .map(id => getPracticeAreaById(id))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center text-primary-600">
              {serviceIcons[area.id] || serviceIcons['contracts']}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {area.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              {area.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Full Description */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">
                    אודות תחום {area.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {area.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Services List */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-900">
                    השירותים שאנו מציעים בתחום
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {area.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact CTA */}
              <Card className="mb-8 bg-primary-900 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">
                    זקוקים לייעוץ בתחום {area.title}?
                  </h3>
                  <p className="mb-6 text-primary-100">
                    צרו קשר עוד היום לקבלת ייעוץ ראשוני
                  </p>
                  <Link href="/contact" className="block mb-3">
                    <Button variant="secondary" className="w-full">
                      צור קשר
                    </Button>
                  </Link>
                  <a href="tel:04-8700026" className="block">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-900">
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      04-8700026
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">מיקום המשרד</CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-gray-700 space-y-2">
                    <p className="font-semibold">משרד עורכי דין פוארטי-סולומונוב</p>
                    <p>דרך העצמאות 55</p>
                    <p>חיפה 3303317</p>
                    <div className="pt-3 space-y-1">
                      <p>טל׳: 04-8700026</p>
                      <p>פקס: 04-8700028</p>
                    </div>
                  </address>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">למה לבחור בנו?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span className="text-gray-700">מעל 25 שנות ניסיון</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span className="text-gray-700">ייצוג בנקים מובילים</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span className="text-gray-700">מקצועיות ללא פשרות</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span className="text-gray-700">זמינות ושירות אישי</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      {relatedAreas.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
              תחומי עיסוק קשורים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedAreas.map((relatedArea) => (
                <Card key={relatedArea!.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-900">
                      {relatedArea!.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedArea!.shortDescription}
                    </p>
                    <Link href={`/services/${relatedArea!.id}`}>
                      <Button variant="outline" className="w-full">
                        למידע נוסף
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Practice Areas Link */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Link href="/services">
            <Button variant="primary" size="lg">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              חזרה לכל תחומי העיסוק
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}