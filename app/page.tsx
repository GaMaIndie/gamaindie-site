"use client";

import React from "react";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CloudOff,
  CreditCard,
  Download,
  FileText,
  Store,
  Rocket,
  Mail,
  Globe,
  CheckCircle2,
} from "lucide-react";

const LinkedInMark = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05C11.91 8.97 13.86 8 16.35 8 21.54 8 22.5 11.42 22.5 15.86V24h-4v-7.11c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24h-4V8z" />
  </svg>
);

const InstagramMark = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const products = [
  {
    title: "BillAstra for Windows",
    status: "Available Now",
    desc: "Offline invoice & quotation generator built for practical business work on Windows.",
    cta: "Get BillAstra",
    href: "https://gamaindie.gumroad.com/l/billastra",
  },
  {
    title: "BillAstra for Mobile",
    status: "Coming Soon",
    desc: "A simpler mobile experience for creating invoices and quotations on the go.",
    cta: "Coming Soon",
    href: "#projects",
  },
  {
    title: "Expense Tools",
    status: "Coming Soon",
    desc: "Simple utilities to help small businesses track and organize daily spending.",
    cta: "In Progress",
    href: "#projects",
  },
];

const heroBrandTags = [
  "Simple tools",
  "Easy to use",
  "Built for small businesses",
  "Clean workflows",
];

const billAstraFeatures = [
  "Invoice & Quotation",
  "Offline Use",
  "GST Ready",
  "One-Time Purchase",
  "Windows App",
];

const billAstraFeatureStrip = [
  { icon: CloudOff, title: "No Cloud Required" },
  { icon: CreditCard, title: "One-Time License Fee" },
  { icon: Store, title: "Small Business Friendly" },
  { icon: FileText, title: "Clean PDFs" },
];

const whyUsItems = [
  {
    title: "Works Offline",
    desc: "No cloud dependency. Your data stays on your system.",
  },
  {
    title: "Simple Pricing",
    desc: "One-time purchase. No subscriptions.",
  },
  {
    title: "Small Business Friendly",
    desc: "Built for freelancers, shops, and service businesses.",
  },
  {
    title: "Professional Output",
    desc: "Clean invoices and documents ready for business use.",
  },
];

const upcomingItems = [
  "BillAstra for Mobile",
  "Expense tracking utilities",
  "Business helper apps",
  "More offline-first products",
];

const howItWorks = [
  {
    step: "01",
    title: "Enter Business & Customer Details",
    desc: "Add your business profile, customer information, and invoice basics in a simple form.",
  },
  {
    step: "02",
    title: "Add Items & GST",
    desc: "Quickly add products or services, set quantity and price, and apply GST when needed.",
  },
  {
    step: "03",
    title: "Download Professional PDF",
    desc: "Generate a clean invoice or quotation PDF that is ready to share or print.",
  },
];

