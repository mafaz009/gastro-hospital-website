import type { Metadata } from "next";
import Link from "next/link";
import { hospital, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Best Gastro Surgery in Lucknow | Laparoscopic GI Surgeon | Myra City Hospital",
  description:
    "Looking for gastro surgery in Lucknow? Myra City Hospital offers laparoscopic, gallbladder, hernia, colorectal and bariatric surgery by expert Dr. A K Bansal.",
  keywords: [
    "best gastro surgery in Lucknow",
    "gastro surgeon in Lucknow",
    "laparoscopic GI surgeon Lucknow",
    "gastro surgery hospital Lucknow",
    "Dr. A K Bansal",
    "Dr. A K Bansal gastro surgeon",
  ],
  alternates: {
    canonical: "/gastro-surgery",
  },
  openGraph: {
    title: "Best Gastro Surgery in Lucknow | Myra City Hospital",
    description:
      "Advanced GI, laparoscopic, gallbladder, hernia, colorectal, bariatric and hepatobiliary surgery led by Dr. A K Bansal.",
    url: `${siteUrl}/gastro-surgery`,
    type: "article",
  },
};

const surgeryHighlights = [
  "Led by Dr. A K Bansal",
  "Advanced laparoscopic surgery",
  "Modern operation theatres and ICU support",
  "Comprehensive pre and post-surgical care",
];

const organs = [
  "Esophagus",
  "Stomach",
  "Small intestine",
  "Colon and rectum",
  "Liver",
  "Gallbladder",
  "Pancreas",
  "Bile ducts",
];

const serviceCards = [
  {
    title: "Laparoscopic Gastro Surgery in Lucknow",
    description:
      "Minimally invasive keyhole surgery for selected digestive disorders with less pain, smaller scars, shorter stay, and faster recovery.",
    href: "/gastro-surgery/laparoscopic-gastro-surgery-lucknow",
    points: ["Gallbladder disease", "Hernia", "Appendicitis", "Intestinal disorders"],
  },
  {
    title: "Gallbladder Surgery in Lucknow",
    description:
      "Safe laparoscopic cholecystectomy for gallstones, gallbladder infection, and selected bile-related complications.",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
    points: ["Gallstones", "Gallbladder infection", "Quick recovery", "Minimal pain"],
  },
  {
    title: "Hernia Surgery in Lucknow",
    description:
      "Advanced hernia repair using laparoscopic techniques and mesh reinforcement for strong repair and low recurrence focus.",
    href: "/gastro-surgery/hernia-surgery-lucknow",
    points: ["Inguinal hernia", "Umbilical hernia", "Incisional hernia", "Mesh repair"],
  },
  {
    title: "Colorectal Surgery in Lucknow",
    description:
      "Surgical care for colon, rectal, anal and inflammatory bowel conditions with minimally invasive planning where suitable.",
    href: "/gastro-surgery/colorectal-surgery-lucknow",
    points: ["Colon cancer", "Rectal cancer", "Ulcerative colitis", "Fistula and piles"],
  },
  {
    title: "Bariatric Surgery in Lucknow",
    description:
      "Weight-loss surgery for selected patients with severe obesity and metabolic disease after careful evaluation.",
    href: "/gastro-surgery/bariatric-surgery-lucknow",
    points: ["Sleeve gastrectomy", "Gastric bypass", "Diabetes improvement", "Long-term support"],
  },
  {
    title: "Hepatopancreatobiliary Surgery",
    description:
      "Specialized surgical care for liver, pancreas, bile duct, gallbladder and complex upper abdominal conditions.",
    href: "/gastro-medicine/ercp-in-lucknow",
    points: ["Liver tumors", "Pancreatic disorders", "Bile duct conditions", "Complex surgical planning"],
  },
];

const whyChoose = [
  "Led by an experienced GI and liver transplant surgeon",
  "Minimally invasive laparoscopic approach wherever clinically suitable",
  "High focus on safety, precision, and recovery",
  "Modern operation theatres with ICU and critical care backup",
  "Multidisciplinary gastro medicine, surgery, endoscopy, and nutrition support",
  "Transparent, ethical and patient-centered treatment planning",
];

const surgicalJourney = [
  {
    title: "Before Surgery",
    text: "Detailed consultation, medical evaluation, blood tests, imaging, endoscopy when needed, and pre-anesthesia assessment.",
  },
  {
    title: "During Surgery",
    text: "Procedure is performed under anesthesia using laparoscopic or open approach depending on diagnosis, safety, and complexity.",
  },
  {
    title: "After Surgery",
    text: "Recovery monitoring, pain control, diet guidance, wound care, follow-up planning, and rehabilitation support.",
  },
];

const symptoms = [
  "Persistent abdominal pain",
  "Gallstones or gallbladder symptoms",
  "Hernia swelling or pain",
  "Rectal bleeding",
  "Digestive obstruction symptoms",
  "Obesity-related health issues",
  "Suspected GI cancer",
  "Pancreas, liver or bile duct disease",
];

const relatedLinks = [
  { label: "ERCP in Lucknow", href: "/gastro-medicine/ercp-in-lucknow" },
  { label: "EUS in Lucknow", href: "/gastro-medicine/eus-lucknow" },
  { label: "Colonoscopy in Lucknow", href: "/gastro-medicine/colonoscopy-in-lucknow" },
  { label: "GI Biopsy in Lucknow", href: "/gastro-medicine/gi-biopsy-lucknow" },
  { label: "Fatty Liver Treatment in Lucknow", href: "/gastro-medicine/fatty-liver-treatment-lucknow" },
  { label: "GERD Treatment in Lucknow", href: "/gastro-medicine/acid-reflux-treatment-lucknow" },
];

