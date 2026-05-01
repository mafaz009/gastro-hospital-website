import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewSlider from "./components/ReviewSlider";
import { hospital, siteUrl } from "./data/site";

const heroHighlights = [
  "Advanced Endoscopy",
  "Expert Gastro Team",
  "World-Class Infrastructure",
  "Patient First Approach",
];

const trustStats = [
  { value: "10,000+", label: "Happy Patients" },
  { value: "15+", label: "Years of Experience" },
  { value: "5000+", label: "Endoscopic Procedures" },
  { value: "100%", label: "Patient Safety" },
];

const coreStrengths = [
  "Early diagnosis through advanced diagnostic tools",
  "Minimally invasive and high-precision surgical procedures",
  "Multidisciplinary care across gastro medicine, surgery, and ICU",
  "Ethical, transparent treatment protocols",
];

const doctors = [
  {
    name: "Dr. Juned Ahmad Khan",
    role: "Gastro Medicine, Liver, Pancreas and Endoscopy Specialist",
    qualification: "MD, DM, ILBS-New Delhi",
    description:
      "Expert in advanced gastroenterology, hepatology, pancreatic disorders and therapeutic endoscopic procedures.",
    image: "/images/best-gastro-doctor-lucknow-juned-khan.png",
    imageAlt:
      "Dr. Juned Ahmad Khan, gastroenterologist and liver specialist at Myra City Hospital Lucknow",
    badges: ["Gastroenterology", "Hepatology", "Advanced Endoscopy"],
    expertise: ["ERCP, EUS and colonoscopy", "Fatty liver, GERD and pancreatitis", "GI bleeding and complex digestive diagnosis"],
    stats: ["Advanced endoscopy", "Liver specialist"],
    cta: "Book with Dr. Juned Ahmad Khan",
    initials: "JK",
  },
  {
    name: "Dr. A K Bansal",
    role: "GI, GI Oncology, HPB and Liver Transplant Surgeon",
    qualification: "MBBS, MS, MCh (SGPGI)",
    description:
      "Senior surgical specialist for complex gastrointestinal, hepatobiliary, liver, pancreatic and minimally invasive procedures.",
    image: "/images/dr-a-k-bansal-gastro-surgeon-lucknow-portrait.webp",
    imageAlt:
      "Dr. A K Bansal, gastro surgeon and HPB specialist in Lucknow",
    badges: [
      "GI Surgery",
      "HPB Surgery",
      "GI Cancer Surgery",
      "Laparoscopic Surgery",
      "GI Robotic Surgery",
    ],
    expertise: ["Gallbladder, hernia and colorectal surgery", "GI oncology and cancer surgery", "Liver, pancreas and bile duct surgery"],
    stats: ["Gastro Surgeon", "15+ years", "5000+ surgeries"],
    cta: "Book with Dr. A K Bansal",
    initials: "AB",
  },
  {
    name: "Dr. Amir",
    role: "Critical Care Specialist",
    qualification: "Critical Care and ICU Medicine",
    description:
      "Specialist in intensive care medicine, emergency stabilization and life-saving organ support for critically ill patients.",
    badges: ["Critical Care", "ICU", "Emergency Support"],
    expertise: ["Severe abdominal emergencies", "Ventilator and organ support", "Post-surgical ICU monitoring"],
    stats: ["24/7 ICU", "Emergency care"],
    cta: "Book critical care consultation",
    initials: "DA",
  },
];

const diagnosticServices = [
  {
    title: "Upper Endoscopy (EGD)",
    description:
      "A minimally invasive camera-based procedure to examine the esophagus, stomach, and upper small intestine.",
    href: "/gastro-medicine/upper-endoscopy-lucknow",
  },
  {
    title: "Colonoscopy",
    description:
      "Detailed examination of the colon and rectum to detect polyps, inflammation, bleeding causes, or colorectal cancer.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "Capsule Endoscopy",
    description:
      "A pill-sized camera that helps detect hidden small-intestine abnormalities.",
    href: "/gastro-medicine/capsule-endoscopy-lucknow",
  },
  {
    title: "Endoscopic Ultrasound (EUS)",
    description:
      "Endoscopy combined with ultrasound imaging to evaluate the pancreas, bile ducts, and nearby structures.",
    href: "/gastro-medicine/eus-lucknow",
  },
  {
    title: "Biopsies",
    description:
      "Tissue sampling from organs such as the liver or stomach for precise laboratory diagnosis.",
    href: "/gastro-medicine/gi-biopsy-lucknow",
  },
  {
    title: "Motility Studies",
    description:
      "Tests such as esophageal manometry and pH monitoring for reflux and swallowing concerns.",
    href: "/gastro-medicine/motility-studies-lucknow",
  },
];

