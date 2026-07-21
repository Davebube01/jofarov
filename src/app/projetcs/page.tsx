"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Pickaxe, Route, Droplets, GraduationCap, CheckCircle2 } from "lucide-react";
import projectsHeroImg from "../../../public/attached/projects-hero.png";

const projects = [
  {
    title: "Mining Operations",
    description: "Extensive mining operations and mineral extraction with a strong focus on sustainable practices and community development. We leverage modern machinery to maximize yield while minimizing environmental impact.",
    icon: Pickaxe,
    features: ["Mineral Extraction", "Site Assessment", "Sustainable Operations"],
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Road Construction & Rehabilitation",
    description: "Major road constructions and rehabilitation projects across Niger State. We build durable, high-quality infrastructure that stands the test of time, improving connectivity and boosting local economies.",
    icon: Route,
    features: ["Highway Construction", "Urban Road Rehabilitation", "Drainage Systems"],
    color: "from-slate-600 to-slate-900",
    image: "/attached/road.jpg"
  },
  {
    title: "Water Resource Management",
    description: "Providing sustainable water resource management and supply solutions. We are a primary contractor in the delivery of borehole and water reservation systems. Our experience over the years working for government establishments has informed our approach to conducting our business with more success.",
    icon: Droplets,
    features: ["Borehole Drilling", "Water Reservation Systems", "Sustainable Supply"],
    color: "from-blue-500 to-cyan-600",
    image: "/attached/water.jpg"
  },
  {
    title: "Training & Empowerment",
    description: "Comprehensive training and empowerment services for private and government establishments. Our team of industry experts and facilitators are the best around because our focus is on making sure that the beneficiaries enjoy the best learning experience possible to achieve the set goals.",
    icon: GraduationCap,
    features: ["Skill Acquisition", "Expert Facilitation", "Capacity Building"],
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-secondary py-32 relative overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${projectsHeroImg.src})` }}
        />
        <div className="absolute inset-0 z-10 bg-slate-900/70" />
        <div className="container mx-auto px-4 relative z-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
              Our Projects & Expertise
            </h1>
            <p className="text-slate-300 text-lg md:text-2xl max-w-3xl leading-relaxed">
              Delivering excellence across construction, infrastructure, resource management, and human capital development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                What We Do Best
              </h3>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  {/* Card Header with Image & Gradient Overlay */}
                  <div className="relative overflow-hidden h-64">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    
                    {/* Header Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <div className="absolute top-0 right-0 p-6 opacity-30 transform group-hover:scale-110 transition-transform duration-500">
                        <project.icon className="w-24 h-24 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-lg">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your next big project?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto">
              We have the expertise and the resources to deliver exceptional results. Let's build something great together.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-primary rounded-md shadow-lg hover:bg-slate-100 transition-colors">
              Contact Us Today
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
