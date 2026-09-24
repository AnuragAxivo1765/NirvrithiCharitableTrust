/**
 * EQUIPMENT DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT (future-proofed for Phase 2 API):
 * ─────────────────────────────────────────────
 * id            : string  — unique slug identifier
 * name          : string  — display name of equipment
 * description   : string  — short description for card
 * longDesc      : string  — full description for detail view (Phase 2)
 * image         : string  — path to equipment photograph
 *                           REPLACE each placeholder path with an actual photo
 * category      : string  — one of: 'Patient Care', 'Mobility', 'Respiratory', 'Monitoring', 'Medical'
 * available     : boolean — true if any units are currently available
 * availableUnits: number  — count of units currently available to lend
 * totalUnits    : number  — total units owned by the hospice
 * featured      : boolean — if true, shown on home page preview (home shows only featured items)
 * sortOrder     : number  — display order on the equipment page
 *
 * NOTE: In Phase 2, replace this static array with a fetch() call to your API endpoint,
 * e.g.: const EQUIPMENT_DATA = await fetch('/api/equipment').then(r => r.json());
 * The component structure (renderEquipmentCard, etc.) will work unchanged.
 */

/* global EQUIPMENT_DATA */
const EQUIPMENT_DATA = [
  /* ══════════════════════════════════════════════════════════
     ACTIVE INVENTORY — AVAILABLE (Numbered Items)
     ══════════════════════════════════════════════════════════ */
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator",
    description: "Provides supplemental oxygen for patients with respiratory conditions. For home-based oxygen therapy.",
    longDesc: "Portable oxygen concentrator that delivers concentrated oxygen to patients with breathing difficulties. Operates on household electricity, eliminating the need for heavy oxygen cylinders.",
    image: "assets/images/equipment/oxygen-concentrator.jpg",
    category: "Respiratory",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: true,
    sortOrder: 1
  },
  {
    id: "air-bed",
    name: "Air Bed (Air Mattress)",
    description: "Anti-decubitus alternating pressure air mattress to prevent bed sores in bedridden patients.",
    longDesc: "Medical-grade alternating pressure air mattress that prevents pressure ulcers (bed sores) in patients who are bedridden for extended periods.",
    image: "assets/images/equipment/air-mattress.jpg",
    category: "Patient Care",
    available: true,
    availableUnits: 2,
    totalUnits: 2,
    featured: true,
    sortOrder: 2
  },
  {
    id: "wheelchair",
    name: "Wheelchair",
    description: "Standard foldable wheelchair for patients with limited mobility. Suitable for indoor and outdoor use.",
    longDesc: "Sturdy, foldable wheelchair suitable for both indoor and outdoor use. Helps patients maintain mobility and independence during palliative care.",
    image: "assets/images/equipment/wheelchair.jpg",
    category: "Mobility",
    available: true,
    availableUnits: 2,
    totalUnits: 2,
    featured: true,
    sortOrder: 3
  },
  {
    id: "bp-monitor",
    name: "Blood Pressure Monitor (BP Monitor)",
    description: "Digital automatic BP monitor for regular, convenient blood pressure monitoring at home.",
    longDesc: "An automatic digital blood pressure monitor that allows caregivers and patients to regularly monitor blood pressure levels at home.",
    image: "assets/images/equipment/bp-monitor.jpg",
    category: "Monitoring",
    available: true,
    availableUnits: 2,
    totalUnits: 2,
    featured: true,
    sortOrder: 4
  },
  {
    id: "walker",
    name: "Patient Walker",
    description: "Four-legged walking frame to assist patients with limited mobility and balance support.",
    longDesc: "A sturdy four-legged walker that provides stability and support for patients with reduced mobility, preventing falls and encouraging safe movement.",
    image: "assets/images/equipment/patient-walker.jpg",
    category: "Mobility",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: true,
    sortOrder: 5
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    description: "Converts liquid medication into a fine mist for inhalation. Used for respiratory management.",
    longDesc: "An electrical nebulizer that turns liquid medication into a fine aerosol mist for easy inhalation, ideal for patients with respiratory conditions.",
    image: "assets/images/equipment/nebulizer.jpg",
    category: "Respiratory",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: true,
    sortOrder: 6
  },
  {
    id: "potty-chair",
    name: "Potty Chair (Commode Chair)",
    description: "Portable toilet chair with adjustable height for patients who cannot access the bathroom independently.",
    longDesc: "A sturdy commode chair that provides a safe, accessible toilet facility for patients with limited mobility. Features adjustable height and a removable bucket for easy cleaning.",
    image: "assets/images/equipment/commode-chair.jpg",
    category: "Patient Care",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: true,
    sortOrder: 7
  },
  {
    id: "back-support",
    name: "Back Support (Bed Rest)",
    description: "Adjustable back rest providing ergonomic back and neck support for patients resting or eating in bed.",
    longDesc: "An adjustable multi-angle back support frame that allows bedridden patients to sit upright comfortably for meals, medication, or reading.",
    image: "assets/images/equipment/back-support.jpg",
    category: "Patient Care",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: false,
    sortOrder: 8
  },
  {
    id: "semi-bed",
    name: "Semi Bed",
    description: "Semi-adjustable patient care bed for comfortable home-based palliative nursing.",
    longDesc: "A semi-adjustable medical patient bed designed to support palliative care at home, making daily patient repositioning and nursing care manageable.",
    image: "assets/images/equipment/semi-bed.jpg",
    category: "Patient Care",
    available: true,
    availableUnits: 1,
    totalUnits: 1,
    featured: false,
    sortOrder: 9
  },

  /* ══════════════════════════════════════════════════════════
     ACTIVE INVENTORY — CURRENTLY UNAVAILABLE (Unnumbered Items)
     ══════════════════════════════════════════════════════════ */
  {
    id: "semi-fowler-bed",
    name: "Semi Fowler Bed",
    description: "Specialized multi-position hospital bed with backrest elevation for palliative nursing.",
    longDesc: "Hospital-grade semi-fowler bed equipped with smooth mechanical backrest adjustment, side safety rails, and durable mattress support.",
    image: "assets/images/equipment/semi-fowler-bed.jpg",
    category: "Patient Care",
    available: false,
    availableUnits: 0,
    totalUnits: 1,
    featured: false,
    sortOrder: 10
  },
  {
    id: "semi-fowler-cot",
    name: "Semi Fowler Cot",
    description: "Metal patient cot with reclining back elevation mechanism for home recovery.",
    longDesc: "Sturdy metal palliative care cot with adjustable semi-fowler elevation, designed for compact home spaces and long-term comfort.",
    image: "assets/images/equipment/semi-fowler-cot.jpg",
    category: "Patient Care",
    available: false,
    availableUnits: 0,
    totalUnits: 1,
    featured: false,
    sortOrder: 11
  },
  {
    id: "walking-stick",
    name: "Walking Stick",
    description: "Height-adjustable walking stick with ergonomic handle and anti-slip rubber tip.",
    longDesc: "Lightweight, height-adjustable supportive cane designed to provide stability, confidence, and gentle balance support for walking.",
    image: "assets/images/equipment/walking-stick.jpg",
    category: "Mobility",
    available: false,
    availableUnits: 0,
    totalUnits: 1,
    featured: false,
    sortOrder: 12
  },

  /* ══════════════════════════════════════════════════════════
     DISABLED ITEMS (Not Mentioned in Current Inventory)
     ══════════════════════════════════════════════════════════ */
  {
    id: "hospital-bed",
    name: "Standard Hospital Bed",
    description: "Standard hospital bed. Currently disabled / superseded by Semi Fowler beds.",
    longDesc: "Standard hospital-grade bed for home care.",
    image: "assets/images/equipment/hospital-bed.jpg",
    category: "Patient Care",
    disabled: true,
    available: false,
    availableUnits: 0,
    totalUnits: 0,
    featured: false,
    sortOrder: 20
  },
  {
    id: "crutches",
    name: "Crutches",
    description: "Adjustable underarm crutches for lower-limb support. Currently disabled / not in active inventory.",
    longDesc: "Height-adjustable underarm crutches that provide weight-bearing assistance for lower limb injuries.",
    image: "assets/images/equipment/crutches.jpg",
    category: "Mobility",
    disabled: true,
    available: false,
    availableUnits: 0,
    totalUnits: 0,
    featured: false,
    sortOrder: 21
  },
  {
    id: "suction-machine",
    name: "Suction Machine",
    description: "Medical suction device for airway clearance. Currently disabled / not in active inventory.",
    longDesc: "A portable electric suction machine used to clear secretions from patient airways.",
    image: "assets/images/equipment/suction-machine.jpg",
    category: "Medical",
    disabled: true,
    available: false,
    availableUnits: 0,
    totalUnits: 0,
    featured: false,
    sortOrder: 22
  },
  {
    id: "pulse-oximeter",
    name: "Pulse Oximeter",
    description: "Fingertip blood oxygen saturation monitor. Currently disabled / not in active inventory.",
    longDesc: "A non-invasive fingertip pulse oximeter that measures blood oxygen saturation and pulse rate.",
    image: "assets/images/equipment/pulse-oximeter.jpg",
    category: "Monitoring",
    disabled: true,
    available: false,
    availableUnits: 0,
    totalUnits: 0,
    featured: false,
    sortOrder: 23
  },
  {
    id: "wheelchair-ramp",
    name: "Wheelchair Ramp",
    description: "Portable folding ramp for wheelchair access. Currently disabled / not in active inventory.",
    longDesc: "A lightweight folding wheelchair ramp to assist navigation over doorsteps and curbs.",
    image: "assets/images/equipment/wheelchair-ramp.jpg",
    category: "Mobility",
    disabled: true,
    available: false,
    availableUnits: 0,
    totalUnits: 0,
    featured: false,
    sortOrder: 24
  }
];

/* Derived helpers — used by filter components */
const EQUIPMENT_CATEGORIES = [...new Set(EQUIPMENT_DATA.filter(e => !e.disabled).map(e => e.category))].sort();
