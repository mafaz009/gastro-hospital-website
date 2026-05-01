import type { Metadata } from "next";
import Link from "next/link";
import AppointmentForm from "./AppointmentForm";
import { hospital, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Book Appointment | Myra City Hospital Lucknow",
  description:
    "Book an appointment at Myra City Hospital Lucknow for gastro medicine, liver care, endoscopy, colonoscopy, ERCP, EUS, GI surgery and critical care.",
  alternates: {
    canonical: `${siteUrl}/book-appointment`,
  },
};

export default function BookAppointmentPage() {
  const appointmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/book-appointment#webpage`,
        name: "Book Appointment at Myra City Hospital",
        url: `${siteUrl}/book-appointment`,
        description:
          "Appointment booking page for gastro medicine, liver care, advanced endoscopy, gastro surgery and critical care at Myra City Hospital Lucknow.",
        about: {
          "@type": "Hospital",
          name: hospital.name,
        },
      },
      {
        "@type": "Hospital",
        "@id": `${siteUrl}/#hospital`,
        name: hospital.name,
        telephone: hospital.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: hospital.streetAddress,
          addressLocality: hospital.addressLocality,
          addressRegion: hospital.addressRegion,
          postalCode: hospital.postalCode,
          addressCountry: hospital.addressCountry,
        },
        openingHours: hospital.openingHoursSchema,
        medicalSpecialty: [
          "Gastroenterology",
          "Hepatology",
          "Gastrointestinal Surgery",
          "Critical Care",
        ],
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Book Appointment",
            item: `${siteUrl}/book-appointment`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#f6f9fc] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appointmentSchema) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <nav className="text-sm font-semibold text-slate-500">
              <Link href="/" className="transition hover:text-blue-800">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-blue-800">Book Appointment</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Myra City Hospital Lucknow
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Book Appointment for Gastro, Liver, Endoscopy and GI Surgery Care
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Choose your service, get the right specialist recommended
              automatically, and share your preferred date and time with the
              hospital team for confirmation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Specialist-led care", "24/7 emergency support", "Advanced gastro services"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-950"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-blue-950 p-6 text-white shadow-2xl shadow-slate-300/60 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Appointment logic
            </p>
            <h2 className="mt-3 text-3xl font-bold">Select care first. Doctor follows.</h2>
            <p className="mt-4 leading-7 text-blue-100">
              Gastro medicine, liver care and endoscopy route to Dr. Juned Ahmad Khan. Gastro surgery routes to Dr. A K Bansal.
              Critical care routes to Dr. Amir.
            </p>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Address
              </p>
              <p className="mt-2 leading-7">{hospital.address}</p>
              <p className="mt-3 font-semibold">{hospital.openingHours}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <AppointmentForm />
      </section>
    </main>
  );
}
