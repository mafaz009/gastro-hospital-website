import Link from "next/link";
import { gastroSurgeryServices } from "../data/gastroSurgery";

export default function GastroSurgeryPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">

      {/* 🔥 JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "Myra City Hospital",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressCountry: "India",
            },
            medicalSpecialty: "GastroSurgery",
          }),
        }}
      />

      {/* H1 */}
      <h1 className="text-4xl font-bold">
        Best Gastro Surgery Hospital in Lucknow
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700">
        Myra City Hospital is one of the leading centers for advanced gastro
        surgery in Lucknow. We provide safe, minimally invasive surgical
        treatment for digestive disorders using modern technology and
        experienced specialists.
      </p>

      {/* 🔥 AUTHORITY BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold">
          Advanced Gastro Surgery in Lucknow
        </h2>

        <p className="text-gray-700">
          Our hospital offers comprehensive surgical care for conditions related
          to the stomach, liver, intestine, and digestive system. We specialize
          in laparoscopic and minimally invasive procedures that ensure faster
          recovery, less pain, and better outcomes.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section>
        <h2 className="text-2xl font-semibold">
          Gastro Surgery Services
        </h2>

        <div className="grid gap-6 mt-6">
          {gastroSurgeryServices.map((service) => (
            <Link
              key={service.slug}
              href={`/gastro-surgery/${service.slug}`}
              className="border p-5 rounded-xl hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔥 WHY CHOOSE */}
      <section>
        <h2 className="text-2xl font-semibold">
          Why Choose Myra City Hospital?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Experienced gastro surgeons in Lucknow</li>
          <li>Advanced laparoscopic surgery facilities</li>
          <li>High success rate and patient safety</li>
          <li>Comprehensive digestive care</li>
        </ul>
      </section>

      {/* 🔥 GEO SEO */}
      <section>
        <h2 className="text-2xl font-semibold">
          Gastro Surgery Services Across Lucknow
        </h2>

        <p className="text-gray-700">
          We provide gastro surgery services to patients from Gomti Nagar,
          Indira Nagar, Aliganj, Hazratganj, and nearby areas of Lucknow.
        </p>
      </section>

      {/* 🔥 INTERNAL LINKING */}
      <section>
        <h3 className="text-xl font-semibold">
          Related Gastro Medicine Treatments
        </h3>

        <div className="grid gap-2 mt-2">
          <a href="/gastro-medicine/acid-reflux-treatment-lucknow" className="text-blue-600 underline">
            Acid Reflux Treatment in Lucknow
          </a>

          <a href="/gastro-medicine/ibs-treatment-lucknow" className="text-blue-600 underline">
            IBS Treatment in Lucknow
          </a>

          <a href="/gastro-medicine/fatty-liver-treatment-lucknow" className="text-blue-600 underline">
            Fatty Liver Treatment in Lucknow
          </a>
        </div>
      </section>

      {/* 🔥 CTA */}
      <div className="mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Book Appointment
        </button>
      </div>

    </main>
  );
}