import type { Metadata } from "next";
import Link from "next/link";
import { hospital, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Best Gastroenterologist in Lucknow | Liver Specialist | Myra City Hospital",
  description:
    "Looking for gastroenterologist in Lucknow? Myra City Hospital offers expert liver and digestive care by Dr. Juned Ahmad Khan (MD, DM Hepatology). Book now.",
  keywords: [
    "best gastroenterologist in Lucknow",
    "gastro medicine hospital Lucknow",
    "liver specialist in Lucknow",
    "Dr. Juned Ahmad Khan",
    "digestive disease treatment Lucknow",
    "best gastro hospital in Lucknow",
  ],
  alternates: {
    canonical: "/gastro-medicine",
  },
  openGraph: {
    title: "Best Gastroenterologist in Lucknow | Myra City Hospital",
    description:
      "Advanced gastro medicine, hepatology, endoscopy, ERCP, colonoscopy, GERD and liver care led by Dr. Juned Ahmad Khan.",
    url: `${siteUrl}/gastro-medicine`,
    type: "article",
  },
};

const doctorHighlights = [
  "MD, DM (Hepatology)",
  "Advanced liver and digestive care",
  "Endoscopy, colonoscopy, ERCP and EUS expertise",
  "Long-term chronic disease management",
];

const organs = [
  "Esophagus",
  "Stomach",
  "Small intestine",
  "Colon and rectum",
  "Liver",
  "Pancreas",
  "Gallbladder",
  "Bile ducts",
];

