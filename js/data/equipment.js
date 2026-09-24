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
  {
    id: "hospital-bed",
    name: "Hospital Bed",
    description: "Adjustable hospital-grade bed for home-based palliative patient care. Suitable for extended bedrest.",
    longDesc: "A fully adjustable hospital bed designed for home use. Provides comfort and safety for patients who need to spend extended periods in bed. Features height adjustment and backrest elevation.",
    image: "assets/images/equipment/hospital-bed.jpg",
    /* REPLACE image with an actual photograph of the hospital bed */
    category: "Patient Care",
    available: true,
    availableUnits: 3,
    totalUnits: 5,
    featured: true,
    sortOrder: 1
  },
  {
    id: "wheelchair",
    name: "Wheelchair",
    description: "Standard wheelchair for patients with limited mobility. Foldable and suitable for indoor and outdoor use.",
    longDesc: "Sturdy, foldable wheelchair suitable for both indoor and outdoor use. Helps patients maintain independence and mobility during palliative care.",
    image: "assets/images/equipment/wheelchair.jpg",
    /* REPLACE image with an actual photograph of the wheelchair */
    category: "Mobility",
    available: true,
    availableUnits: 2,
    totalUnits: 4,
    featured: true,
    sortOrder: 2
  },
  {
    id: "air-mattress",
    name: "Air Mattress (Pressure Relief)",
    description: "Anti-decubitus air mattress to prevent bed sores in bedridden patients. Essential for long-term care.",
    longDesc: "Medical-grade alternating pressure air mattress that prevents pressure ulcers (bed sores) in patients who are bedridden for extended periods.",
    image: "assets/images/equipment/air-mattress.jpg",
    /* REPLACE image with an actual photograph of the air mattress */
    category: "Patient Care",
    available: true,
    availableUnits: 4,
    totalUnits: 6,
    featured: true,
    sortOrder: 3
  },
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator",
    description: "Provides supplemental oxygen for patients with respiratory conditions. For home-based oxygen therapy.",
    longDesc: "Portable oxygen concentrator that delivers concentrated oxygen to patients with breathing difficulties. Operates on household electricity, eliminating the need for oxygen cylinders.",
    image: "assets/images/equipment/oxygen-concentrator.jpg",
    /* REPLACE image with an actual photograph of the oxygen concentrator */
    category: "Respiratory",
    available: true,
    availableUnits: 1,
    totalUnits: 3,
    featured: true,
    sortOrder: 4
  },
  {
    id: "commode-chair",
    name: "Commode Chair",
    description: "Portable toilet chair for patients who cannot access the bathroom independently. Adjustable height.",
    longDesc: "A sturdy commode chair that provides a safe, accessible toilet facility for patients with limited mobility. Adjustable height, removable bucket for easy cleaning.",
    image: "assets/images/equipment/commode-chair.jpg",
    /* REPLACE image with an actual photograph of the commode chair */
    category: "Patient Care",
    available: true,
    availableUnits: 3,
    totalUnits: 5,
    featured: true,
    sortOrder: 5
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    description: "Converts liquid medication into a fine mist for inhalation. Used for respiratory conditions and airway management.",
    longDesc: "An electrical nebulizer that turns liquid medication into a fine aerosol mist for easy inhalation, ideal for patients with respiratory conditions.",
    image: "assets/images/equipment/nebulizer.jpg",
    /* REPLACE image with an actual photograph of the nebulizer */
    category: "Respiratory",
    available: true,
    availableUnits: 2,
    totalUnits: 3,
    featured: true,
    sortOrder: 6
  },
  {
    id: "patient-walker",
    name: "Patient Walker",
    description: "Four-legged walking frame to assist patients with limited mobility and balance difficulties.",
    longDesc: "A sturdy four-legged walker that provides stability and support for patients with reduced mobility. Helps prevent falls and encourages safe, independent movement.",
    image: "assets/images/equipment/patient-walker.jpg",
    /* REPLACE image with an actual photograph of the patient walker */
    category: "Mobility",
    available: false,
    availableUnits: 0,
    totalUnits: 2,
    featured: false,
    sortOrder: 7
  },
  {
    id: "crutches",
    name: "Crutches",
    description: "Adjustable underarm crutches for patients recovering from lower limb conditions or surgeries.",
    longDesc: "Height-adjustable underarm crutches that provide support and weight-bearing assistance for patients with leg injuries or lower limb conditions.",
    image: "assets/images/equipment/crutches.jpg",
    /* REPLACE image with an actual photograph of the crutches */
    category: "Mobility",
    available: true,
    availableUnits: 5,
    totalUnits: 6,
    featured: false,
    sortOrder: 8
  },
  {
    id: "suction-machine",
    name: "Suction Machine",
    description: "Medical suction device for airway clearance in patients who cannot clear secretions independently.",
    longDesc: "A portable electric suction machine used to clear the airway of patients who cannot cough or swallow effectively. An essential device in advanced palliative care.",
    image: "assets/images/equipment/suction-machine.jpg",
    /* REPLACE image with an actual photograph of the suction machine */
    category: "Medical",
    available: false,
    availableUnits: 0,
    totalUnits: 2,
    featured: false,
    sortOrder: 9
  },
  {
    id: "bp-monitor",
    name: "Blood Pressure Monitor",
    description: "Digital BP monitor for regular monitoring of blood pressure at home. Easy to use.",
    longDesc: "An automatic digital blood pressure monitor that allows caregivers and patients to regularly monitor blood pressure levels at home without needing clinic visits.",
    image: "assets/images/equipment/bp-monitor.jpg",
    /* REPLACE image with an actual photograph of the BP monitor */
    category: "Monitoring",
    available: true,
    availableUnits: 2,
    totalUnits: 3,
    featured: false,
    sortOrder: 10
  },
  {
    id: "pulse-oximeter",
    name: "Pulse Oximeter",
    description: "Fingertip device to measure blood oxygen saturation and pulse rate. Useful for respiratory monitoring.",
    longDesc: "A non-invasive fingertip pulse oximeter that measures blood oxygen saturation (SpO2) and pulse rate. Particularly important for patients with respiratory conditions.",
    image: "assets/images/equipment/pulse-oximeter.jpg",
    /* REPLACE image with an actual photograph of the pulse oximeter */
    category: "Monitoring",
    available: false,
    availableUnits: 0,
    totalUnits: 2,
    featured: false,
    sortOrder: 11
  },
  {
    id: "wheelchair-ramp",
    name: "Wheelchair Ramp",
    description: "Portable ramp to help wheelchair users access raised surfaces, doorways, and vehicles.",
    longDesc: "A lightweight, portable folding wheelchair ramp that enables wheelchair users to safely navigate steps, doorways, and vehicle access. Can be placed at the entrance of homes.",
    image: "assets/images/equipment/wheelchair-ramp.jpg",
    /* REPLACE image with an actual photograph of the wheelchair ramp */
    category: "Mobility",
    available: false,
    availableUnits: 0,
    totalUnits: 1,
    featured: false,
    sortOrder: 12
  }
];

/* Derived helpers — used by filter components */
const EQUIPMENT_CATEGORIES = [...new Set(EQUIPMENT_DATA.map(e => e.category))].sort();
