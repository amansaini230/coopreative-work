const STORAGE_KEY = "shramsetu-platform-v2";
const today = new Date();
const dateValue = (date) => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const seedListings = [
  { id: "wrk-101", name: "Anita Rao", service: "Home cleaning", category: "Cleaning", rate: 450, rating: 4.9, reviews: 38, area: "Koramangala", distance: "0.4 km", availability: "Today, 2:00 PM", image: "photo-1581578731548-c64695cc6952", description: "Careful, detail-first home cleaning using low-scent products. Cooperative member with verified references and flexible visits.", initials: "AR", color: "#e8b18d", verified: true, skillBadge: "Domestic worker · Level II", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-102", name: "Suresh Kumar", service: "Garden care", category: "Gardening", rate: 380, rating: 5.0, reviews: 24, area: "Jayanagar", distance: "0.7 km", availability: "Tomorrow, 9:00 AM", image: "photo-1416879595882-3373a0480b5b", description: "Seasonal garden care, planting, pruning, and practical advice to keep home gardens thriving.", initials: "SK", color: "#b3c6a2", verified: true, skillBadge: "Horticulture · Certified", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-103", name: "Farah Begum", service: "Electrical repairs", category: "Electrical", rate: 650, rating: 4.9, reviews: 19, area: "Indiranagar", distance: "1.2 km", image: "photo-1621905251918-48416bd8575a", availability: "Today, 4:30 PM", description: "Licensed electrician for switches, fans, lighting, and safe household wiring repairs.", initials: "FB", color: "#d9a8a1", verified: true, skillBadge: "Electrician · ITI certified", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-104", name: "Ravi Shankar", service: "Plumbing repairs", category: "Plumbing", rate: 550, rating: 4.8, reviews: 31, area: "Koramangala", distance: "1.5 km", availability: "Friday, 10:00 AM", image: "photo-1607472586893-edb57bdc0e39", description: "Tap, pipe, drain, and bathroom repairs with clear estimates before work begins.", initials: "RS", color: "#a8bdc5", verified: true, skillBadge: "Plumber · Level III", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-105", name: "Ayesha Nair", service: "Elder care support", category: "Caregiving", rate: 500, rating: 5.0, reviews: 42, area: "Jayanagar", distance: "0.8 km", availability: "Today, 12:30 PM", image: "photo-1600210492486-724fe5c67fb0", description: "Patient companionship and daily-living support for elders. First-aid trained with verified references.", initials: "AN", color: "#e0bd7b", verified: true, skillBadge: "Caregiver · First aid trained", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-106", name: "Imran Ali", service: "Carpentry & furniture", category: "Carpentry", rate: 700, rating: 4.9, reviews: 16, area: "Indiranagar", distance: "1.7 km", availability: "Tomorrow, 11:00 AM", image: "photo-1601058268499-e52658b8bb88", description: "Furniture assembly, shelves, door repairs, and made-to-measure carpentry for local homes.", initials: "IA", color: "#b8c2a3", verified: true, skillBadge: "Carpenter · Level II", society: "Bengaluru Urban Labour Cooperative" },
  { id: "wrk-107", name: "Latha Gowda", service: "Farm & dairy support", category: "Farm support", rate: 500, rating: 4.9, reviews: 21, area: "Mandya", distance: "Nearby", availability: "Tomorrow, 7:00 AM", image: "photo-1500382017468-9049fed747ef", description: "Seasonal field work, dairy support, and crop sorting through the Mandya Labour Cooperative Society.", initials: "LG", color: "#b9c69a", verified: true, skillBadge: "Farm & dairy worker · Certified", society: "Mandya Labour Cooperative Society" },
  { id: "wrk-108", name: "Mahadev Swamy", service: "Irrigation pump repair", category: "Farm equipment", rate: 750, rating: 4.8, reviews: 14, area: "Mandya", distance: "Nearby", availability: "Today, 3:00 PM", image: "photo-1621905251918-48416bd8575a", description: "Repair and maintenance for irrigation pumps and small farm equipment, with clear estimates before work begins.", initials: "MS", color: "#a8bdc5", verified: true, skillBadge: "Pump technician · Skill assessed", society: "Mandya Labour Cooperative Society" },
];
const seedRequests = [
  { id: "need-1", title: "Help prepare the ward community garden", category: "Gardening", description: "Looking for neighbours to help move compost and set up the raised beds this Saturday morning.", area: "Koramangala Community Garden", date: "Sat, Oct 3", author: "Nandini S.", helpers: 4, createdAt: Date.now() - 3600000 },
  { id: "need-2", title: "A hand with a bookshelf", category: "Carpentry", description: "I have the parts and instructions, just need another person to hold things steady for an hour.", area: "Jayanagar · 4th Block", date: "Flexible this week", author: "Mahesh K.", helpers: 1, createdAt: Date.now() - 7200000 },
  { id: "need-3", title: "Elder check-in during the afternoon", category: "Caregiving", description: "Seeking a trusted nearby neighbour to sit with my mother while I attend an appointment.", area: "Indiranagar · 12th Main", date: "Thu, Oct 1", author: "Lakshmi R.", helpers: 2, createdAt: Date.now() - 14400000 },
  { id: "need-4", title: "Neighbour to help check a field pump", category: "Farm equipment", description: "The irrigation pump stopped working before the next watering cycle. Looking for a nearby technician this afternoon.", area: "Mandya · Keregodu Road", date: "Today, 3:00 PM", author: "Ramesh Gowda", helpers: 0, createdAt: Date.now() - 18000000 },
];
const seedMembers = [
  { id: "MEM-101", workerId: "wrk-101", name: "Anita Rao", skill: "Home cleaning", locality: "Koramangala", phone: "+91 98XXX 41021", rating: 4.9, completedJobs: 38, status: "Verified", badge: "Domestic worker · Level II", insurance: "Covered · Group accident plan", joined: "12 Aug 2024", history: ["Identity checked · 12 Aug 2024", "Skill assessment passed · 16 Aug 2024", "Police verification renewed · 04 Jan 2026"] },
  { id: "MEM-102", workerId: "wrk-102", name: "Suresh Kumar", skill: "Gardening", locality: "Jayanagar", phone: "+91 98XXX 30584", rating: 5.0, completedJobs: 24, status: "Pending review", badge: "Horticulture · Certificate submitted", insurance: "Enrolment pending", joined: "22 Sep 2026", history: ["Membership application received · 22 Sep 2026", "Skill certificate uploaded · 22 Sep 2026"] },
  { id: "MEM-103", workerId: "wrk-103", name: "Farah Begum", skill: "Electrical repairs", locality: "Indiranagar", phone: "+91 98XXX 72160", rating: 4.9, completedJobs: 19, status: "Verified", badge: "Electrician · ITI certified", insurance: "Covered · Group accident plan", joined: "03 Feb 2025", history: ["Identity checked · 03 Feb 2025", "ITI certificate verified · 05 Feb 2025", "Police verification renewed · 11 Mar 2026"] },
  { id: "MEM-104", workerId: "wrk-104", name: "Ravi Shankar", skill: "Plumbing", locality: "Koramangala", phone: "+91 98XXX 86217", rating: 4.8, completedJobs: 31, status: "Verified", badge: "Plumber · Level III", insurance: "Covered · Group accident plan", joined: "19 Nov 2023", history: ["Identity checked · 19 Nov 2023", "Trade assessment passed · 21 Nov 2023", "Police verification renewed · 19 Nov 2025"] },
  { id: "MEM-107", workerId: "wrk-107", name: "Latha Gowda", skill: "Farm & dairy support", locality: "Mandya", phone: "+91 98XXX 51842", rating: 4.9, completedJobs: 21, status: "Verified", badge: "Farm & dairy worker · Certified", insurance: "Covered · Cooperative accident plan", joined: "09 May 2024", history: ["Identity checked · 09 May 2024", "Farm skills assessed · 12 May 2024", "Cooperative insurance enrolled · 20 May 2024"] },
  { id: "MEM-108", workerId: "wrk-108", name: "Mahadev Swamy", skill: "Irrigation pump repair", locality: "Mandya", phone: "+91 98XXX 66291", rating: 4.8, completedJobs: 14, status: "Verified", badge: "Pump technician · Skill assessed", insurance: "Covered · Cooperative accident plan", joined: "14 Jan 2025", history: ["Identity checked · 14 Jan 2025", "Pump repair assessment passed · 16 Jan 2025", "Cooperative insurance enrolled · 21 Jan 2025"] },
];
const seedBookings = [
  { id: "JOB-4101", listingId: "wrk-101", customerName: "Meera Iyer", area: "Koramangala", provider: "Anita Rao", service: "Home cleaning", rate: 450, hours: 2, date: dateValue(today), time: "Today, 2:00 PM", note: "Kitchen and living room cleaning.", status: "Requested", paymentMethod: "UPI", paymentStatus: "Awaiting service", createdAt: Date.now() - 1800000 },
  { id: "JOB-4102", listingId: "wrk-101", customerName: "Arjun Menon", area: "Koramangala", provider: "Anita Rao", service: "Home cleaning", rate: 450, hours: 3, date: dateValue(today), time: "Tomorrow, 10:00 AM", note: "Two-bedroom deep clean.", status: "Accepted", paymentMethod: "UPI", paymentStatus: "Awaiting service", createdAt: Date.now() - 7200000 },
  { id: "JOB-4092", listingId: "wrk-101", customerName: "Divya S.", area: "Koramangala", provider: "Anita Rao", service: "Home cleaning", rate: 450, hours: 2, date: dateValue(new Date(today.getTime() - 86400000 * 3)), time: "Wed, 11:00 AM", note: "", status: "Completed", paymentMethod: "UPI", paymentStatus: "Paid", rating: 5, feedback: "Excellent and careful work.", createdAt: Date.now() - 86400000 * 3, workerShare: 810, societyShare: 90 },
  { id: "JOB-4103", listingId: "wrk-103", customerName: "Kiran P.", area: "Indiranagar", provider: "Farah Begum", service: "Electrical repairs", rate: 650, hours: 1, date: dateValue(today), time: "Tomorrow, 4:00 PM", note: "Ceiling fan regulator check.", status: "Requested", paymentMethod: "UPI", paymentStatus: "Awaiting service", createdAt: Date.now() - 3600000 },
];
const localityCoordinates = {
  Koramangala: { lat: 12.9352, lon: 77.6245 },
  Jayanagar: { lat: 12.925, lon: 77.5838 },
  Indiranagar: { lat: 12.9784, lon: 77.6408 },
  "HSR Layout": { lat: 12.9116, lon: 77.6389 },
  Mandya: { lat: 12.522, lon: 76.897 },
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.listings) && Array.isArray(saved.bookings) && Array.isArray(saved.requests)) {
      return {
        ...saved,
        members: Array.isArray(saved.members) ? saved.members : seedMembers,
        disputes: Array.isArray(saved.disputes) ? saved.disputes : [],
        emergencyAlerts: Array.isArray(saved.emergencyAlerts) ? saved.emergencyAlerts : [],
        workerAvailability: saved.workerAvailability && typeof saved.workerAvailability === "object" ? saved.workerAvailability : {},
        favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
        helped: Array.isArray(saved.helped) ? saved.helped : [],
      };
    }
  } catch { /* Keep the marketplace available if stored data cannot be read. */ }
  return { listings: seedListings, bookings: seedBookings, requests: seedRequests, members: seedMembers, disputes: [], emergencyAlerts: [], workerAvailability: {}, helped: [], favorites: [], neighborhood: "Koramangala" };
}

