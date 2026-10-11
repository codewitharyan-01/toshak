import type { Product } from "./types";

export const controlsProducts: Product[] = [
  {
    slug: "extrusion-process-controller",
    name: "Extrusion Process Controller",
    category: "Process Control",
    tagline: "Precise extrusion control, consistent product quality and efficient production.",
    intro: [
      "Toshak Ancillary is a reputed Extrusion Process Controller manufacturer, supplier & exporter, offering precision-engineered control systems for monitoring and managing critical parameters throughout the extrusion process. The controller helps maintain stable operating conditions, consistent material processing and reliable production output across demanding plastic extrusion applications.",
      "Designed for efficient process management, the system enables operators to monitor and control key extrusion parameters from a centralised interface. Accurate control helps minimise process fluctuations, improve product consistency, reduce material wastage and support smoother production.",
      "Built with industrial-grade components and a user-friendly control interface, our Extrusion Process Controller can be integrated with different extrusion lines and processing requirements. Its robust construction, dependable operation and flexible configuration make it suitable for continuous industrial production.",
    ],
    features: [
      { title: "Precise Process Control", description: "Maintains accurate control of important extrusion parameters for stable processing." },
      { title: "Real-Time Monitoring", description: "Provides continuous monitoring of operating parameters during extrusion." },
      { title: "Accurate Speed Control", description: "Supports controlled extruder speed for consistent material processing and output." },
      { title: "Centralized Control System", description: "Brings essential extrusion controls together for convenient operation." },
      { title: "User-Friendly Interface", description: "Simplifies parameter setting, monitoring and process adjustments for operators." },
      { title: "Industrial-Grade Construction", description: "Designed with reliable components for demanding and continuous production environments." },
      { title: "Reduced Process Variation", description: "Helps maintain stable production conditions and minimises unwanted process fluctuations." },
      { title: "Flexible Integration", description: "Suitable for integration with various extrusion machines and production configurations." },
    ],
    specs: {
      columns: ["Model", "Control Zones", "Temperature Range", "Control Accuracy", "Sensor Input", "Heater Control", "Drive Control", "Display / Interface", "Communication", "Power Supply", "Application"],
      rows: [
        ["TAEPC-4", "4 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Digital / HMI", "Optional", "230V / 415V", "Small Extrusion Lines"],
        ["TAEPC-6", "6 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Digital / HMI", "RS485 Optional", "230V / 415V", "Standard Extrusion Lines"],
        ["TAEPC-8", "8 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Touch HMI", "RS485", "230V / 415V", "Multi-Zone Extrusion"],
        ["TAEPC-10", "10 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Touch HMI", "RS485", "230V / 415V", "Industrial Extrusion Lines"],
        ["TAEPC-12", "12 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Touch HMI", "RS485 / Modbus", "230V / 415V", "Advanced Extrusion Lines"],
        ["TAEPC-16", "16 Zones", "0–400°C", "±1°C", "J / K Type", "PID / SSR", "VFD Compatible", "Touch HMI", "RS485 / Modbus", "230V / 415V", "Large Extrusion Systems"],
      ],
    },
    applications: [
      "Pipe, profile and tube extrusion",
      "Blown film and sheet lines",
      "Multi-zone extruder control",
      "Retrofit upgrades for older extrusion lines",
    ],
    industries: [
      "Blown Film & Extrusion Industry",
      "Complete Plastic Processing Plants",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "Which controller model suits my extrusion line?",
        answer:
          "Count the heating zones on your extruder and choose the matching model — the range covers 4 to 16 zones. For retrofit upgrades, share your extruder's zone count, heater loading and drive type and we will specify the right configuration.",
      },
      {
        question: "What does the controller actually control?",
        answer:
          "Zone temperatures with PID/SSR heater control (±1 °C accuracy on J/K type sensors) and extruder speed through VFD-compatible drive control — the two parameters that govern melt quality and output stability.",
      },
      {
        question: "Can it communicate with a plant monitoring system?",
        answer:
          "Yes — models from 8 zones upward include RS485 communication, with Modbus support on the larger units, allowing integration into plant monitoring and SCADA systems.",
      },
    ],
    image: "/img/products/extrusion-process-controller.png",
    seo: {
      title: "Extrusion Process Controller Manufacturer — 4 to 16 Zones",
      description:
        "Extrusion process controllers with ±1°C PID temperature control, VFD-compatible drive control and RS485/Modbus communication for stable, consistent extrusion. Ahmedabad, India.",
    },
  },
  {
    slug: "grinder-flake-cutter",
    name: "Grinder / Flake Cutter",
    category: "Size Reduction",
    tagline: "Robust size reduction for plastic scrap, runners, sheets and production waste.",
    intro: [
      "Toshak Ancillary is a trusted Grinder / Flake Cutter manufacturer, supplier & exporter, offering robust size-reduction equipment for processing plastic materials, rejected components, sheets, profiles, runners and production scrap.",
      "Designed for reliable and efficient cutting, the machine uses a heavy-duty rotor, precision cutting blades and a rigid grinding chamber to reduce material into manageable flakes for recycling or further processing.",
      "Its sturdy construction, balanced cutting system and user-friendly operation help provide consistent output with reduced vibration and dependable performance. The machine is suitable for plastic processing, recycling and various industrial material-recovery applications.",
    ],
    features: [
      { title: "Heavy-Duty Cutting System", description: "Robust cutting mechanism provides efficient size reduction of plastic scrap and production waste." },
      { title: "Precision Cutting Blades", description: "Properly aligned blades support clean cutting and consistent flake output." },
      { title: "Powerful Motor Drive", description: "Reliable motor configuration delivers stable cutting performance during continuous operation." },
      { title: "Rigid Machine Construction", description: "Heavy-duty body construction helps reduce vibration and improves operational stability." },
      { title: "Uniform Flake Output", description: "Optimized cutting action helps produce consistently sized material for recycling and reprocessing." },
      { title: "Easy Material Feeding", description: "Practical feeding arrangement allows convenient loading of different plastic materials." },
      { title: "Low Maintenance Design", description: "Accessible components and durable construction simplify routine inspection and maintenance." },
      { title: "Wide Material Compatibility", description: "Suitable for processing plastic runners, rejected parts, sheets, profiles and similar scrap." },
    ],
    specs: {
      columns: ["Model", "Motor Power (HP)", "Capacity (KG/HR)", "Cutting Chamber (MM)", "Rotor Speed (RPM)", "Rotor Blades", "Fixed Blades", "Screen Size (MM)", "Feeding Type", "Suitable Material", "Voltage", "Approx. Dimensions (MM)", "Approx. Weight (KG)"],
      rows: [
        ["TA-GFC-5", "5", "50 – 80", "250 × 200", "560", "6", "2", "8 – 12", "Hopper Feed", "Runners, Small Plastic Scrap", "415V, 3PH, 50Hz", "900 × 700 × 1250", "250"],
        ["TA-GFC-7.5", "7.5", "80 – 120", "300 × 250", "560", "6", "2", "8 – 12", "Hopper Feed", "Plastic Parts, Runners & Scrap", "415V, 3PH, 50Hz", "1050 × 800 × 1400", "320"],
        ["TA-GFC-10", "10", "120 – 180", "400 × 300", "520", "9", "2", "10 – 14", "Hopper Feed", "Sheets, Profiles & Plastic Scrap", "415V, 3PH, 50Hz", "1200 × 900 × 1500", "420"],
        ["TA-GFC-15", "15", "180 – 250", "500 × 350", "500", "9", "2", "10 – 16", "Heavy-Duty Hopper", "Injection & Extrusion Scrap", "415V, 3PH, 50Hz", "1350 × 1000 × 1650", "550"],
        ["TA-GFC-20", "20", "250 – 350", "600 × 400", "480", "12", "2", "12 – 16", "Heavy-Duty Hopper", "Large Moulded Parts & Profiles", "415V, 3PH, 50Hz", "1500 × 1100 × 1750", "700"],
        ["TA-GFC-25", "25", "350 – 450", "700 × 450", "450", "12", "2", "12 – 18", "Heavy-Duty Hopper", "Heavy Plastic Scrap & Components", "415V, 3PH, 50Hz", "1650 × 1200 × 1850", "850"],
        ["TA-GFC-30", "30", "450 – 600", "800 × 500", "450", "15", "2", "12 – 20", "Heavy-Duty Hopper", "Industrial Plastic Waste", "415V, 3PH, 50Hz", "1800 × 1300 × 1950", "1050"],
      ],
    },
    applications: [
      "Granulating injection moulding scrap and runners",
      "Cutting extrusion waste, sheets and profiles",
      "Regrind production for recycling",
      "Rejected parts and purging reduction",
    ],
    industries: [
      "Plastic Compounding & Recycling Units",
      "Injection Molding Units",
      "Blown Film & Extrusion Industry",
      "Complete Plastic Processing Plants",
    ],
    faqs: [
      {
        question: "Which model matches my scrap volume?",
        answer:
          "The range covers 50–80 kg/hr up to 450–600 kg/hr of throughput. Match the model to your expected scrap generation per hour — and remember that ground flakes go straight back into your blend, so size for peak scrap production, not average.",
      },
      {
        question: "What flake size does it produce?",
        answer:
          "Output size is set by the screen — models use interchangeable screens from about 8 to 20 mm. Smaller screens give finer flakes; tell us the regrind size your process accepts and we will set up accordingly.",
      },
      {
        question: "What materials can be ground?",
        answer:
          "Runners, rejected mouldings, sheets, profiles, purging and general plastic scrap in most thermoplastics. Very thick or tough blocks may need the heavy-duty hopper models — share your scrap description for a recommendation.",
      },
    ],
    image: "/img/products/grinder-flake-cutter.png",
    seo: {
      title: "Grinder / Flake Cutter Manufacturer — 50 to 600 KG/HR",
      description:
        "Plastic grinders and flake cutters for runners, rejected parts, sheets and profiles — seven models from 5 to 30 HP with interchangeable screens. Ahmedabad, India.",
    },
  },
];
