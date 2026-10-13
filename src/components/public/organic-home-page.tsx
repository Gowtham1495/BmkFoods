import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import ReviewCard from "@/components/public/review-card";

type OrganicHomePageProps = {
  title: string;
  description: string;
  intro: string;
  highlight: string;
  icon: string;
  backLink: string;
  backLabel: string;
};

export default function OrganicHomePage({
  title,
  description,
  intro,
  highlight,
  icon,
  backLink,
  backLabel,
}: OrganicHomePageProps) {
  return (
    <div>
      <section className="relative overflow-hidden bg-cream-gradient py-20 text-white sm:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E3A857]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-[#114b33]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link href={withBasePath(backLink)} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#114b33] hover:underline">
            ← {backLabel}
          </Link>
          <div className="max-w-3xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-sm">{icon}</div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black">BMK Food Homes</p>
            <h1 className="display-lg font-bold text-black">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#1F2937]">{description}</p>
          </div>
        </div>
      </section>
         
      <section className="bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="gold-accent" />
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#114b33]">From our customers</p>
              <h2 className="display-md font-bold text-[#2C2C2C]">Our Customers Review</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-bold text-[#2C2C2C]">4.7 <span className="text-[#DA8A2A]" aria-label="out of 5 stars">★</span></p>
                <p className="text-xs text-[#1F2937]">51 Google reviews</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=BMK%20Chicken%2C%20Thimmampalayam%20Pudur%2C%20Karamadai&query_place_id=ChIJh8WtDY7vqDsRjE1lhnl1NbA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[#114b33]/20 px-4 py-2 text-sm font-semibold text-[#114b33] transition-colors hover:bg-white"
              >
                Read all reviews <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                quote: "The chicken is always fresh, clean, and of excellent quality.The shop is well-maintained, and the owner is friendly and provides great customer service.Prices are reasonable, and the service is quick, perfect place to buy fresh chicken.",
                author: "Arun S Deechu",
                detail: "Local Guide · 5-star review",
                rating: 5,
              },
              {
                quote: "Even though this shop is 10 km away from my location and there are many chicken shops nearby, I still prefer to buy chicken here regularly because it is always fresh and tender. The quality consistently earns compliments from my family and guests. Moreover, the prices are quite reasonable compared to other places. Highly recommended for anyone looking for fresh, high-quality chicken at an affordable price.👍",
                author: "SANKARALINGAM ARUMUGAM",
                detail: "5-star review",
                rating: 5,
              },
              {
                quote: "Fresh chicken and good service. The quality was nice and the price was reasonable. Happy with the purchase",
                author: "ashna jerry",
                detail: "4-star review",
                rating: 4,
              },
            ].map((review, index) => (
              <ReviewCard key={review.author} delay={index * 180}>
                <div className="mb-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <span key={starIndex} className={starIndex < review.rating ? "text-[#DA8A2A]" : "text-[#6B7280]"} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-sm leading-7 text-[#424242]">“{review.quote}”</blockquote>
                <figcaption className="border-t border-[#F0E8E0] pt-4">
                  <p className="font-semibold text-[#2C2C2C]">{review.author}</p>
                  <p className="mt-1 text-xs text-[#1F2937]">{review.detail}</p>
                </figcaption>
              </ReviewCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
