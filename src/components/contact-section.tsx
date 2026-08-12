"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [isVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
    setStatus("idle");
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
          const errObj = autoReplyErr as { text?: string; message?: string; status?: number };
          console.warn(`Auto-reply EmailJS Error (${errObj?.status || 500}): ${errObj?.text || errObj?.message}`);
        }
      }

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS send error:", error);
      const errObj = error as { text?: string; message?: string; status?: number };
      const errDetail = errObj?.text || errObj?.message || "Failed to send message. Please verify your EmailJS details.";
      setStatus("error");
      setStatusMessage(`EmailJS Error (${errObj?.status || '500'}): ${errDetail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            get in touch
          </span>
        </div>

        {/* 2-Column Responsive Layout: Direct Info (Left) | Contact Form (Right) */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Direct Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s talk.
              </h3>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center font-display text-2xl font-bold tracking-tight text-brand-600 transition-colors hover:text-brand-700 sm:text-3xl lg:text-4xl"
                >
                  <span className="underline underline-offset-6 decoration-1 decoration-zinc-300/90 transition-colors duration-200 group-hover:decoration-brand-600">
                    {email}
                  </span>
                </a>

                <div className="mt-1 flex items-center gap-2 font-display text-base font-medium tracking-normal text-zinc-500 sm:text-lg">
                  <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-zinc-400" />
                  <span>Kharghar, Navi Mumbai</span>
                </div>
              </div>
            </div>

            {/* Socials Subheading & Links */}
            <div className="mt-10 lg:mt-0">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                socials
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                <a
                  href="https://github.com/abhishek-vetal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-lg font-medium text-zinc-700 transition-colors hover:text-foreground"
                >
                  <FaGithub className="h-5 w-5 text-zinc-800 transition-transform duration-200 group-hover:scale-110" />
                  <span className="underline underline-offset-4 decoration-zinc-300 group-hover:decoration-zinc-800">
                    GitHub
                  </span>
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-vetal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-lg font-medium text-zinc-700 transition-colors hover:text-foreground"
                >
                  <FaLinkedin className="h-5 w-5 text-[#0a66c2] transition-transform duration-200 group-hover:scale-110" />
                  <span className="underline underline-offset-4 decoration-zinc-300 group-hover:decoration-[#0a66c2]">
                    LinkedIn
                  </span>
                  <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-600">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{ transitionDelay: "300ms" }}
            className={[
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
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
                      <FaPaperPlane className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
