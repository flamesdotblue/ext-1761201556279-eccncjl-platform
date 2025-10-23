import { Search, Mail, Phone, Globe } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-[#4285F4]">D</span>
            <span className="text-[#DB4437]">i</span>
            <span className="text-[#F4B400]">v</span>
            <span className="text-[#4285F4]">a</span>
            <span className="text-[#0F9D58]">k</span>
            <span className="text-[#DB4437]">a</span>
            <span className="text-[#4285F4]">r</span>
          </div>
          <span className="hidden sm:inline text-sm text-gray-500">Digital Marketing Manager</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#work" className="text-sm text-gray-700 hover:text-black">Work</a>
          <a href="#services" className="text-sm text-gray-700 hover:text-black">Services</a>
          <a href="#about" className="text-sm text-gray-700 hover:text-black">About</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-black">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:hello@divakar.marketing" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:+0000000000" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Phone">
            <Phone className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Website">
            <Globe className="h-5 w-5" />
          </a>
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-black text-white text-sm px-4 py-2 font-medium hover:bg-gray-900">
            <Search className="h-4 w-4" />
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
