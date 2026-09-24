/**
 * GALLERY DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT:
 * ─────────────────────────────────────────────
 * id         : string — unique identifier
 * src        : string — path to image file
 * alt        : string — accessible alt text describing the image
 * caption    : string — short caption for display
 * event      : string — event name this photo belongs to
 * date       : string — ISO date string
 * dateDisplay: string — human-readable date
 * category   : string — 'Event' | 'Community' | 'Equipment' | 'Awareness'
 * aspect     : string — 'landscape' | 'portrait' | 'square' — controls grid layout
 */

/* global GALLERY_DATA */
const GALLERY_DATA = [
  {
    id: "gallery-01",
    src: "assets/images/gallery/1.jpeg",
    alt: "Trust members and community volunteers receiving donated palliative care equipment and wheelchairs at Pookoya Thangal Hospice, Mannancherry",
    caption: "Palliative Care Equipment Handover Ceremony",
    event: "Equipment Donation Drive",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Equipment",
    aspect: "landscape"
  },
  {
    id: "gallery-02",
    src: "assets/images/gallery/2.jpeg",
    alt: "Large gathering of Mannancherry community members and Nirvrithi Trust volunteers attending the Independence Day programme",
    caption: "Community Gathering — Independence Day 2026",
    event: "80th Independence Day Celebration",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-03",
    src: "assets/images/gallery/3.jpeg",
    alt: "National flag being hoisted by Nirvrithi Charitable Trust President S. Muhammad Basheer in Mannancherry",
    caption: "Flag Hoisting Ceremony by President S. Muhammad Basheer",
    event: "80th Independence Day Celebration",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-04",
    src: "assets/images/gallery/4.jpeg",
    alt: "Nirvrithi Charitable Trust leadership and volunteers standing in front of Pookoya Thangal Hospice Mannancherry office",
    caption: "Trust Leadership & Volunteers at PTH Center",
    event: "PTH Center Gathering",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-05",
    src: "assets/images/gallery/5.jpeg",
    alt: "Community elders and religious scholars addressing attendees at the PTH Mobile Care vehicle handover ceremony in Chiyamveli",
    caption: "Leaders & Scholars at Mobile Care Launch",
    event: "Mobile Care Unit Launch",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-06",
    src: "assets/images/gallery/6.jpeg",
    alt: "Volunteers attending the 3-day palliative care training camp session inside the classroom at Crescent Public School",
    caption: "Volunteer Training Session — Crescent Public School",
    event: "Batch 113 Palliative Training",
    date: "2026-04-14",
    dateDisplay: "14 April 2026",
    category: "Awareness",
    aspect: "landscape"
  },
  {
    id: "gallery-07",
    src: "assets/images/gallery/7.jpeg",
    alt: "Interactive lecture and practical demonstration during the palliative volunteer training camp at Mannancherry",
    caption: "Interactive Palliative Care Workshop",
    event: "Batch 113 Palliative Training",
    date: "2026-04-14",
    dateDisplay: "14 April 2026",
    category: "Awareness",
    aspect: "landscape"
  },
  {
    id: "gallery-08",
    src: "assets/images/gallery/8.jpeg",
    alt: "Nirvrithi Charitable Trust volunteers conducting an outdoor community meeting with neighbourhood residents",
    caption: "Community Outreach & Family Engagement Meeting",
    event: "Community Outreach Programme",
    date: "2026-06-20",
    dateDisplay: "20 June 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-09",
    src: "assets/images/gallery/9.jpeg",
    alt: "Faculty member lecturing on empathetic listening and communication skills in palliative patient care",
    caption: "Palliative Care Communication & Listening Skills Training",
    event: "Batch 113 Palliative Training",
    date: "2026-04-15",
    dateDisplay: "15 April 2026",
    category: "Awareness",
    aspect: "portrait"
  },
  {
    id: "gallery-10",
    src: "assets/images/gallery/10.jpeg",
    alt: "Participants seated in the auditorium during the inauguration of the 3-day palliative volunteer training camp",
    caption: "Batch 113 Inaugural Assembly",
    event: "Batch 113 Palliative Training",
    date: "2026-04-13",
    dateDisplay: "13 April 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-11",
    src: "assets/images/gallery/11.jpeg",
    alt: "Dignitaries addressing volunteer trainees on stage at Crescent Public School auditorium",
    caption: "Dignitaries Addressing Volunteer Trainees",
    event: "Batch 113 Palliative Training",
    date: "2026-04-13",
    dateDisplay: "13 April 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-12",
    src: "assets/images/gallery/12.jpeg",
    alt: "Trust office bearers distributing essential palliative medical kits and supplies at an outdoor community event",
    caption: "Distribution of Palliative Medical Care Kits",
    event: "Patient Care Support Drive",
    date: "2026-05-10",
    dateDisplay: "10 May 2026",
    category: "Equipment",
    aspect: "landscape"
  },
  {
    id: "gallery-13",
    src: "assets/images/gallery/13.jpeg",
    alt: "Nirvrithi Charitable Trust committee members offering prayers and discussing palliative care operations",
    caption: "Prayer & Planning Session at Chiyamveli Center",
    event: "Trust Committee Meeting",
    date: "2026-07-10",
    dateDisplay: "10 July 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-14",
    src: "assets/images/gallery/14.jpeg",
    alt: "Nirvrithi Trust President and members presenting an award of excellence to a youth volunteer",
    caption: "Honouring Dedicated Community Volunteers & Achievers",
    event: "Volunteer Recognition Ceremony",
    date: "2026-06-15",
    dateDisplay: "15 June 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-15",
    src: "assets/images/gallery/15.jpeg",
    alt: "PTH State Coordinator Dr. Ameer Ali presenting course completion certificate to a trained palliative volunteer",
    caption: "Certificate Distribution by Dr. Ameer Ali",
    event: "Batch 113 Volunteer Valedictory",
    date: "2026-04-15",
    dateDisplay: "15 April 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-16",
    src: "assets/images/gallery/16.jpeg",
    alt: "Illuminated glass storefront and services directory of Pookoya Thangal Hospice Mannancherry at night",
    caption: "Pookoya Thangal Hospice Center by Night",
    event: "Hospice Facility",
    date: "2026-08-01",
    dateDisplay: "August 2026",
    category: "Community",
    aspect: "portrait"
  },
  {
    id: "gallery-17",
    src: "assets/images/gallery/17.jpeg",
    alt: "Volunteers and supporters organizing community support and refreshments for the training programme",
    caption: "Volunteer Support & Provision Arrangements",
    event: "Community Service Drive",
    date: "2026-04-14",
    dateDisplay: "14 April 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-18",
    src: "assets/images/gallery/18.jpeg",
    alt: "Local family receiving palliative home care medical supplies from Nirvrithi Charitable Trust officials",
    caption: "Family Support & Medical Aid Handover",
    event: "Equipment Donation Drive",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Equipment",
    aspect: "landscape"
  },
  {
    id: "gallery-19",
    src: "assets/images/gallery/19.jpeg",
    alt: "Volunteers conducting door-to-door community fundraising in Mannancherry for palliative patient equipment",
    caption: "Door-to-Door Fundraising & Awareness Drive",
    event: "Mannancherry PTH Day Campaign",
    date: "2026-05-28",
    dateDisplay: "28 May 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-20",
    src: "assets/images/gallery/20.jpeg",
    alt: "Youth volunteers assembled at the entrance gate holding donation buckets and palliative care appeal posters",
    caption: "Youth Volunteer Squad on Mannancherry PTH Day",
    event: "Mannancherry PTH Day Campaign",
    date: "2026-05-28",
    dateDisplay: "28 May 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-21",
    src: "assets/images/gallery/21.jpeg",
    alt: "Three palliative care volunteers with information leaflets outside residential homes in Mannancherry",
    caption: "Field Volunteers Conducting Home Care Outreach",
    event: "Community Outreach",
    date: "2026-06-05",
    dateDisplay: "5 June 2026",
    category: "Community",
    aspect: "landscape"
  }
];

const GALLERY_CATEGORIES = ['All', ...new Set(GALLERY_DATA.map(g => g.category))];