const state = loadState();
let activePage = "discover";
let activeRole = "customer";
let currentWorkerId = "wrk-101";
let selectedCategory = "All services";
let searchTerm = "";
let sortOrder = "Recommended";
const app = document.querySelector("#app");

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

function localityDistanceKm(firstName, secondName) {
  const first = localityCoordinates[firstName];
  const second = localityCoordinates[secondName];
  if (!first || !second) return null;
  const radians = (degrees) => (degrees * Math.PI) / 180;
  const latitudeDelta = radians(second.lat - first.lat);
  const longitudeDelta = radians(second.lon - first.lon);
  const distance = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(radians(first.lat)) * Math.cos(radians(second.lat)) * Math.sin(longitudeDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1 - distance));
}

function listingDistance(listing) {
  const distance = localityDistanceKm(state.neighborhood, listing.area);
  return distance === null ? listing.distance || "Nearby" : `${distance < 1 ? distance.toFixed(1) : Math.round(distance)} km`;
}

function icon(name, size = 18) {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    heart: '<path d="M20.8 8.7c0 5.3-8.8 10.3-8.8 10.3S3.2 14 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/>',
    people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8"/><circle cx="10" cy="7" r="4"/>',
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    leaf: '<path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z"/><path d="M4 21c2-5 6-8 11-11"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;
}

