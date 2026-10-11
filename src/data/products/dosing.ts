import type { Product } from "./types";

export const dosingProducts: Product[] = [
  {
    slug: "volumetric-doser-feeder",
    name: "Volumetric Doser/Feeder",
    category: "Dosing & Blending",
    tagline: "Accurate dosing or feeding with Volumetric Doser & Feeder for optimized production.",
    intro: [
      "Toshak Ancillary is a reputed Volumetric Doser/Feeder manufacturer, supplier & exporter offering precision-engineered dosing systems designed for accurate and consistent material feeding in demanding industrial applications. These volumetric units ensure uniform flow control of granules.",
      "Engineered with robust drive assemblies, precision screw mechanisms and advanced control panels, the equipment integrates seamlessly with existing production lines to deliver stable output and reduced downtime. Built using high-grade materials and strict industrial standards, the system guarantees durability, energy efficiency and minimal maintenance requirements, providing reliable performance for both domestic and international markets.",
    ],
    features: [
      { title: "High-Precision Screw Dosing", description: "Accurately calibrated screw mechanism ensures consistent and repeatable material output." },
      { title: "Stable Volumetric Control", description: "Maintains uniform feed rate regardless of minor bulk density variations." },
      { title: "Variable Speed Drive System", description: "Adjustable motor speed allows precise control over dosing capacity." },
      { title: "Compact Modular Design", description: "Space-saving structure enables easy installation on extruders and processing lines." },
      { title: "User-Friendly Digital Controller", description: "Simple interface for quick parameter setting and operational monitoring." },
      { title: "Durable Industrial Construction", description: "Manufactured with corrosion-resistant materials for long service life." },
      { title: "Low Maintenance Operation", description: "Optimized mechanical design minimizes wear and reduces servicing frequency." },
      { title: "Wide Material Compatibility", description: "Suitable for granules, masterbatch and regrind." },
    ],
    specs: {
      columns: ["Model", "Dosing Capacity (KG/HR)", "Screw Diameter (MM)", "Hopper Capacity (L)", "Motor Torque", "Voltage"],
      rows: [
        ["TAVD-9", "0.5 – 6", "9", "20", "8.5 Nm", "230V, 1PH"],
        ["TAVD-12", "1.0 – 10.5", "12", "20", "8.5 Nm", "230V, 1PH"],
        ["TAVD-18", "5.0 – 40", "18", "50", "8.5 Nm", "230V, 1PH"],
        ["TAVD-24", "10.5 – 80", "24", "50", "8.5 Nm", "230V, 1PH"],
      ],
    },
    applications: [
      "Masterbatch and additive dosing on extrusion lines",
      "Colour and additive feeding on injection moulding machines",
      "Blow moulding and downstream processing",
      "Continuous feeding where a fixed ratio is sufficient",
    ],
    industries: [
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
      "Complete Plastic Processing Plants",
    ],
    faqs: [
      {
        question: "Volumetric or gravimetric dosing — which one do I need?",
        answer:
          "Volumetric dosers feed a set ratio at an economical price and are ideal where the material and throughput are stable. Gravimetric systems weigh each dose and self-correct, which pays off with expensive additives, frequent recipe changes or tight tolerance blends. We supply both and will help you choose.",
      },
      {
        question: "How is the dosing ratio set?",
        answer:
          "The feed rate is set through the variable speed drive: the screw speed determines output between the model's minimum and maximum capacity (for example 0.5–6 kg/hr on the TAVD-9). The digital controller lets operators dial in and repeat the required ratio.",
      },
      {
        question: "Which materials can it handle?",
        answer:
          "Free-flowing plastic granules, masterbatch and regrind. Very fine powders or slippery additives may need a different screw or stirring option — tell us the material and we will configure it.",
      },
    ],
    image: "/img/products/volumetric-doser-feeder.png",
    seo: {
      title: "Volumetric Doser/Feeder Manufacturer & Supplier",
      description:
        "Volumetric dosers and feeders with precision screw metering for granules, masterbatch and regrind — 0.5 to 80 kg/hr. Compact, low maintenance, made in Ahmedabad.",
    },
  },
  {
    slug: "volumetric-master-batch-doser",
    name: "Volumetric Master Batch Doser",
    category: "Dosing & Blending",
    tagline: "Accurate, consistent masterbatch dosing for uniform colour and reduced wastage.",
    intro: [
      "Toshak Ancillary offers a Volumetric Master Batch Doser designed for accurate and consistent dosing of masterbatch and additives in plastic processing applications. The machine uses a controlled screw-feeding mechanism to deliver a regulated quantity of material into the production process, helping manufacturers maintain consistent colour distribution and reduce material wastage.",
      "Suitable for plastic injection moulding, extrusion and other plastic processing operations, its compact construction allows convenient integration with compatible processing machines, while adjustable dosing controls help operators maintain the required material feed rate. Designed for reliable operation and convenient maintenance, the doser supports continuous production and consistent material feeding.",
    ],
    features: [
      { title: "Accurate Volumetric Dosing", description: "Controlled screw feeding helps maintain consistent masterbatch and additive dosing." },
      { title: "Adjustable Dosing Control", description: "Adjustable settings let operators regulate material feeding according to production requirements." },
      { title: "Consistent Colour Feeding", description: "Controlled masterbatch delivery supports uniform colour distribution during processing." },
      { title: "Energy-Efficient Operation", description: "A compact motor-driven feeding mechanism supports efficient operation." },
      { title: "Compact Machine Design", description: "Space-saving construction enables integration with compatible plastic processing machinery." },
      { title: "Easy Operation", description: "User-friendly controls simplify dosing adjustments and routine operation." },
      { title: "Reliable Industrial Construction", description: "Durable components are designed to support regular industrial production." },
      { title: "Easy Maintenance", description: "Accessible feeding components simplify routine cleaning, inspection and maintenance." },
    ],
    specs: {
      columns: ["Model", "Dosing Capacity (KG/HR)", "Mixing Ratio (%)", "Hopper Capacity (LTR)", "Screw Diameter (MM)", "Screw Speed (RPM)", "Motor Power (W)", "Length (MM)", "Width (MM)", "Height (MM)", "Power Supply", "Control System", "Weight (KG)"],
      rows: [
        ["VMD-01", "0.5 – 5", "0.5 – 5", "6", "12", "0 – 100", "60", "350", "250", "550", "230V, 1PH, 50HZ", "Digital", "15"],
        ["VMD-02", "1 – 12", "0.5 – 5", "10", "16", "0 – 100", "90", "400", "300", "650", "230V, 1PH, 50HZ", "Digital", "20"],
        ["VMD-03", "2 – 25", "0.5 – 5", "12", "20", "0 – 120", "120", "450", "350", "750", "230V, 1PH, 50HZ", "Digital", "28"],
        ["VMD-04", "5 – 50", "0.5 – 5", "15", "25", "0 – 120", "180", "500", "400", "850", "230V, 1PH, 50HZ", "Digital", "35"],
        ["VMD-05", "10 – 100", "0.5 – 5", "25", "30", "0 – 150", "250", "600", "450", "950", "230V, 1PH, 50HZ", "Digital", "45"],
      ],
      note: "Dosing accuracy values are being validated against the final catalogue — contact us for tested values on your specific material and masterbatch.",
    },
    applications: [
      "Masterbatch colour dosing on extrusion lines",
      "Additive dosing on injection moulding machines",
      "Blow moulding and pipe / profile extrusion",
      "Consistent colour with minimal masterbatch consumption",
    ],
    industries: [
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "What dosing ratio does the unit support?",
        answer:
          "The standard range covers mixing ratios from 0.5% to 5% of the main throughput, with dosing capacities from 0.5 up to 100 kg/hr across the five models. Other ranges can be configured — share your throughput and target ratio.",
      },
      {
        question: "Will the colour stay consistent through the batch?",
        answer:
          "The controlled screw feeding delivers a regulated quantity of masterbatch continuously, which keeps colour distribution uniform and avoids over-dosing — reducing masterbatch consumption and wastage.",
      },
      {
        question: "Does it mount on my existing machine?",
        answer:
          "Yes — the compact construction is designed to mount on the throat hopper of compatible extruders and moulding machines. Tell us your machine model and we will confirm the mounting arrangement.",
      },
    ],
    image: "/img/products/volumetric-master-batch-doser.png",
    seo: {
      title: "Volumetric Master Batch Doser Manufacturer & Supplier",
      description:
        "Volumetric masterbatch dosers for uniform colour and additive dosing — five models from 0.5 to 100 kg/hr with adjustable ratio control. Made in Ahmedabad by Toshak Ancillary.",
    },
  },
  {
    slug: "gravimetric-dosing-blending",
    name: "Gravimetric Dosing & Blending",
    category: "Dosing & Blending",
    tagline: "Delivers accurate material dosing, uniform blending and reduced material wastage.",
    intro: [
      "Toshak Ancillary is a reputed Gravimetric Dosing & Blending system manufacturer, supplier & exporter, offering precision-engineered solutions for accurate weighing, dosing and blending of multiple raw materials in plastic processing applications.",
      "The system continuously measures material by weight and automatically adjusts the dosing ratio to maintain consistent blend accuracy. It is suitable for processing virgin material, regrind, masterbatch, additives and other free-flowing granules according to predefined formulations.",
      "Engineered with accurate load-cell weighing technology, intelligent controls and reliable dosing mechanisms, the system helps maintain repeatable recipes while reducing material variation and manual intervention. Its modular construction allows integration with extrusion, injection moulding and other plastic processing lines.",
    ],
    features: [
      { title: "High-Accuracy Weighing", description: "Precision load-cell technology provides accurate material measurement for consistent dosing." },
      { title: "Automatic Ratio Control", description: "Automatically maintains predefined material ratios throughout the blending process." },
      { title: "Multi-Component Blending", description: "Handles virgin material, regrind, masterbatch and additives in a single blending system." },
      { title: "Recipe Management", description: "Operators can configure and manage different material formulations for production requirements." },
      { title: "User-Friendly Controller", description: "Intuitive digital controls simplify recipe setting, monitoring and system operation." },
      { title: "Consistent Blend Quality", description: "Controlled weighing and mixing maintain uniform material composition from batch to batch." },
      { title: "Low Material Wastage", description: "Accurate dosing reduces overfeeding of masterbatch, additives and other costly materials." },
      { title: "Easy System Integration", description: "Designed for integration with injection moulding machines, extruders and processing lines." },
    ],
    specs: {
      columns: ["Model", "No. of Components", "Throughput (KG/HR)", "Batch Capacity (KG)", "Dosing Accuracy", "Weighing System", "Control System", "Power Supply", "Application"],
      rows: [
        ["TAGB-2", "2", "Up to 100", "5", "±0.5%", "Load Cell Based", "Digital Controller", "230V, 1PH, 50Hz", "Small Processing Lines"],
        ["TAGB-3", "3", "Up to 200", "10", "±0.5%", "Load Cell Based", "Digital Controller", "230V, 1PH, 50Hz", "Injection Moulding"],
        ["TAGB-4", "4", "Up to 400", "15", "±0.5%", "Load Cell Based", "PLC Based Controller", "230V, 1PH, 50Hz", "Injection & Extrusion"],
        ["TAGB-5", "5", "Up to 600", "20", "±0.5%", "Load Cell Based", "PLC + HMI", "415V, 3PH, 50Hz", "Industrial Processing"],
        ["TAGB-6", "6", "Up to 800", "25", "±0.5%", "Load Cell Based", "PLC + HMI", "415V, 3PH, 50Hz", "High-Capacity Processing"],
      ],
    },
    applications: [
      "Multi-component blending for extrusion",
      "Recipe-controlled dosing for injection moulding",
      "Regrind / reprocessed material blending",
      "Additive and masterbatch dosing by weight",
    ],
    industries: [
      "Injection Molding Units",
      "Blown Film & Extrusion Industry",
      "Plastic Compounding & Recycling Units",
      "Complete Plastic Processing Plants",
    ],
    faqs: [
      {
        question: "How accurate is gravimetric dosing?",
        answer:
          "The load-cell based system doses to ±0.5% across the range. Because the system weighs every dose and corrects automatically, blend accuracy is maintained even when material bulk characteristics vary.",
      },
      {
        question: "How many components can be blended?",
        answer:
          "From two to six components depending on the model — typically virgin material plus regrind, masterbatch and one or two additives. Each component has its own dosing station under the shared controller.",
      },
      {
        question: "Can I store different recipes?",
        answer:
          "Yes. Recipe management lets operators configure and recall formulations for different products, so changeovers are fast and ratios are repeated exactly.",
      },
    ],
    image: "/img/products/gravimetric-dosing-blending.png",
    seo: {
      title: "Gravimetric Dosing & Blending System Manufacturer",
      description:
        "Load-cell gravimetric dosing and blending systems for 2–6 components with ±0.5% accuracy, recipe management and throughputs up to 800 kg/hr. Ahmedabad, India.",
    },
  },
];
