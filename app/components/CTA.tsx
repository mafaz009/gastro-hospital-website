import { hospital } from "../data/site";

export default function CTA() {
  const whatsappHref = `https://wa.me/${hospital.phoneHref.replace("tel:+", "")}`;

  return (
    <section
      id="appointment"
      className="rounded-lg bg-blue-700 px-6 py-10 text-center text-white md:px-10"
    >
      <h2 className="text-2xl font-bold md:text-3xl">
        Book an Appointment With a Gastro Specialist in Lucknow
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-blue-50">
        Speak to Myra City Hospital for acidity, abdominal pain, liver,
        gallbladder, endoscopy, colonoscopy, and surgical gastro care.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={hospital.phoneHref}
          className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700"
        >
          Call Now
        </a>
        <a
          href={whatsappHref}
          className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