function imageUrl(image, width = 760) {
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=82`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderShell() {
  app.innerHTML = `
    <header class="site-header">
      <a class="wordmark" href="#discover" aria-label="ShramSetu home"><span class="wordmark-icon">श</span><span>shram<span>setu</span></span></a>
      <nav class="top-nav" aria-label="Main navigation"></nav>
      <div class="header-actions"><label class="neighborhood-select">${icon("pin", 15)}<select id="neighborhood" aria-label="Your neighbourhood"><option>Koramangala</option><option>Jayanagar</option><option>Indiranagar</option><option>HSR Layout</option><option>Mandya</option><option>All areas</option></select></label><button id="offer-service-action" class="offer-button" data-action="offer" aria-label="Offer a service">${icon("plus", 16)}<span>Offer a service</span></button><button class="mobile-menu" data-action="menu" aria-label="Open navigation">${icon("list")}</button></div>
    </header>
    <div class="portal-strip"><span class="cooperative-label">Bengaluru Urban Labour Cooperative Federation</span><div class="portal-switcher" role="group" aria-label="Choose a portal"><button class="portal-option" data-role="customer">Customer</button><button class="portal-option" data-role="worker">Worker</button><button class="portal-option" data-role="admin">Society admin</button></div></div>
    <main id="page-content" class="page-content"></main>
    <footer class="site-footer"><a class="wordmark footer-wordmark" href="#discover"><span class="wordmark-icon">श</span><span>shram<span>setu</span></span></a><span>Cooperative work. Fair livelihoods.</span><span class="footer-neighborhood">${icon("pin", 14)} <span id="footer-area"></span></span></footer>
    <dialog id="action-dialog" class="action-dialog"><div id="dialog-content"></div></dialog>
    <div id="toast-region" class="toast-region" aria-live="polite"></div>`;
  document.querySelector("#neighborhood").value = state.neighborhood || "Koramangala";
  document.querySelector(".cooperative-label").textContent = "Karnataka Labour Cooperative Federation";
  renderPage();
}

function navigationForRole() {
  const pages = {
    customer: [["discover", "Find services"], ["community", "Community"], ["activity", "My activity"]],
    worker: [["worker", "My dashboard"], ["worker-jobs", "Job alerts"], ["worker-payouts", "Schedule & payouts"]],
    admin: [["admin", "Overview"], ["admin-members", "Member verification"], ["admin-operations", "Operations"], ["admin-disputes", "Disputes"]],
  };
  document.querySelector(".top-nav").innerHTML = pages[activeRole].map(([page, label]) => `<button class="top-link ${activePage === page ? "is-active" : ""}" data-page="${page}">${label}${page === "activity" ? '<span class="nav-count" id="booking-count"></span>' : ""}</button>`).join("");
  document.querySelectorAll(".portal-option").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.role === activeRole);
    button.setAttribute("aria-pressed", String(button.dataset.role === activeRole));
  });
  document.querySelector("#offer-service-action").hidden = activeRole !== "customer";
}

function listingCard(listing, index = 0) {
  return `<article class="service-card" style="--card-delay:${index * 55}ms">
    <div class="service-image"><img src="${imageUrl(escapeHtml(listing.image), 760)}" alt="${escapeHtml(listing.service)} in a neighborhood home" loading="lazy"><span class="image-tag">${escapeHtml(listing.category)}</span><button class="save-service ${state.favorites.includes(listing.id) ? "is-saved" : ""}" data-action="save-service" data-id="${escapeHtml(listing.id)}" aria-label="Save ${escapeHtml(listing.service)}" aria-pressed="${state.favorites.includes(listing.id)}" title="Save service">${icon("heart", 17)}</button></div>
    <div class="service-info"><div class="provider-line"><span class="provider-avatar" style="--avatar-color:${escapeHtml(listing.color || "#c4d4c4")}">${escapeHtml(listing.initials || listing.name.split(" ").map((part) => part[0]).join(""))}</span><div><strong>${escapeHtml(listing.name)}</strong><span>${icon("pin", 12)} ${escapeHtml(listing.area)} · ${escapeHtml(listingDistance(listing))}</span><small class="worker-skill-badge">✓ ${escapeHtml(listing.skillBadge || "Verified cooperative member")}</small></div><span class="rating">${icon("star", 13)} ${Number(listing.rating).toFixed(1)} <small>(${listing.reviews})</small></span></div>
    <h3>${escapeHtml(listing.service)}</h3><p class="service-description">${escapeHtml(listing.description)}</p><div class="service-card-bottom"><span class="availability"><span></span>${escapeHtml(listing.availability || "Flexible scheduling")}</span><span class="rate"><strong>${formatINR(listing.rate)}</strong> / hr</span></div><button class="card-book-button" data-action="book" data-id="${escapeHtml(listing.id)}">View & book ${icon("arrow", 15)}</button></div>
  </article>`;
}

function filteredListings() {
  let listings = state.listings.filter((listing) => {
    const distance = localityDistanceKm(state.neighborhood, listing.area);
    const isInRange = state.neighborhood === "All areas" || (distance === null ? listing.area === state.neighborhood : distance <= 15);
    return listing.verified !== false && state.workerAvailability?.[listing.id] !== false && isInRange && (selectedCategory === "All services" || listing.category === selectedCategory);
  });
  if (searchTerm.trim()) {
    const query = searchTerm.trim().toLowerCase();
    listings = listings.filter((listing) => `${listing.name} ${listing.service} ${listing.category} ${listing.area} ${listing.description}`.toLowerCase().includes(query));
  }
  if (sortOrder === "Price: low to high") listings.sort((a, b) => a.rate - b.rate);
  if (sortOrder === "Top rated") listings.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  return listings;
}

function renderDiscover() {
  const categories = ["All services", ...new Set(state.listings.filter((listing) => listing.verified !== false).map((listing) => listing.category))];
  const listings = filteredListings();
  return `<section class="market-hero"><div class="hero-text"><p class="eyebrow">A cooperative network for local work</p><h1>Fair work.<br><em>Closer to home.</em></h1><p>Book verified cooperative workers for the essential work that keeps Bengaluru households moving.</p><div class="hero-meta"><span>${icon("pin", 15)} Serving ${escapeHtml(state.neighborhood || "Koramangala")}, Bengaluru</span><span class="hero-meta-dot"></span><span>${state.listings.filter((listing) => listing.verified !== false && listing.area === state.neighborhood).length} verified services nearby</span></div></div><div class="hero-art"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85" alt="A bright, welcoming Bengaluru home"><div class="hero-note"><span class="note-spark">✳</span><span><strong>Work stays in the community</strong><small>Fair wages. Local cooperative ownership.</small></span></div><div class="hero-stamp">WORKER<br>OWNED</div></div></section>
  <section class="search-section" aria-label="Find a service"><div class="search-box">${icon("search", 19)}<input id="service-search" type="search" placeholder="Search a skill, service, or worker" value="${escapeHtml(searchTerm)}" aria-label="Search cooperative services"><button id="search-clear" data-action="clear-search" aria-label="Clear search" ${searchTerm ? "" : "hidden"}>${icon("close", 17)}</button><span class="search-divider"></span><span class="search-place">${icon("pin", 16)} ${escapeHtml(state.neighborhood || "Koramangala")}</span></div></section>
  <section class="market-section"><div class="section-heading"><div><p class="eyebrow">Find your people</p><h2>Services around you</h2></div><label class="sort-control"><span>Sort by</span><select id="sort-order"><option ${sortOrder === "Recommended" ? "selected" : ""}>Recommended</option><option ${sortOrder === "Top rated" ? "selected" : ""}>Top rated</option><option ${sortOrder === "Price: low to high" ? "selected" : ""}>Price: low to high</option></select></label></div><div class="category-row" role="group" aria-label="Filter by service category">${categories.map((category) => `<button class="category-chip ${selectedCategory === category ? "is-active" : ""}" data-category="${escapeHtml(category)}">${category === "All services" ? icon("home", 15) : ""}${escapeHtml(category)}</button>`).join("")}</div><div class="service-grid" id="service-grid">${listings.length ? listings.map(listingCard).join("") : `<div class="empty-market"><span>${icon("search", 25)}</span><h3>No services found yet</h3><p>Try another search or browse all categories.</p><button class="text-button" data-action="reset-search">Clear filters ${icon("arrow", 14)}</button></div>`}</div></section>
  <section class="join-band"><div class="join-illustration" aria-hidden="true"><span>✳</span><span>↗</span><span>⌂</span></div><div><p class="eyebrow">Member-owned, worker-first</p><h2>Fair work.<br>Shared prosperity.</h2></div><p>Cooperative members set transparent service rates, keep 90% of earnings, and build welfare reserves together.</p><button class="join-button" data-action="offer">Join the cooperative ${icon("arrow", 16)}</button></section>`;
}

function bookingCard(booking) {
  const listing = state.listings.find((item) => item.id === booking.listingId);
  const statusClass = booking.status.toLowerCase().replaceAll(" ", "-");
  const hasDispute = state.disputes.some((dispute) => dispute.bookingId === booking.id);
  const actions = booking.status === "Requested" || booking.status === "Accepted"
    ? `<button class="quiet-button" data-action="cancel-booking" data-id="${escapeHtml(booking.id)}">Cancel booking</button><button class="quiet-button" data-action="raise-dispute" data-id="${escapeHtml(booking.id)}">Raise an issue</button>`
    : booking.status === "Completed"
      ? `${booking.paymentStatus === "Paid" ? `<span class="status-tag-positive">UPI payment recorded</span>` : `<button class="solid-mini" data-action="record-payment" data-id="${escapeHtml(booking.id)}">Record UPI payment</button>`}<button class="quiet-button" data-action="invoice" data-id="${escapeHtml(booking.id)}">Invoice</button>${booking.rating ? `<span class="rating">★ ${booking.rating} · Thank you</span>` : `<button class="quiet-button" data-action="feedback" data-id="${escapeHtml(booking.id)}">Rate service</button>`}${hasDispute ? `<span class="status-tag-pending">Issue raised</span>` : `<button class="quiet-button" data-action="raise-dispute" data-id="${escapeHtml(booking.id)}">Raise an issue</button>`}`
      : `<span class="booking-status cancelled">Cancelled</span>`;
  return `<article class="booking-row"><div class="booking-date"><strong>${escapeHtml(new Date(`${booking.date}T12:00:00`).toLocaleDateString("en-IN", { day: "2-digit" }))}</strong><span>${escapeHtml(new Date(`${booking.date}T12:00:00`).toLocaleDateString("en-IN", { month: "short" }))}</span></div><div class="booking-details"><div class="booking-title-row"><h3>${escapeHtml(booking.service)}</h3><span class="booking-status ${statusClass}">${escapeHtml(booking.status)}</span></div><p>${escapeHtml(booking.customerName || "Household member")} · ${escapeHtml(listing?.name || booking.provider)} · ${escapeHtml(booking.time)} · ${booking.hours} hr${booking.hours > 1 ? "s" : ""}</p>${booking.note ? `<small>“${escapeHtml(booking.note)}”</small>` : ""}</div><div class="booking-amount"><strong>${formatINR(booking.rate * booking.hours)}</strong><span>service total · ${escapeHtml(booking.paymentMethod || "UPI")}</span></div><div class="booking-actions">${actions}</div></article>`;
}

function renderActivity() {
  const bookings = [...state.bookings].sort((a, b) => b.createdAt - a.createdAt);
  const pending = bookings.filter((booking) => booking.status === "Requested").length;
  const spent = bookings.filter((booking) => booking.status !== "Cancelled").reduce((total, booking) => total + booking.rate * booking.hours, 0);
  return `<section class="page-intro activity-intro"><div><p class="eyebrow">Your neighborhood work</p><h1>My activity</h1><p>Keep track of the services you’ve booked and the work you’ve shared.</p></div><div class="activity-summary"><div><span>Upcoming requests</span><strong>${pending}</strong></div><div><span>Local services booked</span><strong>${bookings.filter((booking) => booking.status !== "Cancelled").length}</strong></div></div></section><section class="activity-section"><div class="section-heading"><div><p class="eyebrow">Appointments & requests</p><h2>Your bookings</h2></div><button class="outline-button" data-page="discover">Find a service ${icon("arrow", 15)}</button></div>${bookings.length ? `<div class="booking-list">${bookings.map(bookingCard).join("")}</div>` : `<div class="empty-bookings"><div class="empty-doodle">${icon("calendar", 26)}</div><h3>Your calendar has room to grow.</h3><p>When you book a neighbor, your plans will show up here.</p><button class="solid-button" data-page="discover">Explore local services ${icon("arrow", 15)}</button></div>`}</section><section class="activity-tip"><span>${icon("heart", 19)}</span><p><strong>Keep it neighborly.</strong> A clear note and a little flexibility help local providers do their best work.</p></section>`;
}

function requestCard(request) {
  const helped = state.helped.includes(request.id);
  return `<article class="request-card"><div class="request-topline"><span class="request-category">${icon("leaf", 13)} ${escapeHtml(request.category)}</span><time>${escapeHtml(request.date)}</time></div><h3>${escapeHtml(request.title)}</h3><p>${escapeHtml(request.description)}</p><div class="request-location">${icon("pin", 14)} ${escapeHtml(request.area)}</div><div class="request-bottom"><span class="helpers-count">${icon("people", 15)} <strong>${request.helpers}</strong> ${request.helpers === 1 ? "neighbor" : "neighbors"} offering help</span><button class="help-button ${helped ? "is-helping" : ""}" data-action="help" data-id="${escapeHtml(request.id)}" ${helped ? "disabled" : ""}>${helped ? "You’re helping" : "I can help"} ${helped ? "✓" : icon("arrow", 14)}</button></div><div class="request-author">Posted by <strong>${escapeHtml(request.author)}</strong></div></article>`;
}

function renderCommunity() {
  const requests = [...state.requests].sort((a, b) => b.createdAt - a.createdAt);
  return `<section class="community-hero"><div><p class="eyebrow">People make a place</p><h1>Good neighbours<br><em>show up.</em></h1><p>Trade a hand, share what you know, and make the everyday a little easier for everyone.</p><button class="community-post-button" data-action="post-need">Post a community need ${icon("plus", 16)}</button></div><div class="community-art"><div class="community-orbit orbit-one"></div><div class="community-orbit orbit-two"></div><div class="community-center">${icon("people", 44)}</div><span class="orbit-label label-one">garden crew</span><span class="orbit-label label-two">tool share</span><span class="orbit-label label-three">school run</span><span class="orbit-label label-four">good company</span></div></section><section class="community-list-section"><div class="section-heading"><div><p class="eyebrow">Neighbours helping neighbours</p><h2>Community board <span class="board-count">${requests.length}</span></h2></div><label class="sort-control"><span>Near</span><select id="community-area"><option>All neighbourhoods</option><option>Koramangala</option><option>Jayanagar</option><option>Indiranagar</option></select></label></div><div class="request-grid" id="request-grid">${requests.length ? requests.map(requestCard).join("") : `<div class="empty-market"><h3>The board is waiting for a first note.</h3><p>Share a need and invite your neighbours to pitch in.</p></div>`}</div></section><section class="community-principle"><span class="principle-mark">✳</span><p><strong>Community is a verb.</strong> Every small offer of time or skill makes the whole neighbourhood stronger.</p><span class="principle-credit">Local, by nature</span></section>`;
}

function jobsForWorker(workerId = currentWorkerId) {
  return state.bookings.filter((booking) => booking.listingId === workerId).sort((a, b) => b.createdAt - a.createdAt);
}

function workerJobCard(booking) {
  const actions = booking.status === "Requested"
    ? `<button class="quiet-button" data-action="decline-job" data-id="${escapeHtml(booking.id)}">Decline</button><button class="solid-mini" data-action="accept-job" data-id="${escapeHtml(booking.id)}">Accept job</button>`
    : booking.status === "Accepted"
      ? `<button class="solid-mini" data-action="finish-job" data-id="${escapeHtml(booking.id)}">Mark work complete</button>`
      : `<span class="payout-state">${escapeHtml(booking.paymentStatus || "Invoice ready")}</span>`;
  const scheduleDate = new Date(`${booking.date}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  return `<article class="work-order"><div class="work-order-main"><div class="booking-title-row"><h3>${escapeHtml(booking.service)}</h3><span class="booking-status ${booking.status.toLowerCase()}">${escapeHtml(booking.status)}</span></div><p>${escapeHtml(booking.customerName || "Household member")} · ${escapeHtml(booking.area)} · ${escapeHtml(booking.time)}</p><small>${escapeHtml(scheduleDate)}${booking.note ? ` · ${escapeHtml(booking.note)}` : ""}</small></div><div class="work-order-price"><strong>${formatINR(booking.rate * booking.hours)}</strong><span>${booking.hours} hr${booking.hours > 1 ? "s" : ""} · ${formatINR(booking.rate)}/hr</span></div><div class="work-order-actions">${actions}</div></article>`;
}

