import { ExternalLink, Star, FileText, Rocket } from 'lucide-react';

function ResultItem({ url, title, description, tags }) {
  return (
    <div className="group">
      <a href={url} className="text-sm text-[#202124]" target="_blank" rel="noreferrer">
        <div className="text-sm text-[#4d5156]">{url.replace('https://', '')}</div>
        <h3 className="text-xl text-[#1a0dab] group-hover:underline font-medium">{title}</h3>
      </a>
      <p className="mt-1 text-sm text-[#4d5156]">{description}</p>
      {tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full border px-2 py-0.5 text-gray-600 bg-white">{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ResultsGrid() {
  return (
    <section id="work" className="">
      <div className="text-xs text-gray-500">About 12,400 results (0.24 seconds)</div>

      <div className="mt-6 space-y-8">
        <ResultItem
          url="https://divakar.marketing/case-studies/roas-3x"
          title="Case Study: 3x ROAS in 90 Days for D2C Apparel"
          description="Scaled paid search and social campaigns with structured testing, creative iteration, and audience expansion. Built a measurement plan to uncover profitable segments and drive sustainable growth."
          tags={["Google Ads", "Meta Ads", "CRO", "Attribution"]}
        />

        <ResultItem
          url="https://divakar.marketing/services"
          title="Services: Performance Marketing, SEO, Content, Analytics"
          description="Integrated growth programs: account audits, media buying, SEO roadmaps, content engines, analytics & dashboards, and experimentation frameworks tailored to your goals."
          tags={["Audit", "Strategy", "Execution", "Dashboards"]}
        />

        <div id="services" className="rounded-xl border bg-white/60 p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Rocket className="h-4 w-4" />
            Signature Offers
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <a href="#" className="rounded-lg border p-4 hover:shadow-sm">
              <h4 className="font-semibold text-[#1a0dab]">Growth Sprint</h4>
              <p className="mt-1 text-sm text-gray-600">4-week sprint to diagnose, prioritize, and activate quick wins across paid, SEO, and CRO.</p>
            </a>
            <a href="#" className="rounded-lg border p-4 hover:shadow-sm">
              <h4 className="font-semibold text-[#1a0dab]">Performance OS</h4>
              <p className="mt-1 text-sm text-gray-600">Always-on media and experimentation system with clear targets, cadence, and reporting.</p>
            </a>
            <a href="#" className="rounded-lg border p-4 hover:shadow-sm">
              <h4 className="font-semibold text-[#1a0dab]">SEO Foundation</h4>
              <p className="mt-1 text-sm text-gray-600">Technical audit, content map, and link plan to build compounding organic traffic.</p>
            </a>
          </div>
        </div>

        <ResultItem
          url="https://divakar.marketing/resume.pdf"
          title="Resume: Digital Marketing Manager — Divakar Thiyagarajan"
          description="8+ years driving measurable growth for startups and brands. Owned budgets up to $1.2M/yr, led cross-functional teams, and shipped revenue-positive experiments."
          tags={["Leadership", "Budgeting", "Team Enablement", "B2B & D2C"]}
        />

        <div className="rounded-xl border bg-white/60 p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Star className="h-4 w-4 text-yellow-500" />
            Testimonials
          </div>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border p-4 bg-white">
              <p className="text-sm text-gray-700">“Divakar rebuilt our acquisition engine. CPA down 32% while revenue grew. Clear strategy and crisp execution.”</p>
              <div className="mt-2 text-xs text-gray-500">VP Growth, SaaS</div>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <p className="text-sm text-gray-700">“Best marketing ops partner we’ve had. Dashboarding and experimentation cadence changed our culture.”</p>
              <div className="mt-2 text-xs text-gray-500">Founder, D2C</div>
            </div>
          </div>
        </div>

        <div id="about" className="group">
          <a href="#" className="text-sm text-[#202124]" target="_blank" rel="noreferrer">
            <div className="text-sm text-[#4d5156]">divakar.marketing/about</div>
            <h3 className="text-xl text-[#1a0dab] group-hover:underline font-medium">About Divakar — Principles & Approach</h3>
          </a>
          <p className="mt-1 text-sm text-[#4d5156]">Operator first. Strategy anchored in data, validated by experiments, and translated into processes that teams can run with.</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {['Data-driven', 'Customer-led', 'Test & Learn', 'Full-funnel'].map((t) => (
              <span key={t} className="text-xs rounded-full border px-2 py-0.5 text-gray-600 bg-white">{t}</span>
            ))}
          </div>
        </div>

        <div id="contact" className="rounded-xl border p-5 bg-white/60">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-[#1a0dab]">Contact</h4>
              <p className="text-sm text-gray-600">Book a chat to audit your funnel or plan your next quarter.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black">
              Open form
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-3">
            <a href="mailto:hello@divakar.marketing" className="rounded-lg border p-4 bg-white hover:shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium"><FileText className="h-4 w-4" /> Email</div>
              <div className="text-xs text-gray-500">hello@divakar.marketing</div>
            </a>
            <a href="https://cal.com/" target="_blank" rel="noreferrer" className="rounded-lg border p-4 bg-white hover:shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium"><ExternalLink className="h-4 w-4" /> Book a call</div>
              <div className="text-xs text-gray-500">30-min intro</div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border p-4 bg-white hover:shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium"><ExternalLink className="h-4 w-4" /> LinkedIn</div>
              <div className="text-xs text-gray-500">Connect & say hi</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
