// src/app/team/page.tsx
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { teamMembers } from '@/data/team';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'הצוות שלנו | משרד עורכי דין פוארטי-סולומונוב',
  description: 'הכירו את צוות עורכי הדין המקצועי של משרד פוארטי-סולומונוב - מומחים בדיני בנקאות, מקרקעין, נזיקין, חברות וירושה',
  keywords: ['עורכי דין חיפה', 'צוות משפטי', 'ורד פוארטי', 'עופר סולומונוב'],
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              הצוות שלנו
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              צוות מקצועי ומנוסה עם מעל 25 שנות ניסיון בתחומי המשפט השונים
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  {/* Image Column */}
                  <div className="md:w-1/3 bg-gray-100">
                    <div className="aspect-[3/4] bg-gradient-to-b from-primary-100 to-primary-50 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-32 h-32 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-primary-700">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-1">
                          {member.title && `${member.title} `}{member.name}
                        </h3>
                        <p className="text-primary-700 font-medium">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="md:w-2/3 p-8">
                    <CardHeader className="p-0 mb-6">
                      <h2 className="text-2xl font-bold text-primary-900 mb-2">
                        {member.title && `${member.title} `}{member.name}
                      </h2>
                      <p className="text-lg text-primary-700">{member.role}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Education */}
                      {member.education && member.education.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">השכלה</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {member.education.map((edu, index) => (
                              <li key={index}>{edu}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bar Admission */}
                      {member.barAdmission && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">רישיון</h4>
                          <p className="text-gray-600">{member.barAdmission.description}</p>
                        </div>
                      )}

                      {/* Specializations */}
                      {member.specializations && member.specializations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">תחומי התמחות</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specializations.map((spec, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Positions */}
                      {member.positions && member.positions.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">תפקידים נוספים</h4>
                          <ul className="space-y-2 text-gray-600">
                            {member.positions.map((position, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-secondary-600 mt-1 ml-2">•</span>
                                <span>{position}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Description */}
                      {member.description && (
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{member.description}</p>
                        </div>
                      )}

                      {/* Contact */}
                      {(member.email || member.phone) && (
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-4">
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {member.email}
                              </a>
                            )}
                            {member.phone && (
                              <a
                                href={`tel:${member.phone}`}
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {member.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
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
            צרו קשר עוד היום ונשמח לסייע בכל שאלה משפטית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                צור קשר
              </Button>
            </Link>
            <a href="tel:04-8700026">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                04-8700026
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}