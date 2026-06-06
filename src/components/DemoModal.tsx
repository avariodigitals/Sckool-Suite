"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { trackDemoSubmission } from "@/components/Analytics";

interface FormData {
  name:       string;
  email:      string;
  phone:      string;
  school:     string;
  role:       string;
  schoolSize: string;
  message:    string;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;
type Status      = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormData = {
  name: "", email: "", phone: "",
  school: "", role: "", schoolSize: "", message: "",
};

const ROLES: string[] = [
  "School Proprietor / Owner",
  "School Director",
  "Principal / Head Teacher",
  "School Administrator",
  "Bursar / Accountant",
  "ICT Coordinator",
  "Other",
];

const SIZES: string[] = [
  "Under 200 students",
  "200 – 500 students",
  "500 – 1,000 students",
  "1,000 – 3,000 students",
  "3,000+ students",
];

interface DemoModalProps {
  isOpen:  boolean;
  onClose: () => void;
}

function clientValidate(form: FormData): FieldErrors {
  const e: FieldErrors = {};
  if (!form.name.trim())                                      e.name       = "Full name is required.";
  if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
                                                              e.email      = "Valid email address required.";
  if (!form.phone.trim())                                     e.phone      = "Phone number is required.";
  if (!form.school.trim())                                    e.school     = "School name is required.";
  if (!form.role)                                             e.role       = "Please select your role.";
  if (!form.schoolSize)                                       e.schoolSize = "Please select school size.";
  return e;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [form,   setForm]   = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [apiMsg, setApiMsg] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const errs = clientValidate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    setApiMsg("");

    try {
      const res  = await fetch("/api/demo", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = (await res.json()) as { success: boolean; message: string };

      if (data.success) {
        setStatus("success");
        setApiMsg(data.message);
        trackDemoSubmission({ school: form.school, role: form.role });
        setForm(EMPTY_FORM);
      } else {
        setStatus("error");
        setApiMsg(data.message ?? "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setApiMsg("Network error. Please check your connection and try again.");
    }
  }

  const fieldBase =
    "w-full px-4 py-3 rounded-xl border text-sm font-inter text-gray-900 " +
    "outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 bg-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book A Demo"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto
          bg-white rounded-2xl shadow-2xl px-10 py-9"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
            rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={15} className="text-gray-500" />
        </button>

        {/* Header */}
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600
            font-jakarta mb-1">Book A Demo</p>
          <h2 className="text-xl font-bold font-jakarta text-gray-900 mb-2">
            See Sckool Suite in action
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-inter">
            Fill in your details and our team will reach out within 24 hours
            to schedule a personalised walkthrough.
          </p>
        </div>

        {/* ── SUCCESS ── */}
        {status === "success" && (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={32} className="text-green-700" />
            </div>
            <h3 className="text-lg font-bold font-jakarta text-gray-900">Request Received!</h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed font-inter">{apiMsg}</p>
            <button onClick={onClose}
              className="mt-2 px-7 py-3 rounded-xl bg-brand-600 text-white text-sm
                font-bold font-jakarta hover:bg-brand-700 transition-colors">
              Close
            </button>
          </div>
        )}

        {/* ── FORM ── */}
        {status !== "success" && (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Error banner */}
            {status === "error" && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200
                rounded-xl px-4 py-3">
                <AlertCircle size={15} className="text-red-600 mt-0.5 shrink-0" />
                <p className="text-xs text-red-600 font-inter">{apiMsg}</p>
              </div>
            )}

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dm-name"
                  className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                  Full Name *
                </label>
                <input id="dm-name" name="name" type="text" autoComplete="name"
                  value={form.name} onChange={handleChange}
                  placeholder="Mrs Aisha Ibrahim"
                  className={[fieldBase, errors.name ? "border-red-400" : "border-gray-200"].join(" ")} />
                {errors.name && <p className="text-xs text-red-500 mt-1 font-inter">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="dm-email"
                  className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                  Email Address *
                </label>
                <input id="dm-email" name="email" type="email" autoComplete="email"
                  value={form.email} onChange={handleChange}
                  placeholder="you@school.edu.ng"
                  className={[fieldBase, errors.email ? "border-red-400" : "border-gray-200"].join(" ")} />
                {errors.email && <p className="text-xs text-red-500 mt-1 font-inter">{errors.email}</p>}
              </div>
            </div>

            {/* Phone + School */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dm-phone"
                  className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                  Phone Number *
                </label>
                <input id="dm-phone" name="phone" type="tel" autoComplete="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="+234 801 234 5678"
                  className={[fieldBase, errors.phone ? "border-red-400" : "border-gray-200"].join(" ")} />
                {errors.phone && <p className="text-xs text-red-500 mt-1 font-inter">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="dm-school"
                  className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                  School Name *
                </label>
                <input id="dm-school" name="school" type="text"
                  value={form.school} onChange={handleChange}
                  placeholder="Bright Future Academy"
                  className={[fieldBase, errors.school ? "border-red-400" : "border-gray-200"].join(" ")} />
                {errors.school && <p className="text-xs text-red-500 mt-1 font-inter">{errors.school}</p>}
              </div>
            </div>

            {/* Role */}
            <div>
              <label htmlFor="dm-role"
                className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                Your Role *
              </label>
              <select id="dm-role" name="role" value={form.role} onChange={handleChange}
                className={[fieldBase, "appearance-none", errors.role ? "border-red-400" : "border-gray-200"].join(" ")}>
                <option value="">Select your role…</option>
                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.role && <p className="text-xs text-red-500 mt-1 font-inter">{errors.role}</p>}
            </div>

            {/* School Size */}
            <div>
              <label htmlFor="dm-size"
                className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                School Size *
              </label>
              <select id="dm-size" name="schoolSize" value={form.schoolSize} onChange={handleChange}
                className={[fieldBase, "appearance-none", errors.schoolSize ? "border-red-400" : "border-gray-200"].join(" ")}>
                <option value="">Select student count…</option>
                {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.schoolSize && <p className="text-xs text-red-500 mt-1 font-inter">{errors.schoolSize}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="dm-message"
                className="block text-xs font-bold text-gray-700 font-jakarta mb-1">
                Additional Information{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea id="dm-message" name="message" rows={3}
                value={form.message} onChange={handleChange}
                placeholder="Tell us about your school's current challenges…"
                className={`${fieldBase} border-gray-200 resize-y min-h-[80px]`} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl
                bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold font-jakarta
                transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {status === "loading" ? (
                <><Loader2 size={17} className="animate-spin" /> Processing…</>
              ) : (
                <>Book My Demo <ArrowRight size={15} /></>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center font-inter">
              By submitting you agree to our Privacy Policy.
              We will never share your data.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
