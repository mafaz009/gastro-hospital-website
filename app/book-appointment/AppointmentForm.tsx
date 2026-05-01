"use client";

import { useMemo, useState } from "react";
import { hospital } from "../data/site";

const doctors = {
  juned: {
    name: "Dr. Juned Ahmad Khan",
    role: "Gastro, Liver, Pancreas and Advanced Endoscopy",
  },
  bansal: {
    name: "Dr. A K Bansal",
    role: "Gastro Surgery, HPB and Laparoscopic Surgery",
  },
  amir: {
    name: "Dr. Amir",
    role: "Critical Care and Emergency Medicine",
  },
};

const services = [
  {
    id: "gastro-consultation",
    label: "Gastro medicine consultation",
    doctor: "juned",
    note: "Acidity, abdominal pain, IBS, constipation, diarrhea, bloating",
  },
  {
    id: "liver-care",
    label: "Liver disease / fatty liver consultation",
    doctor: "juned",
    note: "Fatty liver, jaundice, hepatitis, cirrhosis, abnormal LFT",
  },
  {
    id: "endoscopy",
    label: "Endoscopy / Colonoscopy / ERCP / EUS",
    doctor: "juned",
    note: "Diagnostic and therapeutic gastro procedures",
  },
  {
    id: "gastro-surgery",
    label: "Gastro surgery consultation",
    doctor: "bansal",
    note: "Gallbladder, hernia, colorectal, bariatric, HPB surgery",
  },
  {
    id: "critical-care",
    label: "Emergency / ICU / critical care",
    doctor: "amir",
    note: "Severe pain, GI bleeding, acute pancreatitis, organ support",
  },
];

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
];

function todayIso() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

export default function AppointmentForm() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const selectedService = services.find((service) => service.id === serviceId) ?? services[0];
  const [doctorId, setDoctorId] = useState(selectedService.doctor);
  const [date, setDate] = useState(todayIso());
  const [time, setTime] = useState(timeSlots[1]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedDoctor = doctors[doctorId as keyof typeof doctors];
  const whatsappHref = useMemo(() => {
    const message = [
      "Appointment request - Myra City Hospital",
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${selectedService.label}`,
      `Preferred doctor: ${selectedDoctor.name}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Concern: ${concern || "Not provided"}`,
    ].join("\n");

    return `https://wa.me/${hospital.phoneHref.replace("tel:+", "")}?text=${encodeURIComponent(message)}`;
  }, [concern, date, name, phone, selectedDoctor.name, selectedService.label, time]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <form
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Step 1
          </p>
          <h2 className="mt-2 text-3xl font-bold">Choose service</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Your doctor is recommended automatically from the selected service,
            and you can still choose another specialist when needed.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {services.map((service) => (
            <label
              key={service.id}
              className={`cursor-pointer rounded-2xl border p-4 transition ${
                serviceId === service.id
                  ? "border-blue-600 bg-blue-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={serviceId === service.id}
                onChange={() => {
                  setServiceId(service.id);
                  setDoctorId(service.doctor);
                }}
                className="sr-only"
              />
              <span className="block text-base font-bold text-slate-950">
                {service.label}
              </span>
              <span className="mt-1 block text-sm leading-6 text-slate-600">
                {service.note}
              </span>
              <span className="mt-2 block text-sm font-semibold text-blue-800">
                Recommended: {doctors[service.doctor as keyof typeof doctors].name}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Preferred doctor
            </label>
            <select
              value={doctorId}
              onChange={(event) => setDoctorId(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
            >
              {Object.entries(doctors).map(([id, doctor]) => (
                <option key={id} value={id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Preferred date
            </label>
            <input
              type="date"
              min={todayIso()}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Preferred time
            </label>
            <select
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
            >
              {timeSlots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Patient name
            </label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter patient name"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Mobile number
            </label>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter mobile number"
              inputMode="tel"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-800">
              Symptoms or concern
            </label>
            <textarea
              value={concern}
              onChange={(event) => setConcern(event.target.value)}
              placeholder="Example: acidity for 2 weeks, abdominal pain, fatty liver report, gallbladder stone..."
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none ring-blue-100 focus:border-blue-500 focus:ring-4"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950"
          >
            Review Appointment Request
          </button>
          <a
            href={hospital.phoneHref}
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900"
          >
            Call {hospital.phone}
          </a>
        </div>
      </form>

      <aside className="rounded-3xl border border-slate-200 bg-blue-950 p-6 text-white shadow-xl shadow-slate-200/70 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
          Appointment summary
        </p>
        <h2 className="mt-3 text-3xl font-bold">Your selected care path</h2>

        <div className="mt-6 grid gap-4">
          {[
            ["Service", selectedService.label],
            ["Doctor", selectedDoctor.name],
            ["Specialty", selectedDoctor.role],
            ["Date", date],
            ["Time", time],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                {label}
              </p>
              <p className="mt-2 font-semibold leading-7">{value}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="mt-6 rounded-2xl bg-white p-5 text-slate-950">
            <p className="text-lg font-bold">Request ready</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Send this appointment request on WhatsApp or call the hospital team
              to confirm the final slot.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-md bg-blue-800 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Send request on WhatsApp
            </a>
          </div>
        ) : (
          <p className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-blue-100">
            Fill the appointment form and review your selection. Emergency
            symptoms should be handled by calling the hospital immediately.
          </p>
        )}

        <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Hospital address
          </p>
          <p className="mt-2 text-sm leading-7 text-blue-50">{hospital.address}</p>
          <p className="mt-3 font-semibold">{hospital.openingHours}</p>
        </div>
      </aside>
    </div>
  );
}
