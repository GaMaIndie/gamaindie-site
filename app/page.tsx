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
  Download,
  ShieldCheck,
  FileText,
  Briefcase,
  Sparkles,
  Rocket,
  Mail,
  Globe,
  CheckCircle2,
  Star,
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

const features = [
  {
    icon: FileText,
    title: "Offline First",
    desc: "Your business data stays on your system. No cloud dependency for day-to-day invoicing.",
  },
  {
    icon: ShieldCheck,
    title: "No Subscriptions",
    desc: "One-time purchase. Simple pricing without recurring monthly stress.",
  },
  {
    icon: Briefcase,
    title: "Built for Small Business",
    desc: "Designed for freelancers, home businesses, shops, and service providers.",
  },
  {
    icon: Sparkles,
    title: "Clean Professional PDFs",
    desc: "Create polished invoices and quotations that look modern and business-ready.",
  },
];

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

const trustItems = [
  "Offline-first",
  "No subscriptions",
  "Small-business friendly",
  "Clean professional PDFs",
];

const billAstraQuickFeatures = [
  "Invoice & Quotation",
  "Offline Use",
  "GST Ready",
  "One-Time Purchase",
  "Windows App",
];

const whatWeBuild = [
  {
    title: "Business Utilities",
    desc: "Focused tools for billing, invoicing, and small business workflows.",
  },
  {
    title: "Offline Productivity Tools",
    desc: "Software that works without cloud dependency for practical daily use.",
  },
  {
    title: "Small Business Software",
    desc: "Useful apps designed for freelancers, shops, and service businesses.",
  },
  {
    title: "Upcoming Mobile Apps",
    desc: "Simple mobile experiences that extend GaMa Indie products beyond desktop.",
  },
];

