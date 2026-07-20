import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2 group">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary transform group-hover:rotate-90 transition-transform duration-700 ease-in-out">
      <circle cx="50" cy="50" r="12" fill="currentColor" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(0 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
    <span className="font-heading font-bold text-xl tracking-tight text-white">
      Jofarov Synergy Ltd
    </span>
  </div>
);

export function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300 pt-16 pb-8 border-t-[6px] border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="mb-6 leading-relaxed text-sm">
              Building Nigeria's Future with Excellence. We are a premier construction and civil engineering firm dedicated to quality infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">■</span> Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">■</span> About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">■</span> Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">■</span> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-sm">Building Construction</li>
              <li className="text-sm">Road & Highways</li>
              <li className="text-sm">Civil Engineering</li>
              <li className="text-sm">Project Management</li>
              <li className="text-sm">Procurement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>2 Owena Street, Suncity Estate, FCT Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+234 806 906 6658</span>
                  <span>+234 708 782 1040</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>shaibu20@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Jofarov Synergy Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-500">RC: 1234567</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
