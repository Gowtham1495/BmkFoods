import { getBrand } from "@/lib/site-data";

export default async function ContactPage() {
  const brand = await getBrand();

  const cards = [
    { icon: "💬", title: "WhatsApp", sub: "Quickest reply", href: brand.whatsappUrl || "#", primary: true },
    { icon: "📞", title: "Call Us", sub: brand.phone || "-", href: brand.phone ? `tel:${brand.phone}` : "#", primary: false },
    { icon: "📧", title: "Email", sub: brand.email || "-", href: brand.email ? `mailto:${brand.email}` : "#", primary: false },
  ];

  return (
    <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F9F4_38%,#E4F0E4_72%,#FFFFFF_100%)]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="gold-accent mx-auto" />
          <h1 className="display-lg mb-4 font-bold text-[#2C2C2C]">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-[#1F2937]">Questions about orders, bulk pricing, or partnership enquiries? We’re happy to help.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className={`card-soft flex min-h-[220px] flex-col items-center justify-center gap-3 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.primary ? "ring-2 ring-[#114b33]" : ""}`}
            >
              <span className="text-4xl">{card.icon}</span>
              <h3 className="text-xl font-bold text-[#2C2C2C]">{card.title}</h3>
              <p className="text-sm text-[#1F2937]">{card.sub}</p>
              {card.primary ? <span className="mt-2 rounded-full bg-[#114b33] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">Tap to chat</span> : null}
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-soft p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[#114b33]">Send a quick message</h2>
            <form action="#" method="get" className="grid gap-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1F2937]">Your name</label>
                <input name="name" placeholder="Your name" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#4B5563] focus:border-[#114b33] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1F2937]">Phone number</label>
                <input name="phone" placeholder="Phone number" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#4B5563] focus:border-[#114b33] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1F2937]">I am looking for</label>
                <select name="type" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] focus:border-[#114b33] focus:outline-none">
                  <option>Retail</option>
                  <option>Bulk</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1F2937]">Message</label>
                <textarea name="message" rows={5} placeholder="Tell us what you need" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#4B5563] focus:border-[#114b33] focus:outline-none" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#114b33] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3323] hover:shadow-lg hover:shadow-green-900/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-soft p-8">
              <h3 className="mb-3 text-xl font-bold text-[#114b33]">Visit / Contact</h3>
              <p className="text-sm leading-7 text-[#1F2937]">{brand.address}</p>
              <p className="mt-4 text-sm leading-7 text-[#1F2937]">Delivery areas: {brand.deliveryAreas}</p>
            </div>

            <div className="card-soft bg-[#2C2C2C] p-8 text-white">
              <h3 className="mb-3 text-xl font-bold text-[#114b33]">Operating Hours</h3>
              <p className="text-sm leading-7 text-black">{brand.operatingHours || "-"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}