const faqs = [
  {
    question: "Is laparoscopic surgery better than open surgery?",
    answer:
      "Laparoscopic surgery usually offers less pain, smaller incisions, faster recovery, and shorter hospital stay, but the best approach depends on the condition and surgical safety.",
  },
  {
    question: "How long does recovery take after gastro surgery?",
    answer:
      "Recovery depends on the procedure, complexity, and patient health. Many laparoscopic surgeries allow return to routine activity within 1-2 weeks.",
  },
  {
    question: "Is gastro surgery risky?",
    answer:
      "All surgery has some risk, but modern techniques, careful evaluation, experienced surgeons, anesthesia support, and ICU backup improve safety.",
  },
  {
    question: "Can hernia recur after surgery?",
    answer:
      "Recurrence is uncommon with proper technique, mesh reinforcement when indicated, and correct post-operative care.",
  },
  {
    question: "Is bariatric surgery safe?",
    answer:
      "Bariatric surgery can be safe and effective in carefully selected patients when performed by experienced surgeons with long-term follow-up.",
  },
];

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GastroSurgeryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        medicalSpecialty: "Gastrointestinal Surgery",
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        physician: {
          "@type": "Physician",
          name: "Dr. A K Bansal",
          alternateName: "Dr. A K Bansal",
          medicalSpecialty: "Gastrointestinal Surgery",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-surgery#webpage`,
        url: `${siteUrl}/gastro-surgery`,
        name: "Best Gastro Surgery in Lucknow | Advanced GI and Laparoscopic Surgery",
        about: {
          "@type": "MedicalSpecialty",
          name: "Gastrointestinal Surgery",
        },
        reviewedBy: {
          "@type": "Physician",
          name: "Dr. A K Bansal",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Surgery",
            item: `${siteUrl}/gastro-surgery`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <JsonLd data={schema} />

      <section className="border-b border-slate-200 bg-[#eaf2f8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
          <div>
            <nav className="text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-800">Home</Link>
              <span className="mx-2">/</span>
              <span>Gastro Surgery</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Leading gastro surgery hospital in Lucknow
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Best Gastro Surgery in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Myra City Hospital is a trusted destination for advanced
              gastrointestinal, laparoscopic, and hepatobiliary surgical care in
              Lucknow, with a focus on precision, safety, and faster recovery.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Our gastro surgery department is led by Dr. A K Bansal,
              also known as Dr. A K Bansal, an experienced GI and liver
              transplant surgeon managing complex digestive and HPB surgical
              cases.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Consultation with Gastro Surgeon
              </Link>
              <Link href="/gastro-surgery/gallbladder-surgery-lucknow" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Gallbladder Surgery
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/80 bg-white p-6 shadow-2xl shadow-slate-300/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Surgical leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold">Dr. A K Bansal</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Head of Gastro Surgery | GI and Liver Transplant Specialist
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Advanced surgical gastroenterology training with expertise in
              laparoscopic gastro surgery, HPB surgery, colorectal surgery,
              bariatric surgery, and GI cancer surgery.
            </p>
            <div className="mt-6 grid gap-3">
              {surgeryHighlights.map((item) => (
                <div key={item} className="rounded-lg bg-blue-50 p-4 text-sm font-semibold text-blue-900">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {["Laparoscopic care", "GI cancer surgery", "HBP expertise", "ICU-backed safety"].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              What is gastro surgery?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Surgical treatment for digestive system diseases
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Gastrointestinal surgery treats diseases affecting the digestive
              tract and related organs. Surgery may be recommended when medicines
              fail, structural problems are present, tumors are detected, or
              emergency complications arise.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {organs.map((organ) => (
              <div key={organ} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-4 text-sm font-semibold text-slate-800">
                {organ}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Our gastro surgery services in Lucknow
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Advanced GI, laparoscopic and hepatobiliary surgical care
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-5 grid gap-2 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-800">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Why choose Myra City Hospital?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Surgical precision with complete hospital backup
            </h2>
            <p className="mt-5 leading-7 text-blue-100">
              From diagnosis to recovery, patients receive coordinated care from
              gastro surgery, gastro medicine, endoscopy, anesthesia, ICU, and
              nursing teams.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Patient journey
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What to expect during gastro surgery
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {surgicalJourney.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              When to see a gastro surgeon
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Symptoms and conditions that may need surgical evaluation
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Benefits of advanced gastro surgery
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Faster recovery and safer surgical planning
            </h2>
            <div className="mt-8 grid gap-4">
              {["Faster recovery", "Minimal pain where laparoscopic surgery is suitable", "Reduced complications focus", "Short hospital stay", "Improved long-term digestive health"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Gastro surgery questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">-</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-left text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best gastro surgery hospital in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for advanced digestive surgery
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for gastro surgery in
              Lucknow, offering advanced care for gallbladder disease, hernia,
              colorectal conditions, obesity, liver, pancreas, bile duct, and GI
              cancer concerns.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We serve patients across Lucknow including Daliganj, Nirala Nagar,
              Aliganj, Hazratganj, Indira Nagar, Gomti Nagar, and nearby regions.
              Surgical cost depends on procedure type, complexity, and hospital
              stay, with transparent pricing discussed during consultation.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related diagnostic and medical care</h2>
            <div className="mt-5 grid gap-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-[#fbfdff] p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Book gastro surgery consultation
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Get expert surgical care in Lucknow
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Speak with Dr. A K Bansal and the Myra City Hospital team
              for laparoscopic, GI, HPB, colorectal, gallbladder, hernia, and
              bariatric surgery evaluation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-medicine/eus-lucknow" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Diagnostic EUS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
