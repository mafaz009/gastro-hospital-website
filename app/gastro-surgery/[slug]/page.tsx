import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gastroSurgeryServices } from "@/app/data/gastroSurgery";
import { hospital, siteUrl } from "@/app/data/site";

type SurgeryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const gallbladderSlug = "gallbladder-surgery-lucknow";

const gallbladderFaqs = [
  {
    question: "How long does gallbladder surgery take?",
    answer:
      "Laparoscopic gallbladder surgery usually takes around 45-90 minutes, depending on the complexity of the condition.",
  },
  {
    question: "Is laparoscopic gallbladder surgery painful?",
    answer:
      "Pain is usually minimal and manageable with medication because laparoscopic surgery uses small incisions.",
  },
  {
    question: "How long is recovery after gallbladder surgery?",
    answer:
      "Many patients return to normal activities within 5-7 days, though recovery can vary based on the patient and surgical complexity.",
  },
  {
    question: "Can gallstones come back after surgery?",
    answer:
      "No. Gallstones do not return after the gallbladder is removed, because the organ where stones form has been removed.",
  },
  {
    question: "Is surgery necessary for gallstones?",
    answer:
      "Not always. Surgery is usually recommended when gallstones cause pain, infection, blockage, pancreatitis, or repeated symptoms.",
  },
];

const gallbladderProblems = [
  "Gallstones (cholelithiasis)",
  "Gallbladder inflammation (cholecystitis)",
  "Gallbladder infection",
  "Bile duct obstruction",
  "Pancreatitis caused by gallstones",
  "Gallbladder polyps or tumors",
];

const gallbladderSymptoms = [
  "Severe pain in the upper right abdomen",
  "Pain after eating fatty foods",
  "Nausea or vomiting",
  "Bloating or indigestion",
  "Fever with abdominal pain",
  "Jaundice or yellowing of skin and eyes",
];

const whyChooseGallbladder = [
  "Performed by expert GI surgeon Dr. A K Bansal",
  "Advanced laparoscopic and minimally invasive techniques",
  "High success focus with low complication risk",
  "Modern operation theatres and equipment",
  "Experienced surgical and anesthesia team",
  "Post-operative ICU support if required",
];

const surgeonExpertise = [
  "Laparoscopic cholecystectomy",
  "Complex gallbladder disease",
  "Liver and bile duct surgery",
  "GI cancer surgery",
  "Minimally invasive procedures",
  "Hepatopancreatobiliary surgery",
];

const surgeryRelatedLinks = [
  {
    label: "ERCP in Lucknow",
    href: "/gastro-medicine/ercp-in-lucknow",
  },
  {
    label: "Colonoscopy in Lucknow",
    href: "/gastro-medicine/colonoscopy-in-lucknow",
  },
  {
    label: "Endoscopy in Lucknow",
    href: "/gastro-medicine/endoscopy-in-lucknow",
  },
  {
    label: "Fatty Liver Treatment in Lucknow",
    href: "/gastro-medicine/fatty-liver-treatment-lucknow",
  },
  {
    label: "GERD Treatment in Lucknow",
    href: "/gastro-medicine/acid-reflux-treatment-lucknow",
  },
  {
    label: "Gastro Surgery Services",
    href: "/gastro-surgery",
  },
  {
    label: "Liver Disease Treatment in Lucknow",
    href: "/gastro-medicine/liver-disease-treatment-lucknow",
  },
];