function renderWorkerDashboard() {
  const member = state.members.find((item) => item.workerId === currentWorkerId);
  const jobs = jobsForWorker();
  const requested = jobs.filter((booking) => booking.status === "Requested").length;
  const active = jobs.filter((booking) => booking.status === "Accepted").length;
  const earned = jobs.filter((booking) => booking.status === "Completed").reduce((sum, booking) => sum + (booking.workerShare || Math.round(booking.rate * booking.hours * 0.9)), 0);
  const isAvailable = state.workerAvailability?.[currentWorkerId] !== false;
  return `<section class="portal-welcome"><div><p class="eyebrow">Worker portal · ${escapeHtml(member?.id || "MEM-101")}</p><h1>Namaste, ${escapeHtml(member?.name || "Anita Rao")}</h1><p>Your work, schedule, and earnings with Bengaluru Urban Labour Cooperative.</p><div class="trust-tags"><span class="verified-tag">✓ Identity verified</span><span class="verified-tag">${escapeHtml(member?.badge || "Skill certified")}</span><span class="verified-tag">${escapeHtml(member?.insurance || "Welfare cover active")}</span></div></div><button class="availability-control ${isAvailable ? "is-online" : ""}" data-action="toggle-availability"><span class="availability-light"></span><span><strong>${isAvailable ? "Available for work" : "Not taking requests"}</strong><small>Tap to update your status</small></span></button></section><section class="portal-metrics"><article><span>New job alerts</span><strong>${requested}</strong><small>Matched to your skills & area</small></article><article><span>Active bookings</span><strong>${active}</strong><small>Confirmed work ahead</small></article><article><span>Earned this month</span><strong>${formatINR(earned)}</strong><small>90% direct worker share</small></article><article><span>Member rating</span><strong>${Number(member?.rating || 4.9).toFixed(1)} <span class="metric-star">★</span></strong><small>${member?.completedJobs || 38} completed jobs</small></article></section><div class="portal-two-col"><section class="portal-panel"><div class="portal-panel-heading"><div><p class="eyebrow">Your next steps</p><h2>Job alerts</h2></div><button class="plain-action" data-page="worker-jobs">View all ${icon("arrow", 14)}</button></div><div class="work-order-list">${jobs.filter((booking) => ["Requested", "Accepted"].includes(booking.status)).slice(0, 3).map(workerJobCard).join("") || `<div class="inline-empty">No incoming bookings right now. Your member profile is active.</div>`}</div></section><aside class="welfare-panel"><div class="welfare-heading"><span>${icon("heart", 20)}</span><div><p class="eyebrow">Worker welfare</p><h2>You're covered</h2></div></div><div class="welfare-stat"><span>Group accident cover</span><strong>${escapeHtml(member?.insurance || "Active")}</strong></div><div class="welfare-stat"><span>Cooperative reserve contribution</span><strong>10% per completed job</strong></div><div class="welfare-stat"><span>Emergency response</span><strong>Society help desk · 24/7</strong></div><button class="emergency-button" data-action="emergency">${icon("plus", 15)} Request emergency assistance</button><p class="emergency-status">${state.emergencyAlerts?.some((alert) => alert.workerId === currentWorkerId && alert.status === "Open") ? "Your active assistance alert is visible to the society admin." : "Use this for an urgent safety or health concern."}</p></aside></div><section class="portal-panel member-history"><div class="portal-panel-heading"><div><p class="eyebrow">Your cooperative profile</p><h2>Verification history</h2></div><span class="verified-tag">${escapeHtml(member?.status || "Verified")}</span></div><div class="verification-timeline">${(member?.history || []).map((entry) => `<p><span></span>${escapeHtml(entry)}</p>`).join("")}</div></section>`;
}

function renderWorkerJobs() {
  const jobs = jobsForWorker();
  return `<section class="page-intro"><div><p class="eyebrow">Skill & location matched</p><h1>Job alerts</h1><p>Requests routed to your verified services in ${escapeHtml(state.members.find((item) => item.workerId === currentWorkerId)?.locality || "Bengaluru")}.</p></div><div class="activity-summary"><div><span>New requests</span><strong>${jobs.filter((job) => job.status === "Requested").length}</strong></div><div><span>Active work</span><strong>${jobs.filter((job) => job.status === "Accepted").length}</strong></div></div></section><section class="portal-panel portal-list-section"><div class="portal-panel-heading"><div><p class="eyebrow">Bookings assigned to your skills</p><h2>My work queue</h2></div><span class="field-note">${jobs.length} bookings</span></div><div class="work-order-list">${jobs.length ? jobs.map(workerJobCard).join("") : `<div class="inline-empty">No job alerts yet. Keep your availability up to date.</div>`}</div></section>`;
}

function renderWorkerPayouts() {
  const jobs = jobsForWorker().filter((booking) => booking.status === "Completed");
  const upcoming = jobsForWorker().filter((booking) => booking.status === "Accepted");
  const gross = jobs.reduce((sum, booking) => sum + booking.rate * booking.hours, 0);
  const workerShare = jobs.reduce((sum, booking) => sum + (booking.workerShare || Math.round(booking.rate * booking.hours * 0.9)), 0);
  const cooperativeShare = gross - workerShare;
  const rows = jobs.map((booking) => {
    const share = booking.workerShare || Math.round(booking.rate * booking.hours * 0.9);
    return `<tr><td>${escapeHtml(booking.id)}</td><td>${escapeHtml(booking.service)} · ${escapeHtml(booking.customerName || "Member")}</td><td>${escapeHtml(booking.date)}</td><td>${formatINR(booking.rate * booking.hours)}</td><td class="worker-earning">${formatINR(share)}</td><td><span class="${booking.paymentStatus === "Paid" ? "status-tag-positive" : "status-tag-pending"}">${escapeHtml(booking.paymentStatus || "Awaiting payment")}</span></td><td><button class="row-link" data-action="invoice" data-id="${escapeHtml(booking.id)}">Invoice</button></td></tr>`;
  }).join("");
  return `<section class="page-intro"><div><p class="eyebrow">Transparent earnings</p><h1>Schedule & payouts</h1><p>Track completed work, your direct share, and cooperative contributions.</p></div><div class="payout-cycle"><span>UPI payout cycle</span><strong>Within 24 hours of cleared payment</strong></div></section><section class="portal-panel scheduled-panel"><div class="portal-panel-heading"><div><p class="eyebrow">Your upcoming work</p><h2>Confirmed schedule</h2></div><span class="field-note">${upcoming.length} bookings</span></div><div class="work-order-list">${upcoming.map(workerJobCard).join("") || '<div class="inline-empty">No confirmed jobs scheduled.</div>'}</div></section><section class="portal-metrics payout-metrics"><article><span>Gross service value</span><strong>${formatINR(gross)}</strong><small>Completed bookings</small></article><article><span>Your direct share · 90%</span><strong>${formatINR(workerShare)}</strong><small>Worker earnings</small></article><article><span>Society reserve · 10%</span><strong>${formatINR(cooperativeShare)}</strong><small>Welfare & operations fund</small></article><article><span>Micro-insurance</span><strong>Active</strong><small>Group accident cover</small></article></section><section class="portal-panel"><div class="portal-panel-heading"><div><p class="eyebrow">Invoices & payout status</p><h2>Completed work</h2></div><span class="field-note">UPI payout cycle · 24 hours</span></div><div class="table-wrap"><table class="activity-table cooperative-table"><thead><tr><th>Job ID</th><th>Service</th><th>Completed</th><th>Gross</th><th>Your share</th><th>Payment</th><th>Invoice</th></tr></thead><tbody>${rows || '<tr><td colspan="7"><div class="empty-state">Completed jobs and payout records will appear here.</div></td></tr>'}</tbody></table></div></section>`;
}

