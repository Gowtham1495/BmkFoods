import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { getBrand } from "@/lib/site-data";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brand = await getBrand();

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <SiteHeader brand={brand} />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <SiteFooter />
    </div>
  );
}
