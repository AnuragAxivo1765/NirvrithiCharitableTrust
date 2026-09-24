/**
 * GALLERY DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT (future-proofed for Phase 2 API):
 * ─────────────────────────────────────────────
 * id       : string — unique identifier
 * src      : string — path to image file (REPLACE all placeholder paths)
 * alt      : string — accessible alt text describing the image
 * caption  : string — short caption for display
 * event    : string — event name this photo belongs to
 * date     : string — ISO date string
 * dateDisplay: string — human-readable date
 * category : string — 'Event' | 'Community' | 'Equipment' | 'Awareness'
 * aspect   : string — 'landscape' | 'portrait' | 'square' — controls grid layout
 *
 * NOTE: This gallery represents real events from the organization.
 * In Phase 2, replace with: const GALLERY_DATA = await fetch('/api/gallery').then(r => r.json());
 */

/* global GALLERY_DATA */
const GALLERY_DATA = [
  {
    id: "gallery-01",
    src: "assets/images/gallery/independence-day-flag-01.jpg",
    /* REPLACE: assets/images/gallery/independence-day-flag-01.jpg
       Use: images/WhatsApp Image 2026-08-15 at 3.37.37 PM.jpeg
       (Group photo in front of PTH Mannancherry during Independence Day) */
    alt: "Community members gathered in front of Pookoya Thangal Hospice, Mannancherry during Independence Day celebrations",
    caption: "Independence Day Gathering at PTH Mannancherry",
    event: "80th Independence Day 2026",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-02",
    src: "assets/images/gallery/equipment-handover-01.jpg",
    /* REPLACE: assets/images/gallery/equipment-handover-01.jpg
       Use: images/WhatsApp Image 2026-08-15 at 3.37.36 PM.jpeg
       (Equipment handover inside the hospice with community members) */
    alt: "Trust members and community volunteers receiving donated palliative care equipment at Pookoya Thangal Hospice",
    caption: "Palliative Care Equipment Handover Ceremony",
    event: "Equipment Donation — August 2026",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Equipment",
    aspect: "landscape"
  },
  {
    id: "gallery-03",
    src: "assets/images/gallery/flag-hoisting-01.jpg",
    /* REPLACE: assets/images/gallery/flag-hoisting-01.jpg
       Use: images/WhatsApp4.jpeg or WhatsApp3.jpeg
       (Large group during flag hoisting — Independence Day) */
    alt: "Large gathering of community members watching the flag hoisting ceremony at Mannancherry during Independence Day 2026",
    caption: "Flag Hoisting at Mannancherry — Independence Day 2026",
    event: "80th Independence Day 2026",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-04",
    src: "assets/images/gallery/independence-day-poster.jpg",
    /* REPLACE: assets/images/gallery/independence-day-poster.jpg
       Use: images/WhatsApp5.jpeg or WhatsApp6.jpeg
       (PTH Independence Day graphic / event poster) */
    alt: "Pookoya Thangal Hospice Independence Day event graphic showing equipment handover with community members",
    caption: "PTH Independence Day Event — Nirvrithi Charitable Trust",
    event: "80th Independence Day 2026",
    date: "2026-08-15",
    dateDisplay: "15 August 2026",
    category: "Event",
    aspect: "portrait"
  },
  {
    id: "gallery-05",
    src: "assets/images/gallery/mobile-care-meeting.jpg",
    /* REPLACE: assets/images/gallery/mobile-care-meeting.jpg
       Use: images/WhatsApp7.jpeg
       (Meeting/programme at hospice with banner visible — Mobile Care) */
    alt: "Community meeting at Pookoya Thangal Hospice for the Mobile Palliative Care Unit launch programme",
    caption: "Mobile Care Unit Launch — Community Meeting",
    event: "Mobile Care Launch — July 2026",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-06",
    src: "assets/images/gallery/chandrika-coverage.jpg",
    /* REPLACE: assets/images/gallery/chandrika-coverage.jpg
       Use: images/WhatsApp8.jpeg
       (Chandrika newspaper article — vehicle donation story) */
    alt: "Chandrika newspaper article covering the vehicle donation for Pookoya Thangal Hospice mobile palliative care services",
    caption: "Media Coverage — Chandrika, August 2026",
    event: "Vehicle Donation — August 2026",
    date: "2026-08-04",
    dateDisplay: "4 August 2026",
    category: "Community",
    aspect: "portrait"
  },
  {
    id: "gallery-07",
    src: "assets/images/gallery/awareness-session.jpg",
    /* REPLACE: assets/images/gallery/awareness-session.jpg
       Use: images/WhatsApp10.jpeg
       (Palliative care awareness session — screen with Malayalam text) */
    alt: "Palliative care awareness training session with presentation on screen showing care principles in Malayalam",
    caption: "Palliative Care Awareness & Training Session",
    event: "Awareness Session — July 2026",
    date: "2026-07-20",
    dateDisplay: "20 July 2026",
    category: "Awareness",
    aspect: "portrait"
  },
  {
    id: "gallery-08",
    src: "assets/images/gallery/volunteers-field.jpg",
    /* REPLACE: assets/images/gallery/volunteers-field.jpg
       Use: images/WhatsApp9.jpeg
       (Three volunteers in field/outdoor setting) */
    alt: "Nirvrithi Trust volunteers in the field for home-based palliative care support work",
    caption: "Volunteers — Home Care Support",
    event: "Community Outreach",
    date: "2026-07-15",
    dateDisplay: "15 July 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-09",
    src: "assets/images/gallery/community-gathering-02.jpg",
    /* REPLACE: assets/images/gallery/community-gathering-02.jpg
       Use: images/WhatsApp11.jpeg or WhatsApp12.jpeg */
    alt: "Community members and trust volunteers gathered for a Nirvrithi Charitable Trust programme",
    caption: "Community Gathering — PTH Mannancherry",
    event: "Community Programme",
    date: "2026-07-01",
    dateDisplay: "July 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-10",
    src: "assets/images/gallery/event-programme-01.jpg",
    /* REPLACE: assets/images/gallery/event-programme-01.jpg
       Use: images/WhatsApp13.jpeg or WhatsApp14.jpeg */
    alt: "Nirvrithi Charitable Trust event programme with community participation",
    caption: "Trust Programme — Mannancherry",
    event: "Community Programme",
    date: "2026-06-15",
    dateDisplay: "June 2026",
    category: "Event",
    aspect: "landscape"
  },
  {
    id: "gallery-11",
    src: "assets/images/gallery/event-programme-02.jpg",
    /* REPLACE: assets/images/gallery/event-programme-02.jpg
       Use: images/WhatsApp15.jpeg or WhatsApp16.jpeg */
    alt: "Nirvrithi Charitable Trust community programme with members and volunteers",
    caption: "Community Support Programme",
    event: "Community Programme",
    date: "2026-06-01",
    dateDisplay: "June 2026",
    category: "Community",
    aspect: "landscape"
  },
  {
    id: "gallery-12",
    src: "assets/images/gallery/event-programme-03.jpg",
    /* REPLACE: assets/images/gallery/event-programme-03.jpg
       Use: images/WhatsApp17.jpeg or WhatsApp18.jpeg */
    alt: "Trust members and community volunteers at a Nirvrithi Charitable Trust programme",
    caption: "Nirvrithi Charitable Trust — Community Outreach",
    event: "Community Outreach",
    date: "2026-05-15",
    dateDisplay: "May 2026",
    category: "Community",
    aspect: "square"
  }
];

const GALLERY_CATEGORIES = ['All', ...new Set(GALLERY_DATA.map(g => g.category))];
