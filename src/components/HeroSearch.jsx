import Spline from '@splinetool/react-spline';
import { Search, Sparkles } from 'lucide-react';

export default function HeroSearch() {
  return (
    <section className="relative w-full">
      <div className="h-[440px] w-full">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-3xl px-4 md:px-0">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-[#4285F4]">D</span>
              <span className="text-[#DB4437]">i</span>
              <span className="text-[#F4B400]">v</span>
              <span className="text-[#4285F4]">a</span>
              <span className="text-[#0F9D58]">k</span>
              <span className="text-[#DB4437]">a</span>
              <span className="text-[#4285F4]">r</span>
              <span className="text-gray-900"> Thiyagarajan</span>
            </h1>
            <p className="mt-2 text-gray-600">Digital Marketing Manager • Growth Strategist • Performance Marketer</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center bg-white border rounded-full shadow-sm overflow-hidden">
              <div className="pl-4 text-gray-500">
                <Search className="h-5 w-5" />
              </div>
              <input
                aria-label="Search"
                className="flex-1 px-3 py-3 outline-none text-gray-800 placeholder:text-gray-400"
                defaultValue="divakar thiyagarajan digital marketing manager"
              />
              <button className="pointer-events-auto mr-1 my-1 rounded-full bg-black text-white text-sm px-4 py-2 hover:bg-gray-900">
                Search
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white">
                <Sparkles className="h-3.5 w-3.5 text-[#F4B400]" />
                SEO strategy
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white">Paid media</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white">Analytics</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-white">Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
