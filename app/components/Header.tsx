"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import { hospital } from "../data/site";

const aboutLinks = [
  { label: "About Myra City Hospital", href: "/#about" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Our Team", href: "/#doctors" },
];

const serviceLinks = [
  {
    label: "Gastro Medicine",
    href: "/gastro-medicine",
    description: "Digestive, liver, pancreas, acidity, IBS and chronic care.",
  },
  {
    label: "Gastro Surgery",
    href: "/gastro-surgery",
    description: "Laparoscopic, gallbladder, hernia, colorectal and HPB surgery.",
  },
  {
    label: "Critical Care",
    href: "/#critical-care",
    description: "24/7 ICU, emergency response and advanced organ support.",
  },
];

const treatmentColumns = [
  {
    title: "Gastro Medicine",
    links: [
      { label: "GERD and Acid Reflux", href: "/gastro-medicine/acid-reflux-treatment-lucknow" },
      { label: "Fatty Liver Treatment", href: "/gastro-medicine/fatty-liver-treatment-lucknow" },
      { label: "IBS Treatment", href: "/gastro-medicine/ibs-treatment-lucknow" },
      { label: "Gastritis Treatment", href: "/gastro-medicine/gastritis-treatment-lucknow" },
      { label: "Constipation Treatment", href: "/gastro-medicine/constipation-treatment-lucknow" },
      { label: "Pancreatitis Treatment", href: "/gastro-medicine/pancreatitis-treatment-lucknow" },
    ],
  },
  {
    title: "Endoscopy Procedures",
    links: [
      { label: "Endoscopy in Lucknow", href: "/gastro-medicine/endoscopy-in-lucknow" },
      { label: "Upper Endoscopy (EGD)", href: "/gastro-medicine/upper-endoscopy-lucknow" },
      { label: "Colonoscopy", href: "/gastro-medicine/colonoscopy-in-lucknow" },
      { label: "ERCP", href: "/gastro-medicine/ercp-in-lucknow" },
      { label: "EUS", href: "/gastro-medicine/eus-lucknow" },
      { label: "GI Biopsy", href: "/gastro-medicine/gi-biopsy-lucknow" },
      { label: "Motility Studies", href: "/gastro-medicine/motility-studies-lucknow" },
    ],
  },
  {
    title: "Gastro Surgery",
    links: [
      { label: "Gallbladder Surgery", href: "/gastro-surgery/gallbladder-surgery-lucknow" },
      { label: "Laparoscopic Gastro Surgery", href: "/gastro-surgery/laparoscopic-gastro-surgery-lucknow" },
      { label: "Hernia Surgery", href: "/gastro-surgery/hernia-surgery-lucknow" },
      { label: "Colorectal Surgery", href: "/gastro-surgery/colorectal-surgery-lucknow" },
      { label: "Bariatric Surgery", href: "/gastro-surgery/bariatric-surgery-lucknow" },
      { label: "Emergency and ICU Care", href: "/#critical-care" },
    ],
  },
];

function MegaLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-800"
    >
      <span className="block text-sm font-semibold text-slate-950">{label}</span>
      {description ? (
        <span className="mt-1 block text-xs leading-5 text-slate-500">
          {description}
        </span>
      ) : null}
    </Link>
  );
}

function DesktopMegaMenu({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-sm font-semibold text-blue-950 transition hover:text-blue-800"
      >
        {label}
        <span className="text-xs">▾</span>
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-2xl shadow-slate-300/50 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {children}
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`z-50 ${
        isHome
          ? "absolute inset-x-0 top-0 bg-transparent"
          : "sticky top-0 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-4 py-5 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-blue-950"
          aria-label="Myra City Hospital home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-blue-800 bg-white text-lg font-black text-blue-800 shadow-sm">
            M
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-tight text-blue-900">
              MYRA CITY
            </span>
            <span className="block text-xl font-black tracking-tight text-blue-900">
              HOSPITAL
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="py-2 text-sm font-semibold text-blue-950 transition hover:text-blue-800"
          >
            Home
          </Link>

          <DesktopMegaMenu label="About Us">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-xl bg-blue-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                  Myra City Hospital
                </p>
                <p className="mt-3 text-2xl font-bold leading-tight">
                  Trusted gastro, liver and critical care in Lucknow
                </p>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Meet the specialists, hospital team and care model behind our
                  advanced digestive health services.
                </p>
              </div>
              <div className="grid content-start gap-2">
                {aboutLinks.map((link) => (
                  <MegaLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </DesktopMegaMenu>

          <Link
            href="/#doctors"
            className="py-2 text-sm font-semibold text-blue-950 transition hover:text-blue-800"
          >
            Our Specialists
          </Link>

          <DesktopMegaMenu label="Services">
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-3">
                {serviceLinks.map((link) => (
                  <MegaLink key={link.label} {...link} />
                ))}
              </div>
              <div className="grid gap-5 border-t border-slate-200 pt-4 md:grid-cols-3">
                {treatmentColumns.map((column) => (
                  <div key={column.title}>
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-blue-800">
                      {column.title}
                    </p>
                    <div className="grid gap-1">
                      {column.links.map((link) => (
                        <MegaLink key={link.href} {...link} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DesktopMegaMenu>

          <Link
            href="/blogs"
            className="py-2 text-sm font-semibold text-blue-950 transition hover:text-blue-800"
          >
            Patient Guide
          </Link>
          <Link
            href="/#appointment"
            className="py-2 text-sm font-semibold text-blue-950 transition hover:text-blue-800"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={hospital.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-blue-950 shadow-sm ring-1 ring-blue-100 backdrop-blur transition hover:bg-white xl:flex"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.71a16 16 0 0 0 4.29 4.29l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
            </svg>
            {hospital.phone}
          </Link>
          <Link
            href="/book-appointment"
            className="hidden rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-800 md:block"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col gap-1.5 rounded-md border border-slate-200 p-2 lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-blue-700" />
            <span className="block h-0.5 w-6 bg-blue-700" />
            <span className="block h-0.5 w-6 bg-blue-700" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="max-h-[calc(100vh-65px)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-slate-950"
            >
              Home
            </Link>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                About Us
              </p>
              <div className="mt-2 grid gap-1">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md py-1 text-sm font-medium text-slate-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                Services
              </p>
              <div className="mt-2 grid gap-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg border border-slate-200 p-3 text-sm font-semibold text-slate-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                Treatments
              </p>
              <div className="mt-2 grid gap-4">
                {treatmentColumns.map((column) => (
                  <div key={column.title}>
                    <p className="text-sm font-semibold text-slate-950">
                      {column.title}
                    </p>
                    <div className="mt-1 grid gap-1 pl-3">
                      {column.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="py-1 text-sm text-slate-700"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-slate-950"
            >
              Blogs
            </Link>
            <Link
              href="/#appointment"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-slate-950"
            >
              Contact
            </Link>
            <a
              href={hospital.phoneHref}
              className="rounded-md border border-slate-200 py-3 text-center text-sm font-semibold text-slate-900"
            >
              Call Now
            </a>
            <Link
              href="/book-appointment"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-blue-700 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
