"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["Home", "About", "Services", "Portfolio", "Case Studies", "Blog", "Hiring"];

const achievements = [
  { label: "Projects Completed", value: 150 },
  { label: "Years Experience", value: 8 },
  { label: "Team Members", value: 16 },
  { label: "Happy Clients", value: 40 },
];

const features = [
  {
    title: "AI & Automation Solutions",
    description:
      "Boost productivity with AI agents, chatbots, workflow automation, n8n, HubSpot, and GoHighLevel solutions.",
    icon: "🤖",
  },
  {
    title: "Custom Software Development",
    description: "Build scalable, secure, and business-focused software tailored to business goals.",
    icon: "🧩",
  },
  {
    title: "Web & Mobile Development",
    description: "Create responsive websites and feature-rich mobile applications.",
    icon: "📱",
  },
  {
    title: "SEO & Digital Growth",
    description: "Increase visibility and generate leads through SEO, social media, optimization, and PPC.",
    icon: "📈",
  },
  {
    title: "Trusted Technology Partner",
    description: "Our experienced team combines innovation, expertise, and a client-focused approach.",
    icon: "🤝",
  },
];

const services = [
  {
    title: "Frontend Development",
    description: "Modern, interactive interfaces built for performance and accessibility.",
    icon: "🖥️",
  },
  {
    title: "Backend Development",
    description: "Robust backend systems designed for scalability, security, and reliability.",
    icon: "⚙️",
  },
  {
    title: "AI Automation Solutions",
    description: "Automate workflows and build intelligent systems that accelerate business outcomes.",
    icon: "🚀",
  },
  {
    title: "Web Design & Development",
    description: "Premium digital experiences with strategic brand-led design and responsive UX.",
    icon: "🎨",
  },
  {
    title: "Custom Software Development",
    description: "Tailored software, ERP/CRM solutions, and SaaS platforms aligned with your vision.",
    icon: "🧠",
  },
  {
    title: "Search Engine Optimization",
    description: "Drive growth with SEO, content strategy, and search visibility optimization.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    description: "Build brand authority and generate leads through targeted digital campaigns.",
    icon: "📣",
  },
  {
    title: "Website Performance Optimization",
    description: "Speed, reliability, and conversion-focused experience tuning for web platforms.",
    icon: "⚡",
  },
  {
    title: "Pay Per Click Advertising",
    description: "High-impact paid campaigns designed to capture leads and maximize ROI.",
    icon: "💼",
  },
];

const projects = [
  {
    title: "AI-Powered Enterprise SaaS",
    description: "A scalable AI platform delivering workflow automation and deep analytics.",
  },
  {
    title: "Custom ERP & CRM Suite",
    description: "A secure business system built for process efficiency and long-term growth.",
  },
  {
    title: "Ecommerce Transformation",
    description: "Premium online storefronts built for performance and conversion.",
  },
];

const testimonials = [
  {
    name: "Rohan Patel",
    company: "Global Logistics",
    quote:
      "Teqto Infotech delivered a high-performing product with a strategic, AI-first approach.",
    rating: 5,
  },
  {
    name: "Ayesha Sharma",
    company: "Fintech Ventures",
    quote:
      "Their team modernized our platform with speed, security, and enterprise polish.",
    rating: 5,
  },
  {
    name: "Nikhil Desai",
    company: "Retail Growth",
    quote:
      "A thoughtful digital partner who made our transformation roadmap feel effortless.",
    rating: 5,
  },
];

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote / India",
    description: "Lead modern front-end projects using React, Next.js, and design systems.",
  },
  {
    title: "AI Automation Engineer",
    location: "Remote / Hybrid",
    description: "Build intelligent automation solutions with AI, APIs, and process orchestration.",
  },
  {
    title: "Growth Marketing Specialist",
    location: "Remote",
    description: "Drive digital growth with SEO, PPC, and performance-driven campaigns.",
  },
];

