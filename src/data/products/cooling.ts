import type { Product } from "./types";

export const coolingProducts: Product[] = [
  {
    slug: "air-cooled-water-chiller",
    name: "Air Cooled Water Chiller",
    category: "Cooling Systems",
    tagline: "Reliable cooling system with Air Cooled Water Chiller for optimal machine performance.",
    intro: [
      "Toshak Ancillary is a leading manufacturer, supplier & exporter of advanced industrial cooling systems engineered for accurate and reliable temperature control. Designed for applications such as plastic injection moulding, extrusion lines, chemical processing, pharmaceuticals, food industries and HVAC systems, our chillers provide efficient heat dissipation without requiring a cooling tower.",
      "Equipped with high-performance compressors, air-cooled condensers and intelligent digital control systems, these units ensure stable cooling output, reduced operational downtime and optimised energy efficiency. Built with robust construction, premium-grade components and integrated safety protections, our chillers deliver long operational life, consistent cooling precision and reliable performance even in demanding industrial environments.",
    ],
    features: [
      { title: "High-Efficiency Cooling System", description: "Advanced compressor technology ensures rapid and consistent heat removal." },
      { title: "Air-Cooled Condenser Design", description: "Eliminates the need for cooling towers, reducing installation and maintenance costs." },
      { title: "Precision Temperature Control", description: "Digital microprocessor controller maintains stable outlet water temperature." },
      { title: "Energy Optimized Performance", description: "Smart system configuration minimizes power consumption during operation." },
      { title: "Compact Modular Structure", description: "Space-saving design allows easy installation in industrial environments." },
      { title: "Heavy-Duty Industrial Build", description: "Robust frame and corrosion-resistant components ensure long service life." },
      { title: "Integrated Safety Protection", description: "Includes overload protection, high/low pressure safeguards and fault indication alarms." },
      { title: "Low Maintenance Operation", description: "Designed for easy servicing with accessible internal components." },
    ],
    specs: {
      columns: ["Model", "Cooling (KW)", "Cooling (TR)", "Water Reservoir (LTR)", "Max Flow (LPM)", "Length (MM)", "Width (MM)", "Height (MM)", "Process Conn.", "Connected Load (KW)", "Main MCCB", "Min Cable Size", "Voltage", "Weight (KG)"],
      rows: [
        ["TAAWC-2", "7", "2", "50", "75", "900", "750", "1150", "1\"", "3.15", "16 AMP", "1.5 SQ MM", "415V, 3PH, 50HZ", "350"],
        ["TAAWC-3", "11", "3", "80", "95", "1050", "1000", "1450", "1\"", "5.05", "25 AMP", "2.5 SQ MM", "415V, 3PH, 50HZ", "400"],
        ["TAAWC-5", "20", "5", "150", "125", "1300", "1000", "1560", "1-1/2\"", "7.03", "32 AMP", "4.0 SQ MM", "415V, 3PH, 50HZ", "430"],
        ["TAAWC-8", "30", "8", "150", "230", "1550", "1100", "1560", "1-1/2\"", "13.16", "40 AMP", "6.0 SQ MM", "415V, 3PH, 50HZ", "700"],
        ["TAAWC-10", "35", "10", "200", "230", "1680", "1100", "1560", "1-1/2\"", "14.06", "40 AMP", "6.0 SQ MM", "415V, 3PH, 50HZ", "720"],
        ["TAAWC-12", "40", "12", "200", "230", "1680", "1100", "1560", "1-1/2\"", "15.61", "63 AMP", "10.0 SQ MM", "415V, 3PH, 50HZ", "750"],
        ["TAAWC-15", "55", "15", "250", "230", "1825", "1450", "1780", "1-1/2\"", "17.65", "63 AMP", "10.0 SQ MM", "415V, 3PH, 50HZ", "900"],
        ["TAAWC-20", "70", "20", "250", "360", "2050", "1450", "1940", "2\"", "24.36", "80 AMP", "16 SQ MM", "415V, 3PH, 50HZ", "975"],
        ["TAAWC-25", "90", "25", "400", "360", "2500", "1680", "2030", "2\"", "29.01", "100 AMP", "16 SQ MM", "415V, 3PH, 50HZ", "1050"],
        ["TAAWC-30", "105", "30", "400", "450", "2500", "1680", "2030", "2\"", "37.03", "100 AMP", "25 SQ MM", "415V, 3PH, 50HZ", "1500"],
      ],
    },
    applications: [
      "Injection moulding machines",
      "Extrusion and blown film lines",
      "Chemical and pharmaceutical processing",
      "Food industry process cooling",
      "Hydraulic and machine cooling",
    ],
    industries: [
      "Injection Molding Units",
      "Blown Film & Extrusion Industry",
      "Complete Plastic Processing Plants",
    ],
    faqs: [
      {
        question: "How do I select the right chiller capacity?",
        answer:
          "Size the chiller on your process heat load (kW), required chilled water temperature and flow rate (LPM). The range above covers 2 TR (7 kW) to 30 TR (105 kW); our sales team will help you calculate the cooling load and select the most efficient model.",
      },
      {
        question: "Does an air cooled chiller need a cooling tower?",
        answer:
          "No. The condenser is air cooled, so no cooling tower, separate condenser water circuit or water treatment is required — only a power supply and process water piping. This reduces installation and maintenance cost.",
      },
      {
        question: "Is it suitable for continuous, round-the-clock operation?",
        answer:
          "Yes. Units are built with high-performance compressors, generous condenser surface and integrated safety devices — overload protection, high/low pressure safeguards and fault indication alarms — for continuous industrial duty.",
      },
    ],
    image: "/img/products/air-cooled-water-chiller.png",
    seo: {
      title: "Air Cooled Water Chiller Manufacturer & Supplier",
      description:
        "Air cooled water chillers from 2 to 30 TR for injection moulding, extrusion and process cooling. No cooling tower required. Manufactured in Ahmedabad, supplied across India and exported.",
    },
  },
  {
    slug: "water-cooled-water-scroll-chiller",
    name: "Water Cooled Water Scroll Chiller",
    category: "Cooling Systems",
    tagline: "Efficient industrial cooling engineered for stable and continuous process cooling.",
    intro: [
      "Toshak Ancillary is a reputed Water Cooled Water Scroll Chiller manufacturer, supplier & exporter, offering efficient industrial cooling systems engineered for stable and continuous process cooling. These chillers use high-performance scroll compressors and a water-cooled condenser system to provide consistent chilled water temperature for demanding industrial applications.",
      "Engineered for reliable operation, our Water Cooled Water Scroll Chillers combine efficient heat transfer, precise temperature control and robust industrial construction. The system is suitable for plastic processing, extrusion, injection moulding, packaging, chemical, pharmaceutical and other applications where controlled process temperatures are essential.",
    ],
    features: [
      { title: "Efficient Water Cooling", description: "Water-cooled condenser technology provides efficient heat rejection and reliable cooling performance." },
      { title: "High-Efficiency Scroll Compressor", description: "Scroll compressor technology ensures smooth, efficient and dependable cooling operation." },
      { title: "Precise Temperature Control", description: "Maintains consistent chilled water temperature for stable industrial process conditions." },
      { title: "Energy Efficient Operation", description: "Optimized cooling components help reduce energy consumption during continuous operation." },
      { title: "Compact Industrial Design", description: "Space-efficient construction allows convenient installation within industrial facilities." },
      { title: "Low Maintenance", description: "Durable components and simplified construction help reduce routine servicing requirements." },
      { title: "Advanced Control System", description: "User-friendly controls allow convenient temperature adjustment and operating monitoring." },
      { title: "Wide Industrial Applications", description: "Suitable for plastics, extrusion, moulding, packaging, chemical and process cooling applications." },
    ],
    specs: {
      columns: ["Configuration", "Compressor Type", "Condenser Type", "Cooling Medium", "Temperature Control", "Application"],
      rows: [
        ["Water Cooled Scroll Chiller", "Scroll Compressor", "Water Cooled", "Chilled Water", "Digital / Automatic", "Industrial Process Cooling"],
        ["Industrial Chiller", "High-Efficiency Scroll", "Water Cooled Condenser", "Chilled Water", "Precision Temperature Control", "Plastic Processing"],
        ["Process Water Chiller", "Scroll Type", "Water Cooled", "Process Water", "Microprocessor Control", "Extrusion & Moulding"],
        ["Industrial Cooling System", "Scroll Compressor", "Water Cooled", "Chilled Water", "Automatic Control", "Packaging & Process Industries"],
      ],
      note: "We offer Water Cooled Water Scroll Chillers in multiple cooling capacities and configurations. Chiller specifications are selected according to cooling load, chilled water temperature, water flow requirements and application conditions — contact us for a model-specific datasheet.",
    },
    applications: [
      "Plastic processing and moulding",
      "Extrusion lines",
      "Packaging industry",
      "Chemical and pharmaceutical process cooling",
    ],
    industries: [
      "Complete Plastic Processing Plants",
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
    ],
    faqs: [
      {
        question: "When is a water cooled chiller the better choice over air cooled?",
        answer:
          "Water cooled scroll chillers generally deliver higher efficiency in continuous duty and keep heat out of the production hall, since rejection happens via the condenser water circuit (cooling tower or dedicated water source). They are a strong choice for larger loads and indoor installations with limited ventilation.",
      },
      {
        question: "What utilities does a water cooled chiller need?",
        answer:
          "A condenser water supply (typically from a cooling tower), a power supply, and process water piping. Our team sizes the complete loop — chiller, tower and piping — based on your heat load and site conditions.",
      },
      {
        question: "What maintenance does it need?",
        answer:
          "Routine checks on condenser water quality and periodic cleaning of the water-cooled condenser keep performance stable. Scroll compressors, simplified piping and accessible components keep servicing requirements low.",
      },
    ],
    image: "/img/products/water-cooled-water-scroll-chiller.png",
    seo: {
      title: "Water Cooled Water Scroll Chiller Manufacturer & Exporter",
      description:
        "Water cooled scroll chillers for stable, continuous process cooling in plastics, packaging, chemical and pharmaceutical applications. Manufactured in Ahmedabad by Toshak Ancillary.",
    },
  },
];