const therapeuticProcedures = [
  {
    title: "Polypectomy",
    description:
      "Removal of polyps during colonoscopy to reduce future colon cancer risk.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    title: "ERCP",
    description:
      "Endoscopic treatment to remove gallstones or relieve bile duct obstruction.",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    title: "GI Bleeding Control",
    description:
      "Advanced endoscopic techniques such as variceal banding and injection therapy.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    title: "Stricture Dilation",
    description:
      "Widening narrowed areas in the digestive tract for improved swallowing or passage.",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
];

const medicalManagement = [
  {
    title: "Inflammatory Bowel Disease",
    description: "Treatment planning for Crohn disease and ulcerative colitis.",
    href: "/gastro-medicine/ibs-treatment-lucknow",
  },
  {
    title: "Hepatology and Liver Care",
    description: "Management of fatty liver, hepatitis, cirrhosis, and liver failure.",
    href: "/gastro-medicine/liver-disease-treatment-lucknow",
  },
  {
    title: "Functional Digestive Disorders",
    description: "Treatment of IBS, GERD, chronic constipation, acidity, and bloating.",
    href: "/gastro-medicine/ibs-treatment-lucknow",
  },
  {
    title: "GI Oncology Support",
    description:
      "Early detection, staging, and coordinated management for digestive tract cancers.",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
];

const surgeryServices = [
  {
    title: "Esophageal Surgery",
    description:
      "Treatment for esophageal cancer, achalasia, and severe GERD through procedures such as fundoplication.",
    href: "/gastro-surgery/laparoscopic-gastro-surgery-lucknow",
  },
  {
    title: "Stomach and Duodenum Surgery",
    description:
      "Surgical care for gastric cancer, GIST tumors, and complicated ulcers.",
    href: "/gastro-surgery/laparoscopic-gastro-surgery-lucknow",
  },
  {
    title: "Colorectal Surgery",
    description:
      "Cancer resections, J-pouch surgery for ulcerative colitis, and fistula management.",
    href: "/gastro-surgery/colorectal-surgery-lucknow",
  },
  {
    title: "Bariatric and Metabolic Surgery",
    description:
      "Gastric bypass and sleeve gastrectomy for obesity and metabolic disease care.",
    href: "/gastro-surgery/bariatric-surgery-lucknow",
  },
  {
    title: "Hepatopancreatobiliary Surgery",
    description:
      "Highly specialized liver, pancreas, gallbladder, and bile duct surgery.",
    href: "/gastro-surgery/gallbladder-surgery-lucknow",
  },
  {
    title: "Redo and Complex Abdominal Surgery",
    description:
      "Revision surgery, complex hernia repair, fistula care, adhesions, bowel obstruction, and trauma support.",
    href: "/gastro-surgery/hernia-surgery-lucknow",
  },
];

const icuServices = [
  "MICU for severe infections, sepsis, and organ failure",
  "SICU for post-surgical critical care",
  "CCU/CICU for cardiac emergencies",
  "Neuro ICU for brain and spine emergencies",
  "NICU and PICU for neonatal and pediatric care",
  "Transplant ICU for post-operative transplant care",
];

const organSupport = [
  "Mechanical ventilation and respiratory support",
  "CRRT continuous dialysis for kidney failure",
  "ECMO support for severe heart and lung failure",
  "Hemodynamic monitoring for critical stability",
  "Airway procedures such as tracheostomy and bronchoscopy",
  "ECMO-enabled transport, Tele-ICU monitoring, rehabilitation, and nutrition therapy",
];

const whyChoose = [
  "One of the best gastro hospitals in Lucknow",
  "Highly experienced specialists",
  "Advanced diagnostic and surgical technology",
  "Multidisciplinary care approach",
  "High patient success rates",
  "Ethical and patient-focused treatment",
];

const faqs = [
  {
    question: "What conditions are treated at Myra City Hospital's gastroenterology department?",
    answer:
      "We treat acidity, GERD, abdominal pain, constipation, diarrhea, IBS, IBD, fatty liver, hepatitis, cirrhosis, pancreatitis, gallbladder problems, GI bleeding, swallowing difficulty, and digestive cancers.",
  },
  {
    question: "When should I visit a gastroenterologist in Lucknow?",
    answer:
      "You should consult a gastroenterologist if you have persistent acidity, stomach pain, vomiting, blood in stool, black stools, unexplained weight loss, jaundice, chronic constipation, diarrhea, or difficulty swallowing.",
  },
  {
    question: "Does Myra City Hospital offer liver disease treatment?",
    answer:
      "Yes. We provide diagnosis and treatment for fatty liver disease, hepatitis, cirrhosis, liver failure, jaundice, abnormal liver function tests, and liver-related complications.",
  },
  {
    question: "Is colonoscopy painful?",
    answer:
      "Colonoscopy is usually performed with sedation or comfort-focused care, so most patients feel minimal discomfort. It helps detect polyps, inflammation, bleeding, and colorectal cancer early.",
  },
  {
    question: "Is endoscopy safe?",
    answer:
      "Upper GI endoscopy is a commonly performed diagnostic procedure. At Myra City Hospital, it is done under medical supervision using proper safety protocols.",
  },
  {
    question: "What is ERCP used for?",
    answer:
      "ERCP is used to diagnose and treat bile duct and pancreatic duct problems. It can help remove bile duct stones, place stents, and manage blockage or infection.",
  },
  {
    question: "Does Myra City Hospital provide treatment for fatty liver?",
    answer:
      "Yes. We offer complete fatty liver evaluation, liver function testing, lifestyle guidance, medical management, and monitoring to prevent progression.",
  },
  {
    question: "Do you treat piles, fissure, and fistula?",
    answer:
      "Yes. Myra City Hospital provides evaluation and treatment for piles, fissure, fistula, rectal bleeding, and other anorectal conditions.",
  },
  {
    question: "Do you provide GI cancer care?",
    answer:
      "Yes. We support diagnosis, staging, surgical evaluation, and multidisciplinary care for cancers of the stomach, colon, rectum, pancreas, liver, gallbladder, and bile duct.",
  },
  {
    question: "Who are the main doctors at Myra City Hospital?",
    answer:
      "Our key specialists include Dr. Juned Ahmad Khan for gastro medicine, Dr. A K Bansal for GI and liver transplant surgery, and Dr. Amir for critical care.",
  },
  {
    question: "Does the hospital provide emergency gastro care?",
    answer:
      "Yes. Myra City Hospital provides care for emergency conditions such as GI bleeding, severe abdominal pain, acute pancreatitis, liver failure, intestinal obstruction, and post-surgical complications.",
  },
  {
    question: "Is ICU support available for gastro and liver patients?",
    answer:
      "Yes. Our critical care team provides ICU monitoring and advanced organ support for serious gastro, liver, surgical, and emergency conditions.",
  },
  {
    question: "Does Myra City Hospital offer laparoscopic GI surgery?",
    answer:
      "Yes. We offer advanced surgical care, including minimally invasive and laparoscopic procedures for selected gastrointestinal and hepatobiliary conditions.",
  },
  {
    question: "How do I book an appointment at Myra City Hospital?",
    answer:
      "You can book an appointment by calling the hospital, visiting the hospital directly, or using the website appointment form.",
  },
  {
    question: "Why choose Myra City Hospital for gastro care in Lucknow?",
    answer:
      "Myra City Hospital combines experienced gastroenterologists, GI surgeons, critical care specialists, advanced diagnostics, endoscopy services, ICU support, and patient-focused care under one roof.",
  },
];

const localAreas = [
  "Gomti Nagar",
  "Indira Nagar",
  "Aliganj",
  "Hazratganj",
  "Mahanagar",
  "Chinhat",
  "Jankipuram",
  "Aminabad",
  "Vikas Nagar",
  "Faizabad Road",
];

const appointmentReasons = [
  "Persistent acidity, GERD or chest burning",
  "Abdominal pain, bloating or vomiting",
  "Fatty liver, jaundice or abnormal LFT",
  "Endoscopy, colonoscopy, ERCP or EUS",
  "Gallbladder, hernia or GI surgery opinion",
  "Emergency gastro or ICU support",
];

const contactCards = [
  {
    title: "Call for appointment",
    text: hospital.phone,
    href: hospital.phoneHref,
    action: "Call now",
  },
  {
    title: "24/7 emergency care",
    text: "Critical gastro, liver and ICU support",
    href: hospital.phoneHref,
    action: "Emergency call",
  },
  {
    title: "Visit hospital",
    text: hospital.address,
    href: "https://www.google.com/maps/search/?api=1&query=Myra%20City%20Hospital%20B-167%20Daliganj%20Crossing%20Rd%20Lucknow",
    action: "Open map",
  },
];

export const metadata: Metadata = {
  title: "Best Gastro Hospital in Lucknow | Myra City Hospital",
  description:
    "Myra City Hospital is the best gastro hospital in Lucknow offering expert gastroenterology, liver treatment, GI surgery and ICU care. Book appointment today.",
  keywords: [
    "best gastro hospital in Lucknow",
    "gastro hospital in Lucknow",
    "gastroenterology hospital in Lucknow",
    "liver specialist in Lucknow",
    "GI surgery in Lucknow",
    "endoscopy in Lucknow",
    "colonoscopy in Lucknow",
    "critical care hospital in Lucknow",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Gastro Hospital in Lucknow | Myra City Hospital",
    description:
      "Advanced gastroenterology, liver treatment, GI surgery, endoscopy, colonoscopy, and 24/7 critical care in Lucknow.",
    url: siteUrl,
    siteName: "Myra City Hospital",
    type: "website",
  },
};

function TextCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-blue-800">
        Learn more
      </span>
    </Link>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: "Myra City Hospital",
        url: siteUrl,
        description:
          "Advanced gastro, liver, GI surgery, and critical care hospital in Lucknow.",
        medicalSpecialty: [
          "Gastroenterology",
          "Hepatology",
          "Gastrointestinal Surgery",
          "Critical Care",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        areaServed: localAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        department: [
          {
            "@type": "MedicalOrganization",
            name: "Myra City Hospital Gastroenterology",
            medicalSpecialty: "Gastroenterology",
          },
          {
            "@type": "MedicalOrganization",
            name: "Myra City Hospital GI Surgery",
            medicalSpecialty: "Gastrointestinal Surgery",
          },
          {
            "@type": "MedicalOrganization",
            name: "Myra City Hospital Critical Care",
            medicalSpecialty: "Critical Care",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Best Gastro Hospital in Lucknow | Myra City Hospital",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Myra City Hospital",
        url: siteUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      ...doctors.map((doctor) => ({
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.role,
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      })),
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden bg-[#f4f9fd]">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#f8fbff_0%,#f2f8fd_38%,#e4f0f8_68%,#f8fbff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(255,255,255,0.98)_0,rgba(255,255,255,0.78)_12%,rgba(255,255,255,0)_30%),radial-gradient(circle_at_84%_48%,rgba(184,213,231,0.42)_0,rgba(255,255,255,0)_32%)]" />
        <div className="absolute left-0 top-0 h-full w-[46%] bg-[linear-gradient(90deg,rgba(255,255,255,0.78),rgba(255,255,255,0))]" />
        <div className="absolute right-[9%] top-20 hidden h-72 w-72 rounded-full border-[18px] border-white/70 shadow-[0_0_90px_rgba(30,64,175,0.12)] lg:block" />

        <div className="relative mx-auto max-w-[1480px] px-4 pb-6 pt-20 md:px-8 lg:px-12 lg:pb-7 lg:pt-20">
          <div className="grid min-h-[560px] items-center gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="relative z-10 pb-0 lg:-mt-8 lg:pb-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-blue-900 shadow-sm ring-1 ring-blue-100 backdrop-blur md:text-sm">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-blue-800">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-5" />
                  </svg>
                </span>
                Lucknow&apos;s Most Trusted
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.06] tracking-normal text-blue-950 md:text-6xl xl:text-7xl">
                Advanced Gastro Care.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Comprehensive care for digestive, liver, and pancreatic
                disorders with advanced technology and expert
                gastroenterologists at Myra City Hospital, Lucknow.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-950/20 transition hover:bg-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  Book Appointment
                </Link>
                <Link
                  href={hospital.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-white/75 px-5 py-3 text-sm font-semibold text-blue-900 shadow-sm backdrop-blur transition hover:bg-white"
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
                  Call Now
                </Link>
              </div>

              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 text-sm font-medium text-blue-950 sm:grid-cols-4">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/75 text-blue-800 shadow-sm ring-1 ring-blue-100">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2v20" />
                        <path d="M2 12h20" />
                        <path d="m5 5 14 14" />
                        <path d="m19 5-14 14" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px] lg:min-h-[600px]">
              <div className="absolute inset-x-[-7%] bottom-10 top-0 overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/55 shadow-[0_35px_95px_rgba(15,40,84,0.14)] lg:inset-x-0 lg:bottom-14">
                <Image
                  src="/images/premium-hospital-hero-backdrop.png"
                  alt=""
                  aria-hidden="true"
                  width={1535}
                  height={1024}
                  priority
                  sizes="(min-width: 1280px) 760px, (min-width: 1024px) 56vw, 100vw"
                  className="h-full w-full scale-105 object-cover object-[70%_48%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,249,253,0.82)_0%,rgba(255,255,255,0.38)_32%,rgba(255,255,255,0.04)_68%,rgba(244,249,253,0.26)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_13%,rgba(255,255,255,0.62)_0,rgba(255,255,255,0)_22%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f4f9fd] via-[#f4f9fd]/78 to-transparent" />
              </div>
              <div className="absolute bottom-9 left-[48%] h-20 w-[44%] -translate-x-1/2 rounded-[50%] bg-blue-950/12 blur-2xl lg:bottom-11" />
              <Image
                src="/images/dr-juned-khan-gastro-lucknow-up.webp"
                alt="Dr. Juned Ahmad Khan, gastroenterologist and liver specialist at Myra City Hospital Lucknow"
                width={1600}
                height={1850}
                priority
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 54vw, 100vw"
                className="absolute bottom-0 left-1/2 h-[520px] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_48px_rgba(15,23,42,0.18)] sm:h-[580px] lg:left-[46%] lg:h-[650px]"
              />

              <div className="absolute right-0 top-[72%] z-10 w-[min(88vw,380px)] -translate-y-1/2 rounded-2xl border border-white/80 bg-white/90 px-6 py-4 text-left shadow-2xl shadow-blue-950/18 ring-1 ring-blue-100 backdrop-blur lg:right-0">
                <p className="text-base font-extrabold leading-tight text-blue-950">
                  Dr. Juned Ahmad Khan
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-xs font-semibold text-blue-700">
                    MD, DM, ILBS-New Delhi
                  </p>
                  <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Gastro &amp; Liver Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 -mt-14 overflow-hidden rounded-3xl bg-blue-950 shadow-2xl shadow-blue-950/25 lg:-mt-20">
            <div className="grid lg:grid-cols-[1.2fr_4fr]">
              <div className="relative min-h-[155px] overflow-hidden bg-[radial-gradient(circle_at_40%_45%,rgba(96,165,250,0.62),rgba(37,99,235,0.45)_32%,rgba(12,31,68,0.98)_74%)] p-6 text-white">
                <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full border border-white/20" />
                <div className="absolute left-12 top-12 h-20 w-20 rounded-full bg-blue-400/35 blur-xl" />
                <p className="relative text-sm font-semibold">Specialized in</p>
                <p className="relative mt-2 max-w-64 text-xl font-bold leading-tight">
                  Gastro, Liver &amp; Pancreatic Care
                </p>
                <p className="relative mt-3 max-w-64 text-sm leading-6 text-blue-100">
                  Advanced diagnosis. Accurate treatment. Better outcomes.
                </p>
              </div>
              <div className="grid divide-y divide-white/20 text-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="px-7 py-7 text-center">
                    <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full border border-white/35 text-white">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2Z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="mt-2 text-base text-blue-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 px-2 py-5 text-blue-950 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm leading-6">{hospital.address}</p>
            </div>
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.71a16 16 0 0 0 4.29 4.29l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
              </svg>
              <p className="text-sm leading-6">
                <Link href={hospital.phoneHref}>{hospital.phone}</Link>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <p className="text-sm leading-6">{hospital.openingHours}</p>
            </div>
            <div className="flex items-start gap-4">
              <svg
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-5" />
              </svg>
              <p className="text-sm leading-6">
                Cashless facility and emergency support available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              About Myra City Hospital
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Leading Center for Gastroenterology and Digestive Health in Lucknow
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital offers integrated care across medical, surgical,
              and intensive care disciplines. Our approach combines evidence-based
              medicine, modern infrastructure, and patient-centered care to deliver
              superior outcomes.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We manage both common digestive issues and complex gastrointestinal
              and hepatobiliary disorders with tailored treatment plans based on
              clinical best practices.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreStrengths.map((strength) => (
              <div key={strength} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5">
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                Our core specialties
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Comprehensive Gastro, GI Surgery and Critical Care Services
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Three expert-led departments work together to deliver accurate
                diagnosis, advanced treatment, and safer recovery for digestive and
                life-threatening conditions.
              </p>
            </div>
            <Link href="/gastro-medicine" className="text-sm font-semibold text-blue-800">
              Explore all services
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70"
              >
                <div className="relative min-h-72 bg-gradient-to-br from-blue-50 via-white to-slate-100">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain object-bottom"
                    />
                  ) : (
                    <div className="flex min-h-72 items-center justify-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-blue-900 text-4xl font-bold text-white shadow-xl shadow-blue-200">
                        {doctor.initials}
                      </div>
                    </div>
                  )}
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-800 shadow-sm">
                    {doctor.stats[0]}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                    {doctor.qualification}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{doctor.name}</h3>
                  <p className="mt-2 text-base font-semibold leading-7 text-slate-800">
                    {doctor.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {doctor.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {doctor.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-slate-200 bg-[#f6f9fc] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Key expertise
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {doctor.expertise.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {doctor.stats.map((stat) => (
                      <div
                        key={stat}
                        className="rounded-xl border border-blue-100 bg-white px-3 py-3 text-center text-sm font-bold text-blue-900"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/book-appointment"
                    className="mt-6 block rounded-md bg-blue-800 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
                  >
                    {doctor.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                1. Gastroenterology
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Digestive and Liver Care by Dr. Juned Ahmad Khan
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                The gastroenterology department provides diagnosis and treatment
                for disorders affecting the digestive system, liver, pancreas, and
                intestines.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/gastro-medicine" className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                  Gastro medicine
                </Link>
                <Link href="/gastro-medicine/liver-disease-treatment-lucknow" className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                  Liver treatment
                </Link>
                <Link href="/gastro-medicine/endoscopy-in-lucknow" className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                  Endoscopy
                </Link>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {diagnosticServices.map((service) => (
                <TextCard key={service.title} {...service} />
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Therapeutic Procedures</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Many gastrointestinal conditions can be treated during diagnostic
                procedures, helping patients move from diagnosis to relief faster.
              </p>
              <div className="mt-6 grid gap-4">
                {therapeuticProcedures.map((service) => (
                  <TextCard key={service.title} {...service} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Medical Management and Specialized Clinics
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Chronic and complex digestive conditions need long-term plans,
                follow-up, nutrition guidance, and specialist supervision.
              </p>
              <div className="mt-6 grid gap-4">
                {medicalManagement.map((service) => (
                  <TextCard key={service.title} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              2. Advanced Gastro and GI Surgery
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Expert Surgical Care by Dr. A K Bansal
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Our surgical department provides advanced operative care for complex
              gastrointestinal and hepatobiliary conditions when medical treatment
              alone is insufficient.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {surgeryServices.map((service) => (
              <TextCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="critical-care" className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              3. Critical Care and ICU
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              24/7 Life-Saving Support by Dr. Amir
            </h2>
            <p className="mt-5 leading-7 text-blue-100">
              The critical care department supports critically ill patients with
              intensive monitoring, advanced organ support, emergency intervention,
              and recovery-focused care.
            </p>
            <Link
              href="/book-appointment"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900"
            >
              Emergency Care Available 24/7
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="text-xl font-semibold">Specialized ICUs</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-blue-50">
                {icuServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="text-xl font-semibold">Advanced Organ Support</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-blue-50">
                {organSupport.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Why choose Myra City Hospital?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Patient Trust and Clinical Excellence
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Patients choose Myra City Hospital for specialist expertise,
              advanced procedures, multidisciplinary decisions, and transparent
              care in Lucknow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5">
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Patient testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Trusted by Patients Across Lucknow
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Patient trust is built through clear communication, specialist-led
              treatment, and coordinated care from diagnosis to recovery.
            </p>
          </div>

          <ReviewSlider />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Answers Before You Visit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Clear answers about gastro symptoms, endoscopy, colonoscopy, liver
              care, GI surgery, emergency support, and appointment booking.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl leading-none text-blue-800"
                  >
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              SEO ranking power section
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Best Gastro Hospital in Lucknow - Myra City Hospital
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              If you are searching for the best gastro hospital in Lucknow, Myra
              City Hospital is a trusted name for advanced digestive and liver
              care. With state-of-the-art infrastructure, expert doctors, and a
              patient-first approach, we provide complete solutions for
              gastrointestinal disorders.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              From common digestive disorders to complex surgeries and critical
              care, we ensure comprehensive and reliable healthcare services in
              Lucknow with accurate diagnosis, personalized treatment plans,
              minimally invasive procedures, and long-term disease management.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Serving Lucknow and Nearby Regions</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {localAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-slate-700">
              <Link href="/gastro-medicine">Gastroenterology</Link>
              <Link href="/gastro-surgery">GI Surgery and Liver Transplant</Link>
              <Link href="/#critical-care">Critical Care</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="appointment" className="scroll-mt-24 bg-[#eef5f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-blue-950 p-8 text-white md:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Book appointment in Lucknow
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Get expert gastro care today
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                Speak with Myra City Hospital for gastro medicine, liver care,
                endoscopy, colonoscopy, ERCP, EUS, GI surgery, and 24/7 critical
                care support.
              </p>

              <div className="mt-8 grid gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
                  >
                    <span className="block text-sm font-semibold uppercase tracking-wide text-blue-200">
                      {card.title}
                    </span>
                    <span className="mt-2 block text-base font-semibold leading-7 text-white">
                      {card.text}
                    </span>
                    <span className="mt-3 inline-block text-sm font-semibold text-blue-100">
                      {card.action}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                  Hospital hours
                </p>
                <p className="mt-2 text-2xl font-bold">{hospital.openingHours}</p>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Emergency care is available for severe abdominal pain, GI
                  bleeding, acute pancreatitis, jaundice complications, liver
                  failure and post-surgical concerns.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                Book consultation online
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Choose service, doctor, date and time
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Use the appointment page to select your concern, see the
                recommended specialist, pick a preferred date and time, and send
                the request to the hospital team for confirmation.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {appointmentReasons.map((reason) => (
                  <div
                    key={reason}
                    className="rounded-xl border border-slate-200 bg-[#f6f9fc] p-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    {reason}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
                  Smart appointment flow
                </p>
                <p className="mt-3 text-lg font-bold text-slate-950">
                  Gastro medicine, liver care and endoscopy route to Dr. Juned Ahmad Khan. Gastro surgery routes to Dr. A K Bansal.
                  Critical care routes to Dr. Amir.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The final appointment slot is confirmed by the hospital team
                  after your request is received.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-appointment"
                  className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
                >
                  Open Appointment Form
                </Link>
                <a
                  href={hospital.phoneHref}
                  className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300"
                >
                  Call {hospital.phone}
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Myra%20City%20Hospital%20B-167%20Daliganj%20Crossing%20Rd%20Lucknow"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300"
                >
                  Get Directions
                </a>
                <Link
                  href="/#critical-care"
                  className="rounded-md border border-blue-200 bg-blue-50 px-6 py-3 text-center text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
                >
                  Emergency Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
          <div>
            <h2 className="text-lg font-semibold">Myra City Hospital</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Best Gastro Hospital in Lucknow, Uttar Pradesh, providing advanced
              gastroenterology, GI surgery, liver care, and critical care.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Specialized care
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <Link href="/gastro-medicine">Gastroenterology</Link>
              <Link href="/gastro-surgery">GI Surgery and Liver Transplant</Link>
              <Link href="/#critical-care">Critical Care</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Popular searches
            </h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <Link href="/gastro-medicine/endoscopy-in-lucknow">Endoscopy in Lucknow</Link>
              <Link href="/gastro-medicine/upper-endoscopy-lucknow">Upper Endoscopy in Lucknow</Link>
              <Link href="/gastro-medicine/colonoscopy-in-lucknow">Colonoscopy in Lucknow</Link>
              <Link href="/gastro-medicine/ercp-in-lucknow">ERCP in Lucknow</Link>
              <Link href="/gastro-medicine/liver-disease-treatment-lucknow">Liver Treatment in Lucknow</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Location
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Serving patients across Lucknow and surrounding regions.
            </p>
            <Link
              href="/book-appointment"
              className="mt-5 inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-900"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
