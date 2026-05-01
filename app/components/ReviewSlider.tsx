"use client";

import { useState } from "react";

const reviews = [
  {
    quote: "Best hospital for digestive problems in Lucknow.",
    context: "Gastro medicine",
    name: "Patient review",
  },
  {
    quote: "Highly skilled doctors and excellent care.",
    context: "Patient care",
    name: "Patient review",
  },
  {
    quote:
      "The doctors explained the treatment clearly and the hospital team was very supportive.",
    context: "GI care",
    name: "Patient review",
  },
  {
    quote:
      "My endoscopy was handled with care, comfort, and clear guidance from the gastro team.",
    context: "Endoscopy",
    name: "Patient review",
  },
  {
    quote:
      "We received quick help for severe abdominal pain and the emergency team was very responsive.",
    context: "Emergency care",
    name: "Patient family",
  },
  {
    quote:
      "The surgery consultation was transparent, and the recovery instructions were easy to follow.",
    context: "Gastro surgery",
    name: "Patient review",
  },
];

const maxIndex = reviews.length - 3;

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-slate-600">
          Showing {activeIndex + 1}-{activeIndex + 3} of {reviews.length}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous patient reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-xl font-semibold text-blue-800 shadow-sm transition hover:border-blue-300"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next patient reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-xl font-semibold text-white shadow-sm transition hover:bg-blue-950"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
        >
          {reviews.map((review) => (
            <article
              key={review.quote}
              className="w-full shrink-0 px-2 md:w-1/3"
            >
              <div className="h-full rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm font-bold tracking-wide text-blue-800">
                  5.0 patient feedback
                </p>
                <blockquote className="mt-4 min-h-28 text-base italic leading-7 text-slate-700">
                  &quot;{review.quote}&quot;
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-slate-950">
                  {review.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {review.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show review slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-blue-800" : "w-2.5 bg-blue-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
