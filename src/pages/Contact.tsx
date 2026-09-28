import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
  source: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  budget: "",
  message: "",
  source: "",
};

const PHONE_RE = /^[+]?[\d\s()-]{10,15}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    else if (!PHONE_RE.test(form.phone.trim())) next.phone = "Enter a valid phone number";
    if (!form.email.trim()) next.email = "Email address is required";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Enter a valid email address";
    if (!form.projectType) next.projectType = "Please select a project type";
    if (!form.location.trim()) next.location = "Project location is required";
    if (!form.message.trim()) next.message = "Please tell us about your project";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border focus:border-gold outline-none py-3 text-[15px] font-sans text-black placeholder:text-black/30 transition-colors";

  return (
    <main className="pt-0">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-[45%_55%]">
        {/* LEFT — black */}
        <div className="bg-black px-6 md:px-16 py-24 md:py-28 flex flex-col justify-center">
          <span className="label block mb-6">Get In Touch</span>
          <h1 className="font-serif text-white text-[36px] md:text-[52px] leading-[1.1] mb-6">
            Let's Create Something Extraordinary Together
          </h1>
          <p className="text-muted font-light mb-12 max-w-[420px]">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>

          <div className="space-y-6 mb-12">
            {[
              { label: "15, Anna Salai, Chennai – 600 002" },
              { label: "+91 98400 12345", href: "tel:+919840012345" },
              { label: "info@arbuilders.in", href: "mailto:info@arbuilders.in" },
              { label: "Monday – Saturday: 9AM to 7PM IST" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-gold pl-5">
                {item.href ? (
                  <a href={item.href} data-cursor-hover className="text-white/70 hover:text-gold text-sm">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-white/70 text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-6 text-xs uppercase tracking-widest text-white/40">
            <a href="#" data-cursor-hover className="hover:text-gold">
              Instagram
            </a>
            <a href="#" data-cursor-hover className="hover:text-gold">
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — cream */}
        <div className="bg-cream px-6 md:px-16 py-24 md:py-28">
          <h2 className="font-serif text-black text-[32px] md:text-[36px] mb-10">
            Start Your Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-7 max-w-[520px]">
            <div>
              <input
                className={inputClass}
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                className={inputClass}
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                className={inputClass}
                placeholder="Email Address *"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <select
                className={`${inputClass} appearance-none`}
                value={form.projectType}
                onChange={(e) => update("projectType", e.target.value)}
              >
                <option value="">Project Type *</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Renovation</option>
                <option>Interior Design</option>
                <option>Other</option>
              </select>
              {errors.projectType && (
                <p className="text-red-600 text-xs mt-1">{errors.projectType}</p>
              )}
            </div>

            <div>
              <input
                className={inputClass}
                placeholder="Project Location (area in Chennai) *"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
              {errors.location && (
                <p className="text-red-600 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            <div>
              <select
                className={`${inputClass} appearance-none`}
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
              >
                <option value="">Estimated Budget (optional)</option>
                <option>Below ₹25L</option>
                <option>₹25L–₹50L</option>
                <option>₹50L–₹1Cr</option>
                <option>Above ₹1Cr</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <textarea
                className={inputClass}
                placeholder="Tell Us About Your Project *"
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <select
                className={`${inputClass} appearance-none`}
                value={form.source}
                onChange={(e) => update("source", e.target.value)}
              >
                <option value="">How did you hear about us? (optional)</option>
                <option>Instagram</option>
                <option>Referral</option>
                <option>Google</option>
                <option>Other</option>
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              data-cursor-hover
              className="btn-fill btn-fill-black w-full bg-black text-gold text-[14px] uppercase tracking-[0.12em] py-4 hover:text-white transition-colors duration-300 disabled:opacity-70"
            >
              <span className="relative z-10">
                {status === "sent"
                  ? "Message Sent ✓"
                  : status === "sending"
                  ? "Sending…"
                  : "Send Message →"}
              </span>
            </motion.button>

            {status === "sent" && (
              <p className="text-gold text-sm">
                Thank you! We'll be in touch within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
