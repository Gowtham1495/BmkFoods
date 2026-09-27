import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  collections: {
    products: collection({
      label: "Products",
      slugField: "name",
      path: "content/products/*/",
      format: { data: "json" },
      entryLayout: "content",
      columns: ["name"],
      schema: {
        name: fields.slug({ name: { label: "Product Name" } }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Whole Bird", value: "WHOLE" },
            { label: "Curry Cut", value: "CURRY" },
            { label: "Boneless", value: "BONELESS" },
            { label: "Special Cuts", value: "SPECIAL" },
            { label: "Offals", value: "OFFALS" },
          ],
          defaultValue: "CURRY",
        }),
        description: fields.text({ label: "Description", multiline: true }),
        weightOptions: fields.text({
          label: "Weight Options",
          description: "eg. 500g, 1kg, 2kg",
        }),
        image: fields.text({ label: "Product Image URL" }),
        isAvailable: fields.checkbox({ label: "Currently Available", defaultValue: true }),
        isBulkAvailable: fields.checkbox({ label: "Available for Bulk/Restaurant Orders", defaultValue: false }),
        isFeatured: fields.checkbox({ label: "Show on Home Page", defaultValue: false }),
        sortOrder: fields.integer({ label: "Sort Order (lower = first)", defaultValue: 0 }),
      },
    }),
  },
  singletons: {
    brand: singleton({
      label: "Business Info",
      path: "content/brand/",
      format: { data: "json" },
      schema: {
        brandName: fields.text({ label: "Brand Name" }),
        logoUrl: fields.text({
          label: "Logo Image URL",
          description: "Paste a public Cloudinary logo URL here for the website header.",
          defaultValue: "",
        }),
        tagline: fields.text({ label: "Tagline" }),
        phone: fields.text({ label: "Phone Number" }),
        whatsapp: fields.text({ label: "WhatsApp Link (full URL)" }),
        email: fields.text({ label: "Email" }),
        address: fields.text({ label: "Address", multiline: true }),
        operatingHours: fields.text({ label: "Operating Hours", description: "eg. Mon-Sat 8am-6pm" }),
        deliveryAreas: fields.text({ label: "Delivery Areas Covered" }),
        fssaiNumber: fields.text({ label: "FSSAI License Number" }),
        instagram: fields.text({ label: "Instagram URL" }),
        facebook: fields.text({ label: "Facebook URL" }),
        yearsInBusiness: fields.text({ label: "Years in Business", defaultValue: "10+" }),
        farmPartners: fields.text({ label: "Farm Partners Count", defaultValue: "500+" }),
        dailyCapacity: fields.text({ label: "Daily Processing Capacity" }),
      },
    }),
    homeHero: singleton({
      label: "Home Page Hero",
      path: "content/home-hero/",
      format: { data: "json" },
      schema: {
        headline: fields.text({ label: "Main Headline" }),
        subheadline: fields.text({ label: "Sub Headline", multiline: true }),
        heroImage: fields.text({
          label: "Hero Background Image URL",
          description: "Paste a public Cloudinary image URL here to replace the hero background.",
          defaultValue: "",
        }),
        primaryCtaLabel: fields.text({ label: "Primary Button Label", defaultValue: "Explore Products" }),
        secondaryCtaLabel: fields.text({ label: "Secondary Button Label", defaultValue: "Contact Us" }),
      },
    }),
  },
});
