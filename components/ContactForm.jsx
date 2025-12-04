"use client";

export default function ContactForm() {
  return (
    <form className="p-6 shadow rounded-lg bg-white">
      <input className="border p-3 w-full mb-4" placeholder="Your Name" />
      <input className="border p-3 w-full mb-4" placeholder="Phone Number" />
      <textarea
        className="border p-3 w-full mb-4"
        rows="5"
        placeholder="Your Message"
      />

      <button className="bg-blue-600 text-white w-full p-3 rounded-lg">
        Send Inquiry
      </button>
    </form>
  );
}
