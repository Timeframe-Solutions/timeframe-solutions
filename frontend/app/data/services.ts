import type { ServiceVertical } from "../types";

export const services: ServiceVertical[] = [
  {
    id: "real-estate",
    icon: "lucide:home",
    title: "Real Estate & Property",
    description: "Listings, search filters, gallery, WhatsApp lead capture.",
    body: "A property website that actually generates leads. Search by location and price, browse a gallery, and send a WhatsApp inquiry all from their phone. Your listings stay off Facebook groups and on a site that ranks on Google.",
    featureList: [
      "Property search & filtering",
      "Image gallery with lightbox",
      "WhatsApp lead capture",
      "Google Maps",
      "Local SEO meta tags",
    ],
  },
  {
    id: "car-rental",
    icon: "lucide:car",
    title: "Car Rental & Yards",
    description: "Vehicle catalog, booking forms, dynamic pricing.",
    body: "Customers price and book online no back-and-forth DMs. Your fleet catalog shows every vehicle with specs and photos. A booking form collects name, dates, and pickup details before you even pick up the phone.",
    featureList: [
      "Fleet catalog",
      "Dynamic price calculator",
      "Booking form",
      "WhatsApp fallback",
      "Mobile-first design",
    ],
  },
  {
    id: "healthcare",
    icon: "lucide:hospital",
    title: "Clinics & Healthcare",
    description: "Appointment forms, doctor profiles, service pages.",
    body: "Patients are Googling your specialty right now. We build clinic sites that rank for local searches, answer patient questions, and convert visitors into booked appointments with a form, a WhatsApp button, or both.",
    featureList: [
      "Appointment form",
      "Doctor profiles",
      "Service pages for local SEO",
      "Google Maps",
      "Blog (optional)",
    ],
  },
  {
    id: "finance",
    icon: "lucide:landmark",
    title: "SACCOs & Finance",
    description: "Clean, trustworthy sites that communicate professionalism.",
    body: "Trust is your product. A clean, fast, professionally designed site tells members and prospects that your SACCO is serious. Product pages, contact forms, branch locations all in one site that doesn't look like it was built in 2012.",
    featureList: [
      "Product / loan pages",
      "Contact form",
      "Branch locations",
      "Management team section",
      "Professional design system",
    ],
  },
  {
    id: "retail",
    icon: "lucide:shopping-bag",
    title: "Retail & Electronics",
    description: "Product catalogs, WhatsApp ordering, cart UI.",
    body: "Turn your Instagram catalog into a real shop. Customers browse products, filter by category and price, add to cart, and order via WhatsApp. No payment gateway complexity just a clean, fast shopping experience your customers trust.",
    featureList: [
      "Product catalog",
      "Search & filtering",
      "Product gallery with zoom",
      "Client-side cart",
      "WhatsApp ordering",
    ],
  },
];
