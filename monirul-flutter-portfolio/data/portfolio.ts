export type Project = {
  index: string;
  slug: string;
  title: string;
  category: string;
  result: string;
  description: string;
  detail: string;
  tags: string[];
  accent: "violet" | "mint" | "amber";
  screen: "booking" | "flight" | "scan";
  images?: string[];
  links: { github: string; playStore: string; appStore: string; proof: string };
  caseStudy: { problem: string; role: string; decisions: string; challenge: string; outcome: string };
};

// EDIT HERE: Add projects, replace demo URLs, and update all portfolio content.
export const projects: Project[] = [
  {
    index: "01", slug: "paribahan", title: "Paribahan", category: "Transport & ticketing", result: "Conflict-safe booking",
    description: "A complete intercity booking flow with real-time seat maps, seat locking, route filtering, QR e-tickets and multi-gateway payments.",
    detail: "Optimized schedule synchronization and polling to prevent concurrent double bookings during peak sales.",
    tags: ["Flutter", "REST APIs", "Real-time sync", "Payments"], accent: "violet", screen: "booking",
    links: { github: "https://github.com/MonirulAppDev", playStore: "https://play.google.com/store/apps", appStore: "https://apps.apple.com/", proof: "https://www.linkedin.com/in/monirul-islam-mony/details/projects/" },
    caseStudy: { problem: "Intercity booking needs accurate seat availability during high-traffic sales windows.", role: "Mobile architecture, booking flow implementation, API integration and release delivery.", decisions: "Real-time seat maps, seat-locking mechanics, synchronized polling, QR e-tickets and payment abstraction.", challenge: "Preventing two users from completing checkout against the same seat while keeping the interface responsive.", outcome: "A conflict-safe booking workflow designed to reduce checkout friction and double-booking risk." },
  },
  {
    index: "02", slug: "flights-nepal", title: "Flights Nepal", category: "Travel commerce", result: "35% faster search",
    description: "Multi-airline flight search with multi-currency fare comparison, dynamic seat selection and automated digital receipts.",
    detail: "Introduced smart response caching and resilient fallbacks to keep booking usable on slow networks.",
    tags: ["Flutter", "Caching", "Multi-currency", "Resilience"], accent: "mint", screen: "flight",
    links: { github: "https://github.com/MonirulAppDev", playStore: "https://play.google.com/store/apps", appStore: "https://apps.apple.com/", proof: "https://www.linkedin.com/in/monirul-islam-mony/details/projects/" },
    caseStudy: { problem: "Travelers needed fast fare comparisons across airlines, currencies and inconsistent network conditions.", role: "Flutter feature engineering, API orchestration, caching strategy and resilient UI states.", decisions: "Response caching, multi-currency normalization, recoverable error states and progressive result rendering.", challenge: "Keeping search usable when upstream airline services were slow or temporarily unavailable.", outcome: "35% faster flight search with booking continuity on low-speed networks." },
  },
  {
    index: "03", slug: "document-suite", title: "Document Suite", category: "Scanning & productivity", result: "Up to 40% smaller PDFs",
    description: "Multi-page scanning, edge detection, perspective correction, image enhancement, OCR and PDF compression in one workflow.",
    detail: "Moved image processing off the UI path to remove lag while preserving document clarity.",
    tags: ["CameraX", "OCR", "Image processing", "BLoC"], accent: "amber", screen: "scan",
    links: { github: "https://github.com/MonirulAppDev", playStore: "https://play.google.com/store/apps", appStore: "https://apps.apple.com/", proof: "https://www.linkedin.com/in/monirul-islam-mony/details/projects/" },
    caseStudy: { problem: "Multi-page image processing caused visible UI lag and produced unnecessarily large documents.", role: "Camera workflow, image-processing pipeline, OCR integration and performance profiling.", decisions: "Background processing, edge detection, perspective correction, configurable enhancement and compression.", challenge: "Reducing output size without compromising the legibility of scanned text and images.", outcome: "Smooth multi-page processing and PDF files up to 40% smaller without sacrificing clarity." },
  },
];

export const testimonials = [
  { quote: "Monirul consistently turns complex mobile requirements into clear, maintainable product experiences.", name: "Demo Manager Name", role: "Engineering Manager · Replace later" },
  { quote: "He combines strong Flutter execution with thoughtful ownership from architecture through release.", name: "Demo Client Name", role: "Product Lead · Replace later" },
  { quote: "Reliable communication, careful problem solving and a strong focus on production quality.", name: "Demo Colleague Name", role: "Senior Engineer · Replace later" },
];

export const skillGroups = [
  { title: "Mobile engineering", items: ["Flutter", "Dart", "Kotlin", "Java", "Jetpack Compose", "Platform Channels"] },
  { title: "Architecture", items: ["Clean Architecture", "SOLID", "MVVM", "BLoC", "Riverpod", "Offline-first"] },
  { title: "Data & backend", items: ["Firebase", "Supabase", "REST APIs", "Socket.io", "SQLite", "Spring Boot"] },
  { title: "Delivery & quality", items: ["GitHub Actions", "Fastlane", "Codemagic", "Unit testing", "Crashlytics", "Sentry"] },
];

export const roles = [
  { date: "2024 — Present", role: "Software Engineer · Flutter Developer", company: "Prime Tech Solutions Ltd", text: "Own architecture-to-release delivery for enterprise and consumer apps. Led four launches, including TULO, PTSL Time Tracking, Cosmos Holiday and Buy Tickets BD." },
  { date: "2023", role: "Junior Software Engineer", company: "Clipping World Ltd", text: "Shipped four production document and scanning utilities, improving cross-platform responsiveness and end-user productivity." },
  { date: "2023", role: "Software Engineer Intern", company: "Code Studio", text: "Built Android and iOS features with Flutter, Firebase and third-party APIs under senior engineering mentorship." },
];

export const links = {
  email: "mailto:monirulappdev@gmail.com",
  phone: "tel:+8801828318941",
  linkedin: "https://www.linkedin.com/in/monirul-islam-mony",
  github: "https://github.com/MonirulAppDev",
  calendly: "https://calendly.com/app/scheduling/meeting_types/user/me",
  resume: "/Monirul-Islam-Flutter-Developer-CV.pdf",
};
