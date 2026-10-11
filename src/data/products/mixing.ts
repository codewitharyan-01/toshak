import type { Product } from "./types";

export const mixingProducts: Product[] = [
  {
    slug: "vertical-mixer",
    name: "Vertical Mixer",
    category: "Mixing",
    tagline: "Uniform blending of granules, masterbatch and regrind in a compact vertical design.",
    intro: [
      "Toshak Ancillary is a reputed Vertical Mixer manufacturer, supplier & exporter, offering efficient material mixing solutions for plastic processing and other industrial applications. The machine is designed to provide uniform blending of plastic granules, masterbatch, regrind and other free-flowing materials before further processing.",
      "Built with a strong vertical mixing structure and an efficient screw-based mixing mechanism, the mixer continuously circulates material to achieve consistent blending throughout the batch. Its compact vertical configuration also helps save valuable floor space while providing dependable performance.",
      "Manufactured using durable industrial-grade materials, our Vertical Mixer is suitable for regular production environments. Simple operation, easy material loading and unloading, low maintenance requirements and reliable mixing performance make it suitable for extrusion, injection moulding and other plastic processing applications.",
    ],
    features: [
      { title: "Uniform Material Mixing", description: "Efficient vertical circulation helps achieve consistent blending throughout the batch." },
      { title: "Efficient Screw Mixing", description: "Specially designed screw mechanism continuously lifts and circulates material for effective mixing." },
      { title: "High Mixing Capacity", description: "Designed to handle bulk quantities of plastic raw materials efficiently." },
      { title: "Compact Vertical Design", description: "Vertical construction saves floor space and fits easily into production areas." },
      { title: "Durable Construction", description: "Robust industrial-grade construction provides dependable performance and long service life." },
      { title: "Easy Operation", description: "Simple controls allow convenient loading, mixing, unloading and routine operation." },
      { title: "Low Maintenance", description: "Practical mechanical design reduces maintenance requirements and production downtime." },
      { title: "Wide Material Compatibility", description: "Suitable for plastic granules, masterbatch, regrind and various free-flowing materials." },
    ],
    specs: {
      columns: ["Model", "Mixing Capacity (KG)", "Motor Power (HP)", "Mixing Speed (RPM)", "Mixing Method", "Contact Material", "Discharge Type", "Voltage", "Approx. Dimension (MM)", "Approx. Weight (KG)"],
      rows: [
        ["TAVM-100", "100", "3", "300", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "900 × 900 × 2200", "180"],
        ["TAVM-200", "200", "5", "300", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "1050 × 1050 × 2500", "230"],
        ["TAVM-300", "300", "5", "280", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "1150 × 1150 × 2750", "280"],
        ["TAVM-500", "500", "7.5", "250", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "1350 × 1350 × 3100", "380"],
        ["TAVM-750", "750", "10", "220", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "1500 × 1500 × 3400", "480"],
        ["TAVM-1000", "1000", "15", "200", "Vertical Screw", "Stainless Steel", "Manual", "415V, 3PH, 50Hz", "1700 × 1700 × 3800", "620"],
      ],
    },
    applications: [
      "Blending virgin granules with masterbatch",
      "Mixing regrind with virgin material",
      "Colour mixing before extrusion or moulding",
      "Batch preparation for compounding",
    ],
    industries: [
      "Complete Plastic Processing Plants",
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "How does a vertical mixer work?",
        answer:
          "A vertical screw continuously lifts material from the bottom of the conical chamber to the top, where it spreads back down through the batch. This constant circulation produces a uniform blend across the whole volume.",
      },
      {
        question: "Which capacity should I choose?",
        answer:
          "Match the mixer batch size to your consumption between mixes — models from 100 to 1000 kg are available. As a guide, mix only what your line consumes per shift or per colour change; we will help you size it.",
      },
      {
        question: "What materials is the mixing chamber made of?",
        answer:
          "All product-contact parts are stainless steel, which protects material cleanliness and makes cleaning between batches and colours straightforward.",
      },
    ],
    image: "/img/products/vertical-mixer.png",
    seo: {
      title: "Vertical Mixer Manufacturer & Supplier — 100 to 1000 KG",
      description:
        "Vertical screw mixers for uniform blending of plastic granules, masterbatch and regrind. Stainless steel contact parts, 100–1000 kg capacities. Ahmedabad, India.",
    },
  },
  {
    slug: "vertical-mixer-with-heater",
    name: "Vertical Mixer with Heater",
    category: "Mixing",
    tagline: "Efficient material mixing with controlled heating in a single unit.",
    intro: [
      "Toshak Ancillary offers a robust Vertical Mixer with Heater designed for efficient mixing and controlled heating of plastic raw materials, granules, powders, masterbatch and other processing materials. The vertical mixing arrangement provides uniform material circulation, helping achieve consistent blending throughout the batch.",
      "The integrated heating system allows material to be mixed and heated simultaneously, making the machine suitable for applications where moisture reduction, preheating or temperature-controlled material preparation is required before further processing. Its compact vertical construction saves floor space while supporting convenient loading, discharge, operation and maintenance.",
      "Built with a durable mixing chamber, efficient drive system, heating arrangement and user-friendly controls, the machine is suitable for continuous industrial use in plastic processing and related manufacturing applications.",
    ],
    features: [
      { title: "Efficient Vertical Mixing", description: "Vertical material circulation provides consistent and uniform blending throughout the mixing chamber." },
      { title: "Integrated Heating System", description: "Built-in heating arrangement enables simultaneous mixing and controlled heating of materials." },
      { title: "Uniform Material Blending", description: "Designed to mix granules, powders, masterbatch, regrind and similar processing materials evenly." },
      { title: "Space-Saving Vertical Design", description: "Compact vertical construction requires less installation space than conventional horizontal systems." },
      { title: "Temperature Control", description: "User-friendly temperature controls help maintain the required heating conditions during material preparation." },
      { title: "Durable Industrial Construction", description: "Heavy-duty components and a robust mixing chamber provide reliable performance for regular industrial operation." },
      { title: "Easy Material Discharge", description: "Convenient discharge arrangement supports quick material unloading and improves workflow efficiency." },
      { title: "Low Maintenance Operation", description: "Simple mechanical construction and accessible components help reduce routine maintenance requirements." },
    ],
    specs: {
      columns: ["Model", "Mixing Capacity (KG)", "Motor Power (HP)", "Heater Power (KW)", "Mixing Speed (RPM)", "Mixing Chamber", "Discharge Type", "Heating Control", "Power Supply"],
      rows: [
        ["TAVMH-100", "100", "3", "6", "Approx. 85", "Stainless Steel", "Manual", "Temperature Controller", "415V, 3PH, 50Hz"],
        ["TAVMH-200", "200", "5", "9", "Approx. 85", "Stainless Steel", "Manual", "Temperature Controller", "415V, 3PH, 50Hz"],
        ["TAVMH-300", "300", "7.5", "12", "Approx. 85", "Stainless Steel", "Manual", "Temperature Controller", "415V, 3PH, 50Hz"],
        ["TAVMH-500", "500", "10", "18", "Approx. 85", "Stainless Steel", "Manual", "Temperature Controller", "415V, 3PH, 50Hz"],
        ["TAVMH-1000", "1000", "15", "24", "Approx. 85", "Stainless Steel", "Manual", "Temperature Controller", "415V, 3PH, 50Hz"],
      ],
    },
    applications: [
      "Mixing with simultaneous preheating",
      "Moisture reduction before processing",
      "Preparation of colour / additive blends",
      "Temperature-controlled material conditioning",
    ],
    industries: [
      "Complete Plastic Processing Plants",
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
    ],
    faqs: [
      {
        question: "When is a mixer with heater the right choice?",
        answer:
          "Whenever material needs both blending and heat — for example to drive off surface moisture, preheat regrind for better bonding, or condition masterbatch blends before processing. If full drying to low residual moisture is required, pair it with a hopper dryer.",
      },
      {
        question: "How is the temperature controlled?",
        answer:
          "Heating is managed through a temperature controller that maintains the set heating conditions during the mixing cycle, so material is not overheated.",
      },
      {
        question: "What capacities are available?",
        answer:
          "Five models from 100 to 1000 kg batch capacity, with heater power scaled from 6 to 24 kW accordingly.",
      },
    ],
    image: "/img/products/vertical-mixer-with-heater.png",
    seo: {
      title: "Vertical Mixer with Heater Manufacturer & Supplier",
      description:
        "Vertical mixers with integrated heating for simultaneous blending and controlled heating of granules, powders and masterbatch — 100 to 1000 kg. Ahmedabad, India.",
    },
  },
  {
    slug: "vertical-mixer-with-dryer",
    name: "Vertical Mixer with Dryer",
    category: "Mixing",
    tagline: "Efficient mixing and moisture removal in a single integrated unit.",
    intro: [
      "The Toshak Ancillary Vertical Mixer with Dryer is engineered to deliver efficient mixing and moisture removal in a single integrated unit. Designed for plastic granules, masterbatch and regrind materials, this hybrid system combines precision-driven vertical agitation with a powerful hot air drying mechanism for uniform blend quality and effective moisture elimination.",
      "Robust construction, an insulated chamber and precision digital controls ensure reliable industrial performance, reduced cycle time and consistent process outcomes across extrusion, injection moulding and blow moulding applications. Built with heavy-duty components, optimised airflow systems and integrated safety protections, the machine delivers energy-efficient performance, low maintenance and long service life.",
    ],
    features: [
      { title: "Mixing + Drying in One Unit", description: "Vertical agitation and hot-air drying combined — fewer machines, less handling." },
      { title: "Uniform Blend Quality", description: "Precision-driven vertical circulation blends granules, masterbatch and regrind evenly." },
      { title: "Effective Moisture Removal", description: "Powerful hot-air mechanism eliminates moisture for defect-free processing." },
      { title: "Insulated Drying Chamber", description: "Insulation holds process heat for energy-efficient, stable drying." },
      { title: "Precision Digital Controls", description: "Digital temperature and process controls keep conditions consistent cycle to cycle." },
      { title: "Reduced Cycle Time", description: "Simultaneous mixing and drying shortens material preparation time." },
      { title: "Integrated Safety Protections", description: "Built-in safeguards support safe, unattended industrial operation." },
      { title: "Energy-Efficient, Low Maintenance", description: "Optimised airflow and heavy-duty components deliver long service life with minimal upkeep." },
    ],
    specs: {
      columns: ["Model", "Mixing Capacity (KG)", "Motor Power (HP)", "Heater Capacity (KW)", "Blower (W)", "Max Temperature", "Power Supply"],
      rows: [
        ["TAVMD-100", "100", "3", "6", "400", "Up to 120 °C", "415V, 3PH, 50Hz"],
        ["TAVMD-200", "200", "5", "9", "400", "Up to 120 °C", "415V, 3PH, 50Hz"],
        ["TAVMD-300", "300", "7.5", "12", "750", "Up to 120 °C", "415V, 3PH, 50Hz"],
        ["TAVMD-500", "500", "10", "18", "750", "Up to 120 °C", "415V, 3PH, 50Hz"],
        ["TAVMD-1000", "1000", "15", "24", "1500", "Up to 120 °C", "415V, 3PH, 50Hz"],
      ],
      note: "Representative model range — final capacity, heating and airflow configurations are confirmed against your material and throughput before ordering.",
    },
    applications: [
      "Mix-and-dry preparation of regrind",
      "Moisture removal with blending in one pass",
      "Material conditioning for extrusion and moulding",
      "Colour blends that also need drying",
    ],
    industries: [
      "Complete Plastic Processing Plants",
      "Blown Film & Extrusion Industry",
      "Injection Molding Units",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "What is the advantage over a separate mixer and dryer?",
        answer:
          "One machine does both jobs — material is blended while it dries — saving floor space, handling steps and cycle time, with a single control point for the whole preparation step.",
      },
      {
        question: "Which materials is it suitable for?",
        answer:
          "Plastic granules, masterbatch and regrind. It is particularly useful for regrind that needs blending back with virgin material while also being dried before processing.",
      },
      {
        question: "Can it reach the temperatures needed for hygroscopic resins?",
        answer:
          "The unit handles general moisture reduction and conditioning up to around 120 °C. For deep drying of moisture-sensitive engineering plastics to low residual moisture, we recommend a dedicated hopper dryer — we will help you decide based on your resin.",
      },
    ],
    image: "/img/products/vertical-mixer-with-dryer.png",
    seo: {
      title: "Vertical Mixer with Dryer Manufacturer & Supplier",
      description:
        "Vertical mixer with integrated hot-air dryer — blending and moisture removal in one unit for granules, masterbatch and regrind. Ahmedabad, India.",
    },
  },
  {
    slug: "batch-mixer",
    name: "Batch Mixer",
    category: "Mixing",
    tagline: "Ensure uniform mixing with Batch Mixer for every batch production.",
    intro: [
      "Toshak Ancillary is a trusted manufacturer, supplier & exporter of high-performance Batch Mixers designed for uniform and efficient blending of granules. Engineered for industrial applications across the plastics industry, our Batch Mixers deliver consistent homogeneity with minimal segregation. Built with robust construction and precision-engineered mixing blades, these units ensure thorough blending, reduced mixing time and enhanced process reliability for every batch.",
      "Toshak Ancillary offers customised configurations to match specific production requirements. Our mixers combine ease of operation, low maintenance design and durable components, making them ideal for continuous industrial usage while maintaining high quality and performance standards.",
    ],
    features: [
      { title: "Uniform Blending Efficiency", description: "Engineered mixing blades ensure consistent and homogeneous material distribution in every batch." },
      { title: "Robust Industrial Construction", description: "Heavy-duty fabricated body designed for long operational life under demanding conditions." },
      { title: "Optimized Mixing Geometry", description: "Specially designed chamber enhances material flow and minimizes dead zones." },
      { title: "High Torque Drive System", description: "Powerful motor assembly enables smooth operation even with dense materials." },
      { title: "Short Mixing Cycle Time", description: "Efficient mechanical design reduces processing time while maintaining blend accuracy." },
      { title: "Low Maintenance Mechanism", description: "Simple structure allows easy cleaning and minimal servicing requirements." },
      { title: "Custom Capacity Options", description: "Available in multiple batch sizes to match specific production demands." },
      { title: "Safe & Reliable Operation", description: "Integrated safety features ensure secure performance during continuous industrial use." },
    ],
    specs: {
      columns: ["Model", "Motor (KW / HP)", "Capacity (KG)", "Dimension (L × W × H) MM", "Rotating Speed (R/min.)", "Approx. Weight (KG)", "Voltage"],
      rows: [
        ["TAMX-50", "1.5 / 2", "50", "850 × 725 × 1030", "85", "120", "415V, 3Ø"],
        ["TAMX-100", "3.5 / 4.0", "100", "990 × 1020 × 1250", "85", "175", "415V, 3Ø"],
        ["TAMX-150", "4.0 / 5.5", "150", "1125 × 1020 × 1375", "85", "265", "415V, 3Ø"],
        ["TAMX-200", "7.5 / 10", "200", "1250 × 1180 × 1425", "85", "315", "415V, 3Ø"],
      ],
    },
    applications: [
      "Batch blending of granules with masterbatch",
      "Mixing additives into processed material",
      "Small to medium batch colour preparation",
      "Laboratory and production-scale mixing",
    ],
    industries: [
      "Complete Plastic Processing Plants",
      "Injection Molding Units",
      "Plastic Compounding & Recycling Units",
    ],
    faqs: [
      {
        question: "What batch sizes are available?",
        answer:
          "Four standard models cover 50, 100, 150 and 200 kg batches. Larger or customised capacities can be configured to your production demand.",
      },
      {
        question: "How is a batch mixer different from a vertical mixer?",
        answer:
          "A batch mixer blends a discrete charged batch with rotating blades — fast cycles and easy cleaning, ideal for frequent recipe or colour changes. A vertical mixer continuously circulates a larger working volume. The right choice depends on batch size, changeover frequency and floor space.",
      },
      {
        question: "How long does one mixing cycle take?",
        answer:
          "Cycle time depends on the material and recipe; the optimised chamber geometry and high-torque drive are designed to reach homogeneity in the shortest possible time without segregation. Share your material for a practical cycle estimate.",
      },
    ],
    image: "/img/products/batch-mixer.png",
    seo: {
      title: "Batch Mixer Manufacturer & Supplier — 50 to 200 KG",
      description:
        "Industrial batch mixers for uniform granule blending with precision mixing blades — 50 to 200 kg batch capacities. Made in Ahmedabad by Toshak Ancillary.",
    },
  },
];
