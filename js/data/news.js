/**
 * NEWS & EVENTS DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT:
 * ─────────────────────────────────────────────
 * id          : string  — unique slug identifier
 * title       : string  — headline of the news item or event
 * excerpt     : string  — short summary for card display
 * content     : string  — full content with extracted details from authentic events
 * date        : string  — ISO date string (YYYY-MM-DD)
 * dateDisplay : string  — human-readable date for display
 * category    : string  — one of: 'News', 'Event', 'Announcement', 'Awareness', 'Community'
 * image       : string  — path to news/event photograph (assets/images/events/...)
 * featured    : boolean — if true, shown in home page preview
 * sortOrder   : number  — display order
 */

/* global NEWS_DATA */
const NEWS_DATA = [
  {
    id: "equipment-handover-august-2026",
    title: "Palliative Care Medical Equipment Handover on Independence Day",
    excerpt: "Nirvrithi Charitable Trust received vital palliative care equipment including wheelchairs and air mattresses from community donors at PTH Mannancherry.",
    content: "On India's 80th Independence Day, a major consignment of palliative care medical equipment—including Y-Care dual-brake wheelchairs, specialized anti-bedsore air mattresses, and patient monitoring accessories—was officially received at Pookoya Thangal Hospice, Mannancherry. Nirvrithi Charitable Trust President S. Muhammad Basheer, office bearers, and active volunteers formally received the donated equipment. The tools are immediately available for free home loans to bedridden patients across Mannancherry and neighbouring panchayaths.",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "News",
    image: "assets/images/events/1.jpeg",
    featured: true,
    sortOrder: 1
  },
  {
    id: "vehicle-donation-chandrika-2026",
    title: "Elangikkaththara Family Donates Vehicle for Mobile Palliative Care",
    excerpt: "The Elangikkaththara family of Mannancherry gifted a dedicated four-wheeler to Pookoya Thangal Hospice to support mobile home-care visits.",
    content: "In an inspiring gesture of community solidarity reported in Chandrika daily (04 August 2026, Kochi Edition, Page 14), the Elangikkaththara family of Mannancherry donated a vehicle to Pookoya Thangal Hospice. Family representatives Hamid Kunjashan and Naufal Kohinoor handed over the vehicle keys to Nirvrithi Trust President S. Muhammad Basheer in a ceremony held at the hospice. The dedicated vehicle enables medical teams, nurses, and volunteers to provide prompt, dignified care to bedridden patients directly at home. Dignitaries present included K.A. Hamid Kunjashan, Ibrahim Kutty, B. Mansoor, E.A. Ziyad, T.H. Nasser, Sabu Kalavoor, and N.A. Muhammad Ismail.",
    date: "2026-08-04",
    dateDisplay: "4 August 2026",
    category: "News",
    image: "assets/images/events/2.jpeg",
    featured: true,
    sortOrder: 2
  },
  {
    id: "independence-day-flag-2026",
    title: "80th Independence Day Flag Hoisting & Celebrations at PTH Mannancherry",
    excerpt: "Nirvrithi Charitable Trust marked the 80th Independence Day with national flag hoisting led by President S. Muhammad Basheer.",
    content: "Pookoya Thangal Hospice, Mannancherry, organized a solemn 80th Independence Day celebration. Nirvrithi Charitable Trust President S. Muhammad Basheer hoisted the national tricolour in the presence of office bearers, community leaders, and local residents. Speakers reiterated the trust's founding principle that palliative service to suffering fellow human beings is an essential form of national duty. The commemoration was held alongside the hospice's anniversary milestones since its establishment on 15 August 2020.",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    image: "assets/images/events/3.jpeg",
    featured: true,
    sortOrder: 3
  },
  {
    id: "vehicle-key-handover-knr-kohinoor",
    title: "PTH Mobile Care Vehicle Handover Ceremony Sponsored by KNR Kohinoor",
    excerpt: "Official key handover ceremony of the PTH Mobile Care vehicle held at the Chiyamveli office with KNR Kohinoor sponsorship.",
    content: "On Tuesday, 28 July 2026 at 7:00 PM, the formal key handover ceremony of the PTH Mobile Care vehicle took place at the Pookoya Thangal Hospice Office in Chiyamveli. The vehicle, sponsored through the generous support of KNR Kohinoor, represents a major leap forward in the hospice's capacity to conduct regular doctor and nurse home visits across Mannancherry and adjacent panchayaths under the motto 'Care & Compassion For Life's Journey'.",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    category: "Event",
    image: "assets/images/events/7.jpeg",
    featured: false,
    sortOrder: 4
  },
  {
    id: "dedicated-palliative-care-van",
    title: "Dedicated Palliative Care Van Commissioned for Mannancherry Unit",
    excerpt: "Nirvrithi Charitable Trust commissioned a dedicated Maruti Eeco van for home palliative care delivery across Mannancherry.",
    content: "Pookoya Thangal Hospice Mannancherry Unit celebrated the induction of its dedicated Palliative Care Van into active service. Fitted with essential mobile care equipment, medical supplies, and emergency aids, the van enables certified home care nurses and trained volunteers to reach bedridden patients promptly and reliably. Nirvrithi Charitable Trust expressed heartfelt gratitude to all sponsors and supporters who made this mobile unit possible.",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    category: "News",
    image: "assets/images/events/8.jpeg",
    featured: false,
    sortOrder: 5
  },
  {
    id: "oxygen-concentrator-donation",
    title: "Oxygen Concentrator & BP Monitor Donated by Puthenparambu Family",
    excerpt: "Puthenparambu family gathering and well-wishers donated a K-Life OC-102 Oxygen Concentrator and digital BP monitor to PTH Mannancherry.",
    content: "Strengthening the medical apparatus pool at Pookoya Thangal Hospice, the Puthenparambu Family Gathering generously donated a modern K-Life OC-102 Oxygen Concentrator, and another compassionate well-wisher donated a digital blood pressure monitor. The equipment was received by Trust President S. Muhammad Basheer and office bearers. The oxygen concentrator is now available for free loan deployment to respiratory palliative patients in the region.",
    date: "2026-08-10",
    dateDisplay: "10 August 2026",
    category: "News",
    image: "assets/images/events/10.jpeg",
    featured: false,
    sortOrder: 6
  },
  {
    id: "monthly-subscription-scheme",
    title: "Monthly Contribution Scheme (മാസവരി) Inaugurated to Support Care",
    excerpt: "Trust member Sathyan presented the inaugural monthly contribution to President S. Muhammad Basheer, launching sustainable funding.",
    content: "To create sustainable financial support for recurring patient medical supplies, dressings, and medicines, Nirvrithi Charitable Trust launched its Monthly Subscription Scheme (മാസവരി). In a gathering at the Chiyamveli office, Trust Member Sathyan handed over the inaugural subscription contribution to Trust President S. Muhammad Basheer. The initiative allows community members to make modest monthly contributions to maintain uninterrupted care for bedridden patients.",
    date: "2026-07-15",
    dateDisplay: "15 July 2026",
    category: "Community",
    image: "assets/images/events/9.jpeg",
    featured: false,
    sortOrder: 7
  },
  {
    id: "chiyamveli-unit-expansion-notice",
    title: "Chiyamveli Palliative Care Unit Expansion & Equipment Notice",
    excerpt: "Official circular announcing full-fledged operational rollout in Chiyamveli with certified volunteers, permanent nurse, and equipment roster.",
    content: "An official communique signed by Trust President S. Muhammad Basheer, General Secretary Nahas Thoppil, and Treasurer Hamsa Ashan detailed the expansion of Pookoya Thangal Hospice (Reg. No: ALP58/2026) services centered at Chiyamveli. With 25 trained volunteers completing certified coursework, arrangements were finalized for a dedicated palliative care nurse and vehicle. A free equipment inventory—comprising BP apparatus, blood glucose monitors, oxygen support systems, nebulizers, wheelchairs, walkers, and hospital cots—was made operational for patient home care.",
    date: "2026-06-07",
    dateDisplay: "7 June 2026",
    category: "Announcement",
    image: "assets/images/events/6.jpeg",
    featured: false,
    sortOrder: 8
  },
  {
    id: "mannancherry-pth-day-bali-perunnal",
    title: "Mannancherry PTH Day — Equipment Donation & Support Appeal",
    excerpt: "Nirvrithi Charitable Trust announced the Mannancherry PTH Day campaign on Bali Perunnal to mobilize resources for bedridden patient equipment.",
    content: "In connection with Eid-ul-Adha (Bali Perunnal), Nirvrithi Charitable Trust and Pookoya Thangal Hospice launched the 'Mannancherry PTH Day' campaign. The initiative urged compassionate individuals and families to contribute towards the purchase of critical palliative care equipment for bedridden patients, including hospital beds, wheelchairs, and air mattresses. The public was provided with official banking channels (Kerala Grameen Bank, Kalavoor Branch, A/c: 40698101104561, IFSC: KLGB0040698) and UPI payment facilities.",
    date: "2026-05-28",
    dateDisplay: "28 May 2026",
    category: "Announcement",
    image: "assets/images/events/4.jpeg",
    featured: false,
    sortOrder: 9
  },
  {
    id: "batch-113-volunteer-graduation",
    title: "24 Volunteers Certified in Batch 113: Total Trained Reaches 5,544 Milestone",
    excerpt: "Batch 113 valedictory ceremony saw 24 new palliative volunteers certified at Crescent Public School, joining over 5,500 trained volunteers statewide.",
    content: "Pookoya Thangal Hospice Mannancherry celebrated the graduation of Batch 113 palliative care volunteers on 16 April 2026. A group of 24 dedicated men and women successfully completed the rigorous 3-day curriculum covering nursing support, bed sore prevention, and psychosocial care at Crescent Public School. This milestone brings the total number of trained PTH volunteers across Kerala to 5,544, creating an expansive network of compassionate frontline caregivers.",
    date: "2026-04-16",
    dateDisplay: "16 April 2026",
    category: "Community",
    image: "assets/images/events/12.jpeg",
    featured: false,
    sortOrder: 10
  },
  {
    id: "chandrika-training-camp-coverage",
    title: "Chandrika Media Coverage: 3-Day Volunteer Training Camp Valedictory",
    excerpt: "Newspaper Chandrika featured the completion of Nirvrithi Trust's volunteer training camp with addresses by Dr. Ameer Ali and K.A. Hamid Kunjashan.",
    content: "The leading daily Chandrika (18 April 2026, Kochi Edition, Page 15) published extensive coverage of the 3-day palliative care volunteer camp held at Crescent Public School, Mannancherry. The camp was inaugurated by Muslim League Alappuzha Constituency President K.A. Hamid Kunjashan and presided over by Trust President S. Muhammad Basheer. Expert sessions were led by trainers Jose Pulimuttil, A.T. Muhammad, and Basil Badusha. PTH State Coordinator Dr. Ameer Ali inaugurated the valedictory session and distributed course completion certificates to 25 newly trained volunteers.",
    date: "2026-04-18",
    dateDisplay: "18 April 2026",
    category: "News",
    image: "assets/images/events/13.jpeg",
    featured: false,
    sortOrder: 11
  },
  {
    id: "batch-113-training-announcement",
    title: "Batch 113: Three-Day Palliative Volunteer Training Camp at Crescent Public School",
    excerpt: "A 3-day intensive volunteer training camp following WHO palliative care guidelines was conducted at Crescent Public School, Mannancherry.",
    content: "Pookoya Thangal Hospice and Nirvrithi Charitable Trust, in association with the IUML Chiyamveli Mekhala Committee, organized Batch 113 of the 3-day Palliative Care Volunteer Training Camp from 13 to 15 April 2026 (10 AM to 4 PM) at Crescent Public School, Mannancherry. The training followed World Health Organization (WHO) palliative guidelines, empowering local citizens and youth with essential caregiving skills, empathetic listening techniques, and home healthcare protocols.",
    date: "2026-04-13",
    dateDisplay: "13–15 April 2026",
    category: "Awareness",
    image: "assets/images/events/5.jpeg",
    featured: false,
    sortOrder: 12
  },
  {
    id: "palliative-awareness-class-chiyamveli",
    title: "Palliative Care Awareness Class Conducted in Chiyamveli",
    excerpt: "PTH Kerala Coordinator Dr. M.A. Ameerali and Azeez Badayil led an educational seminar on palliative care principles at Chiyamveli.",
    content: "An educational palliative care awareness class was organized at Chiyamveli on Tuesday, 10 February 2026 at 2:30 PM. The session was conducted by Dr. M.A. Ameerali (CFO & Coordinator, Pookoya Thangal Hospice Kerala) and Azeez Badayil (Member, PTH Kerala). Attendees, including local volunteers and family caregivers, learned the core tenets of pain management, emotional support, and community hospice volunteering.",
    date: "2026-02-10",
    dateDisplay: "10 February 2026",
    category: "Awareness",
    image: "assets/images/events/11.jpeg",
    featured: false,
    sortOrder: 13
  }
];

/* Derived helpers */
const NEWS_CATEGORIES = ['All', ...new Set(NEWS_DATA.map(n => n.category))];
