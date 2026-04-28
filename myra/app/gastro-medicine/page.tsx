import { notFound } from "next/navigation";
import { gastroMedicineServices } from "@/app/data/gastroMedicine";

// ✅ SEO Metadata
export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;

  const service = gastroMedicineServices.find(
  (s) => s.slug === resolvedParams.slug
);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: any) {

  const resolvedParams = await params;

  const service = gastroMedicineServices.find(
    (s) => s.slug === resolvedParams.slug
  );

  if (!service) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">

      {/* 🔥 JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Myra City Hospital",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressCountry: "India",
            },
            medicalSpecialty: "Gastroenterology",
          }),
        }}
      />

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500">
        Home / Gastro Surgery / {service.title}
      </p>

      {/* H1 */}
      <h1 className="text-4xl font-bold">
        {service.title}
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed">
        {service.content.intro}
      </p>

      {/* 🔥 AUTHORITY BLOCK */}
      <section>
        <h2 className="text-2xl font-semibold">
          Best {service.title} in Lucknow
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Myra City Hospital is recognized as one of the leading centers for advanced
          gastro surgery in Lucknow. With a team of highly experienced surgeons,
          modern operation theatres, and evidence-based protocols, we deliver
          world-class surgical care with high success rates.

          Patients from across Uttar Pradesh trust our hospital for safe,
          minimally invasive procedures, faster recovery, and long-term results.
        </p>
      </section>

      {/* CAUSES */}
      <section>
        <h2 className="text-2xl font-semibold">
          Causes & Risk Factors
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {service.content.causes}

          In addition, lifestyle factors such as poor diet, obesity,
          sedentary routine, and delayed medical consultation significantly
          increase the risk of surgical gastro conditions in patients.
        </p>
      </section>

      {/* SYMPTOMS */}
      <section>
        <h2 className="text-2xl font-semibold">
          Symptoms of {service.title}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {service.content.symptoms.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      {/* DIAGNOSIS */}
      <section>
        <h2 className="text-2xl font-semibold">
          Diagnosis & Evaluation
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {service.content.diagnosis}

          At Myra City Hospital, we use advanced imaging, endoscopy,
          and lab investigations to ensure precise diagnosis before surgery.
        </p>
      </section>

      {/* TREATMENT */}
      <section>
        <h2 className="text-2xl font-semibold">
          Advanced Treatment Options
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {service.content.treatment}

          Our surgical team specializes in laparoscopic and minimally
          invasive techniques that reduce pain, shorten hospital stay,
          and promote faster recovery.
        </p>
      </section>

      {/* COMPLICATIONS */}
      <section>
        <h2 className="text-2xl font-semibold">
          Possible Complications if Untreated
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {service.content.complications}

          Early diagnosis and timely surgical intervention are crucial
          to prevent life-threatening complications.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <h2 className="text-2xl font-semibold">
          Why Choose Myra City Hospital?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {service.content.whyChoose.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 TRUST SECTION */}
      <section>
        <h2 className="text-2xl font-semibold">
          Trusted Gastro Surgery Hospital in Lucknow
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Myra City Hospital combines advanced technology, expert surgeons,
          and patient-centric care to deliver the best gastro surgery outcomes
          in Lucknow. Our focus is on safety, precision, and long-term recovery.
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h2>

        {service.content.faqs.map((faq, i) => (
          <div key={i} className="mt-4">
            <p className="font-semibold">{faq.q}</p>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Book Appointment
        </button>
      </div>

    </main>
  );
}