function renderAdminDashboard() {
  const verified = state.members.filter((member) => member.status === "Verified").length;
  const pending = state.members.filter((member) => member.status === "Pending review").length;
  const gross = state.bookings.filter((booking) => booking.status !== "Cancelled").reduce((sum, booking) => sum + booking.rate * booking.hours, 0);
  const alerts = state.emergencyAlerts?.filter((alert) => alert.status === "Open").length || 0;
  return `<section class="portal-welcome admin-welcome"><div><p class="eyebrow">Society operations · Bengaluru Urban Labour Cooperative</p><h1>Cooperative dashboard</h1><p>Member verification, fair work allocation, and transparent society earnings.</p></div><span class="admin-day">${new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}</span></section><section class="portal-metrics"><article><span>Verified members</span><strong>${verified}</strong><small>Active cooperative workers</small></article><article><span>Awaiting verification</span><strong>${pending}</strong><small>Member profiles to review</small></article><article><span>Booking value</span><strong>${formatINR(gross)}</strong><small>Across all service orders</small></article><article><span>Open welfare alerts</span><strong>${alerts}</strong><small>Worker assistance requests</small></article></section><div class="portal-two-col admin-panels"><section class="portal-panel"><div class="portal-panel-heading"><div><p class="eyebrow">Society onboarding</p><h2>Verification queue</h2></div><button class="plain-action" data-page="admin-members">Review members ${icon("arrow", 14)}</button></div>${state.members.filter((member) => member.status === "Pending review").map((member) => `<div class="member-queue-row"><span class="provider-avatar">${escapeHtml(member.name.split(" ").map((part) => part[0]).join(""))}</span><div><strong>${escapeHtml(member.name)}</strong><small>${escapeHtml(member.skill)} · ${escapeHtml(member.locality)}</small></div><button class="row-action" data-action="verify-member" data-id="${escapeHtml(member.id)}">Verify</button></div>`).join("") || `<div class="inline-empty">All member profiles are reviewed.</div>`}</section><section class="welfare-panel"><div class="welfare-heading"><span>${icon("people", 20)}</span><div><p class="eyebrow">Cooperative welfare</p><h2>Worker-first operations</h2></div></div><div class="welfare-stat"><span>Direct worker share</span><strong>90% of service value</strong></div><div class="welfare-stat"><span>Society reserve</span><strong>10% reinvested</strong></div><div class="welfare-stat"><span>Insurance enrolment</span><strong>${state.members.filter((member) => member.insurance.startsWith("Covered")).length} members covered</strong></div><button class="emergency-button" data-page="admin-operations">Open operations desk ${icon("arrow", 14)}</button></section></div><section class="portal-panel member-history"><div class="portal-panel-heading"><div><p class="eyebrow">Live service operations</p><h2>Recent bookings</h2></div><button class="plain-action" data-page="admin-operations">All operations ${icon("arrow", 14)}</button></div><div class="work-order-list">${state.bookings.slice(0, 3).map((booking) => `<div class="operation-row"><div><strong>${escapeHtml(booking.id)} · ${escapeHtml(booking.service)}</strong><small>${escapeHtml(booking.provider)} · ${escapeHtml(booking.area)}</small></div><span class="booking-status ${booking.status.toLowerCase()}">${escapeHtml(booking.status)}</span><strong>${formatINR(booking.rate * booking.hours)}</strong></div>`).join("")}</div></section>`;
}

function renderAdminMembers() {
  return `<section class="page-intro"><div><p class="eyebrow">Member records</p><h1>Member verification</h1><p>Review identity, trade credentials, and verification history before activating a worker profile.</p></div><div class="activity-summary"><div><span>Verified</span><strong>${state.members.filter((member) => member.status === "Verified").length}</strong></div><div><span>In review</span><strong>${state.members.filter((member) => member.status === "Pending review").length}</strong></div></div></section><div class="member-record-list">${state.members.map((member) => `<article class="member-record"><div class="member-record-heading"><span class="provider-avatar">${escapeHtml(member.name.split(" ").map((part) => part[0]).join(""))}</span><div><h2>${escapeHtml(member.name)}</h2><p>${escapeHtml(member.id)} · ${escapeHtml(member.locality)}, Bengaluru</p></div><span class="${member.status === "Verified" ? "status-tag-positive" : "status-tag-pending"}">${escapeHtml(member.status)}</span></div><div class="member-record-details"><div><span>Trade & skill badge</span><strong>${escapeHtml(member.badge)}</strong></div><div><span>Cooperative service</span><strong>${escapeHtml(member.skill)}</strong></div><div><span>Worker rating</span><strong>★ ${member.rating} · ${member.completedJobs} jobs</strong></div><div><span>Welfare cover</span><strong>${escapeHtml(member.insurance)}</strong></div><div><span>Member since</span><strong>${escapeHtml(member.joined)}</strong></div><div><span>Contact</span><strong>${escapeHtml(member.phone)}</strong></div></div><details class="verification-history"><summary>Verification history</summary>${member.history.map((entry) => `<p>${escapeHtml(entry)}</p>`).join("")}</details><div class="member-record-actions">${member.status === "Pending review" ? `<button class="solid-mini" data-action="verify-member" data-id="${escapeHtml(member.id)}">Approve member</button><button class="quiet-button" data-action="request-documents" data-id="${escapeHtml(member.id)}">Request documents</button>` : `<button class="quiet-button" data-action="member-status" data-id="${escapeHtml(member.id)}">Suspend access</button>`}</div></article>`).join("")}</div>`;
}

function renderAdminOperations() {
  const bookings = [...state.bookings].sort((a, b) => b.createdAt - a.createdAt);
  return `<section class="page-intro"><div><p class="eyebrow">Service delivery & earnings</p><h1>Operations desk</h1><p>Track every booking, invoice, payment reference, and cooperative share.</p></div><div class="activity-summary"><div><span>Active work</span><strong>${bookings.filter((job) => ["Requested", "Accepted"].includes(job.status)).length}</strong></div><div><span>Open welfare alerts</span><strong>${state.emergencyAlerts?.filter((alert) => alert.status === "Open").length || 0}</strong></div></div></section><section class="portal-panel"><div class="portal-panel-heading"><div><p class="eyebrow">Transparent billing</p><h2>All service orders</h2></div><span class="field-note">${bookings.length} records</span></div><div class="table-wrap"><table class="activity-table cooperative-table"><thead><tr><th>Job</th><th>Customer & area</th><th>Worker</th><th>Service</th><th>Gross</th><th>Worker 90%</th><th>Status</th><th>Payment</th><th>Invoice</th></tr></thead><tbody>${bookings.map((booking) => `<tr><td>${escapeHtml(booking.id)}</td><td>${escapeHtml(booking.customerName || "Household member")}<br>${escapeHtml(booking.area)}</td><td>${escapeHtml(booking.provider)}</td><td>${escapeHtml(booking.service)}</td><td>${formatINR(booking.rate * booking.hours)}</td><td>${formatINR(booking.workerShare || Math.round(booking.rate * booking.hours * 0.9))}</td><td><span class="booking-status ${booking.status.toLowerCase()}">${escapeHtml(booking.status)}</span></td><td>${escapeHtml(booking.paymentStatus || "Awaiting service")}${booking.paymentReference ? `<br><small>UTR ${escapeHtml(booking.paymentReference)}</small>` : ""}</td><td><button class="row-link" data-action="invoice" data-id="${escapeHtml(booking.id)}">View</button></td></tr>`).join("")}</tbody></table></div></section><section class="portal-panel emergency-list"><div class="portal-panel-heading"><div><p class="eyebrow">Worker safety</p><h2>Emergency response log</h2></div><span class="field-note">${state.emergencyAlerts?.length || 0} alerts</span></div>${state.emergencyAlerts?.map((alert) => `<div class="operation-row"><div><strong>${escapeHtml(alert.workerName)} · ${escapeHtml(alert.type)}</strong><small>${escapeHtml(alert.time)} · ${escapeHtml(alert.locality)}</small></div><span class="${alert.status === "Open" ? "status-tag-pending" : "status-tag-positive"}">${escapeHtml(alert.status)}</span>${alert.status === "Open" ? `<button class="row-link" data-action="close-alert" data-id="${escapeHtml(alert.id)}">Acknowledge</button>` : ""}</div>`).join("") || `<div class="inline-empty">No worker assistance alerts.</div>`}</section>`;
}

function renderAdminDisputes() {
  const disputes = [...state.disputes].sort((a, b) => b.createdAt - a.createdAt);
  return `<section class="page-intro"><div><p class="eyebrow">Fair resolution</p><h1>Dispute desk</h1><p>Review customer concerns and record a clear resolution with the cooperative.</p></div><div class="activity-summary"><div><span>Open cases</span><strong>${disputes.filter((item) => item.status === "Open").length}</strong></div><div><span>Resolved</span><strong>${disputes.filter((item) => item.status === "Resolved").length}</strong></div></div></section><div class="dispute-list">${disputes.length ? disputes.map((dispute) => `<article class="dispute-card"><div class="dispute-heading"><div><p class="eyebrow">${escapeHtml(dispute.id)} · ${escapeHtml(dispute.bookingId)}</p><h2>${escapeHtml(dispute.reason)}</h2></div><span class="${dispute.status === "Open" ? "status-tag-pending" : "status-tag-positive"}">${escapeHtml(dispute.status)}</span></div><p>${escapeHtml(dispute.details)}</p><div class="dispute-meta"><span>Customer: <strong>${escapeHtml(dispute.customerName)}</strong></span><span>Worker: <strong>${escapeHtml(dispute.workerName)}</strong></span><span>Reported: ${escapeHtml(dispute.date)}</span></div>${dispute.resolution ? `<div class="resolution-note">Resolution: ${escapeHtml(dispute.resolution)}</div>` : `<button class="solid-mini" data-action="resolve-dispute" data-id="${escapeHtml(dispute.id)}">Record resolution</button>`}</article>`).join("") : `<div class="empty-bookings"><h3>No open disputes</h3><p>Customer reports will appear here for fair review.</p></div>`}</div>`;
}

