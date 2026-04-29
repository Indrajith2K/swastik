import { Award, Building2, DoorOpen, Drill, Layers3, PanelTop, ShieldCheck, Sparkles, Store, Wrench } from "lucide-react";

export const company = {
  name: "Swastik & Company",
  location: "Erode, Tamil Nadu",
  phone: "+91 94424 66631",
  whatsapp: "https://wa.me/919442466631",
  email: "sales@swastikandcompany.in",
  address: "Premium hardware, plywood and architectural fittings supplier in Erode",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Brands", to: "/brands" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: "30+", label: "Years of trade trust" },
  { value: "5000+", label: "Products in stock" },
  { value: "250+", label: "Happy clients" },
  { value: "4.9", label: "Builder-rated service" },
];

export const productCategories = [
  {
    title: "Door & Security Hardware",
    slug: "door-security",
    icon: DoorOpen,
    summary: "Locks, handles, hinges, tower bolts and complete access systems for homes and projects.",
    items: ["Premium locksets", "Designer handles", "Hinges & closers", "Security accessories"],
  },
  {
    title: "Plywood & Laminates",
    slug: "plywood-laminates",
    icon: Layers3,
    summary: "Durable boards, commercial plywood, laminates and decorative surfaces for interior work.",
    items: ["Commercial plywood", "Decor laminates", "Block boards", "Edge bands"],
  },
  {
    title: "Modular Kitchen Fittings",
    slug: "modular-kitchen",
    icon: PanelTop,
    summary: "Smart baskets, channels, pantry systems and accessories for efficient modern kitchens.",
    items: ["Tandem systems", "Bottle pull-outs", "Soft-close channels", "Corner units"],
  },
  {
    title: "Bathroom & Glass Fittings",
    slug: "bath-glass",
    icon: Sparkles,
    summary: "Elegant glass hardware and bathroom accessories for clean, contemporary spaces.",
    items: ["Glass hinges", "Shower fittings", "Mirrors & shelves", "Bathroom accessories"],
  },
  {
    title: "Tools & Industrial Hardware",
    slug: "tools-industrial",
    icon: Drill,
    summary: "Professional tools, consumables and heavy-duty hardware for workshops and contractors.",
    items: ["Power tools", "Hand tools", "Fasteners", "Safety gear"],
  },
  {
    title: "Sliding & Aluminium Systems",
    slug: "sliding-aluminium",
    icon: Wrench,
    summary: "Smooth sliding tracks, aluminium profiles and fittings for wardrobes, doors and partitions.",
    items: ["Sliding channels", "Wardrobe systems", "Aluminium profiles", "Rollers & tracks"],
  },
];

export const strengths = [
  { icon: ShieldCheck, title: "Verified quality", text: "Curated products from dependable brands, selected for durability and finish." },
  { icon: Store, title: "Retail + wholesale", text: "Clear pricing for homeowners, architects, dealers and bulk contractor requirements." },
  { icon: Building2, title: "Project guidance", text: "A practical team that helps match fittings, boards and tools to the site need." },
  { icon: Award, title: "Local trust", text: "Three decades serving Erode with consistent stock availability and honest advice." },
];

export const purchaseSteps = [
  { emoji: "📋", title: "Share requirement", text: "Send size, category, photo or site need." },
  { emoji: "🔩", title: "Get product match", text: "We shortlist the right grade and fitting." },
  { emoji: "📦", title: "Confirm quantity", text: "Check stock, finish, budget and count." },
  { emoji: "🚚", title: "Pickup or dispatch", text: "Collect fast or arrange project supply." },
];

export const brandNames = [
  "Godrej", "Hettich", "Hafele", "Ebco", "Europa", "Yale", "Greenply", "CenturyPly", "Merino", "Royale Touche", "Asian Paints", "Bosch", "Stanley", "Dorset", "Ozone", "Kich", "Fevicol", "Pidilite", "Saint-Gobain", "Kajaria", "Cera", "Kohler", "Jaquar", "Sleek",
];

export const testimonials = [
  { name: "Priya S", role: "Homeowner", text: "Everything for my kitchen and wardrobe fittings was available in one place, with patient guidance and fair pricing." },
  { name: "Ramesh Kumar", role: "Interior contractor", text: "Door fittings and plywood quality are reliable. The team understands site urgency and recommends the right grade." },
  { name: "Arun Builders", role: "Builder", text: "A dependable hardware partner in Erode for regular purchases, bulk supply and quick support." },
];

export const enquiryOptions = ["Door & Security Hardware", "Plywood & Laminates", "Modular Kitchen", "Bathroom & Glass", "Tools & Industrial", "Sliding & Aluminium", "Other Requirement"];
