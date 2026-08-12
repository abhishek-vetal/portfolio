"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const email = "abhishek.vetal.dev@gmail.com";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("submitting");
    setStatusMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const isPlaceholder =
      serviceId === "your_service_id_here" ||
      templateId === "your_template_id_here" ||
      publicKey === "your_public_key_here";

    if (!serviceId || !templateId || !publicKey || isPlaceholder) {
      setStatus("error");
      setStatusMessage(
        "EmailJS credentials are not configured in .env.local yet. Please update NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, or reach out directly at abhishek.vetal.dev@gmail.com."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: email,
        to_name: "Abhishek",
        from_name: formData.name,
        from_email: formData.email,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        title: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send primary notification email to portfolio owner
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      // Send auto-reply email to visitor if configured
      if (autoReplyTemplateId && autoReplyTemplateId !== "your_autoreply_template_id_here") {
        try {
          const autoReplyParams = {
            to_email: formData.email,
            to_name: formData.name,
            user_email: formData.email,
            user_name: formData.name,
            from_name: "Abhishek Vetal",
            from_email: email,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "Thank you for reaching out!",
            title: formData.subject || "Thank you for reaching out!",
            message: formData.message,
            reply_to: email,
          };

          await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, {
            publicKey: publicKey,
          });
          console.log("Auto-reply sent successfully to:", formData.email);
        } catch (autoReplyErr: unknown) {
          console.error("Auto-reply failed to send:", autoReplyErr);
        }
      }

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS send error:", error);
      const errObj = error as { text?: string; message?: string; status?: number };
      setStatus("error");
      setStatusMessage(
        `Failed to send message: ${errObj?.text || errObj?.message || "Unknown error"}. Please reach out directly to abhishek.vetal.dev@gmail.com.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6"
    >
      {/* Section Header */}
      <div
        className={[
          "flex flex-col gap-2 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Get In Touch
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
            [04 / CONNECT]
          </span>
        </div>
        <p className="max-w-xl text-base text-zinc-600">
          Interested in working together, discussing full-time opportunities, or talking about product design?
        </p>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Direct Contact Info */}
        <div
          className={[
            "flex flex-col justify-between gap-10 lg:col-span-5 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                DIRECT EMAIL
              </span>
              <div className="mt-2">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-zinc-900 transition-colors hover:text-zinc-600"
                >
                  <FaEnvelope className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                  <span className="underline decoration-1 decoration-zinc-300/90 underline-offset-6 transition-colors group-hover:decoration-zinc-900">
                    {email}
                  </span>
                </a>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                SOCIAL PROFILES
              </span>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://github.com/abhishek-vetal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  <FaGithub className="h-5 w-5 text-zinc-500 group-hover:text-zinc-950 transition-colors" />
                  <span>GitHub</span>
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-vetal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  <FaLinkedin className="h-5 w-5 text-[#0A66C2] transition-transform group-hover:scale-110" />
                  <span>LinkedIn</span>
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6">
            <p className="text-xs text-zinc-600 leading-relaxed font-mono">
              ⚡ Open to Software Developer & Full-Stack roles. Typical response time: under 24 hours.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div
          style={{ transitionDelay: "300ms" }}
          className={[
            "lg:col-span-7 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          {/* Status Banners */}
          {status === "success" && (
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3.5 text-sm text-emerald-800">
              <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <p>{statusMessage}</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-sm text-red-800">
              <FaExclamationCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <p>{statusMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
            {/* Name & Email in 1 line */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-normal text-zinc-600 sm:text-base"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border-b border-zinc-300 bg-transparent py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal focus:border-zinc-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-zinc-600 sm:text-base"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border-b border-zinc-300 bg-transparent py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal focus:border-zinc-900 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-normal text-zinc-600 sm:text-base"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this regarding?"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full border-b border-zinc-300 bg-transparent py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal focus:border-zinc-900 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-normal text-zinc-600 sm:text-base"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="mt-1 w-full border-b border-zinc-300 bg-transparent py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal focus:border-zinc-900 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-zinc-900 px-7 py-3 font-inter text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