function renderPage() {
  const content = document.querySelector("#page-content");
  if (!content) return;
  navigationForRole();
  if (activeRole === "worker") content.innerHTML = activePage === "worker-jobs" ? renderWorkerJobs() : activePage === "worker-payouts" ? renderWorkerPayouts() : renderWorkerDashboard();
  else if (activeRole === "admin") content.innerHTML = activePage === "admin-members" ? renderAdminMembers() : activePage === "admin-operations" ? renderAdminOperations() : activePage === "admin-disputes" ? renderAdminDisputes() : renderAdminDashboard();
  else content.innerHTML = activePage === "activity" ? renderActivity() : activePage === "community" ? renderCommunity() : renderDiscover();
  content.innerHTML = content.innerHTML.replaceAll("Bengaluru Urban Labour Cooperative", "Karnataka Labour Cooperative Federation");
  if (activeRole === "admin") {
    content.querySelectorAll('[data-action="member-status"]').forEach((button) => {
      const member = state.members.find((item) => item.id === button.dataset.id);
      button.textContent = member?.status === "Suspended" ? "Restore access" : "Suspend access";
    });
  }
  if (activeRole === "worker") {
    const picker = document.createElement("label");
    picker.className = "worker-profile-picker";
    picker.innerHTML = `<span>Worker profile</span><select id="worker-profile">${state.members.filter((member) => member.status === "Verified").map((member) => `<option value="${escapeHtml(member.workerId)}" ${member.workerId === currentWorkerId ? "selected" : ""}>${escapeHtml(member.name)} · ${escapeHtml(member.locality)}</option>`).join("")}</select>`;
    content.querySelector(".portal-welcome")?.append(picker);
  }
  const bookingCount = document.querySelector("#booking-count");
  if (bookingCount) bookingCount.textContent = state.bookings.filter((booking) => booking.status === "Requested").length || "";
  document.querySelector("#footer-area").textContent = state.neighborhood === "All areas" ? "Across Karnataka" : `${state.neighborhood || "Koramangala"}, Karnataka`;
  const heroLocation = document.querySelector(".hero-meta > span:first-child");
  if (heroLocation) heroLocation.innerHTML = `${icon("pin", 15)} Serving ${escapeHtml(state.neighborhood === "All areas" ? "Karnataka" : state.neighborhood)}, Karnataka`;
  const heroDescription = document.querySelector(".hero-text>p:not(.eyebrow)");
  if (heroDescription) heroDescription.textContent = "Book verified cooperative workers for household, farm, and community services across Karnataka.";
  const nearbyCount = document.querySelector(".hero-meta > span:nth-child(3)");
  if (nearbyCount) nearbyCount.textContent = `${filteredListings().length} verified services nearby`;
  const communityArea = document.querySelector("#community-area");
  if (communityArea) communityArea.innerHTML = `<option>All neighbourhoods</option>${Object.keys(localityCoordinates).map((locality) => `<option>${escapeHtml(locality)}</option>`).join("")}`;
}

function showToast(message) {
  const region = document.querySelector("#toast-region");
  region.innerHTML = `<div class="toast">${icon("heart", 17)}<span>${escapeHtml(message)}</span></div>`;
  window.setTimeout(() => { region.innerHTML = ""; }, 3200);
}

function openDialog(content) {
  const dialog = document.querySelector("#action-dialog");
  document.querySelector("#dialog-content").innerHTML = content;
  const providerArea = dialog.querySelector("#provider-area");
  if (providerArea) providerArea.innerHTML = Object.keys(localityCoordinates).map((locality) => `<option>${escapeHtml(locality)}</option>`).join("");
  const providerCategory = dialog.querySelector("#provider-category");
  const needCategory = dialog.querySelector("#need-category");
  const categories = ["Cleaning", "Gardening", "Electrical", "Plumbing", "Carpentry", "Caregiving", "Farm support", "Farm equipment", "Other"];
  if (providerCategory) providerCategory.innerHTML = categories.map((category) => `<option>${category}</option>`).join("");
  if (needCategory) needCategory.innerHTML = categories.map((category) => `<option>${category}</option>`).join("");
  dialog.showModal();
}

function bookingDialog(listing) {
  const date = dateValue(today);
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">A good match nearby</p><h2>Book ${escapeHtml(listing.service.toLowerCase())}</h2></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><div class="booking-provider"><img src="${imageUrl(escapeHtml(listing.image), 300)}" alt=""><span class="provider-avatar" style="--avatar-color:${escapeHtml(listing.color || "#c4d4c4")}">${escapeHtml(listing.initials)}</span><div><strong>${escapeHtml(listing.name)}</strong><small>${escapeHtml(listing.service)} · ${escapeHtml(listing.area)}</small></div><span class="booking-rate"><strong>${formatINR(listing.rate)}</strong><small>/ hour</small></span></div><form data-form="booking" data-listing-id="${escapeHtml(listing.id)}"><label class="form-label" for="booking-date">Choose a day</label><input class="form-control" id="booking-date" name="date" type="date" min="${date}" value="${date}" required><div class="form-split"><div><label class="form-label" for="booking-time">Preferred time</label><select class="form-control" id="booking-time" name="time"><option>Morning, 9 AM – 12 PM</option><option>Midday, 12 PM – 3 PM</option><option>Afternoon, 3 PM – 6 PM</option><option>Flexible</option></select></div><div><label class="form-label" for="booking-hours">Hours needed</label><select class="form-control" id="booking-hours" name="hours">${[1, 2, 3, 4, 5, 6, 8].map((hours) => `<option value="${hours}">${hours} hour${hours > 1 ? "s" : ""}</option>`).join("")}</select></div></div><label class="form-label" for="booking-note">Anything they should know? <span>Optional</span></label><textarea class="form-control" id="booking-note" name="note" rows="3" placeholder="Tell ${escapeHtml(listing.name.split(" ")[0])} a little about the job..."></textarea><div class="booking-estimate"><span>Estimated service total</span><strong id="booking-estimate-value">${formatINR(listing.rate)}</strong></div><button class="solid-button dialog-submit" type="submit">Send booking request ${icon("arrow", 16)}</button><p class="dialog-footnote">You’ll coordinate the details directly with ${escapeHtml(listing.name.split(" ")[0])}.</p></form></div>`;
}

function offerDialog() {
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">Good work belongs here</p><h2>Offer your service</h2><p class="dialog-subtitle">Tell your neighbours what you do best.</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><form data-form="offer"><label class="form-label" for="provider-name">Your name</label><input class="form-control" id="provider-name" name="name" maxlength="50" placeholder="How neighbours know you" required><div class="form-split"><div><label class="form-label" for="provider-service">Service name</label><input class="form-control" id="provider-service" name="service" maxlength="50" placeholder="e.g. Weekend garden care" required></div><div><label class="form-label" for="provider-category">Category</label><select class="form-control" id="provider-category" name="category"><option>Cleaning</option><option>Gardening</option><option>Electrical</option><option>Plumbing</option><option>Carpentry</option><option>Caregiving</option><option>Repairs</option><option>Other</option></select></div></div><div class="form-split"><div><label class="form-label" for="provider-rate">Hourly rate</label><div class="currency-control"><span>₹</span><input class="form-control" id="provider-rate" name="rate" type="number" min="1" max="10000" step="10" placeholder="400" required></div></div><div><label class="form-label" for="provider-area">Neighbourhood</label><select class="form-control" id="provider-area" name="area"><option>Koramangala</option><option>Jayanagar</option><option>Indiranagar</option><option>HSR Layout</option></select></div></div><label class="form-label" for="provider-description">A little about your work</label><textarea class="form-control" id="provider-description" name="description" rows="3" maxlength="240" placeholder="What makes your service a good fit for local homes?" required></textarea><label class="form-label" for="provider-availability">When are you available?</label><input class="form-control" id="provider-availability" name="availability" maxlength="60" placeholder="e.g. Weekdays after 3 PM" required><button class="solid-button dialog-submit" type="submit">Publish your service ${icon("arrow", 16)}</button><p class="dialog-footnote">Your listing will appear in local search right away.</p></form></div>`;
}

function needDialog() {
  const date = dateValue(today);
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">The neighborhood can help</p><h2>Post a community need</h2><p class="dialog-subtitle">Small asks can bring people together.</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><form data-form="need"><label class="form-label" for="need-title">What would you like help with?</label><input class="form-control" id="need-title" name="title" maxlength="75" placeholder="A clear, friendly headline" required><div class="form-split"><div><label class="form-label" for="need-category">Category</label><select class="form-control" id="need-category" name="category"><option>Gardening</option><option>Repairs</option><option>Moving</option><option>Errands</option><option>Childcare</option><option>Pet care</option><option>Other</option></select></div><div><label class="form-label" for="need-date">When?</label><input class="form-control" id="need-date" name="date" type="date" min="${date}" required></div></div><label class="form-label" for="need-area">Where can neighbors meet you?</label><input class="form-control" id="need-area" name="area" maxlength="60" placeholder="Neighborhood, street, or community place" required><label class="form-label" for="need-description">A few details</label><textarea class="form-control" id="need-description" name="description" rows="3" maxlength="220" placeholder="Share what you need and how someone can pitch in." required></textarea><label class="form-label" for="need-author">Your name</label><input class="form-control" id="need-author" name="author" maxlength="40" placeholder="First name or initials" required><button class="solid-button dialog-submit" type="submit">Post to the community board ${icon("arrow", 16)}</button></form></div>`;
}

