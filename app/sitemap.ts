import type { MetadataRoute } from "next";
import { gastroMedicineServices } from "./data/gastroMedicine";
import { gastroSurgeryServices } from "./data/gastroSurgery";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.myracityhospital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gastro-medicine",
    "/gastro-surgery",
    "/book-appointment",
    "/blogs",
  ];
  const medicineRoutes = gastroMedicineServices.map(
    (service) => `/gastro-medicine/${service.slug}`
  );
  const surgeryRoutes = gastroSurgeryServices.map(
    (service) => `/gastro-surgery/${service.slug}`
  );

  return [...staticRoutes, ...medicineRoutes, ...surgeryRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
