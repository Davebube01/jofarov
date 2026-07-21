import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2, Target, Eye, Shield, Award, Lightbulb, Users, Leaf } from "lucide-react";
import aboutHeroImg from "../../../public/attached/headquarters.jpg";
import team1 from "../../../public/attached/team-1.jpg";
import team2 from "../../../public/attached/team-2.jpg";
import team3 from "../../../public/attached/team-3.jpg";
import aboutHeaderBg from "../../../public/attached/about-header-bg.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-secondary py-32 relative overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeaderBg.src})` }}
        />
        <div className="absolute inset-0 z-10 bg-slate-900/70" />
        <div className="container mx-auto px-4 relative z-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              About Jofarov Synergy Ltd
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
              Nigeria's trusted partner for heavy construction and civil engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <Image
                  src={aboutHeroImg} 
                  alt="Jofarov Synergy Headquarters" 
                  className="w-full h-auto rounded-sm shadow-2xl"
                />
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Building with Purpose, Precision, and Power.
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Founded in 2016 by Hon. Jafaru Shaibu, Jofarov Synergy Ltd has grown into one of Abuja's most reliable construction companies. We specialize in building construction, road rehabilitation, civil engineering, and project management — delivering every project with precision and integrity.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  From residential builds to major infrastructure projects across FCT, our team of 50+ skilled professionals brings expertise, modern equipment, and a commitment to quality that sets us apart.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="text-3xl font-bold font-heading text-secondary mb-1">10+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Active</div>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <div className="text-3xl font-bold font-heading text-secondary mb-1">50+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Workforce</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 md:p-12 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary rounded-sm h-full flex flex-col items-start">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To deliver world-class construction services across Nigeria with absolute integrity, precision, and a relentless commitment to quality and safety.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-10 md:p-12 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-secondary rounded-sm h-full flex flex-col items-start">
                <Eye className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To be Nigeria's most trusted infrastructure partner, shaping the built environment for generations and pioneering sustainable construction methods.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The foundational principles that guide every decision, every project, and every interaction.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest, transparent dealings with clients and partners at all times." },
              { icon: Award, title: "Excellence", desc: "A commitment to delivering superior quality that exceeds expectations." },
              { icon: Lightbulb, title: "Innovation", desc: "Embracing modern engineering techniques and technology." },
              { icon: CheckCircle2, title: "Safety", desc: "Uncompromising safety standards to protect our workforce and the public." },
              { icon: Users, title: "Community", desc: "Engaging and uplifting the communities in which we operate." },
              { icon: Leaf, title: "Sustainability", desc: "Environmentally responsible construction practices." }
            ].map((val, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-sm border border-slate-100 h-full  hover:bg-secondary transition">
                  <div className="shrink-0 mt-1">
                    <val.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-2 text-foreground">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      {/* <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                The Minds Behind the Concrete
              </h2>
              <p className="text-slate-300 text-lg">
                Our team comprises highly experienced engineers, architects, project managers, and skilled artisans who bring decades of combined experience to every site.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: team1, name: "Engr. Abubakar Musa", title: "Chief Operations Officer" },
              { img: team2, name: "Engr. Fatima Olayinka", title: "Lead Structural Engineer" },
              { img: team3, name: "Mr. Chukwudi Eze", title: "Project Director" }
            ].map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="group relative overflow-hidden rounded-sm">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="text-xl font-bold font-heading text-white">{member.name}</h4>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
