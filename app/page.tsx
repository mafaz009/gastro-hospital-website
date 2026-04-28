import CTA from "./components/CTA";
import DepartmentCard from "./components/DepartmentCard";
import Link from "next/link";

export const metadata = {
  title: "Best Gastro Hospital in Lucknow | Myra City Hospital",
  description:
    "Myra City Hospital is the best gastro hospital in Lucknow offering advanced gastro medicine, surgery, and critical care.",
};

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* 🟢 HERO */}
      <section className="bg-blue-50 p-12 text-center">
        <h1 className="text-4xl font-bold">
          Best Gastro Hospital in Lucknow for Advanced Digestive Care
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Comprehensive care in Gastro Medicine, Gastro Surgery & Critical Care with experienced specialists and modern technology.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Book Appointment
          </button>

          <Link href="/gastro-medicine" className="border px-6 py-3 rounded-xl">
            View Services
          </Link>
        </div>
      </section>

      {/* 🟡 TRUST */}
      <section className="py-10 border-y">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold">20+</p>
            <p className="text-gray-500">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5000+</p>
            <p className="text-gray-500">Successful Procedures</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Advanced</p>
            <p className="text-gray-500">Technology</p>
          </div>
        </div>
      </section>

      {/* 🔵 DEPARTMENTS */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold text-center">
          Our Core Departments
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <DepartmentCard title="Gastro Medicine" link="/gastro-medicine" />
          <DepartmentCard title="Gastro Surgery" link="/gastro-surgery" />
          <DepartmentCard title="Critical Care" link="/critical-care" />
        </div>
      </section>

      {/* 🔴 SERVICES */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center">
          Key Gastro Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
          <Link href="/gastro-medicine/gerd-treatment-lucknow">GERD Treatment</Link>
          <Link href="/gastro-medicine/ibs-treatment-lucknow">IBS Treatment</Link>
          <Link href="/gastro-medicine/fatty-liver-treatment-lucknow">Fatty Liver</Link>
          <Link href="/gastro-medicine/endoscopy-lucknow">Endoscopy</Link>
          <Link href="/gastro-medicine/colonoscopy-lucknow">Colonoscopy</Link>
          <Link href="/gastro-surgery/gallbladder-surgery-lucknow">Gallbladder Surgery</Link>
        </div>
      </section>

      {/* 🟣 SYMPTOMS (VERY IMPORTANT FOR SEO) */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold text-center">
          Experiencing These Symptoms?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
          <Link href="/symptoms/abdominal-pain">Abdominal Pain</Link>
          <Link href="/symptoms/gas-bloating">Gas & Bloating</Link>
          <Link href="/symptoms/acidity">Acidity</Link>
          <Link href="/symptoms/blood-in-stool">Blood in Stool</Link>
          <Link href="/symptoms/constipation">Constipation</Link>
          <Link href="/symptoms/jaundice">Jaundice</Link>
        </div>
      </section>

      {/* 🟠 DOCTORS */}
      <section className="p-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold">
          Meet Our Specialists
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <p className="font-semibold">Dr. XYZ</p>
            <p className="text-gray-500">Gastro Specialist</p>
          </div>
          <div>
            <p className="font-semibold">Dr. ABC</p>
            <p className="text-gray-500">Gastro Surgeon</p>
          </div>
          <div>
            <p className="font-semibold">Dr. DEF</p>
            <p className="text-gray-500">Critical Care</p>
          </div>
        </div>
      </section>

      {/* ⚫ WHY CHOOSE US */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Why Choose Myra City Hospital?
        </h2>

        <ul className="mt-4 max-w-2xl mx-auto space-y-2 text-gray-600">
          <li>Experienced Gastro Specialists</li>
          <li>Advanced Endoscopy & Surgical Care</li>
          <li>Comprehensive Treatment Under One Roof</li>
          <li>Strong ICU & Emergency Support</li>
        </ul>
      </section>

      {/* 🟢 CTA */}
      <section className="p-10">
        <CTA />
      </section>

      {/* 🔵 FAQ */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 max-w-3xl mx-auto space-y-4">
          <p>When should I see a gastro doctor?</p>
          <p>Is endoscopy painful?</p>
          <p>When is surgery required?</p>
        </div>
      </section>

      {/* ⚫ FOOTER */}
      <footer className="bg-black text-white p-6 text-center">
        © 2026 Myra City Hospital
      </footer>

    </main>
  );
}