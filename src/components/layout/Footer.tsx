import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container">
        <div className="py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-lg font-semibold">{SITE_CONFIG.name}</h3>
              <p className="text-sm text-gray-600">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold">קישורים</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold">צור קשר</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>טלפון: {SITE_CONFIG.phone}</li>
                <li>אימייל: {SITE_CONFIG.email}</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
}