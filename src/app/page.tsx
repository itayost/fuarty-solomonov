// src/app/page.tsx

import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, ServiceCard, TeamCard } from '@/components/ui/Card';
import { PRACTICE_AREAS, SITE_CONFIG, TEAM_MEMBERS, TESTIMONIALS } from '@/lib/constants';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              משרד עורכי דין
              <span className="block text-secondary-400 mt-2">פוארטי-סולומונוב</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              למעלה מעשור של מצוינות משפטית
            </p>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              משרד דינאמי ומוביל בחיפה, המתמחה במגוון רחב של תחומי משפט ומספק שירות משפטי מקצועי ואישי
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="gold" size="lg">
                ייעוץ ראשוני חינם
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                תחומי עיסוק
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-700">10+</div>
              <div className="text-sm text-gray-600 mt-1">שנות ניסיון</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-700">1000+</div>
              <div className="text-sm text-gray-600 mt-1">לקוחות מרוצים</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-700">95%</div>
              <div className="text-sm text-gray-600 mt-1">הצלחה בתיקים</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-700">24/7</div>
              <div className="text-sm text-gray-600 mt-1">זמינות למקרי חירום</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              תחומי העיסוק שלנו
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              המשרד מתמחה במגוון רחב של תחומים משפטיים ומעניק שירות מקצועי ומקיף
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.slice(0, 6).map((area) => (
              <ServiceCard
                key={area.id}
                icon={<span className="text-2xl">{area.icon}</span>}
                title={area.title}
                description={area.description}
                features={area.features.slice(0, 3)}
                action={
                  <Link href={`/services#${area.id}`}>
                    <Button variant="outline" size="sm" fullWidth>
                      קרא עוד
                    </Button>
                  </Link>
                }
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="primary" size="lg">
                לכל תחומי העיסוק
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              למה לבחור במשרד פוארטי-סולומונוב?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered" className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <CardTitle>ניסיון מוכח</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  אלפי הופעות בבתי משפט ברחבי הארץ עם אחוזי הצלחה גבוהים
                </p>
              </CardContent>
            </Card>
            
            <Card variant="bordered" className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle>יחס אישי</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  כל לקוח מקבל יחס אישי וליווי צמוד לאורך כל התהליך המשפטי
                </p>
              </CardContent>
            </Card>
            
            <Card variant="bordered" className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <CardTitle>קשרים בינלאומיים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  שיתופי פעולה עם משרדים מובילים בארה״ב, קנדה ואנגליה
                </p>
              </CardContent>
            </Card>
            
            <Card variant="bordered" className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <CardTitle>לקוחות מובילים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ייצוג בנקים מובילים, חברות וגופים מוסדיים לצד לקוחות פרטיים
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              הצוות המוביל שלנו
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              צוות עורכי הדין שלנו מביא עמו ניסיון רב וידע מעמיק בתחומי המשפט השונים
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                description={member.description}
                contact={{
                  email: member.email,
                  phone: member.phone
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מה הלקוחות שלנו אומרים
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} variant="dark">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary-400">★</span>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            זקוקים לייעוץ משפטי?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            צוות המשרד עומד לרשותכם לייעוץ ראשוני ללא התחייבות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              קבעו פגישה עכשיו
            </Button>
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_CONFIG.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}