import { getBrand } from "@/lib/site-data";

export default async function ContactPage() {
  const brand = await getBrand();

  const cards = [
    { icon: "💬", title: "WhatsApp", sub: "Quickest reply", href: brand.whatsappUrl || "#", primary: true },
    { icon: "📞", title: "Call Us", sub: brand.phone || "-", href: brand.phone ? `tel:${brand.phone}` : "#", primary: false },
    { icon: "📧", title: "Email", sub: brand.email || "-", href: brand.email ? `mailto:${brand.email}` : "#", primary: false },
  ];

  return (
    <div className="bg-cream-gradient">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="gold-accent mx-auto" />
          <h1 className="display-lg mb-4 font-bold text-[#2C2C2C]">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-[#6B6B6B]">Questions about orders, bulk pricing, or partnership enquiries? We’re happy to help.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className={`card-soft flex min-h-[220px] flex-col items-center justify-center gap-3 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.primary ? "ring-2 ring-[#D42B2B]" : ""}`}
            >
              <span className="text-4xl">{card.icon}</span>
              <h3 className="text-xl font-bold text-[#2C2C2C]">{card.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{card.sub}</p>
              {card.primary ? <span className="mt-2 rounded-full bg-[#D42B2B] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">Tap to chat</span> : null}
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-soft p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[#2C2C2C]">Send a quick message</h2>
            <form action="#" method="get" className="grid gap-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">Your name</label>
                <input name="name" placeholder="Your name" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#9A9A9A] focus:border-[#D42B2B] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">Phone number</label>
                <input name="phone" placeholder="Phone number" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#9A9A9A] focus:border-[#D42B2B] focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">I am looking for</label>
                <select name="type" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] focus:border-[#D42B2B] focus:outline-none">
                  <option>Retail</option>
                  <option>Bulk</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">Message</label>
                <textarea name="message" rows={5} placeholder="Tell us what you need" className="w-full border-0 border-b-2 border-[#E8E8E8] bg-transparent py-3 text-sm text-[#2C2C2C] placeholder:text-[#9A9A9A] focus:border-[#D42B2B] focus:outline-none" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#D42B2B] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B01F1F] hover:shadow-lg hover:shadow-red-500/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="card-soft p-8">
              <h3 className="mb-3 text-xl font-bold text-[#2C2C2C]">Visit / Contact</h3>
              <p className="text-sm leading-7 text-[#6B6B6B]">{brand.address}</p>
              <p className="mt-4 text-sm leading-7 text-[#6B6B6B]">Delivery areas: {brand.deliveryAreas}</p>
            </div>

            <div className="card-soft bg-[#2C2C2C] p-8 text-white">
              <h3 className="mb-3 text-xl font-bold text-[#F5A623]">Operating Hours</h3>
              <p className="text-sm leading-7 text-white/70">{brand.operatingHours || "-"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}