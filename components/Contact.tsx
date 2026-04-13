"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section bg-brand-950 text-white">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow !text-gold-400">Let&apos;s Talk</span>
            <h2 className="h-display text-white">
              Bring us your deal. <span className="text-gold-400">We&apos;ll bring the money.</span>
            </h2>
            <p className="mt-6 text-lg text-brand-100">
              Fill out the form and we&apos;ll respond within 24 business hours with next steps and a
              term sheet where applicable.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+19129271200" className="flex items-center gap-4 text-brand-100 hover:text-gold-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-1.7.85a11 11 0 005.52 5.52l.85-1.7a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">Call</div>
                  <div className="font-display text-xl font-bold">912.927.1200</div>
                </div>
              </a>
              <a href="mailto:rhonda@avera-lending.com" className="flex items-center gap-4 text-brand-100 hover:text-gold-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-300">Email</div>
                  <div className="font-display text-lg font-bold">rhonda@avera-lending.com</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-8 text-brand-900 shadow-2xl md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field name="name" label="Full Name" required />
                <Field name="email" type="email" label="Email Address" required />
                <Field name="phone" type="tel" label="Phone" required />
                <Field name="property" label="Property Address" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-700">
                  Tell us about your deal
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border-2 border-brand-100 px-4 py-3 text-brand-900 outline-none transition focus:border-gold-500"
                  placeholder="Purchase price, estimated ARV, rehab budget, timeline…"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Get My Term Sheet →"}
              </button>
              {status === "sent" && (
                <p className="mt-4 text-center text-sm font-semibold text-brand-600">
                  ✓ Got it. We&apos;ll be in touch within 24 business hours.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-sm font-semibold text-red-600">
                  Something went wrong. Please call 912.927.1200.
                </p>
              )}
              <p className="mt-4 text-center text-xs text-brand-700">
                By submitting, you agree to be contacted about your inquiry. We respect your privacy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-700">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border-2 border-brand-100 px-4 py-3 text-brand-900 outline-none transition focus:border-gold-500"
      />
    </div>
  );
}