export default function Homepage() {
  const [activeProject, setActiveProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [counterValues, setCounterValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-animate]");

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    const counters = document.querySelectorAll<HTMLElement>("[data-counter]");

    counters.forEach((counter, index) => {
      const target = Number(counter.dataset.target || 0);
      ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
          gsap.to(counterValues, {
            [index]: target,
            duration: 1.8,
            ease: "power1.out",
            onUpdate: () => setCounterValues([...counterValues]),
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [counterValues]);

  useEffect(() => {
    const projectTimer = setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5000);
    return () => clearInterval(projectTimer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#05070D] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(70,197,196,0.16),_transparent_38%)] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-[#0E5C63]/25 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[320px] w-[320px] rounded-full bg-[#9FC5C2]/10 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-transparent px-6 py-5 backdrop-blur-xl transition-all duration-500 sm:px-8">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-xl">
              <span className="text-lg font-semibold text-[#7DE5E5]">T</span>
              <span className="text-lg font-semibold text-[#7DE5E5]">T</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7DE5E5]/80">Teqto Infotech</p>
              <p className="text-sm text-white/80">Digital Transformation Partner</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden rounded-full border border-[#7DE5E5]/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#7DE5E5]/60 hover:bg-[#7DE5E5]/10 md:inline-flex">
            Book Consultation
          </button>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-[88px] z-40 rounded-b-3xl border border-white/10 bg-[#06080E]/95 px-6 py-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="rounded-3xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
                  {item}
                </a>
              ))}
              <button className="mt-3 rounded-full bg-[#7DE5E5] px-5 py-3 text-sm font-semibold text-[#051517] transition hover:bg-[#8EEEE9]">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative mx-auto flex min-h-screen max-w-[1360px] flex-col gap-24 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        <section id="home" className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#08101F]/90 px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.24)] sm:px-10 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,229,229,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(137,223,221,0.1),_transparent_24%)]" />
          <div className="absolute top-10 right-6 h-20 w-20 rounded-full bg-[#7DE5E5]/15 blur-3xl" />
          <div className="absolute left-0 top-1/2 h-[260px] w-[260px] rounded-full bg-[#0E5C63]/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <span className="mb-6 inline-flex rounded-full border border-[#7DE5E5]/20 bg-[#7DE5E5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.36em] text-[#7DE5E5]">
                  Enterprise AI & Software
                </span>
                <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                  Transform Your Business with Innovative Technology Solutions
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Teqto Infotech is a trusted software development company helping startups, SMEs, and enterprises build scalable digital solutions. We specialize in AI development, custom software development, web development, mobile app development, SaaS applications, ERP/CRM systems, and eCommerce solutions.
                </p>
                <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                  Our team combines technology expertise, innovation, and business understanding to deliver secure, high-performing, and future-ready solutions that help businesses grow faster.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#7DE5E5] px-7 py-4 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">
                    Get In Touch
                  </a>
                  <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7DE5E5]/40 hover:bg-white/10">
                    Let's Build Something Great Together
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F1A2B]/90 p-6 shadow-[0_36px_110px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,229,229,0.12),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)]" />
              <div className="relative rounded-[32px] border border-white/10 bg-[#0E172A]/90 p-6 sm:p-8">
                <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-[#7DE5E5]/15 blur-3xl" />
                <div className="absolute left-8 top-20 h-16 w-16 rounded-full border border-[#7DE5E5]/15" />
                <div className="absolute bottom-10 right-12 h-24 w-24 rounded-full border border-[#7DE5E5]/10" />
                <div className="grid gap-6">
                  <div className="rounded-[28px] border border-white/10 bg-[#0E1B2E]/80 p-6 shadow-[0_24px_55px_rgba(5,16,28,0.45)] backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="inline-flex rounded-2xl bg-[#7DE5E5]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#7DE5E5]">
                          AI</div>
                        <p className="mt-4 text-lg font-semibold text-white">Futuristic data model</p>
                        <p className="mt-3 text-sm text-white/60">Secure architecture, intelligent pipelines, and predictive insights.</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#ffffff]/10 backdrop-blur-xl">
                        <span className="text-xl">⟐</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border border-white/10 bg-[#0E1B2E]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7DE5E5]">Abstract Systems</p>
                      <p className="mt-3 text-sm text-white/60">Floating tech nodes, secure APIs, and strategic integrations.</p>
                    </div>
                    <div className="rounded-[28px] border border-white/10 bg-[#0E1B2E]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7DE5E5]">Enterprise Scale</p>
                      <p className="mt-3 text-sm text-white/60">Designed for long-term growth, compliance, and high-performance delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" data-animate className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#09111F]/90 p-8 shadow-[0_28px_65px_rgba(0,0,0,0.18)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Why Choose Teqto Infotech?</p>
            <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">With 8+ Years of Experience, Teqto Infotech is a trusted Software Development Company delivering innovative technology solutions for startups, SMEs, and enterprises.</h2>
            <p className="mt-6 text-base leading-8 text-white/70">We combine deep technology expertise, AI-first strategy, and an enterprise-grade delivery model to transform digital products and drive revenue growth.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0D1624]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30 hover:bg-[#112030]/95">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#7DE5E5]/10 text-2xl transition duration-300 group-hover:bg-[#7DE5E5]/20">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {achievements.map((achievement, index) => (
              <motion.div key={achievement.label} className="rounded-[32px] border border-white/10 bg-[#09111F]/90 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.7 }}>
                <p className="text-5xl font-semibold text-white">{counterValues[index].toFixed(0)}{achievement.label === "Years Experience" ? "+" : "+"}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" data-animate className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Our Services</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium services for modern businesses and emerging products.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1624]/90 p-7 shadow-[0_30px_65px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30 hover:bg-[#112030]/95" whileHover={{ scale: 1.01 }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#7DE5E5]/10 text-2xl transition duration-300 group-hover:bg-[#7DE5E5]/20">{service.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7DE5E5] transition group-hover:text-[#96f5f0]">
                  Learn More <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" data-animate className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Featured Projects</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Projects that showcase strategy, design, and technical excellence.</h2>
            </div>
            <button className="inline-flex items-center rounded-full border border-[#7DE5E5]/20 bg-[#0F1A2C]/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#7DE5E5]/40 hover:bg-[#112031]/95">
              View All Projects
            </button>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#09111F]/90 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.45fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#0F1A2C]/90 p-8">
                <div className="mb-8 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#7DE5E5]/10 text-2xl">🧠</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#7DE5E5]/80">Project Spotlight</p>
                    <p className="mt-2 text-xs text-white/60">Smart systems for ambitious growth</p>
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-white">{projects[activeProject].title}</h3>
                <p className="mt-5 text-base leading-8 text-white/70">{projects[activeProject].description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#7DE5E5] px-5 py-3 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">View Project</button>
                  <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore More</button>
                </div>
              </div>
              <div className="grid gap-4">
                {[0, 1, 2].map((index) => (
                  <button key={index} type="button" onClick={() => setActiveProject(index)} className={`rounded-[28px] border p-6 text-left transition duration-300 ${activeProject === index ? "border-[#7DE5E5]/60 bg-[#142535]/95" : "border-white/10 bg-[#101B2D]/90 hover:border-[#7DE5E5]/30 hover:bg-[#112031]/95"}`}>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#7DE5E5]/70">Case Study {index + 1}</p>
                    <p className="mt-4 text-lg font-semibold text-white">{projects[index].title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" data-animate className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#09131F]/90 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">About Teqto Infotech</p>
            <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">Transforming Businesses Through Technology</h2>
            <p className="mt-6 text-base leading-8 text-white/70">Teqto Infotech is a leading Software Development Company with 8+ years of experience delivering innovative digital solutions worldwide.</p>
            <div className="mt-8 space-y-4">
              {[
                "AI Automation Expertise",
                "Frontend & Backend Development",
                "Web Design & Development",
                "SEO & Digital Marketing",
                "Customer Focused Approach",
              ].map((highlight) => (
                <div key={highlight} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#0F1723]/90 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7DE5E5]/10 text-lg">✓</span>
                  <p className="text-sm font-medium text-white/80">{highlight}</p>
                </div>
              ))}
            </div>
            <button className="mt-10 inline-flex items-center rounded-full bg-[#7DE5E5] px-7 py-4 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">
              Learn More
            </button>
          </div>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} className="rounded-[32px] border border-white/10 bg-[#0D1624]/90 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30" whileHover={{ scale: 1.01 }}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#7DE5E5]/10 text-2xl">👤</div>
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/50">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm leading-7 text-white/70">“{testimonial.quote}”</p>
                  <p className="text-sm text-[#7DE5E5]">{Array.from({ length: testimonial.rating }).map((_, starIndex) => "★")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="hiring" data-animate className="rounded-[40px] border border-white/10 bg-[#09111F]/95 p-8 shadow-[0_28px_75px_rgba(0,0,0,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Join Our Growing Team</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">We're Hiring Passionate Developers Ready To Build The Future</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">Join a modern engineering team delivering advanced AI, automation, and digital transformation solutions for ambitious clients around the world.</p>
            </div>
            <div className="flex items-center rounded-[28px] border border-white/10 bg-[#0E1B2E]/90 p-8">
              <div>
                <button className="rounded-full bg-[#7DE5E5] px-5 py-3 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">View All Openings</button>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <motion.div key={job.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0D1624]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7DE5E5]/30 hover:bg-[#112031]/95" whileHover={{ scale: 1.01 }}>
                <p className="text-sm uppercase tracking-[0.28em] text-[#7DE5E5]/80">{job.location}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{job.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{job.description}</p>
                <button className="mt-6 rounded-full bg-[#7DE5E5] px-4 py-3 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">Apply Now</button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" data-animate className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#09111F]/95 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Let's Build Your Next Digital Success Story</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Contact our team for a free consultation.</h2>
            <form className="mt-8 space-y-5">
              {[
                { label: "Name", type: "text" },
                { label: "Email", type: "email" },
                { label: "Phone", type: "tel" },
              ].map((field) => (
                <label key={field.label} className="block rounded-3xl border border-white/10 bg-[#0E1725]/90 p-4 text-sm text-white/70 transition focus-within:border-[#7DE5E5]/50">
                  <span className="block mb-2 text-xs uppercase tracking-[0.3em] text-[#7DE5E5]/70">{field.label}</span>
                  <input className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/35" placeholder={`Enter your ${field.label.toLowerCase()}`} type={field.type} />
                </label>
              ))}
              <label className="block rounded-3xl border border-white/10 bg-[#0E1725]/90 p-4 text-sm text-white/70 transition focus-within:border-[#7DE5E5]/50">
                <span className="block mb-2 text-xs uppercase tracking-[0.3em] text-[#7DE5E5]/70">Project Details</span>
                <textarea className="min-h-[140px] w-full resize-none border-none bg-transparent text-sm text-white outline-none placeholder:text-white/35" placeholder="Tell us about your project needs" />
              </label>
              <button className="inline-flex w-full items-center justify-center rounded-full bg-[#7DE5E5] px-6 py-4 text-sm font-semibold text-[#051517] transition hover:bg-[#96f5f0]">
                Book Free Consultation
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#0D1624]/95 p-8 shadow-[0_28px_75px_rgba(0,0,0,0.18)]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Contact Details</p>
              <p className="mt-4 text-2xl font-semibold text-white">Get in touch with our team</p>
            </div>
            <div className="space-y-4 rounded-[28px] bg-[#08101D]/80 p-6">
              <div>
                <p className="text-sm text-white/60">Address</p>
                <p className="mt-2 text-sm text-white/80">619 - RK Prime, 6th Floor, 150ft Ring Road, Nana Mava Circle, Rajkot - 360005, Gujarat, India</p>
              </div>
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="mt-2 text-sm text-white/80">+91 12345 67890</p>
              </div>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="mt-2 text-sm text-white/80">info@teqtoinfotech.com</p>
              </div>
              <div>
                <p className="text-sm text-white/60">Business Hours</p>
                <p className="mt-2 text-sm text-white/80">Mon - Fri: 10 AM to 7:30 PM</p>
              </div>
            </div>
            <div className="grid gap-3 rounded-[28px] bg-[#08101D]/80 p-6">
              {[
                { label: "LinkedIn", url: "#" },
                { label: "Twitter", url: "#" },
                { label: "Facebook", url: "#" },
              ].map((social) => (
                <a key={social.label} href={social.url} className="inline-flex items-center justify-between rounded-3xl border border-white/10 bg-[#0F1A2C]/90 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-[#7DE5E5]/30 hover:text-white">
                  <span>{social.label}</span>
                  <span>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05070D]/95 py-12 text-white/70">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-10 px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_0.7fr_0.7fr_0.7fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#7DE5E5]/10 text-lg text-[#7DE5E5]">T</div>
                <div>
                  <p className="text-lg font-semibold text-white">Teqto Infotech</p>
                  <p className="text-sm text-white/60">Trusted technology partner for AI, automation, and enterprise software.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li><a href="#about" className="transition hover:text-white">About</a></li>
                <li><a href="#services" className="transition hover:text-white">Services</a></li>
                <li><a href="#portfolio" className="transition hover:text-white">Portfolio</a></li>
                <li><a href="#blog" className="transition hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Services</p>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li><a href="#services" className="transition hover:text-white">AI Automation</a></li>
                <li><a href="#services" className="transition hover:text-white">Custom Software</a></li>
                <li><a href="#services" className="transition hover:text-white">Web & Mobile</a></li>
                <li><a href="#services" className="transition hover:text-white">SEO & Growth</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7DE5E5]/80">Resources</p>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
                <li><a href="#hiring" className="transition hover:text-white">Careers</a></li>
                <li><a href="#" className="transition hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="transition hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Teqto Infotech. All Rights Reserved.</p>
            <p>Made for modern enterprises with premium AI and software services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