function invoiceDialog(booking) {
  const gross = booking.rate * booking.hours;
  const workerShare = booking.workerShare || Math.round(gross * 0.9);
  const societyShare = booking.societyShare ?? gross - workerShare;
  return `<div class="dialog-inner invoice-sheet"><header class="dialog-header"><div><p class="eyebrow">Bengaluru Urban Labour Cooperative Federation</p><h2>Service invoice</h2></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><div class="invoice-number"><span>Invoice ${escapeHtml(booking.invoiceId || `INV-${booking.id}`)}</span><span>${escapeHtml(booking.date)}</span></div><div class="invoice-parties"><div><span>Service provider</span><strong>${escapeHtml(booking.provider)}</strong></div><div><span>Customer</span><strong>${escapeHtml(booking.customerName || "Household member")}</strong></div><div><span>Service location</span><strong>${escapeHtml(booking.area || "Bengaluru")}</strong></div><div><span>Payment method</span><strong>${escapeHtml(booking.paymentMethod || "UPI")}</strong></div></div><div class="invoice-line"><span>${escapeHtml(booking.service)} · ${booking.hours} hour${booking.hours > 1 ? "s" : ""} × ${formatINR(booking.rate)}</span><strong>${formatINR(gross)}</strong></div><div class="invoice-line invoice-share"><span>Direct worker earnings · 90%</span><strong>${formatINR(workerShare)}</strong></div><div class="invoice-line invoice-share"><span>Cooperative welfare & operations · 10%</span><strong>${formatINR(societyShare)}</strong></div><div class="invoice-total"><span>Total service value</span><strong>${formatINR(gross)}</strong></div><p class="invoice-footnote">Transparent service pricing. No commission deducted from the worker share.</p><button class="solid-button dialog-submit" data-action="print-invoice">Print / save invoice</button></div>`;
}

function upiReferenceDialog(booking) {
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">Digital payment record</p><h2>Record UPI payment</h2><p class="dialog-subtitle">Enter the UTR shown by your UPI app after payment.</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><div class="invoice-line"><span>${escapeHtml(booking.service)} · ${escapeHtml(booking.provider)}</span><strong>${formatINR(booking.rate * booking.hours)}</strong></div><form data-form="upi-reference" data-booking-id="${escapeHtml(booking.id)}"><label class="form-label" for="upi-reference">UPI transaction reference (UTR)</label><input class="form-control" id="upi-reference" name="reference" minlength="6" maxlength="24" placeholder="Enter the UTR from your payment app" required><button class="solid-button dialog-submit" type="submit">Save payment reference ${icon("arrow", 15)}</button></form></div>`;
}

function feedbackDialog(booking) {
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">Worker feedback</p><h2>How was the service?</h2><p class="dialog-subtitle">Your feedback helps cooperative workers build a trusted record.</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><form data-form="feedback" data-booking-id="${escapeHtml(booking.id)}"><label class="form-label" for="feedback-rating">Your rating</label><select class="form-control" id="feedback-rating" name="rating"><option value="5">5 · Excellent</option><option value="4">4 · Good</option><option value="3">3 · Satisfactory</option><option value="2">2 · Needs improvement</option><option value="1">1 · Poor</option></select><label class="form-label" for="feedback-note">Tell us more</label><textarea class="form-control" id="feedback-note" name="feedback" rows="3" maxlength="300" placeholder="Share feedback about the work and the experience."></textarea><button class="solid-button dialog-submit" type="submit">Submit feedback</button></form></div>`;
}

function disputeDialog(booking) {
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">Cooperative resolution desk</p><h2>Raise a service issue</h2><p class="dialog-subtitle">The society will review your concern and follow up with both parties.</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><form data-form="dispute" data-booking-id="${escapeHtml(booking.id)}"><label class="form-label" for="dispute-reason">What needs attention?</label><select class="form-control" id="dispute-reason" name="reason"><option>Service quality</option><option>Schedule or arrival</option><option>Price or invoice</option><option>Safety concern</option><option>Other</option></select><label class="form-label" for="dispute-details">Describe the issue</label><textarea class="form-control" id="dispute-details" name="details" rows="4" maxlength="500" required placeholder="Share the details that will help the cooperative review this fairly."></textarea><button class="solid-button dialog-submit" type="submit">Send to resolution desk</button></form></div>`;
}

function resolutionDialog(dispute) {
  return `<div class="dialog-inner"><header class="dialog-header"><div><p class="eyebrow">Case ${escapeHtml(dispute.id)}</p><h2>Record resolution</h2><p class="dialog-subtitle">${escapeHtml(dispute.reason)} · ${escapeHtml(dispute.bookingId)}</p></div><button class="dialog-close" data-action="close-dialog" aria-label="Close">${icon("close")}</button></header><form data-form="resolution" data-dispute-id="${escapeHtml(dispute.id)}"><label class="form-label" for="resolution-note">Outcome and follow-up</label><textarea class="form-control" id="resolution-note" name="resolution" rows="4" maxlength="400" required placeholder="Record the action agreed by the customer, worker, and cooperative."></textarea><button class="solid-button dialog-submit" type="submit">Close case</button></form></div>`;
}

function handleAction(action, element) {
  if (action === "accept-job" || action === "decline-job" || action === "finish-job") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (!booking) return;
    if (action === "accept-job") booking.status = "Accepted";
    if (action === "decline-job") booking.status = "Cancelled";
    if (action === "finish-job") {
      booking.status = "Completed";
      booking.completedAt = Date.now();
      booking.workerShare = Math.round(booking.rate * booking.hours * 0.9);
      booking.societyShare = booking.rate * booking.hours - booking.workerShare;
      booking.invoiceId = `SS-${new Date().getFullYear()}-${booking.id}`;
      booking.paymentStatus = booking.paymentStatus || "Awaiting payment";
    }
    saveState();
    renderPage();
    showToast(action === "accept-job" ? "Booking accepted and added to your schedule." : action === "decline-job" ? "Booking declined and returned to the cooperative queue." : "Work marked complete. Invoice and earnings breakdown are ready.");
  } else if (action === "toggle-availability") {
    state.workerAvailability = state.workerAvailability || {};
    state.workerAvailability[currentWorkerId] = state.workerAvailability[currentWorkerId] === false;
    saveState();
    renderPage();
  } else if (action === "emergency") {
    const member = state.members.find((item) => item.workerId === currentWorkerId);
    state.emergencyAlerts.push({ id: `SOS-${Date.now()}`, workerId: currentWorkerId, workerName: member?.name || "Worker member", locality: member?.locality || "Karnataka", type: "Worker assistance requested", time: new Date().toLocaleString("en-IN"), status: "Open" });
    saveState();
    renderPage();
    showToast("Alert saved to the cooperative operations desk.");
  } else if (action === "verify-member" || action === "request-documents" || action === "member-status") {
    const member = state.members.find((item) => item.id === element.dataset.id);
    if (!member) return;
    if (action === "verify-member") {
      member.status = "Verified";
      member.history.push(`Cooperative profile verified · ${new Date().toLocaleDateString("en-IN")}`);
      const listing = state.listings.find((item) => item.id === member.workerId);
      if (listing) listing.verified = true;
      showToast(`${member.name}'s cooperative profile is verified.`);
    } else if (action === "request-documents") {
      member.status = "Documents requested";
      member.history.push(`Additional documents requested · ${new Date().toLocaleDateString("en-IN")}`);
      showToast("Document request added to the member history.");
    } else {
      member.status = member.status === "Suspended" ? "Verified" : "Suspended";
      const listing = state.listings.find((item) => item.id === member.workerId);
      if (listing) listing.verified = member.status === "Verified";
      member.history.push(`Profile access ${member.status.toLowerCase()} · ${new Date().toLocaleDateString("en-IN")}`);
    }
    saveState();
    renderPage();
  } else if (action === "close-alert") {
    const alert = state.emergencyAlerts.find((item) => item.id === element.dataset.id);
    if (alert) alert.status = "Acknowledged";
    saveState();
    renderPage();
  } else if (action === "invoice") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking) openDialog(invoiceDialog(booking));
  } else if (action === "record-payment") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking) openDialog(upiReferenceDialog(booking));
  } else if (action === "feedback") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking) openDialog(feedbackDialog(booking));
  } else if (action === "raise-dispute") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking) openDialog(disputeDialog(booking));
  } else if (action === "resolve-dispute") {
    const dispute = state.disputes.find((item) => item.id === element.dataset.id);
    if (dispute) openDialog(resolutionDialog(dispute));
  } else if (action === "print-invoice") {
    window.print();
  } else if (action === "book") {
    const listing = state.listings.find((item) => item.id === element.dataset.id);
    if (listing) openDialog(bookingDialog(listing));
  } else if (action === "offer") {
    openDialog(offerDialog());
  } else if (action === "post-need") {
    openDialog(needDialog());
  } else if (action === "close-dialog") {
    document.querySelector("#action-dialog").close();
  } else if (action === "reset-search") {
    selectedCategory = "All services";
    searchTerm = "";
    renderPage();
  } else if (action === "clear-search") {
    searchTerm = "";
    renderPage();
    document.querySelector("#service-search").focus();
  } else if (action === "cancel-booking") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking && booking.status !== "Completed") {
      booking.status = "Cancelled";
      saveState();
      renderPage();
      showToast("Booking updated. Thanks for letting your neighbor know.");
    }
  } else if (action === "complete-booking") {
    const booking = state.bookings.find((item) => item.id === element.dataset.id);
    if (booking) {
      booking.status = "Completed";
      saveState();
      renderPage();
      showToast("Marked complete. Thanks for keeping it local.");
    }
  } else if (action === "help") {
    const request = state.requests.find((item) => item.id === element.dataset.id);
    if (request && !state.helped.includes(request.id)) {
      request.helpers += 1;
      state.helped.push(request.id);
      saveState();
      renderPage();
      showToast("You’re on the list. The neighbor who posted will be glad to hear from you.");
    }
  } else if (action === "save-service") {
    const isSaved = state.favorites.includes(element.dataset.id);
    state.favorites = isSaved ? state.favorites.filter((id) => id !== element.dataset.id) : [...state.favorites, element.dataset.id];
    saveState();
    element.classList.toggle("is-saved", !isSaved);
    element.setAttribute("aria-pressed", String(!isSaved));
    showToast(isSaved ? "Removed from your favorites." : "Saved to your favorites.");
  } else if (action === "menu") {
    document.querySelector(".top-nav").classList.toggle("is-open");
  }
}

function handleSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  if (form.dataset.form === "booking") {
    const listing = state.listings.find((item) => item.id === form.dataset.listingId);
    if (!listing) return;
    const booking = { id: `JOB-${Date.now()}`, listingId: listing.id, customerName: "Household member", area: state.neighborhood, provider: listing.name, service: listing.service, rate: Number(listing.rate), date: data.get("date"), time: data.get("time"), hours: Number(data.get("hours")), note: String(data.get("note")).trim(), status: "Requested", paymentMethod: "UPI", paymentStatus: "Awaiting service", createdAt: Date.now() };
    state.bookings.push(booking);
    saveState();
    document.querySelector("#action-dialog").close();
    activePage = "activity";
    renderPage();
    showToast(`Request sent to ${listing.name.split(" ")[0]}.`);
  } else if (form.dataset.form === "offer") {
    const name = String(data.get("name")).trim();
    const workerId = `wrk-${Date.now()}`;
    const memberId = `MEM-${Date.now()}`;
    const service = String(data.get("service")).trim();
    const category = String(data.get("category"));
    const locality = String(data.get("area"));
    const listing = { id: workerId, memberId, name, service, category, rate: Number(data.get("rate")), rating: 5, reviews: 0, area: locality, distance: "Nearby", availability: String(data.get("availability")).trim(), image: "photo-1600210492486-724fe5c67fb0", description: String(data.get("description")).trim(), initials: name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase(), color: "#c5d8c6", verified: false, skillBadge: `${category} · Skill review pending`, society: "Bengaluru Urban Labour Cooperative" };
    state.members.unshift({ id: memberId, workerId, name, skill: service, locality, phone: "Contact details to be verified", rating: 5, completedJobs: 0, status: "Pending review", badge: listing.skillBadge, insurance: "Enrolment pending", joined: new Date().toLocaleDateString("en-IN"), history: [`Membership application received · ${new Date().toLocaleDateString("en-IN")}`] });
    state.listings.unshift(listing);
    saveState();
    document.querySelector("#action-dialog").close();
    selectedCategory = "All services";
    searchTerm = "";
    activeRole = "admin";
    activePage = "admin-members";
    renderPage();
    showToast("Application sent to the cooperative verification queue.");
  } else if (form.dataset.form === "need") {
    const request = { id: `need-${Date.now()}`, title: String(data.get("title")).trim(), category: String(data.get("category")), description: String(data.get("description")).trim(), area: String(data.get("area")).trim(), date: new Date(`${data.get("date")}T12:00:00`).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }), author: String(data.get("author")).trim(), helpers: 0, createdAt: Date.now() };
    state.requests.unshift(request);
    saveState();
    document.querySelector("#action-dialog").close();
    activePage = "community";
    renderPage();
    showToast("Your request is on the community board.");
  } else if (form.dataset.form === "upi-reference") {
    const booking = state.bookings.find((item) => item.id === form.dataset.bookingId);
    if (!booking) return;
    booking.paymentReference = String(data.get("reference")).trim().toUpperCase();
    booking.paymentStatus = "Paid";
    booking.payoutStatus = "UPI payout queued";
    saveState();
    document.querySelector("#action-dialog").close();
    renderPage();
    showToast("UPI reference recorded. Worker payout is queued for the cooperative.");
  } else if (form.dataset.form === "feedback") {
    const booking = state.bookings.find((item) => item.id === form.dataset.bookingId);
    if (!booking) return;
    booking.rating = Number(data.get("rating"));
    booking.feedback = String(data.get("feedback")).trim();
    const member = state.members.find((item) => item.workerId === booking.listingId);
    if (member) member.rating = Number(((member.rating * member.completedJobs + booking.rating) / (member.completedJobs + 1)).toFixed(1));
    saveState();
    document.querySelector("#action-dialog").close();
    renderPage();
    showToast("Feedback added to the worker's cooperative record.");
  } else if (form.dataset.form === "dispute") {
    const booking = state.bookings.find((item) => item.id === form.dataset.bookingId);
    if (!booking) return;
    state.disputes.unshift({ id: `CASE-${Date.now()}`, bookingId: booking.id, customerName: booking.customerName || "Household member", workerName: booking.provider, reason: String(data.get("reason")), details: String(data.get("details")).trim(), status: "Open", date: new Date().toLocaleDateString("en-IN"), createdAt: Date.now() });
    saveState();
    document.querySelector("#action-dialog").close();
    renderPage();
    showToast("Your concern is with the cooperative resolution desk.");
  } else if (form.dataset.form === "resolution") {
    const dispute = state.disputes.find((item) => item.id === form.dataset.disputeId);
    if (!dispute) return;
    dispute.status = "Resolved";
    dispute.resolution = String(data.get("resolution")).trim();
    dispute.resolvedAt = new Date().toLocaleDateString("en-IN");
    saveState();
    document.querySelector("#action-dialog").close();
    renderPage();
    showToast("Resolution recorded and case closed.");
  }
}

app.addEventListener("click", (event) => {
  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    activeRole = roleButton.dataset.role;
    activePage = activeRole === "customer" ? "discover" : activeRole === "worker" ? "worker" : "admin";
    document.querySelector(".top-nav").classList.remove("is-open");
    renderPage();
    return;
  }
  const nav = event.target.closest("[data-page]");
  if (nav) {
    activePage = nav.dataset.page;
    document.querySelector(".top-nav").classList.remove("is-open");
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const category = event.target.closest("[data-category]");
  if (category) {
    selectedCategory = category.dataset.category;
    renderPage();
    return;
  }
  const action = event.target.closest("[data-action]");
  if (action) handleAction(action.dataset.action, action);
});

app.addEventListener("input", (event) => {
  if (event.target.id === "service-search") {
    searchTerm = event.target.value;
    const grid = document.querySelector("#service-grid");
    if (grid) grid.innerHTML = filteredListings().map(listingCard).join("") || `<div class="empty-market"><span>${icon("search", 25)}</span><h3>No services found yet</h3><p>Try another search or browse all categories.</p><button class="text-button" data-action="reset-search">Clear filters ${icon("arrow", 14)}</button></div>`;
    document.querySelector("#search-clear").hidden = !searchTerm;
  }
  if (event.target.id === "booking-hours") {
    const form = event.target.closest("form");
    const listing = state.listings.find((item) => item.id === form.dataset.listingId);
    document.querySelector("#booking-estimate-value").textContent = formatINR(listing.rate * Number(event.target.value));
  }
});

app.addEventListener("change", (event) => {
  if (event.target.id === "worker-profile") {
    currentWorkerId = event.target.value;
    renderPage();
  }
  if (event.target.id === "neighborhood") {
    state.neighborhood = event.target.value;
    saveState();
    renderPage();
  }
  if (event.target.id === "sort-order") {
    sortOrder = event.target.value;
    const grid = document.querySelector("#service-grid");
    if (grid) grid.innerHTML = filteredListings().map(listingCard).join("") || `<div class="empty-market"><h3>No services found yet</h3><p>Try another search or browse all categories.</p></div>`;
  }
  if (event.target.id === "community-area") {
    const selected = event.target.value;
    const visible = state.requests.filter((request) => selected === "All neighborhoods" || request.area.toLowerCase().includes(selected.toLowerCase()));
    document.querySelector("#request-grid").innerHTML = visible.length ? visible.map(requestCard).join("") : `<div class="empty-market"><h3>No open requests in this area just yet.</h3><p>Check another neighborhood or post a community need.</p></div>`;
  }
});

renderShell();

document.querySelector("#action-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.querySelector("#action-dialog").addEventListener("change", (event) => {
  if (event.target.id === "booking-hours") {
    const form = event.target.closest("form");
    const listing = state.listings.find((item) => item.id === form.dataset.listingId);
    document.querySelector("#booking-estimate-value").textContent = formatINR(listing.rate * Number(event.target.value));
  }
});

document.querySelector("#action-dialog").addEventListener("submit", handleSubmit);