export default function GaMaIndieHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-50 border-b border-[#E2F3FA]/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-0">
            <img
              src="/logo/gama-logo.png"
              alt="GaMa Indie logo"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              
              <p className="text-xl font-semibold">
                <span className="text-[#2DA6D9]">GaMa</span>
                <span className="text-slate-700">Indie</span>
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#products" className="transition hover:text-[#2DA6D9]">Products</a>
            <a href="#why-us" className="transition hover:text-[#2DA6D9]">Why Us</a>
            <a href="#projects" className="transition hover:text-[#2DA6D9]">Upcoming</a>
            <a href="#about" className="transition hover:text-[#2DA6D9]">About</a>
            <a href="#contact" className="transition hover:text-[#2DA6D9]">Contact</a>
          </nav>

          <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer">
            <Button className="rounded-2xl bg-[#2DA6D9] px-5 hover:bg-[#2498C7]">
              Buy BillAstra
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,166,217,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(45,166,217,0.10),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <Badge className="mb-5 rounded-full bg-[#ECFEFF] px-4 py-1 text-[#2DA6D9] hover:bg-[#ECFEFF]">
                Independent Software Studio
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Simple software.<br /><span className="text-[#2DA6D9]">Built for real work.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                GaMa Indie builds focused tools for billing, documents, and daily operations—fast to learn, reliable to use, and designed for real workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#products">
                  <Button size="lg" className="rounded-2xl bg-[#2DA6D9] px-6 hover:bg-[#2498C7]">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="rounded-2xl border-slate-300 px-6">
                    <Download className="mr-2 h-4 w-4" /> Get BillAstra
                  </Button>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {heroBrandTags.map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-[#E2F3FA] bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                    <CheckCircle2 className="h-4 w-4 text-[#2DA6D9]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="rounded-[2rem] border border-[#E2F3FA] bg-white p-5 shadow-[0_24px_60px_rgba(2,132,199,0.14)] shadow-slate-200/60 ring-1 ring-[#E6F4FB]">
                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">BillAstra for Windows</p>
                      <p className="text-xs text-slate-500">Invoice & Quotation Generator for Windows</p>
                    </div>
                    <Badge className="rounded-full bg-[#ECFEFF] text-[#2DA6D9] hover:bg-[#ECFEFF]">Live Product</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium">Invoice #INV-1828</span>
                        <span className="text-slate-500">GST Ready</span>
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between"><span>Business Profile</span><span>Saved</span></div>
                        <div className="flex justify-between"><span>Customer Details</span><span>Added</span></div>
                        <div className="flex justify-between"><span>PDF Template</span><span>Modern</span></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                        <p className="text-xs text-slate-500">Mode</p>
                        <p className="mt-1 font-semibold">Offline</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                        <p className="text-xs text-slate-500">Pricing</p>
                        <p className="mt-1 font-semibold">One-Time</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-r from-[#ECFEFF] to-white p-4 shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2DA6D9]">Why it stands out</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Fast billing workflow, professional invoice output, and no subscription lock-in — now available for Windows, with mobile coming soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">Why Us</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why choose GaMa Indie</h2>
            <p className="mt-4 text-slate-600">Simple, offline-first tools designed for small businesses and everyday work.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyUsItems.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border-[#E2F3FA] bg-white shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">Products</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Products you can use today</h2>
            <p className="mt-4 text-slate-600">Start with BillAstra and expand with more tools as they launch.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((item, index) => (
              <Card key={item.title} className={`rounded-[2rem] border-[#E2F3FA] shadow-[0_8px_24px_rgba(2,132,199,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,132,199,0.12)] ${index === 0 ? 'ring-2 ring-[#2DA6D9] scale-[1.02] bg-[#ECFEFF]' : ''}`}>
                <CardContent className="p-7">
                  <Badge className={`mb-4 rounded-full ${index === 0 ? 'bg-[#2DA6D9] text-white' : 'bg-slate-100 text-slate-700'} hover:bg-[#2DA6D9]/90`}>{item.status}</Badge>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  {index === 0 && (
                    <p className="mt-2 text-sm text-[#2DA6D9] font-medium">Recommended • Start here</p>
                  )}
                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Button variant="ghost" className="mt-6 px-0 text-[#2DA6D9] hover:bg-transparent hover:text-[#2498C7]">
                      {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="bg-[#0081A7]/25 py-24">
          <div className="space-y-20">
            <section className="mx-auto max-w-7xl px-6">
              <div className="rounded-[2rem] border border-[#E2F3FA] border-t-4 border-t-[#E48C57] bg-[#F07167] px-8 py-10 text-slate-900 shadow-[0_12px_32px_rgba(2,132,199,0.08)]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">Primary Product</p>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">BillAstra for Windows</h3>
                <p className="mt-3 text-slate-900">A complete offline invoice & quotation solution for small businesses.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {billAstraFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-full border border-[#E2F3FA] bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_6px_18px_rgba(2,132,199,0.08)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-900">
                  Designed to simplify billing with a fast workflow, clean PDFs, and no subscription dependency.
                </p>
                <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer">
                  <Button className="mt-6 rounded-2xl bg-[#2DA6D9] px-6 hover:bg-[#2498C7]">
                    Get BillAstra
                  </Button>
                </a>
              </div>
            </section>

            {/* Screenshots Section */}
            <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">Product Preview</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">See BillAstra in action</h2>
            <p className="mt-4 text-slate-600">Real screenshots showing how simple and clean your billing workflow looks.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <img src="/images/billastra-ui.png" className="rounded-2xl shadow-[0_12px_32px_rgba(2,132,199,0.10)] border" />
              <p className="text-sm text-slate-500">Create GST invoices in minutes with an easy workflow</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-ui-2.png" className="rounded-2xl shadow-[0_12px_32px_rgba(2,132,199,0.10)] border" />
              <p className="text-sm text-slate-500">Create Professional GST Quotation easily</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-classic.png" className="rounded-2xl shadow-[0_12px_32px_rgba(2,132,199,0.10)] border" />
              <p className="text-sm text-slate-500">Clean and professional PDF invoices</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-modern.png" className="rounded-2xl shadow-[0_12px_32px_rgba(2,132,199,0.10)] border" />
              <p className="text-sm text-slate-500">Beautiful modern invoice templates</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-compact.png" className="rounded-2xl shadow-[0_12px_32px_rgba(2,132,199,0.10)] border" />
              <p className="text-sm text-slate-500">Compact quotation for quick service businesses</p>
            </div>
          </div>
            </section>

            <section>
              <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">How It Works</p>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Create invoices in 3 simple steps</h2>
                  <p className="mt-4 text-slate-600">BillAstra keeps your billing workflow straightforward, fast, and practical.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {howItWorks.map((item) => (
                    <Card key={item.step} className="rounded-[2rem] border-[#E2F3FA] bg-white shadow-[0_8px_24px_rgba(2,132,199,0.08)]">
                      <CardContent className="p-7">
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFEFF] text-lg font-bold text-[#2DA6D9]">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-[#3A6F94] py-10 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 md:grid-cols-4">
            {billAstraFeatureStrip.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                  <Icon className="h-7 w-7 text-white/90" />
                  <p className="text-sm font-semibold text-white/90">{item.title}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] border border-[#E2F3FA] bg-white p-8 shadow-[0_8px_24px_rgba(2,132,199,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">Upcoming</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">More tools coming soon</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">We’re expanding with tools for expenses, documents, and simple business workflows—built with the same offline-first approach.</p>
            </div>
            <div className="space-y-4">
              {upcomingItems.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-[#E2F3FA] bg-slate-50 px-5 py-4">
                  <Rocket className="h-5 w-5 text-[#2DA6D9]" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2DA6D9]">About</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Independent software, built with focus</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">GaMa Indie is an independent studio building focused, affordable tools. We prioritize clarity, speed, and software that solves everyday tasks.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20"> 
          <div className="rounded-[2rem] bg-linear-to-r from-[#2DA6D9] to-[#2DA6D9] px-8 py-12 text-white shadow-[0_24px_60px_rgba(2,132,199,0.14)] shadow-[#2DA6D9]/20 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Start Here</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Start with BillAstra for Windows</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">An offline invoice & quotation app for Windows—fast billing, clean PDFs, and no subscriptions. Mobile version coming soon.</p>
                <div className="mt-8 max-w-md space-y-4">
                  <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer" className="block">
                    <Button size="lg" className="w-full rounded-2xl bg-white px-6 py-6 text-[#2DA6D9] hover:bg-slate-100">
                      <Download className="mr-2 h-5 w-5" /> Buy BillAstra
                    </Button>
                  </a>
                  <a href="mailto:hello@gamaindie.com" className="block">
                    <Button size="lg" variant="outline" className="w-full rounded-2xl border-white/40 bg-transparent px-6 py-6 text-white hover:bg-white/10">
                      <Mail className="mr-2 h-5 w-5" /> Contact Us
                    </Button>
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/95 p-8 text-slate-900 shadow-[0_16px_40px_rgba(2,132,199,0.12)]">
                <div className="mb-8">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a href="mailto:hello@gamaindie.com" className="mt-2 inline-block text-2xl font-semibold tracking-tight text-slate-900 hover:text-[#2DA6D9]">hello@gamaindie.com</a>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <a href="https://www.linkedin.com/company/112818648/admin/dashboard/" target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-100 p-5 transition hover:bg-slate-200/70">
                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                      <LinkedInMark className="h-4 w-4" />
                      <p className="text-sm">LinkedIn</p>
                    </div>
                    <p className="font-semibold">GaMa Indie</p>
                  </a>
                  <a href="https://www.instagram.com/gamaindie" target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-100 p-5 transition hover:bg-slate-200/70">
                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                      <InstagramMark className="h-4 w-4" />
                      <p className="text-sm">Instagram</p>
                    </div>
                    <p className="font-semibold">@gamaindie</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E2F3FA] bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GaMa Indie. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#2DA6D9]">
              <Globe className="h-4 w-4" /> Gumroad
            </a>
            <a href="mailto:hello@gamaindie.com" className="hover:text-[#2DA6D9]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
