import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function ContactMe() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const SERVICE_ID = "service_k7e4ewu";
  const TEMPLATE_ID = "template_wf3m5s8";
  const PUBLIC_KEY = "OYyjWsKNdOyBTbrWE";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setSuccess("Message sent successfully.");
      formRef.current?.reset();
    } catch (err) {
      // Surface detailed error if available
      console.error("EmailJS send error:", err);
      const msg =
        err?.text ||
        err?.message ||
        "Failed to send message. Please try again.";
      setError(msg);
    } finally {
      setSending(false);
    }
  };
  return (
    <section
      id="contact"
      className="w-full container mx-auto text-[#111827] py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Part 1: Info / Social / Map */}
        <div className="lg:col-span-4 px-5 sm:px-8 md:px-12 py-10 md:py-14 text-[#111827] border-b border-t border-black/10">
          {/* Accent dot */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <h1 className="text-[#111827] fredoka text-xl">Contact Me</h1>
          </div>

          <p className="mt-10 max-w-sm text-[#111827] text-5xl fredoka uppercase">
            Questions or booking? I am here for you.
          </p>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://www.facebook.com/christopher.m.sorensen"
              aria-label="Facebook"
              className=" p-2 rounded-full bg-[#111827] text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/christopher_m_sorensen/"
              aria-label="Instagram"
              className="p-2 rounded-full bg-[#111827] text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/_csorensen"
              aria-label="X"
              className="p-2 rounded-full bg-[#111827] text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/cmsorensen/"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-[#111827] text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Map */}
          <div className="mt-8 max-w-[320px]">
            <p className="text-[#111827]/80 mb-2">Map</p>
            <div className="rounded-md overflow-hidden ring-1 ring-white/10">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.25909%2C40.477399%2C-73.700272%2C40.916178&layer=mapnik&marker=40.7128%2C-74.0060"
                className="w-full h-36"
                loading="lazy"
              />
            </div>
          </div>
          {/* Email */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-[#111827]/80 fredoka">
              Phone Number
            </h4>
            <p className="mt-2 space-y-1 text-base text-[#111827] fredoka">
              +1 603 380 1619
            </p>
          </div>
        </div>

        {/* Part 2: Form */}
        <div className="lg:col-span-4 px-5 sm:px-8 md:px-10 py-10 md:py-14 border-t border-b  border-black lg:border-l lg:border-black/10">
          {/* Accent dot */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <h1 className="text-[#111827] fredoka text-xl">Send a message</h1>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 grid grid-cols-1 gap-4"
          >
            <div>
              <label className="block text-sm mb-2 fredoka text-[#111827]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full fredoka text-[#111827] rounded-md border border-black/15 px-3 py-2"
                name="from_name"
                required
              />
            </div>
            <div>
              <label className="block fredoka text-sm text-[#111827] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full fredoka text-[#111827] rounded-md border border-black/15 px-3 py-2"
                name="from_email"
                required
              />
            </div>
            <div>
              <label className="block fredoka text-sm text-[#111827] mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="123-456-7890"
                className="w-full fredoka text-[#111827] rounded-md border border-black/15 px-3 py-2"
                name="phone"
                required
              />
            </div>
            <div>
              <label className="block fredoka text-sm text-[#111827] mb-2">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="How can I help?"
                className="w-full fredoka text-[#111827] rounded-md border border-black/15 px-3 py-2"
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              mailto="mdshahamanpatwary@gmail.com"
              className="justify-center fredoka inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-md shadow shadow-orange-900/30 transition disabled:opacity-60"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit"}
              <ArrowRight className="w-4 h-4" />
            </button>
            {success && (
              <p className="text-green-600 fredoka text-sm">{success}</p>
            )}
            {error && <p className="text-red-600 fredoka text-sm">{error}</p>}
          </form>
        </div>

        {/* Part 3: Picture */}
        <div className="lg:col-span-4 relative md:min-h-[360px]">
          <img
            src="/contact.png"
            alt="Portrait"
            className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
