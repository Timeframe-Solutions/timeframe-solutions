import type { PortfolioProject } from "../types";

export const projects: PortfolioProject[] = [
  {
    slug: "vanguard-properties",
    title: "Vanguard Properties",
    industry: "Real Estate",
    oneLiner:
      "Modern property portal with advanced search and WhatsApp lead capture.",
    coverImage: "/images/portfolio/vanguard/cover.webp",
    route: "/work/vanguard-properties",
    pages: "5 (Home, Properties, Property Detail, About, Contact)",
    features: [
      "Property search with location and price range filters",
      "Full-screen image gallery with lightbox",
      "WhatsApp inquiry button on every listing",
      "Google Maps embed on contact page",
      "Mobile-first, fast-loading design",
      "SEO meta tags for local search",
    ],
    demonstrates:
      "For property agents, developers, and landlords: we can build your listings site, your search, and your lead capture — all in one clean package.",
    liveUrl: "https://vanguard-properties.vercel.app/",
  },
  {
    slug: "apex-rides-nairobi",
    title: "Apex Rides Nairobi",
    industry: "Car Rental",
    oneLiner:
      "Car rental platform with fleet catalog, booking workflow, and dynamic pricing.",
    coverImage: "/images/portfolio/apex/cover.webp",
    route: "/work/apex-rides-nairobi",
    pages: "5 (Home, Fleet, Booking, About, Contact)",
    features: [
      "Vehicle catalog with specs, photos, and availability",
      "Dynamic price calculator (days × daily rate, live)",
      "Booking form with pickup/dropoff date and location",
      "WhatsApp booking fallback for customers who prefer it",
      "Clean mobile UX built for on-the-go bookings",
    ],
    demonstrates:
      "For car hire businesses and fleet owners: your customers can browse, price, and book online — without a single WhatsApp DM needed.",
    liveUrl: "https://apex-rides-sandy.vercel.app/",
  },
  {
    slug: "plaza-dental-clinic",
    title: "Plaza Dental Clinic",
    industry: "Healthcare",
    oneLiner:
      "Healthcare website with appointment scheduling, doctor profiles, and local SEO.",
    coverImage: "/images/portfolio/plaza/cover.webp",
    route: "/work/plaza-dental-clinic",
    pages: "6 (Home, Services, Doctors, Appointments, Blog, Contact)",
    features: [
      "Appointment request form with service selection",
      "Doctor profile cards with specializations and photos",
      "Individual service pages optimised for local search",
      "Branch location with embedded Google Maps",
      "Blog for health content and SEO authority",
      "WhatsApp contact for urgent inquiries",
    ],
    demonstrates:
      "For private clinics, specialists, and dental chains: patients search for you online. We make sure they find you — and book with you.",
    liveUrl: "https://dental-clinic-alpha-red.vercel.app",
  },
  {
    slug: "nexus-gadgets-kenya",
    title: "Nexus Gadgets Kenya",
    industry: "Electronics",
    oneLiner:
      "E-commerce storefront with product search, filtering, cart, and WhatsApp ordering.",
    coverImage: "/images/portfolio/nexus/cover.webp",
    route: "/work/nexus-gadgets-kenya",
    pages: "5 (Home, Shop, Product Detail, Cart, Contact)",
    features: [
      "Product catalog with category and price filtering",
      "Product detail pages with image gallery and zoom",
      "Client-side shopping cart with quantity management",
      "WhatsApp order confirmation flow",
      "Fast, optimised images with WebP and lazy loading",
    ],
    demonstrates:
      "For electronics shops and phone dealers: stop losing sales to Instagram DMs. Your customers get a real storefront — browse, cart, order, done.",
    liveUrl: "https://nexus-gadgets-one.vercel.app/",
  },
  {
    slug: "ivory-hotel",
    title: "Ivory Hotel",
    industry: "Hospitality",
    oneLiner:
      "Premium hotel website featuring a suite showcase, digital restaurant menu, and direct booking inquiries.",
    coverImage: "/images/portfolio/hotel/cover.webp",
    route: "/work/ivory-hotel",
    pages:
      "6 (Home, Rooms & Suites, Restaurant, Gallery, About Us, Contact Us)",
    features: [
      "Room & suite catalog with detailed amenities and size specs",
      "Dynamic digital dining menu with categorized sections",
      "High-resolution media gallery highlighting rooms and facilities",
      "Commission-free room reservation request forms",
      "Premium, responsive layout featuring elegant typography and dark gold accents",
      "Localized SEO integration for hospital and tourism search visibility",
    ],
    demonstrates:
      "For boutique hotels, luxury lodges, and guest houses: bypass OTA fees with a premium direct-booking platform showcasing your rooms and dining experiences.",
    liveUrl: "https://ivory-hotel-demo.vercel.app/",
  },
];
