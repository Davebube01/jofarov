import Link from "next/link";
import { ArrowRight, CheckCircle2, HardHat, Building2, MapPin, Truck, Compass, Clock, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { CountUp } from "@/components/ui/count-up";
import heroImg from "../../public/attached/hero.jpg"
import aboutImg from "../../public/attached/about-preview.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg.src})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/90 via-[#006400]/80 to-primary/50" />
        
        <div className="container relative z-20 mx-auto px-4 pt-20 pb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <FadeIn delay={0.2}>
            <span className="inline-block py-1 px-3 mb-6 border border-primary/50 bg-primary/10 text-primary-foreground backdrop-blur-sm rounded-sm font-medium tracking-widest uppercase text-xs">
              Nigeria's Infrastructure Backbone
            </span>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white max-w-4xl leading-tight mb-6">
              Building Nigeria's Future with <span className="text-primary">Excellence</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-light">
              We are a heavyweight construction partner delivering roads, commercial towers, and vital infrastructure with unmatched precision and accountability.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/services" 
              className="px-8 py-4 bg-primary text-white font-medium hover:bg-secondary transition-all shadow-[0_4px_14px_0_rgba(0,166,81,0.39)] hover:shadow-[0_6px_20px_rgba(0,166,81,0.23)] hover:-translate-y-0.5 rounded-sm flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 text-white font-medium hover:bg-white hover:text-foreground backdrop-blur-sm transition-all rounded-sm flex items-center justify-center"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary text-white py-12 relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <FadeIn delay={0.1} direction="none">
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                <CountUp end={15} suffix="+" />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-300">Years Experience</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="none">
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                <CountUp end={50} suffix="+" />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-300">Projects Delivered</p>
            </FadeIn>
            <FadeIn delay={0.3} direction="none">
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                <CountUp end={100} suffix="%" />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-300">Client Satisfaction</p>
            </FadeIn>
            <FadeIn delay={0.4} direction="none">
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                <CountUp end={10} suffix="+" />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-300">States Covered</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-sm" />
                  <Image 
                    src={aboutImg} 
                    alt="Jofarov Engineers" 
                    className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 z-20 shadow-xl max-w-xs border-l-4 border-primary">
                    <p className="font-heading font-bold text-xl mb-1">Commanding Trust</p>
                    <p className="text-sm opacity-90">Building the nation's framework, one project at a time.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">About The Company</h4>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Raw Power Tempered by Engineering Precision
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Jofarov Synergy Ltd is not just another contractor. We are a heavyweight civil engineering and construction firm dedicated to transforming Nigeria's landscape. 
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  From large-scale commercial developments in Abuja to critical highway infrastructures stretching across states, we deploy world-class expertise, heavy machinery, and uncompromising standards to every site we touch.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">Certified Engineering Professionals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">State-of-the-Art Heavy Equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground">Rigorous Safety Standards</span>
                  </li>
                </ul>

                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
                >
                  <span className="border-b-2 border-primary group-hover:border-secondary pb-1">Discover Our Story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-slate-600 text-lg">
                Delivering excellence across a full spectrum of structural and civil engineering disciplines.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Building Construction", desc: "Residential, commercial, and industrial towers built to last generations." },
              { icon: MapPin, title: "Road Construction", desc: "Durable highways, urban roads, and drainage systems that connect communities." },
              { icon: Compass, title: "Civil Engineering", desc: "Complex earthworks, bridges, and structural concrete execution." },
              { icon: Truck, title: "Procurement & Supply", desc: "Sourcing premium construction materials and heavy equipment." },
              { icon: HardHat, title: "Project Management", desc: "End-to-end oversight ensuring timeline, budget, and quality compliance." },
              { icon: ShieldCheck, title: "Maintenance", desc: "Comprehensive upkeep and rehabilitation of existing infrastructure." }
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col items-start rounded-sm hover:-translate-y-1">
                  <div className="w-14 h-14 bg-green-50 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link href="/services" className="text-sm font-semibold text-primary uppercase tracking-wide group-hover:text-secondary flex items-center gap-1 mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
              Why Partner With Us
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HardHat, title: "Deep Experience", desc: "Over a decade of navigating complex Nigerian terrain and logistics." },
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "We never cut corners. Materials and execution meet global standards." },
              { icon: Clock, title: "Timely Delivery", desc: "Rigorous project management ensures we hit our deadlines." },
              { icon: Building2, title: "Safety First", desc: "Zero-tolerance policy for safety violations on all our sites." }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-100 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-2 bg-slate-50 rounded-full z-0" />
                    <feature.icon className="w-8 h-8 text-primary relative z-10" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#006400] border-b-4 border-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Contact us today to discuss your next major infrastructure project.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold hover:bg-white hover:text-[#006400] transition-colors shadow-lg rounded-sm text-lg"
            >
              Get a Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