const testimonials = [
  {
    name: "Freelancers & Solo Users",
    quote: "Built to keep everyday billing simple, clean, and stress-free.",
  },
  {
    name: "Small Business Owners",
    quote: "A practical tool for creating professional invoices without extra complexity.",
  },
  {
    name: "Home & Service Businesses",
    quote: "Designed for real work — simple setup, clear workflow, and polished output.",
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
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-0">
            <img
              src="/logo/gama-logo.png"
              alt="GaMa Indie logo"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              
              <p className="text-xl font-semibold">
                <span className="text-cyan-600">GaMa</span>
                <span className="text-slate-700">Indie</span>
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#products" className="transition hover:text-teal-700">Products</a>
            <a href="#features" className="transition hover:text-teal-700">Why Us</a>
            <a href="#projects" className="transition hover:text-teal-700">Upcoming</a>
            <a href="#about" className="transition hover:text-teal-700">About</a>
            <a href="#contact" className="transition hover:text-teal-700">Contact</a>
          </nav>

          <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer">
            <Button className="rounded-2xl bg-teal-600 px-5 hover:bg-teal-700">
              Buy BillAstra
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.10),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <Badge className="mb-5 rounded-full bg-teal-50 px-4 py-1 text-teal-700 hover:bg-teal-50">
                Independent Software Studio
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Simple software. <span className="text-teal-700">Built for real work.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                GaMa Indie creates practical software tools for small businesses, creators, and everyday workflows — clean, useful, and easy to use.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#products">
                  <Button size="lg" className="rounded-2xl bg-teal-600 px-6 hover:bg-teal-700">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="rounded-2xl border-slate-300 px-6">
                    <Download className="mr-2 h-4 w-4" /> Get BillAstra
                  </Button>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
                <span>Offline-first</span>
                <span>No subscriptions</span>
                <span>Business-ready PDFs</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-teal-700" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {billAstraQuickFeatures.map((item) => (
                  <div key={item} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-100">
                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">BillAstra for Windows</p>
                      <p className="text-xs text-slate-500">Invoice & Quotation Generator for Windows</p>
                    </div>
                    <Badge className="rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Live Product</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
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
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="text-xs text-slate-500">Mode</p>
                        <p className="mt-1 font-semibold">Offline</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="text-xs text-slate-500">Pricing</p>
                        <p className="mt-1 font-semibold">One-Time</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-white p-4 shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-700">Why it stands out</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Fast billing workflow, professional invoice output, and no subscription lock-in — now available for Windows, with mobile coming soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">What We Build</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Focused software for practical everyday work</h2>
            <p className="mt-4 text-slate-600">GaMa Indie is built around simple, useful tools that help people get real work done with less friction.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatWeBuild.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Products</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Focused tools with practical value</h2>
            <p className="mt-4 text-slate-600">We build software that helps simplify daily work instead of making it more complicated.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <Badge className="mb-4 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">{item.status}</Badge>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Button variant="ghost" className="mt-6 px-0 text-teal-700 hover:bg-transparent hover:text-teal-800">
                      {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <Star className="h-4 w-4 text-teal-700" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Product Preview</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">See BillAstra in action</h2>
            <p className="mt-4 text-slate-600">Real screenshots showing how simple and clean your billing workflow looks.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <img src="/images/billastra-ui.png" className="rounded-2xl shadow-lg border" />
              <p className="text-sm text-slate-500">Create GST invoices in minutes with an easy workflow</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-ui-2.png" className="rounded-2xl shadow-lg border" />
              <p className="text-sm text-slate-500">Create Professional GST Quotation easily</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-classic.png" className="rounded-2xl shadow-lg border" />
              <p className="text-sm text-slate-500">Clean and professional PDF invoices</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-modern.png" className="rounded-2xl shadow-lg border" />
              <p className="text-sm text-slate-500">Beautiful modern invoice templates</p>
            </div>

            <div className="space-y-4">
              <img src="/images/billastra-compact.png" className="rounded-2xl shadow-lg border" />
              <p className="text-sm text-slate-500">Compact quotation for quick service businesses</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">How It Works</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Create invoices in 3 simple steps</h2>
              <p className="mt-4 text-slate-600">BillAstra keeps your billing workflow straightforward, fast, and practical.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {howItWorks.map((item) => (
                <Card key={item.step} className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-lg font-bold text-teal-700">
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

        <section id="features" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Why GaMa Indie</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built with simplicity, clarity, and usefulness in mind</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{feature.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Upcoming</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">More practical tools are on the way</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">GaMa Indie is growing into a focused product studio for useful software — especially tools that help small businesses and solo users work better.</p>
            </div>
            <div className="space-y-4">
              {upcomingItems.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <Rocket className="h-5 w-5 text-teal-700" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-12">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Built for Real Users</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A calmer, cleaner way to work with business tools</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-base leading-7 text-slate-600">“{item.quote}”</p>
                  <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">About</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Independent software, made with purpose</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">GaMa Indie is a small independent software brand focused on building useful, affordable, and thoughtfully designed digital tools. We care about clarity, clean workflows, and software that actually helps.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20"> 
          <div className="rounded-[2rem] bg-linear-to-r from-teal-600 to-cyan-600 px-8 py-12 text-white shadow-2xl shadow-teal-200 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">Start Here</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Start with BillAstra for Windows</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-teal-50/90">A clean offline invoice & quotation generator built for small business work on Windows — with BillAstra for Mobile coming soon.</p>
                <div className="mt-8 max-w-md space-y-4">
                  <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer" className="block">
                    <Button size="lg" className="w-full rounded-2xl bg-white px-6 py-6 text-teal-700 hover:bg-slate-100">
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

              <div className="rounded-[2rem] bg-white/95 p-8 text-slate-900 shadow-xl">
                <div className="mb-8">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a href="mailto:hello@gamaindie.com" className="mt-2 inline-block text-2xl font-semibold tracking-tight text-slate-900 hover:text-teal-700">hello@gamaindie.com</a>
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

      <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GaMa Indie. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://gamaindie.gumroad.com/l/billastra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-teal-700">
              <Globe className="h-4 w-4" /> Gumroad
            </a>
            <a href="mailto:hello@gamaindie.com" className="hover:text-teal-700">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
