import type { Metadata } from "next";
import Link from "next/link";
import { hospital, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Gastro Health Blogs in Lucknow | Myra City Hospital",
  description:
    "Read patient-friendly gastro, liver, endoscopy, GERD, fatty liver, colonoscopy and GI surgery guides from Myra City Hospital Lucknow.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Gastro Health Blogs | Myra City Hospital",
    description:
      "Digestive health, liver care, endoscopy and gastro surgery education from Myra City Hospital Lucknow.",
    url: `${siteUrl}/blogs`,
    type: "website",
  },
};

const featuredGuides = [
  {
    title: "When should you see a gastroenterologist in Lucknow?",
    description:
      "Understand warning symptoms like persistent acidity, abdominal pain, bleeding, jaundice, weight loss and swallowing difficulty.",
    href: "/gastro-medicine",
  },
  {
    title: "Endoscopy, colonoscopy, ERCP and EUS explained",
    description:
      "A simple guide to advanced gastro diagnostic and therapeutic procedures available at Myra City Hospital.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    title: "Fatty liver and liver disease care",
    description:
      "Learn why early liver evaluation matters and how lifestyle, testing and specialist monitoring protect liver health.",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    title: "GERD and chronic acidity treatment",
    description:
      "Know when acidity becomes GERD, when endoscopy is advised, and how long-term relief is planned.",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    title: "Colonoscopy and colon cancer prevention",
    description:
      "Why colonoscopy helps detect polyps, bleeding, inflammation and colorectal cancer at an earlier stage.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "Gastro surgery and laparoscopic treatment",
    description:
      "Explore surgical options for gallbladder disease, hernia, colorectal disorders and complex digestive conditions.",
    href: "/gastro-surgery",
  },
];

const categories = [
  { label: "Gastro Medicine", href: "/gastro-medicine" },
  { label: "Endoscopy Procedures", href: "/gastro-medicine/endoscopy-in-lucknow" },
  { label: "Liver Care", href: "/gastro-medicine/liver-disease-treatment-lucknow" },
  { label: "Gastro Surgery", href: "/gastro-surgery" },
  { label: "Critical Care", href: "/#critical-care" },
];

export default function BlogsPage() {
  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <nav className="text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Blogs</span>
          </nav>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
            Gastro health education
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Gastro Health Blogs in Lucknow
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Patient-friendly guides from Myra City Hospital on digestive
            symptoms, liver health, endoscopy, colonoscopy, ERCP, EUS and
            gastro surgery care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold leading-tight">{guide.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{guide.description}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-blue-800">
                  Read guide
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 text-white md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Need specialist care?
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Speak with Myra City Hospital
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-blue-100">
              For persistent acidity, abdominal pain, jaundice, bleeding,
              vomiting, liver concerns or emergency symptoms, consult a doctor
              instead of relying only on online information.
            </p>
          </div>
          <a
            href={hospital.phoneHref}
            className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-950"
          >
            Call {hospital.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
