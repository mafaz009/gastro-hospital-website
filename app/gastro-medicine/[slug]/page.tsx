import { notFound } from "next/navigation";
import { gastroMedicineServices } from "@/app/data/gastroMedicine";

export async function generateStaticParams() {
  return gastroMedicineServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const service = gastroMedicineServices.find(
    (s) => s.slug === slug
  );

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const service = gastroMedicineServices.find(
    (s) => s.slug === slug
  );

  if (!service) return notFound();

  return (
    <>
      {/* 🔥 JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Myra City Hospital",
              image: "https://yourdomain.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.8467",
                longitude: "80.9462",
              },
              url: "https://yourdomain.com",
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              name: service.title,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `What is ${service.title}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: service.description,
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I see a doctor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If symptoms persist for more than a few days or worsen, consult a specialist immediately.",
                  },
                },
              ],
            },
          ]),
        }}
      />

    <main className="max-w-4xl mx-auto p-6 space-y-6">

  {/* Breadcrumb */}
  <p className="text-sm text-gray-500">
    Home / Gastro Medicine / {service.title}
  </p>

  {/* H1 */}
  <h1 className="text-3xl font-bold">{service.title}</h1>

  {/* Intro */}
  <p className="text-lg text-gray-700 whitespace-pre-line">
    {service.content.intro}
  </p>

  {/* Authority Section */}
  <section>
    <h2 className="text-2xl font-semibold">
      Best {service.title.replace(" in Lucknow", "")} in Lucknow
    </h2>
    <p>
      Myra City Hospital is one of the leading centers for gastroenterology in Lucknow.
      We provide advanced diagnosis and personalized treatment plans using modern
      technology and evidence-based medicine.
    </p>
  </section>

  {/* Causes */}
  <section>
    <h2 className="text-2xl font-semibold">Causes</h2>
    <p>{service.content.causes}</p>
  </section>

  {/* Symptoms */}
  <section>
    <h2 className="text-2xl font-semibold">Symptoms</h2>
    <ul className="list-disc pl-5">
      {service.content.symptoms.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ul>
  </section>

  {/* Diagnosis */}
  <section>
    <h2 className="text-2xl font-semibold">Diagnosis</h2>
    <p>{service.content.diagnosis}</p>
  </section>

  {/* Treatment */}
  <section>
    <h2 className="text-2xl font-semibold">Treatment</h2>
    <p>{service.content.treatment}</p>
  </section>

  {/* Complications */}
  <section>
    <h2 className="text-2xl font-semibold">Complications if Untreated</h2>
    <p>{service.content.complications}</p>
  </section>

  {/* Why choose */}
  <section>
    <h2 className="text-2xl font-semibold">
      Why Choose Myra City Hospital?
    </h2>
    <ul className="list-disc pl-5">
      {service.content.whyChoose.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>

  {/* FAQs */}
  <section>
    <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
    {service.content.faqs.map((faq, i) => (
      <div key={i} className="mt-3">
        <p><strong>{faq.q}</strong></p>
        <p>{faq.a}</p>
      </div>
    ))}
  </section>

  {/* Internal Linking */}
  <section>
    <h3 className="text-xl font-semibold mt-6">
      Related Gastro Services
    </h3>
    {gastroMedicineServices.map((item) => (
      <a
        key={item.slug}
        href={`/gastro-medicine/${item.slug}`}
        className="block text-blue-600 underline"
      >
        {item.title}
      </a>
    ))}
  </section>

  {/* CTA */}
  <div className="mt-10">
    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
      Book Appointment
    </button>
  </div>

</main>
    </>
  );
}