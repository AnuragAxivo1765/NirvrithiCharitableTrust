/**
 * NEWS & EVENTS DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT (future-proofed for Phase 2 API):
 * ─────────────────────────────────────────────
 * id          : string  — unique slug identifier
 * title       : string  — headline of the news item or event
 * excerpt     : string  — short summary for card display
 * content     : string  — full content (for Phase 2 detail pages)
 * date        : string  — ISO date string (YYYY-MM-DD)
 * dateDisplay : string  — human-readable date for display
 * category    : string  — one of: 'News', 'Event', 'Announcement', 'Awareness', 'Community'
 * image       : string  — path to news/event photograph
 *                         REPLACE each placeholder path with a real photograph
 * featured    : boolean — if true, shown in home page preview
 * sortOrder   : number  — display order (higher = older)
 *
 * NOTE: Content is based on real organizational activity visible in provided photographs.
 * In Phase 2, replace this array with an API fetch:
 * const NEWS_DATA = await fetch('/api/news').then(r => r.json());
 */

/* global NEWS_DATA */
const NEWS_DATA = [
  {
    id: "independence-day-2026",
    title: "80th Independence Day Celebration at Pookoya Thangal Hospice",
    excerpt: "Nirvrithi Charitable Trust marked India's 80th Independence Day with a flag hoisting ceremony led by Trust President S. Muhammad Basheer at the Pookoya Thangal Hospice, Mannancherry.",
    content: "As part of India's 80th Independence Day celebrations, Pookoya Thangal Hospice, Mannancherry, organised a solemn flag hoisting ceremony. The event was presided over by Nirvrithi Charitable Trust President S. Muhammad Basheer, with the participation of trust members, office bearers, and community representatives. The ceremony was a reaffirmation of the trust's commitment to serving the community with dignity and care.",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    image: "assets/images/news/independence-day-2026.jpg",
    /* REPLACE image: assets/images/news/independence-day-2026.jpg
       with the actual Independence Day flag hoisting photograph */
    featured: true,
    sortOrder: 1
  },
  {
    id: "equipment-donation-august-2026",
    title: "Medical Equipment Received at PTH Mannancherry on Independence Day",
    excerpt: "Community members and well-wishers donated palliative care medical equipment to Pookoya Thangal Hospice on Independence Day, strengthening the hospice's ability to serve patients in need.",
    content: "On the occasion of India's 80th Independence Day, a collection of palliative care medical equipment — including wheelchairs, air mattresses, and care accessories — was formally received at Pookoya Thangal Hospice, Mannancherry. The donations were made possible by the generosity of community members and supporters of Nirvrithi Charitable Trust. Trust members and office bearers were present for the handover.",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "News",
    image: "assets/images/news/equipment-donation-august-2026.jpg",
    /* REPLACE image: assets/images/news/equipment-donation-august-2026.jpg
       with the actual equipment donation handover photograph */
    featured: true,
    sortOrder: 2
  },
  {
    id: "vehicle-donation-july-2026",
    title: "Mannancherry Family Donates Vehicle for Palliative Mobile Care",
    excerpt: "A family from Elangikkaththara, Mannancherry, donated their vehicle to Pookoya Thangal Hospice to support mobile palliative care services for homebound patients across the region.",
    content: "In a heartfelt gesture of community support, the Elangikkaththara family of Mannancherry donated a vehicle to Pookoya Thangal Hospice to enhance its mobile palliative care services. The vehicle keys were handed over to Trust President S. Muhammad Basheer by Hamid Kunjashan and Naufal Kohinoor at a ceremony held at the hospice. The vehicle will enable palliative care workers to reach patients at their homes more effectively. The event was attended by trust office bearers and community representatives. [Reported in Chandrika, 04 August 2026, Kochi Edition, Page 14]",
    date: "2026-08-04",
    dateDisplay: "4 August 2026",
    category: "News",
    image: "assets/images/news/vehicle-donation-july-2026.jpg",
    /* REPLACE image: assets/images/news/vehicle-donation-july-2026.jpg
       with the actual vehicle key handover photograph */
    featured: true,
    sortOrder: 3
  },
  {
    id: "mobile-care-launch-july-2026",
    title: "Mobile Care Unit Launch Programme Held at PTH Mannancherry",
    excerpt: "Pookoya Thangal Hospice inaugurated its Mobile Care initiative, bringing essential palliative care services directly to patients in their homes across the Mannancherry area.",
    content: "Pookoya Thangal Hospice, Mannancherry, hosted the launch programme for its new Mobile Care unit on 28 July 2026. The initiative aims to take palliative care services directly to patients who cannot travel to the hospice. Trust leadership, medical volunteers, and community members attended the launch. Speeches highlighted the importance of dignified, home-based palliative care for the sick and elderly.",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    category: "Event",
    image: "assets/images/news/mobile-care-launch-july-2026.jpg",
    /* REPLACE image: assets/images/news/mobile-care-launch-july-2026.jpg
       with the actual Mobile Care launch programme photograph */
    featured: false,
    sortOrder: 4
  },
  {
    id: "palliative-awareness-session",
    title: "Palliative Care Awareness Training Session Organised",
    excerpt: "Nirvrithi Charitable Trust and Pookoya Thangal Hospice organised an educational awareness session on palliative care for volunteers and caregivers in the Mannancherry community.",
    content: "A palliative care awareness and training session was organised by Nirvrithi Charitable Trust in partnership with community volunteers. The session covered the principles of palliative care, the importance of dignity and comfort in end-of-life support, and practical guidance for family caregivers. Presentations were made using visual aids, and participants engaged in a discussion on improving community-level palliative support.",
    date: "2026-07-20",
    dateDisplay: "20 July 2026",
    category: "Awareness",
    image: "assets/images/news/palliative-awareness-session.jpg",
    /* REPLACE image: assets/images/news/palliative-awareness-session.jpg
       with the actual training session photograph */
    featured: false,
    sortOrder: 5
  },
  {
    id: "pth-sixth-anniversary",
    title: "Pookoya Thangal Hospice Marks Sixth Year of Service to the Community",
    excerpt: "Nirvrithi Charitable Trust celebrated the sixth anniversary of Pookoya Thangal Hospice, reflecting on six years of compassionate palliative care and community support since its founding on 15 August 2020.",
    content: "Pookoya Thangal Hospice, Mannancherry, marked its sixth anniversary on 15 August 2026. Founded as an initiative of the IUML Kerala State Committee and run by Nirvrithi Charitable Trust, the hospice has served patients and families across the Mannancherry and Alapuzha region since 15 August 2020. The anniversary was commemorated alongside the Independence Day celebrations, reflecting the hospice's commitment to service as a form of national duty.",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Announcement",
    image: "assets/images/news/pth-sixth-anniversary.jpg",
    /* REPLACE image: assets/images/news/pth-sixth-anniversary.jpg
       with an appropriate anniversary photograph */
    featured: false,
    sortOrder: 6
  }
];

/* Derived helpers */
const NEWS_CATEGORIES = ['All', ...new Set(NEWS_DATA.map(n => n.category))];
