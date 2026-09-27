import React from "react";
import { getAllProducts, getBrand } from "@/lib/site-data";
import ProductFilter from "@/components/public/product-filter";

export default async function ProductsPage() {
  const [products, brand] = await Promise.all([getAllProducts(), getBrand()]);

  return (
    <div>
      <section className="border-b border-[#F0E8E0] bg-cream-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="gold-accent" />
          <h1 className="display-lg mb-3 font-bold text-[#2C2C2C]">Our Products</h1>
          <p className="max-w-xl text-lg text-[#6B6B6B]">Farm fresh cuts processed daily. Never frozen, always fresh.</p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProductFilter products={products} whatsappUrl={brand.whatsappUrl} />
        </div>
      </section>
    </div>
  );
}