const diagnosticServices = [
  {
    title: "Upper Endoscopy (EGD)",
    description:
      "Examines the esophagus, stomach and duodenum to diagnose GERD damage, ulcers, gastritis, bleeding and early cancer changes.",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    title: "Colonoscopy",
    description:
      "Evaluates the colon and rectum for polyps, inflammation, colorectal cancer, bleeding causes and chronic bowel symptoms.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "Capsule Endoscopy",
    description:
      "A non-invasive small intestine camera test for hidden bleeding, Crohn disease, unexplained anemia and persistent symptoms.",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    title: "Endoscopic Ultrasound (EUS)",
    description:
      "High-precision imaging for pancreas, liver, bile duct, lymph node and gastrointestinal cancer evaluation.",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    title: "GI Biopsy",
    description:
      "Endoscopy, colonoscopy or EUS-guided tissue sampling for accurate diagnosis of infection, inflammation, liver disease and cancer.",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    title: "Motility Studies",
    description:
      "Esophageal manometry and pH monitoring for GERD, swallowing difficulty, achalasia and functional digestive disorders.",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
];

const treatmentClusters = [
  {
    title: "Therapeutic Endoscopic Procedures",
    description:
      "Advanced endoscopy can treat selected conditions during the same procedure, reducing the need for open surgery in many cases.",
    links: [
      { label: "ERCP for bile duct stones", href: "/gastro-medicine/ercp-in-lucknow" },
      { label: "Polypectomy during colonoscopy", href: "/gastro-medicine/colonoscopy-in-lucknow" },
      { label: "GI bleeding control", href: "/gastro-medicine/endoscopy-in-lucknow" },
      { label: "Stricture dilation", href: "/gastro-medicine/upper-endoscopy-lucknow" },
    ],
  },
  {
    title: "Liver Disease Treatment (Hepatology)",
    description:
      "Specialized liver care for fatty liver, hepatitis, cirrhosis, liver failure and jaundice, with early detection and long-term monitoring.",
    links: [
      { label: "Fatty liver treatment", href: "/gastro-medicine/fatty-liver-treatment-lucknow" },
      { label: "Liver disease treatment", href: "/gastro-medicine/liver-disease-treatment-lucknow" },
      { label: "EUS liver evaluation", href: "/gastro-medicine/eus-lucknow" },
      { label: "GI biopsy and liver biopsy support", href: "/gastro-medicine/gi-biopsy-lucknow" },
    ],
  },
  {
    title: "Digestive Disorder Treatment",
    description:
      "Evidence-based care for chronic acidity, IBS, IBD, constipation, diarrhea, gastritis, bloating and long-term digestive discomfort.",
    links: [
      { label: "GERD and acid reflux treatment", href: "/gastro-medicine/acid-reflux-treatment-lucknow" },
      { label: "IBS treatment", href: "/gastro-medicine/ibs-treatment-lucknow" },
      { label: "Constipation treatment", href: "/gastro-medicine/constipation-treatment-lucknow" },
      { label: "Gastritis treatment", href: "/gastro-medicine/gastritis-treatment-lucknow" },
    ],
  },
  {
    title: "GI Oncology Support",
    description:
      "Early cancer detection, biopsy coordination, staging support and referral planning for stomach, colon, rectal, pancreas, liver and bile duct cancers.",
    links: [
      { label: "EUS for cancer staging", href: "/gastro-medicine/eus-lucknow" },
      { label: "GI biopsy for diagnosis", href: "/gastro-medicine/gi-biopsy-lucknow" },
      { label: "Colonoscopy screening", href: "/gastro-medicine/colonoscopy-in-lucknow" },
      { label: "Gastro surgery care", href: "/gastro-surgery" },
    ],
  },
];

const whyChoose = [
  "Expert gastroenterologist with hepatology specialization",
  "Advanced diagnostic facilities including endoscopy, imaging and lab tests",
  "Complete digestive, liver and pancreas care under one roof",
  "Evidence-based treatment protocols for acute and chronic disease",
  "Patient-focused, ethical and transparent consultation approach",
  "24-hour hospital support for GI bleeding and severe emergencies",
];

const symptoms = [
  "Persistent acidity or heartburn",
  "Abdominal pain, bloating or gas",
  "Blood in stool or black stools",
  "Jaundice or abnormal liver tests",
  "Chronic diarrhea or constipation",
  "Difficulty swallowing",
  "Unexplained weight loss",
  "Vomiting or suspected GI bleeding",
];

const technology = [
  "High-definition endoscopy systems",
  "Colonoscopy and polypectomy support",
  "ERCP and advanced endoscopic care",
  "EUS, biopsy coordination and imaging support",
  "Modern laboratory diagnostics",
  "ICU and emergency backup",
];

const relatedLinks = [
  { label: "Endoscopy in Lucknow", href: "/gastro-medicine/endoscopy-in-lucknow" },
  { label: "Upper Endoscopy (EGD)", href: "/gastro-medicine/upper-endoscopy-lucknow" },
  { label: "Colonoscopy in Lucknow", href: "/gastro-medicine/colonoscopy-in-lucknow" },
  { label: "ERCP in Lucknow", href: "/gastro-medicine/ercp-in-lucknow" },
  { label: "EUS in Lucknow", href: "/gastro-medicine/eus-lucknow" },
  { label: "GI Biopsy in Lucknow", href: "/gastro-medicine/gi-biopsy-lucknow" },
  { label: "Motility Studies in Lucknow", href: "/gastro-medicine/motility-studies-lucknow" },
  { label: "Fatty Liver Treatment", href: "/gastro-medicine/fatty-liver-treatment-lucknow" },
  { label: "GERD Treatment", href: "/gastro-medicine/acid-reflux-treatment-lucknow" },
  { label: "Gastro Surgery in Lucknow", href: "/gastro-surgery" },
];

const faqs = [
  {
    question: "When should I see a gastroenterologist?",
    answer:
      "You should consult a gastroenterologist if acidity, abdominal pain, bloating, vomiting, jaundice, bleeding, constipation, diarrhea or swallowing difficulty persists for more than a few days or keeps returning.",
  },
  {
    question: "Is endoscopy safe?",
    answer:
      "Yes. Endoscopy is a commonly performed diagnostic procedure. At Myra City Hospital, procedures are done with medical supervision, sterilization protocols and monitoring for patient safety.",
  },
  {
    question: "Can liver diseases be treated?",
    answer:
      "Yes. Many liver conditions can be managed effectively, and early-stage fatty liver can often be reversed with the right lifestyle, medical care and monitoring.",
  },
  {
    question: "Do you provide emergency gastro care?",
    answer:
      "Yes. Myra City Hospital provides care for serious conditions such as GI bleeding, severe abdominal pain, acute pancreatitis, jaundice complications and liver-related emergencies.",
  },
  {
    question: "Do I need tests for acidity?",
    answer:
      "Occasional acidity may not need advanced testing, but chronic or severe acidity may require upper endoscopy, pH monitoring or other evaluation to check for GERD complications.",
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

export default function GastroMedicinePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        medicalSpecialty: ["Gastroenterology", "Hepatology"],
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
          "@id": `${siteUrl}/gastro-medicine#dr-juned-a-khan`,
          name: "Dr. Juned Ahmad Khan",
          honorificSuffix: "MD, DM (Hepatology)",
          medicalSpecialty: ["Gastroenterology", "Hepatology"],
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-medicine#webpage`,
        url: `${siteUrl}/gastro-medicine`,
        name: "Best Gastroenterologist in Lucknow | Advanced Gastro Medicine and Liver Care",
        about: [
          { "@type": "MedicalSpecialty", name: "Gastroenterology" },
          { "@type": "MedicalSpecialty", name: "Hepatology" },
        ],
        reviewedBy: {
          "@id": `${siteUrl}/gastro-medicine#dr-juned-a-khan`,
        },
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gastro Medicine",
            item: `${siteUrl}/gastro-medicine`,
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
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Gastro Medicine</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Leading gastro medicine hospital in Lucknow
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Best Gastroenterologist in Lucknow
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Myra City Hospital is a trusted center for advanced gastro
              medicine, liver care, and digestive disease treatment in Lucknow,
              led by Dr. Juned Ahmad Khan, MD, DM (Hepatology).
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              We combine accurate diagnosis, evidence-based treatment, advanced
              endoscopy, hepatology expertise, and long-term patient care for
              digestive, liver, pancreas, stomach, bowel and bile duct diseases.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
              >
                Book Consultation with Gastro Specialist
              </Link>
              <Link
                href="/gastro-medicine/endoscopy-in-lucknow"
                className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300"
              >
                View Endoscopy Services
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/80 bg-white p-6 shadow-2xl shadow-slate-300/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Gastro medicine leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold">Dr. Juned Ahmad Khan</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              MD, DM (Hepatology) | Liver and Digestive Specialist
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Dr. Khan specializes in liver diseases, digestive disorders,
              pancreatic conditions and advanced endoscopic procedures, with a
              focus on accurate diagnosis and patient-friendly care.
            </p>
            <div className="mt-6 grid gap-3">
              {doctorHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-blue-50 p-4 text-sm font-semibold text-blue-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Hepatology-led care",
            "Advanced endoscopy",
            "ERCP and EUS support",
            "24-hour hospital backup",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              About gastro medicine
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Complete non-surgical care for digestive and liver diseases
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Gastro medicine focuses on diagnosis, prevention, treatment and
              long-term monitoring of diseases affecting the digestive system.
              At Myra City Hospital, patients receive integrated care from
              consultation and testing to treatment planning and follow-up.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {organs.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-[#f6f9fc] p-4 text-sm font-semibold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Why choose Myra City Hospital?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Expert gastroenterology and liver care in Lucknow
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Diagnostic procedures and advanced testing
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Accurate diagnosis is the foundation of effective treatment
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              We use modern diagnostic tools to identify the cause of symptoms,
              detect disease early, and plan treatment with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diagnosticServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-800">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Treatment expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Gastro medicine services in Lucknow
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {treatmentClusters.map((cluster) => (
              <div
                key={cluster.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{cluster.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {cluster.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cluster.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold">
                Nutritional and lifestyle counseling
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Guidance for fatty liver, obesity, malabsorption, chronic
                acidity, IBS and long-term digestive wellness helps patients
                maintain results beyond medicines.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/gastro-medicine/fatty-liver-treatment-lucknow"
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
                >
                  Fatty liver care
                </Link>
                <Link
                  href="/gastro-surgery/bariatric-surgery-lucknow"
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
                >
                  Bariatric surgery support
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-950 p-6 text-white shadow-sm">
              <h3 className="text-2xl font-bold">
                Coordinated care when surgery is needed
              </h3>
              <p className="mt-4 leading-7 text-blue-100">
                When a digestive condition needs operative care, the gastro
                medicine team coordinates with gastro surgery for seamless
                evaluation, planning and follow-up.
              </p>
              <Link
                href="/gastro-surgery"
                className="mt-6 inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-950"
              >
                Visit Gastro Surgery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Symptoms that need attention
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              When should you consult a gastroenterologist?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Early consultation helps prevent complications, detect serious
              disease earlier, and reduce repeated symptom flare-ups.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-[#f6f9fc] p-4 text-sm font-semibold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-[#f6f9fc] p-6">
            <h3 className="text-2xl font-bold">
              Why early gastro treatment matters
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              Delaying digestive or liver care can allow ulcers, GERD damage,
              severe inflammation, liver fibrosis, bleeding, obstruction or
              cancer progression to worsen. Timely diagnosis improves treatment
              choices and long-term outcomes.
            </p>
            <h3 className="mt-8 text-2xl font-bold">
              Advanced technology and infrastructure
            </h3>
            <div className="mt-5 grid gap-3">
              {technology.map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                Frequently asked questions
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Answers before your gastro consultation
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-slate-200 p-6 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    {faq.question}
                    <span className="text-2xl text-blue-800 group-open:hidden">
                      +
                    </span>
                    <span className="hidden text-2xl text-blue-800 group-open:inline">
                      -
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              SEO authority section
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Best gastro medicine hospital in Lucknow - Myra City Hospital
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a leading center for gastro medicine in
              Lucknow, offering advanced diagnosis and treatment for digestive
              and liver diseases. With expert doctors, modern technology and a
              patient-focused approach, we support accurate diagnosis, effective
              treatment and long-term health improvement.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              For patients searching for a liver specialist, gastroenterologist,
              endoscopy center, colonoscopy test, ERCP procedure, EUS test or
              chronic acidity treatment in Lucknow, this department connects the
              full digestive care pathway in one hospital.
            </p>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-[#f6f9fc] p-6">
            <h3 className="text-2xl font-bold">Related gastro services</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition hover:border-blue-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                Local gastro care
              </p>
              <p className="mt-3 leading-7 text-slate-600">{hospital.address}</p>
              <p className="mt-2 font-semibold text-slate-900">
                {hospital.openingHours}
              </p>
              <a
                href={hospital.phoneHref}
                className="mt-4 inline-block text-sm font-semibold text-blue-800"
              >
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-blue-950">
        <div className="mx-auto max-w-7xl px-4 py-14 text-white md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Book gastro consultation in Lucknow
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Get expert care for digestive and liver health
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-blue-100">
                Do not ignore persistent acidity, abdominal pain, liver
                concerns, bleeding, jaundice or unexplained weight loss. Early
                diagnosis can prevent serious complications.
              </p>
            </div>
            <a
              href={hospital.phoneHref}
              className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-950"
            >
              Call {hospital.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
