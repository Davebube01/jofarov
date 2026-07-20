import { FadeIn } from "@/components/ui/fade-in";

import { 
  Building2, 
  MapPin, 
  Compass, 
  Truck, 
  HardHat, 
  ShieldCheck,
  Hammer,
  Wrench,
  Cog,
  PenTool,
  Drill,
  ArrowRight,
  Link
} from "lucide-react";
import s1 from "../../../public/attached/service-1.jpg";
import s2 from "../../../public/attached/service-2.jpg";
import s3 from "../../../public/attached/service-3.jpg";
import s4 from "../../../public/attached/service-4.jpg";
import s5 from "../../../public/attached/service-5.jpg";
import s6 from "../../../public/attached/service-6.jpg";
import servicesHeroImg from "../../../public/attached/services-hero.jpg";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "building",
      title: "Building Construction",
      icon: Building2,
      img: s1,
      desc: "Comprehensive building construction for residential, commercial, and industrial purposes. From foundation to finish, we deliver structures that stand as landmarks.",
      features: ["High-rise Commercial Towers", "Luxury Residential Estates", "Industrial Warehousing", "Institutional Facilities"]
    },
    {
      id: "roads",
      title: "Road Construction & Rehab",
      icon: MapPin,
      img: s2,
      desc: "Robust road infrastructure designed to withstand heavy Nigerian traffic and extreme weather conditions. We connect communities and boost economies.",
      features: ["Inter-state Highways", "Urban Road Networks", "Asphalt Overlays", "Drainage Systems"]
    },
    {
      id: "civil",
      title: "Civil Engineering Works",
      icon: Compass,
      img: s3,
      desc: "Complex civil engineering solutions that form the backbone of modern society. We tackle challenging terrains and massive structural demands.",
      features: ["Bridge Construction", "Box Culverts", "Earthworks & Excavation", "Retaining Walls"]
    },
    {
      id: "procurement",
      title: "Procurement & Supplies",
      icon: Truck,
      img: s4,
      desc: "Reliable sourcing and supply of premium construction materials and heavy machinery. We ensure supply chain continuity for massive projects.",
      features: ["Heavy Equipment Sourcing", "Bulk Material Supply", "Logistics Management", "Quality Assurance Testing"]
    },
    {
      id: "management",
      title: "Project Management",
      icon: HardHat,
      img: s5,
      desc: "End-to-end project oversight. We ensure that complex builds are delivered on schedule, within budget, and to exact specifications.",
      features: ["Feasibility Studies", "Cost Estimation & Control", "Site Supervision", "Risk Management"]
    },
    {
      id: "maintenance",
      title: "Maintenance & Rehab",
      icon: ShieldCheck,
      img: s6,
      desc: "Extending the lifespan of vital infrastructure through systematic maintenance, repair, and comprehensive rehabilitation programs.",
      features: ["Structural Reinforcement", "Pothole Patching", "Facility Upgrades", "Preventive Maintenance"]
    }
  ];

  const equipment = [
    { name: "Excavators", icon: Wrench },
    { name: "Bulldozers", icon: Hammer },
    { name: "Cranes", icon: Cog },
    { name: "Pavers", icon: PenTool },
    { name: "Compactors", icon: Drill },
    { name: "Concrete Mixers", icon: Truck }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-secondary py-32 relative overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHeroImg.src})` }}
        />
        <div className="absolute inset-0 z-10 bg-slate-900/70" />
        <div className="container mx-auto px-4 relative z-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
              Delivering heavy civil infrastructure and world-class construction across Nigeria.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-32">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="w-full lg:w-1/2">
                <FadeIn direction={idx % 2 === 1 ? "left" : "right"}>
                  <div className="relative group rounded-sm overflow-hidden shadow-2xl">
                    <Image
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn direction={idx % 2 === 1 ? "right" : "left"}>
                  <div className="inline-flex items-center justify-center p-3 bg-green-50 text-primary rounded-sm mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span className="font-medium text-slate-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Fleet */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Heavy Equipment Fleet
            </h2>
            <p className="text-slate-400 text-lg">
              We own and operate a massive, state-of-the-art fleet capable of handling the most demanding engineering projects simultaneously.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {equipment.map((eq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-slate-800/50 hover:bg-primary/20 border border-slate-700 hover:border-primary/50 transition-all p-6 rounded-sm flex flex-col items-center justify-center text-center group h-full">
                  <eq.icon className="w-10 h-10 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                  <span className="font-medium text-sm tracking-wide">{eq.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center border-t border-slate-200">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Our engineering team is ready to analyze your requirements and provide a comprehensive execution strategy.
            </p>
            <Link
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold hover:bg-secondary transition-colors shadow-lg rounded-sm text-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