export async function generateStaticParams() {
  return gastroSurgeryServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: SurgeryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = gastroSurgeryServices.find((item) => item.slug === slug);

  if (!service) return {};

  if (slug === gallbladderSlug) {
    return {
      title:
        "Gallbladder Surgery in Lucknow | Laparoscopic Cholecystectomy | Myra City Hospital",
      description:
        "Looking for gallbladder surgery in Lucknow? Myra City Hospital offers advanced laparoscopic gallbladder removal by expert Dr. A K Bansal. Book consultation today.",
      keywords: [
        "gallbladder surgery in Lucknow",
        "laparoscopic gallbladder surgery Lucknow",
        "laparoscopic cholecystectomy Lucknow",
        "gallstone surgery Lucknow",
        "Dr. A K Bansal",
        "GI surgeon in Lucknow",
      ],
      alternates: {
        canonical: `/gastro-surgery/${gallbladderSlug}`,
      },
      openGraph: {
        title: "Gallbladder Surgery in Lucknow | Myra City Hospital",
        description:
          "Advanced laparoscopic gallbladder removal and gallstone surgery by Dr. A K Bansal at Myra City Hospital.",
        url: `${siteUrl}/gastro-surgery/${gallbladderSlug}`,
        type: "article",
      },
    };
  }

  return {
    title: `${service.title} | Myra City Hospital`,
    description: service.description,
    alternates: {
      canonical: `/gastro-surgery/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Myra City Hospital`,
      description: service.description,
      url: `${siteUrl}/gastro-surgery/${service.slug}`,
      type: "article",
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function GallbladderSurgeryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        medicalSpecialty: [
          "Gastrointestinal Surgery",
          "Hepatobiliary Surgery",
          "Laparoscopic Surgery",
        ],
      },
      {
        "@type": "Physician",
        name: "Dr. A K Bansal",
        medicalSpecialty: "Gastrointestinal Surgery",
        worksFor: {
          "@id": `${siteUrl}/#hospital`,
        },
      },
      {
        "@type": "SurgicalProcedure",
        name: "Gallbladder Surgery in Lucknow",
        procedureType: "Laparoscopic Cholecystectomy",
        bodyLocation: "Gallbladder",
        provider: {
          "@id": `${siteUrl}/#hospital`,
        },
        performer: {
          "@type": "Physician",
          name: "Dr. A K Bansal",
          medicalSpecialty: "Gastrointestinal Surgery",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/gastro-surgery/${gallbladderSlug}#webpage`,
        url: `${siteUrl}/gastro-surgery/${gallbladderSlug}`,
        name: "Gallbladder Surgery in Lucknow | Laparoscopic Gallbladder Removal",
        about: {
          "@type": "SurgicalProcedure",
          name: "Laparoscopic Cholecystectomy",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Gallbladder Surgery in Lucknow",
            item: `${siteUrl}/gastro-surgery/${gallbladderSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: gallbladderFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
              <Link href="/gastro-surgery" className="hover:text-blue-800">Gastro Surgery</Link>
              <span className="mx-2">/</span>
              <span>Gallbladder Surgery in Lucknow</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Laparoscopic gallbladder removal at Myra City Hospital
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Gallbladder Surgery in Lucknow by Expert GI Surgeon
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              If you are searching for gallbladder surgery in Lucknow, Myra City
              Hospital offers safe, advanced, and minimally invasive gallbladder
              removal procedures performed by experienced specialists.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Led by Dr. A K Bansal, our GI and hepatobiliary surgery team
              specializes in laparoscopic keyhole gallbladder surgery for faster
              recovery, minimal pain, and strong clinical outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950">
                Book Consultation for Gallbladder Surgery
              </Link>
              <Link href="/gastro-surgery" className="rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-300">
                View Gastro Surgery Services
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-slate-300/70">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=85"
                alt="Laparoscopic gallbladder surgery consultation at Myra City Hospital Lucknow"
                width={1200}
                height={860}
                priority
                className="h-[330px] w-full object-cover md:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg border border-slate-200 bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-slate-950">
                Advanced laparoscopic surgery with ICU backup
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hospital.address}</p>
              <a href={hospital.phoneHref} className="mt-3 inline-block text-sm font-semibold text-blue-800">
                Call {hospital.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-9 text-center md:grid-cols-4 md:px-6">
          {[
            "Laparoscopic keyhole surgery",
            "Minimal pain and scarring",
            "Experienced GI surgeon",
            "Post-operative ICU support if needed",
          ].map((item) => (
            <div key={item} className="md:border-r md:last:border-r-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="What is gallbladder surgery?"
            title="Surgical removal of the gallbladder when stones or inflammation cause problems"
            description="Gallbladder surgery, also called cholecystectomy, removes the gallbladder when gallstones, infection, inflammation, or complications cause repeated pain or risk."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <p className="leading-7 text-slate-600">
              At Myra City Hospital, laparoscopic gallbladder surgery is performed
              through small incisions using advanced instruments. Compared with
              traditional open surgery, this approach usually supports faster
              healing, less pain, minimal scarring, and a shorter hospital stay.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyChooseGallbladder.map((item) => (
                <div key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <SectionIntro
              eyebrow="Problems treated"
              title="Common gallbladder conditions that may need surgery"
              description="Surgery is usually considered when gallbladder disease causes pain, infection, blockage, pancreatitis, or suspicious findings."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {gallbladderProblems.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Symptoms"
              title="When should you consult a gallbladder surgeon?"
              description="Early treatment can prevent severe infection, pancreatitis, bile duct blockage, and emergency surgery."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {gallbladderSymptoms.map((item) => (
                <li key={item} className="rounded-lg bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Types of gallbladder surgery"
            title="Laparoscopic surgery is the preferred approach for most patients"
            description="Your surgeon chooses the safest method based on imaging, inflammation, previous surgery, complications, and overall health."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">
                Laparoscopic Gallbladder Surgery
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Also called keyhole surgery, this is the most common and preferred
                method. It uses small incisions and usually offers less pain,
                faster recovery, minimal scarring, and a short hospital stay.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
              <h3 className="text-xl font-semibold">Open Gallbladder Surgery</h3>
              <p className="mt-3 leading-7 text-slate-600">
                In rare or complicated cases, open surgery may be required for
                safety, severe infection, difficult anatomy, or complex surgical
                history.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Meet the expert
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Dr. A K Bansal</h2>
            <p className="mt-2 text-blue-100">
              GI and Liver Transplant Surgeon | Gallbladder Surgery Specialist
            </p>
            <p className="mt-5 leading-7 text-blue-100">
              Dr. A K Bansal is a highly experienced surgeon specializing in
              advanced gastrointestinal and hepatobiliary surgery, including
              laparoscopic gallbladder removal, bile duct surgery, liver surgery,
              and complex abdominal procedures.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {surgeonExpertise.map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionIntro
            eyebrow="Procedure journey"
            title="Gallbladder surgery: step by step"
            description="A clear pre-operative plan, experienced surgical team, and recovery guidance help patients move safely from diagnosis to normal activity."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Before surgery",
                points: [
                  "Ultrasound or imaging tests",
                  "Blood tests and pre-operative evaluation",
                  "Fasting before surgery",
                  "Anesthesia consultation",
                ],
              },
              {
                title: "During surgery",
                points: [
                  "Performed under general anesthesia",
                  "Small incisions made in the abdomen",
                  "Gallbladder removed using laparoscopic tools",
                  "Procedure duration usually 45-90 minutes",
                ],
              },
              {
                title: "After surgery",
                points: [
                  "Hospital recovery for 1-2 days or same-day discharge in selected cases",
                  "Mild pain controlled with medication",
                  "Return to normal activities often within 5-7 days",
                ],
              },
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
          {[
            {
              title: "Is surgery safe?",
              text: "Yes. Laparoscopic gallbladder surgery is commonly performed with a high success rate when done by experienced surgeons.",
            },
            {
              title: "Life after removal",
              text: "You can live a normal life without a gallbladder. Temporary dietary adjustments may be needed, but long-term issues are rare.",
            },
            {
              title: "Benefits of early surgery",
              text: "Early treatment can prevent infection, pancreatitis, bile duct blockage, emergency surgery, and prolonged recovery.",
            },
            {
              title: "Cost in Lucknow",
              text: "Cost depends on laparoscopic or open surgery, disease complexity, hospital stay, anesthesia, and recovery needs.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <SectionIntro
            eyebrow="Patient testimonials"
            title="Trusted gallbladder surgery care in Lucknow"
            description="Patients choose Myra City Hospital for careful surgical planning, clear communication, and recovery support."
          />
          <div className="grid gap-4">
            {[
              "Smooth surgery and quick recovery.",
              "Best hospital for gallbladder surgery in Lucknow.",
              "Experienced surgeon and excellent care.",
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-slate-200 bg-[#fbfdff] p-5 text-base italic leading-7 text-slate-700">
                &quot;{quote}&quot;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Gallbladder surgery questions answered
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
            {gallbladderFaqs.map((faq) => (
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.85fr] md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Best gallbladder surgery in Lucknow
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Myra City Hospital for laparoscopic cholecystectomy
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Myra City Hospital is a trusted center for gallbladder surgery in
              Lucknow, offering advanced laparoscopic procedures with expert
              surgical care, modern operation theatres, advanced technology, and
              patient-focused recovery planning.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our hospital combines GI surgical expertise, hepatobiliary care,
              anesthesia support, ICU backup, and transparent communication to
              deliver safe and effective treatment for gallbladder disease.
            </p>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-[#fbfdff] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Related gastro services</h2>
            <div className="mt-5 grid gap-3">
              {surgeryRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 text-sm font-semibold text-slate-700 transition hover:text-blue-800">
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
              Book gallbladder surgery consultation
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Do not ignore gallbladder symptoms
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Early treatment can prevent infection, pancreatitis, bile duct
              blockage, and emergency surgery.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <a href={hospital.phoneHref} className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-blue-900">
              Call {hospital.phone}
            </a>
            <Link href="/gastro-surgery" className="rounded-md border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white">
              View Surgery Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GenericSurgeryPage({
  service,
}: {
  service: (typeof gastroSurgeryServices)[number];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        url: siteUrl,
        telephone: hospital.phone,
        openingHours: hospital.openingHoursSchema,
        medicalSpecialty: "Gastrointestinal Surgery",
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
      },
      {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-slate-950">
      <JsonLd data={schema} />
      <section className="border-b bg-[#eef5f9]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Gastro surgery in Lucknow
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            {service.content.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-appointment" className="rounded-md bg-blue-800 px-6 py-3 text-center text-sm font-semibold text-white">
              Book Appointment
            </Link>
            <Link href="/gastro-surgery" className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900">
              View Surgery Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-[1fr_0.65fr] md:px-6">
        <article className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">
              Best {service.title.replace(" in Lucknow", "")} in Lucknow
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Myra City Hospital provides coordinated surgical assessment,
              diagnostics, operation theatre support, ICU backup, and recovery
              planning for gastro surgery patients in Lucknow.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Symptoms</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              {service.content.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Treatment</h2>
            <p className="mt-3 leading-7 text-slate-600">{service.content.treatment}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200">
              {service.content.faqs.map((faq) => (
                <div key={faq.q} className="p-5">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
        <aside className="h-fit rounded-lg border border-slate-200 bg-[#fbfdff] p-6">
          <h2 className="text-xl font-semibold">Why Choose Myra City Hospital?</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
            {service.content.whyChoose.map((item) => (
              <li key={item} className="rounded-md bg-white p-3">
                {item}
              </li>
            ))}
          </ul>
          <Link href="/book-appointment" className="mt-6 block rounded-md bg-blue-800 px-5 py-3 text-center text-sm font-semibold text-white">
            Request Surgical Opinion
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default async function GastroSurgeryDetailPage({
  params,
}: SurgeryPageProps) {
  const { slug } = await params;
  const service = gastroSurgeryServices.find((item) => item.slug === slug);

  if (!service) return notFound();

  if (slug === gallbladderSlug) {
    return <GallbladderSurgeryPage />;
  }

  return <GenericSurgeryPage service={service} />;
}
