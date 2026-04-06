"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, ShoppingBag, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";

const featured = [
  {
    title: "New Season",
    subtitle: "Elegant silhouettes with a soft luxury feel.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Minimal Tailoring",
    subtitle: "Clean lines, refined structure, premium presence.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Evening Icons",
    subtitle: "Polished pieces designed for statement moments.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
  }
];

const collections = [
  "Luxury Dresses",
  "Premium Outerwear",
  "Signature Accessories",
  "Exclusive Edit"
];

const stats = [
  ["12K+", "Happy clients"],
  ["2026", "New visual revamp"],
  ["4.9/5", "Boutique rating"]
];

export default function Page() {
  return (
    <main className="min-h-screen bg-sand-100 text-ink-900">
      <section className="relative overflow-hidden">
        <div className="bg-luxury absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-6 lg:grid-cols-[180px_1fr] lg:px-10">
          <aside className="flex items-center justify-between lg:min-h-[92vh] lg:flex-col lg:justify-between lg:py-4">
            <div className="text-2xl font-semibold tracking-[0.3em]">GLOBITEX</div>
            <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-[#7c6758] lg:flex lg:flex-col lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]">
              <a href="#home">Home</a>
              <a href="#collection">Collection</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="hidden text-xs uppercase tracking-[0.25em] text-[#9b8576] lg:block">
              Luxury House
            </div>
          </aside>

          <div className="rounded-[2rem] border border-white/60 bg-white/55 p-4 shadow-[0_20px_80px_rgba(110,84,60,0.12)] backdrop-blur-xl sm:p-6 lg:p-8">
            <Navbar />

            <section id="home" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="py-4 lg:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="inline-flex rounded-full border border-sand-400 bg-sand-50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#8b7463]"
                >
                  Railway Ready Luxury Website
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  className="mt-6 max-w-xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
                >
                  Beautiful, soft, premium UI inspired by luxury fashion brands.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mt-6 max-w-lg text-base leading-8 text-[#6f5c50] sm:text-lg"
                >
                  This version is built for Railway deployment with a more elegant, editorial,
                  and expensive-looking interface for your brand presentation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#collection"
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#7f675533] transition hover:-translate-y-0.5"
                  >
                    Explore Collection
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full border border-sand-400 bg-white/70 px-6 py-3 text-sm font-medium text-[#5e4c40] transition hover:bg-white"
                  >
                    Discover Brand Story
                  </a>
                </motion.div>

                <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                  {stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm"
                    >
                      <div className="text-2xl font-semibold">{value}</div>
                      <div className="mt-1 text-sm text-[#7b6658]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -left-6 top-10 hidden h-36 w-36 rounded-full bg-white/50 blur-2xl lg:block" />
                <div className="absolute -bottom-6 right-8 hidden h-28 w-28 rounded-full bg-[#e3cbb7]/70 blur-2xl lg:block" />
                <div className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#ead9c9] p-3 shadow-luxe">
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
                    alt="Luxury fashion hero"
                    width={1400}
                    height={1600}
                    className="h-[560px] w-full rounded-[1.7rem] object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-5 left-5 max-w-[260px] rounded-[1.5rem] border border-white/70 bg-white/75 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-sm text-[#7d6658]">
                    <Star className="h-4 w-4 fill-current" />
                    Signature lookbook
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#5f4f45]">
                    Luxe editorial layout with soft elegance, suitable for fashion, jewelry,
                    beauty, or premium lifestyle brands.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#927d6d]">
              Featured Collection
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Designed with a beautiful boutique mood.
            </h2>
          </div>
          <div className="max-w-md text-sm leading-7 text-[#786458]">
            Big imagery, breathing space, layered cards, and elegant typography.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-soft backdrop-blur"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={1500}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-2xl font-medium">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-[#786559]">{item.subtitle}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#4f3e34]">
                  View edit <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-8 shadow-soft">
            <div className="text-sm uppercase tracking-[0.28em] text-[#947c6b]">
              Brand Direction
            </div>
            <h3 className="mt-4 text-3xl font-semibold">
              Soft luxury, fashion-forward, and visually expensive.
            </h3>
            <p className="mt-5 text-sm leading-8 text-[#746154]">
              The UI is intentionally built with creamy beige gradients, premium card depth,
              oversized type, and strong image-first storytelling.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {collections.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] bg-sand-50 px-4 py-4 text-sm text-[#5d4c40] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-[#2d221b] p-8 text-white shadow-[0_18px_60px_rgba(70,50,36,0.18)]">
              <div className="text-sm uppercase tracking-[0.28em] text-white/60">
                Aesthetic Focus
              </div>
              <p className="mt-5 text-2xl leading-10">
                Elegant composition, editorial mood, clean sections, and luxury product presentation.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-soft">
              <div className="text-sm uppercase tracking-[0.28em] text-[#947c6b]">
                Social Proof
              </div>
              <p className="mt-5 text-2xl leading-10 text-[#342821]">
                Perfect for brands that want a more feminine, premium, and memorable first impression.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#6f5b4f]">
                <Instagram className="h-4 w-4" />
                Instagram-friendly design language
              </div>
            </div>
            <div className="sm:col-span-2 rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#fdf8f3_0%,#f2e3d7_100%)] p-8 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-[#947c6b]">Next Step</div>
                  <h4 className="mt-3 text-3xl font-semibold">Ready to turn your site into this style?</h4>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white shadow-lg"
                >
                  Start redesign
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/60 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#947c6b]">Contact</div>
              <h3 className="mt-3 text-4xl font-semibold">Luxury boutique web direction for Railway.</h3>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#6e5b50]">
                This demo keeps the premium visual language while staying simple to deploy.
                Replace the texts, product images, and CTA links with your real brand content.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6e5b50]">
                <div className="rounded-full border border-sand-400 px-4 py-2">Fashion UI</div>
                <div className="rounded-full border border-sand-400 px-4 py-2">Editorial Layout</div>
                <div className="rounded-full border border-sand-400 px-4 py-2">Luxury Aesthetic</div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-soft">
              <div className="mb-4 flex items-center gap-3 text-sm text-[#6e5b50]">
                <ShoppingBag className="h-4 w-4" />
                Inquiry form
              </div>
              <div className="space-y-4">
                <input
                  className="w-full rounded-[1rem] border border-sand-400 bg-white px-4 py-3 outline-none"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-[1rem] border border-sand-400 bg-white px-4 py-3 outline-none"
                  placeholder="Email address"
                />
                <input
                  className="w-full rounded-[1rem] border border-sand-400 bg-white px-4 py-3 outline-none"
                  placeholder="WhatsApp / Phone"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-[1rem] border border-sand-400 bg-white px-4 py-3 outline-none"
                  placeholder="Tell us about your brand"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white"
                >
                  Submit inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
