

import CTA from "./components/CTA";
import DepartmentCard from "./components/DepartmentCard";

export const metadata = {
  title: "Best Gastro Hospital in Lucknow | Myra City Hospital",
  description:
    "Myra City Hospital is the best gastro hospital in Lucknow offering advanced gastro medicine, surgery, and critical care.",
};

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="bg-blue-50 p-12 text-center">
        <h1 className="text-4xl font-bold">
          Best Gastro Hospital in Lucknow
        </h1>
        <p className="mt-4 text-lg">
          Advanced Gastro Medicine, Gastro Surgery & Critical Care under one roof.
        </p>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Book Appointment
          </button>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold text-center">
          Our Departments
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <DepartmentCard title="Gastro Medicine" link="/gastro-medicine" />
          <DepartmentCard title="Gastro Surgery" link="/gastro-surgery" />
          <DepartmentCard title="Critical Care" link="/critical-care" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="p-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold">
          Why Choose Myra City Hospital?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          We provide expert gastro care in Lucknow with experienced doctors,
          modern ICU facilities, advanced laparoscopic surgeries, and a
          patient-first approach.
        </p>
      </section>

      {/* CTA */}
      <section className="p-10">
        <CTA />
      </section>

    </main>
  );
}