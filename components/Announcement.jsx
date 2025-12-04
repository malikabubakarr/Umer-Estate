"use client";

export default function Announcement() {
  return (
    <div className="w-full bg-yellow-400 text-black py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-sm font-semibold">
        Ravi Ratan plots on ground with plot numbers — Limited Time Special Offer — New Metro City Announcements —
        Ravi Ratan plots on ground with plot numbers — Limited Time Special Offer — New Metro City Announcements —
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
