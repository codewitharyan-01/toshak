import type { Product } from "./types";

export const dryingHandlingProducts: Product[] = [
  {
    slug: "hopper-dryer",
    name: "Hopper Dryer",
    category: "Drying & Material Handling",
    tagline: "High-efficiency Hopper Dryer solution for industrial plastics to enhance productivity.",
    intro: [
      "Toshak Ancillary is a premier Hopper Dryer manufacturer, supplier and exporter, offering hot-air drying solutions designed for modern plastic processing industries. Our machines ensure that raw materials are perfectly moisture-free before processing, eliminating common production defects such as silver streaks, bubbles and weak parts — for a flawless finish and superior strength in every plastic part you produce.",
      "Our extensive range of hot air Hopper Dryers is built for 24/7 industrial endurance and maximum energy efficiency. By maintaining a constant, uniform flow of heated air through the resin, these units significantly reduce material wastage and lower labour costs. From compact units for single machines up to a massive 2000-litre flagship model, the range offers the balance of rapid heating and long-term reliability needed for high-output factories and all types of engineering plastics.",
    ],
    features: [
      { title: "Premium Stainless Steel Interior", description: "High-grade stainless steel hopper prevents material contamination and rust." },
      { title: "Precision PID Digital Control", description: "Advanced temperature management dries material at the exact heat required, preventing thermal damage." },
      { title: "360° Uniform Airflow", description: "Cyclone air diffusion forces hot air through the entire material bed for complete moisture removal." },
      { title: "Energy Efficient Heating", description: "High-output thermal arrays reach target temperature rapidly and cut off automatically to save electricity." },
      { title: "High-Static Centrifugal Blower", description: "Powerful industrial motors maintain consistent air pressure even at maximum hopper capacity." },
      { title: "Heavy-Duty Safety Suite", description: "Overheat alarms, phase-failure protection and emergency cut-offs for safe, unattended operation." },
      { title: "Easy Maintenance Design", description: "Swing-open base and detachable hopper for quick cleaning and material colour changes." },
      { title: "Global Export Build", description: "Manufactured to international standards (415V, 3-phase) with a rugged, vibration-resistant frame." },
    ],
    specs: {
      columns: ["Model", "Capacity (Liter)", "Length (A) mm", "Width (B) mm", "Height (C) mm", "Heater Capacity (kW)", "Blowing Power (Watts)", "Voltage"],
      rows: [
        ["TADI-60", "60", "670", "550", "930", "2.7", "90", "415V, 3Ø"],
        ["TADI-100", "100", "780", "600", "1100", "3.9", "200", "415V, 3Ø"],
        ["TADI-150", "150", "900", "650", "1170", "6", "250", "415V, 3Ø"],
        ["TADI-200", "200", "900", "650", "1340", "6", "250", "415V, 3Ø"],
        ["TADI-300", "300", "1000", "840", "1670", "10", "400", "415V, 3Ø"],
        ["TADI-400", "400", "1100", "925", "1800", "12", "400", "415V, 3Ø"],
        ["TADI-600", "600", "1350", "950", "1900", "18", "750", "415V, 3Ø"],
        ["TADI-800", "800", "1400", "970", "2250", "18", "750", "415V, 3Ø"],
        ["TADI-1000", "1000", "1400", "1000", "2400", "18", "750", "415V, 3Ø"],
        ["TADI-1200", "1200", "1400", "1400", "2900", "24", "1500", "415V, 3Ø"],
        ["TADI-1500", "1500", "1400", "1400", "2900", "24", "1500", "415V, 3Ø"],
        ["TADI-2000", "2000", "1650", "1650", "3100", "30", "5500", "415V, 3Ø"],
      ],
    },
    applications: [
      "Injection moulding of moisture-sensitive resins",
      "Extrusion and blown film processing",
      "PET, PA (nylon), PC and engineering plastics",
      "Material changeovers requiring fast hopper cleaning",
    ],
    industries: [
      "Injection Molding Units",
      "Blown Film & Extrusion Industry",
      "Complete Plastic Processing Plants",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "Why is hopper drying essential before processing?",
        answer:
          "Moisture in hygroscopic resins causes silver streaks, bubbles, splay and weak, brittle parts. Drying the resin to the required residual moisture level before it enters the barrel protects quality and reduces scrap from the very first shot.",
      },
      {
        question: "Which hopper capacity should I choose?",
        answer:
          "Capacity is selected from your machine throughput and the required drying (residence) time of the resin. The range spans 60 to 2000 litres — share your material and output rate with us and we will size the right model.",
      },
      {
        question: "Does it require much maintenance?",
        answer:
          "Routine care is simple: keep the filter clean and periodically check the heater and blower. The swing-open base and detachable hopper make cleaning and colour changes quick, keeping the dryer in service.",
      },
    ],
    image: "/img/products/hopper-dryer.png",
    seo: {
      title: "Hopper Dryer Manufacturer & Supplier — 60 to 2000 Litres",
      description:
        "Hot air hopper dryers from 60 to 2000 litres with PID control, stainless steel hopper and 360° airflow for moisture-free plastic processing. Manufactured in Ahmedabad, India.",
    },
  },
  {
    slug: "vacuum-hopper-loader",
    name: "Vacuum Hopper Loader",
    category: "Drying & Material Handling",
    tagline: "Seamless material loading with precision control using our Vacuum Hopper Loader.",
    intro: [
      "The Toshak Ancillary Vacuum Hopper Loader automates the transfer of plastic granules from storage bags, gaylords or drying hoppers to the processing machine hopper — replacing slow, dusty manual loading with a sealed vacuum conveying cycle that keeps production continuously fed.",
      "A level sensor in the machine hopper calls for material automatically, so the loader tops up only when needed. Filtered, dust-free transfer protects material cleanliness, while compact construction and simple controls make the unit easy to mount, move and operate on injection moulding and extrusion machines alike.",
    ],
    features: [
      { title: "Automatic Demand Loading", description: "Hopper level sensor triggers loading cycles only when material is required." },
      { title: "Dust-Free Sealed Conveying", description: "Closed vacuum transfer with filter keeps material clean and the shop floor dust-free." },
      { title: "Increased Production Speed", description: "Removes manual material handling from the operator's workflow for higher uptime." },
      { title: "Compact Machine-Mounted Design", description: "Mounts directly on the machine hopper and moves easily between machines." },
      { title: "Fast Material Changeover", description: "Quick-release fittings and accessible filter simplify cleaning between materials." },
      { title: "Motor & No-Material Protection", description: "Motor overload protection and no-material alarm safeguard continuous operation." },
    ],
    specs: {
      columns: ["Model", "Conveying Capacity (KG/HR)", "Hopper Capacity (LTR)", "Vacuum Motor (KW)", "Power Supply"],
      rows: [
        ["TAVL-150", "Up to 150", "6", "1.1", "415V, 3PH, 50Hz"],
        ["TAVL-300", "Up to 300", "10", "1.5", "415V, 3PH, 50Hz"],
        ["TAVL-500", "Up to 500", "12", "2.2", "415V, 3PH, 50Hz"],
      ],
      note: "Representative configuration — final specifications and options are confirmed with our sales team against your material, conveying distance and layout.",
    },
    applications: [
      "Feeding injection moulding machine hoppers",
      "Feeding extruder and blown film hoppers",
      "Transfer from bags / gaylords to drying hoppers",
      "Multi-machine layouts needing automated top-up",
    ],
    industries: [
      "Injection Molding Units",
      "Blown Film & Extrusion Industry",
      "Complete Plastic Processing Plants",
    ],
    faqs: [
      {
        question: "Which machines can it feed?",
        answer:
          "It mounts on the hopper of any standard injection moulding machine, extruder or drying hopper. Share your machine size and hopper type and we will match the loader model and conveying capacity.",
      },
      {
        question: "How far can it convey material?",
        answer:
          "Conveying performance depends on the model, material bulk density and the horizontal distance plus lift of your layout. Send us a simple layout sketch and we will confirm achievable performance before you order.",
      },
      {
        question: "Can one loader serve several machines?",
        answer:
          "Single units are normally dedicated to one machine for simplicity and hygiene. For multi-machine layouts we offer central loading concepts — contact us to plan a system for your shop floor.",
      },
    ],
    image: "/img/products/vacuum-hopper-loader.png",
    seo: {
      title: "Vacuum Hopper Loader Manufacturer & Supplier",
      description:
        "Vacuum hopper loaders for automatic, dust-free granule conveying to injection moulding and extrusion hoppers. Automatic level-sensor loading, compact design. Ahmedabad, India.",
    },
  },
];
