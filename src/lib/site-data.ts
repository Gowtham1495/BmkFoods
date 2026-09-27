import fs from "fs/promises";
import path from "path";

export type ProductCategory = "WHOLE" | "CURRY" | "BONELESS" | "SPECIAL" | "OFFALS";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  weightOptions: string | null;
  imageUrl: string | null;
  isAvailable: boolean;
  isBulkAvailable: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

export interface BrandSetting {
  brandName: string;
  logoUrl: string | null;
  tagline: string;
  phone: string | null;
  whatsappUrl: string | null;
  email: string | null;
  address: string | null;
  operatingHours: string | null;
  deliveryAreas: string | null;
  fssaiNumber: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  yearsInBusiness: string;
  farmPartners: string;
  dailyCapacity: string | null;
}

export interface HomeHero {
  headline: string;
  subheadline: string;
  heroImage: string | null;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

const contentDir = path.join(process.cwd(), "content");

async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as T;
  } catch { return null; }
}

export async function getBrand(): Promise<BrandSetting> {
  const data = await readJson<any>(path.join(contentDir, "brand", "index.json"));
  return {
    brandName: data?.brandName || "BMK Chicken",
    logoUrl: data?.logoUrl || null,
    tagline: data?.tagline || "Pure Meat. Pure Nutrition.",
    phone: data?.phone || null,
    whatsappUrl: data?.whatsapp || null,
    email: data?.email || null,
    address: data?.address || null,
    operatingHours: data?.operatingHours || "Mon-Sat 8am-6pm",
    deliveryAreas: data?.deliveryAreas || null,
    fssaiNumber: data?.fssaiNumber || null,
    instagramUrl: data?.instagram || null,
    facebookUrl: data?.facebook || null,
    yearsInBusiness: data?.yearsInBusiness || "10+",
    farmPartners: data?.farmPartners || "500+",
    dailyCapacity: data?.dailyCapacity || null,
  };
}

export async function getHomeHero(): Promise<HomeHero> {
  const data = await readJson<any>(path.join(contentDir, "home-hero", "index.json"));
  return {
    headline: data?.headline || "Pure Meat. Pure Nutrition.",
    subheadline: data?.subheadline || "Farm fresh chicken delivered from our farms to your plate.",
    heroImage: data?.heroImage || null,
    primaryCtaLabel: data?.primaryCtaLabel || "Explore Products",
    secondaryCtaLabel: data?.secondaryCtaLabel || "Contact Us",
  };
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const dir = path.join(contentDir, "products");
    const items = await fs.readdir(dir);
    const products: Product[] = [];
    for (const item of items) {
      const stat = await fs.stat(path.join(dir, item));
      if (!stat.isDirectory()) continue;
      const data = await readJson<any>(path.join(dir, item, "index.json"));
      if (!data) continue;
      products.push({
        id: item,
        name: data.name,
        slug: item,
        category: data.category as ProductCategory,
        description: data.description || "",
        weightOptions: data.weightOptions || null,
        imageUrl: data.image || null,
        isAvailable: data.isAvailable !== false,
        isBulkAvailable: !!data.isBulkAvailable,
        isFeatured: !!data.isFeatured,
        sortOrder: data.sortOrder || 0,
      });
    }
    return products.sort((a, b) => a.sortOrder - b.sortOrder);
  } catch { return []; }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter(p => p.isFeatured && p.isAvailable).slice(0, 4);
}

export async function getProductById(id: string): Promise<Product | null> {
  const data = await readJson<any>(path.join(contentDir, "products", id, "index.json"));
  if (!data) return null;
  return {
    id,
    name: data.name,
    slug: id,
    category: data.category,
    description: data.description || "",
    weightOptions: data.weightOptions || null,
    imageUrl: data.image || null,
    isAvailable: data.isAvailable !== false,
    isBulkAvailable: !!data.isBulkAvailable,
    isFeatured: !!data.isFeatured,
    sortOrder: data.sortOrder || 0,
  };
}
