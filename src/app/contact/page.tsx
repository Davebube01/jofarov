"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from ".././../components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import contactHeroImg from "../../../public/attached/contact-hero.jpg";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Form submitted:", data);

    toast("Message Sent Successfully", {
      description: "Our team will get back to you within 24 business hours.",
    });

    form.reset();
  }

  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-secondary py-32 relative overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroImg.src})` }}
        />
        <div className="absolute inset-0 z-10 bg-slate-900/70" />
        <div className="container mx-auto px-4 relative z-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
              We are ready to partner on your next major infrastructure project.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Contact Info */}
            <div className="w-full flex lg:w-5/12 space-y-8">
              <FadeIn>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Head Office
                      </h4>
                      <p className="text-slate-600">
                        Wing G 2nd floor Bassan Plaza beside National Library
                        CBA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Phone Numbers
                      </h4>
                      <p className="text-slate-600">+234 806 906 6658</p>
                      <p className="text-slate-600">+234 708 782 1040</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Email Address
                      </h4>
                      <p className="text-slate-600">contact@jafarov.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Working Hours
                      </h4>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-slate-600">
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>


              </FadeIn>
            </div>

            {/* Right: Embedded Map */}
            <div className="w-full lg:w-7/12">
              <FadeIn delay={0.2} className="h-full">
                <div className="w-full h-full min-h-[450px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-t-primary border-x border-b border-slate-200">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Bassan%20Plaza%20beside%20National%20Library%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </FadeIn>
            </div>

            {/* Right: Contact Form */}
            {/* <div className="w-full lg:w-7/12">
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-t-primary rounded-xl relative overflow-hidden z-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -z-10" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-slate-700">
                                Full Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-slate-700">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@company.com"
                                  className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-slate-700">
                                Phone Number (Optional)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+234 XXX XXXX"
                                  className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-semibold text-slate-700">
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Project Inquiry"
                                  className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-semibold text-slate-700">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or inquiry..."
                                className="min-h-[160px] bg-slate-50 border-slate-200 focus-visible:ring-primary resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg font-bold bg-primary hover:bg-secondary transition-colors text-white mt-4"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </FadeIn>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
