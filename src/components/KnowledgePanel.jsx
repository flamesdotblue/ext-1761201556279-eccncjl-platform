import { User, MapPin, Mail, Globe, Award, BarChart3 } from 'lucide-react';

export default function KnowledgePanel() {
  return (
    <aside className="lg:sticky lg:top-20">
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="p-5 border-b">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white flex items-center justify-center font-bold text-2xl">
              DT
            </div>
            <div>
              <h3 className="text-xl font-semibold">Divakar Thiyagarajan</h3>
              <div className="text-sm text-gray-500">Digital Marketing Manager</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                <MapPin className="h-3.5 w-3.5" /> Chennai, IN • Remote-friendly
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <div className="text-xs font-medium text-gray-500">Specialties</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Paid Search', 'Paid Social', 'SEO', 'Analytics', 'CRO', 'Lifecycle'].map((s) => (
                <span key={s} className="text-xs rounded-md border px-2 py-1 bg-white">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-500">Impact</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <BarChart3 className="h-4 w-4 mt-0.5 text-blue-600" />
                <span>Managed $1M+ annual budgets across Google & Meta with consistent ROAS improvement.</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-4 w-4 mt-0.5 text-green-600" />
                <span>Shipped experimentation frameworks increasing conversion rates 15–30%.</span>
              </li>
              <li className="flex items-start gap-2">
                <User className="h-4 w-4 mt-0.5 text-amber-600" />
                <span>Led cross-functional squads of designers, analysts, and media buyers.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-500">Skills</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'Ahrefs', 'Shopify', 'HubSpot', 'Zapier'].map((s) => (
                <div key={s} className="rounded-md border px-2 py-1 bg-white text-gray-700">{s}</div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <a href="mailto:hello@divakar.marketing" className="rounded-lg border p-3 text-center hover:bg-gray-50">
              <Mail className="h-4 w-4 mx-auto mb-1" />
              <span className="text-xs">Email</span>
            </a>
            <a href="https://divakar.marketing" target="_blank" rel="noreferrer" className="rounded-lg border p-3 text-center hover:bg-gray-50">
              <Globe className="h-4 w-4 mx-auto mb-1" />
              <span className="text-xs">Website</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border p-3 text-center hover:bg-gray-50">
              <User className="h-4 w-4 mx-auto mb-1" />
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
