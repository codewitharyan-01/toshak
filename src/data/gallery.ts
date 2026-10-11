export type GalleryCategory =
  | "Mixers"
  | "Dosing & Blending"
  | "Cooling"
  | "Temperature Control"
  | "Drying & Handling"
  | "Size Reduction"
  | "Process Control";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  model: string;
  productSlug?: string;
  specs: { label: string; value: string }[];
  description: string;
};

/**
 * Detailed high-res industrial machine gallery data.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/img/products/vertical-mixer-with-dryer.png",
    alt: "Vertical Mixer with Dryer — Full Unit View",
    category: "Mixers",
    model: "VMD-SERIES",
    productSlug: "vertical-mixer-with-dryer",
    specs: [
      { label: "Batch Capacity", value: "500 kg - 5,000 kg" },
      { label: "Heating Power", value: "18 kW - 36 kW" },
      { label: "Chamber Material", value: "Polished SS-304 Stainless" },
      { label: "Cycle Time", value: "15 - 25 minutes/batch" },
    ],
    description:
      "Integrated spiral vertical screw blender coupled with circulating hot-air drying cone. Ensures homogeneous batch blending of virgin polymer, regrind and masterbatch while simultaneously evaporating surface moisture.",
  },
  {
    src: "/img/products/batch-mixer.png",
    alt: "High-Speed Batch Mixer Unit",
    category: "Mixers",
    model: "BM-SERIES",
    productSlug: "batch-mixer",
    specs: [
      { label: "Batch Volume", value: "50 kg - 300 kg" },
      { label: "Impeller Speed", value: "High-Shear Dispersion Rotor" },
      { label: "Drive Motor", value: "ABB / Siemens Heavy Duty" },
      { label: "Lid Seal", value: "Pneumatic Assist with Interlock" },
    ],
    description:
      "Rapid cycle intensive batch mixer for compounding, powder blending, and masterbatch dispersion with fast uniform vortex generation.",
  },
  {
    src: "/img/products/vertical-mixer.png",
    alt: "Industrial Vertical Mixer Silo",
    category: "Mixers",
    model: "VM-SERIES",
    productSlug: "vertical-mixer",
    specs: [
      { label: "Capacity Range", value: "500 kg - 10,000 kg" },
      { label: "Drive Mechanism", value: "High-Torque Belt Driven" },
      { label: "Material", value: "Full Polished Stainless Steel" },
      { label: "Cleanout Door", value: "Quick-Release Ergonomic Hatch" },
    ],
    description:
      "Large-capacity vertical mixing silo featuring rapid auger recirculation for compounding, Masterbatch blending, and bulk homogenization.",
  },
  {
    src: "/img/products/vertical-mixer-with-heater.png",
    alt: "Vertical Mixer with Electric Heater",
    category: "Mixers",
    model: "VMH-SERIES",
    productSlug: "vertical-mixer-with-heater",
    specs: [
      { label: "Heating Band", value: "Even Thermal Distribution" },
      { label: "Batch Sizing", value: "1,000 kg - 5,000 kg" },
      { label: "Thermoregulation", value: "Microprocessor PID Dual Display" },
      { label: "Discharge Valve", value: "Pneumatic Sliding Shutter" },
    ],
    description:
      "Heated vertical auger blending system engineered to preheat resins, remove ambient hygroscopic moisture, and coat additives uniformly.",
  },
  {
    src: "/img/products/volumetric-doser-feeder.png",
    alt: "Volumetric Masterbatch Doser / Feeder",
    category: "Dosing & Blending",
    model: "VDF-100",
    productSlug: "volumetric-doser-feeder",
    specs: [
      { label: "Dosing Accuracy", value: "±1% Output Consistency" },
      { label: "Output Range", value: "0.1 kg/h - 60 kg/h" },
      { label: "Screw Diameter", value: "Ø12, Ø16, Ø20 mm Modular" },
      { label: "Drive System", value: "Brushless DC Stepper Motor" },
    ],
    description:
      "Direct throat-mounted volumetric masterbatch feeder with quick-change metering screw and digital RPM control for precise color dosing on injection & extrusion machines.",
  },
  {
    src: "/img/products/volumetric-master-batch-doser.png",
    alt: "Precision Volumetric Master Batch Doser",
    category: "Dosing & Blending",
    model: "VMD-SERIES",
    productSlug: "volumetric-master-batch-doser",
    specs: [
      { label: "Mixing Ratio", value: "0.5% - 5.0% Programmable" },
      { label: "Dosing Capacity", value: "0.5 kg/h - 100 kg/h" },
      { label: "Hopper Volume", value: "SS-304 Polished Construction" },
      { label: "Controls", value: "Microprocessor RPM Closed-Loop" },
    ],
    description:
      "Precision volumetric masterbatch dispenser with dual sight glass viewing windows and continuous auger feeding to avoid over-dosing expensive colorants.",
  },
  {
    src: "/img/products/gravimetric-dosing-blending.png",
    alt: "Gravimetric Dosing & Blending Station",
    category: "Dosing & Blending",
    model: "GDB-4X",
    productSlug: "gravimetric-dosing-blending",
    specs: [
      { label: "Weighing Accuracy", value: "±0.1% High-Speed Load Cells" },
      { label: "Ingredients", value: "Up to 4 Materials Simultaneously" },
      { label: "Throughput", value: "50 kg/h - 1,200 kg/h" },
      { label: "Recipe Storage", value: "100+ Digital Memory Presets" },
    ],
    description:
      "Continuous mass-flow gravimetric loss-in-weight blender ensuring micro-accurate additive ratios and automated bulk density drift compensation.",
  },
  {
    src: "/img/products/water-cooled-water-scroll-chiller.png",
    alt: "Industrial Water Cooled Water Scroll Chiller",
    category: "Cooling",
    model: "WCC-SERIES",
    productSlug: "water-cooled-water-scroll-chiller",
    specs: [
      { label: "Cooling Capacity", value: "5 TR to 120 TR" },
      { label: "Compressor", value: "Copeland / Danfoss Scroll" },
      { label: "Temp Stability", value: "5°C - 25°C (±0.5°C Precision)" },
      { label: "Evaporator", value: "Shell & Tube / Brazed Plate" },
    ],
    description:
      "High-efficiency water-cooled industrial process chiller equipped with digital PID temperature monitoring, heavy-duty frame, and multi-stage safety cutouts.",
  },
  {
    src: "/img/products/air-cooled-water-chiller.png",
    alt: "Air Cooled Water Chiller Plant",
    category: "Cooling",
    model: "ACC-SERIES",
    productSlug: "air-cooled-water-chiller",
    specs: [
      { label: "Cooling Capacity", value: "3 TR to 60 TR" },
      { label: "Condenser", value: "Hydrophilic Aluminum Fin + Copper" },
      { label: "Cooling Medium", value: "Chilled Water / Glycol Circuit" },
      { label: "Pump Flow", value: "Built-In Stainless High-Head Pump" },
    ],
    description:
      "Standalone air-cooled chiller requiring no external cooling tower. Engineered for ambient temperatures up to 50°C in demanding Indian processing environments.",
  },
  {
    src: "/img/products/mold-temperature-controller.png",
    alt: "Mould Temperature Controller (MTC)",
    category: "Temperature Control",
    model: "MTC-9W / 12O",
    productSlug: "mold-temperature-controller",
    specs: [
      { label: "Max Media Temp", value: "Water: 120°C / Oil: 200°C" },
      { label: "Heater Capacity", value: "6 kW - 24 kW Incoloy" },
      { label: "Pump Flow", value: "SPECK High-Pressure Pump" },
      { label: "Temp Precision", value: "±0.5°C Dual PID" },
    ],
    description:
      "Closed-loop mould thermoregulation system designed to stabilize tool temperatures, eliminate thermal stress in plastic parts, and drastically shorten moulding cycles.",
  },
  {
    src: "/img/products/hopper-dryer.png",
    alt: "Dehumidifying Hot-Air Hopper Dryer",
    category: "Drying & Handling",
    model: "THD-SERIES",
    productSlug: "hopper-dryer",
    specs: [
      { label: "Hopper Volume", value: "12 kg - 1,000 kg Capacity" },
      { label: "Contact Parts", value: "Mirror Polished SS-304" },
      { label: "Temperature", value: "Room Temp to 160°C" },
      { label: "Blower Design", value: "High-Static Downward Blowing" },
    ],
    description:
      "Direct-mount energy-efficient hopper dryer ensuring uniform heat dispersion and deep moisture extraction for hygroscopic plastics.",
  },
  {
    src: "/img/products/vacuum-hopper-loader.png",
    alt: "Automated Vacuum Hopper Loader",
    category: "Drying & Handling",
    model: "TVL-SERIES",
    productSlug: "vacuum-hopper-loader",
    specs: [
      { label: "Conveying Output", value: "200 kg/h - 800 kg/h" },
      { label: "Motor Power", value: "1.1 kW - 3.7 kW Induction" },
      { label: "Filter System", value: "Stainless Mesh with Reverse Blow" },
      { label: "Receiver", value: "SS-304 with Sight Glass" },
    ],
    description:
      "Automated pneumatic material feeding unit with microprocessor controls, dust separation filter, and automatic resin shortage alarms.",
  },
  {
    src: "/img/products/grinder-flake-cutter.png",
    alt: "Heavy-Duty Flake Cutter & Regrind Grinder",
    category: "Size Reduction",
    model: "TGC-SERIES",
    productSlug: "grinder-flake-cutter",
    specs: [
      { label: "Crushing Capacity", value: "100 kg/h - 600 kg/h" },
      { label: "Blade Alloy", value: "High-Chromium D2 Tool Steel" },
      { label: "Cutter Geometry", value: "Staggered Paddle / Claw Rotors" },
      { label: "Sound Insulation", value: "Heavy Acoustic Chamber" },
    ],
    description:
      "Heavy-duty plastics granulator for sprues, runners, edge trims, and defective mouldings, delivering uniform clean regrind flakes with minimum fines.",
  },
  {
    src: "/img/products/extrusion-process-controller.png",
    alt: "Extrusion Process Controller Console",
    category: "Process Control",
    model: "EPC-TOUCH",
    productSlug: "extrusion-process-controller",
    specs: [
      { label: "HMI Display", value: "7-Inch / 10-Inch Color Touchscreen" },
      { label: "Communications", value: "RS-485 / Modbus RTU / Ethernet" },
      { label: "Sync Speed", value: "Haul-Off / Screw Master Synchronization" },
      { label: "Alarms", value: "Audible Beacon + Diagnostic History" },
    ],
    description:
      "Centralized digital extrusion control station providing closed-loop mass throughput stabilization, line speed synchronization, and recipe management.",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Cooling",
  "Drying & Handling",
  "Dosing & Blending",
  "Mixers",
  "Temperature Control",
  "Process Control",
  "Size Reduction",
];
