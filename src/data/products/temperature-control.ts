import type { Product } from "./types";

export const temperatureControlProducts: Product[] = [
  {
    slug: "mold-temperature-controller",
    name: "Mold Temperature Controller",
    category: "Temperature Control",
    tagline: "Maintain precise mould temperatures with Mould Temperature Controller for quality output.",
    intro: [
      "Toshak Ancillary is a trusted manufacturer, supplier & exporter of precision thermal management systems designed to deliver stable and accurate temperature control for plastic injection moulding, die casting, rubber processing and extrusion applications. Engineered for consistent mould surface temperature regulation, the system enhances product quality, reduces cycle time and improves dimensional accuracy during production.",
      "With advanced heating elements, high-efficiency circulation pumps and a digital control interface, our Mould Temperature Controllers ensure rapid heat transfer and uniform thermal distribution across all tooling surfaces. Integrated safety features such as overheat protection, automatic fault alarms and pressure monitoring deliver secure and reliable performance on the shop floor, even under continuous industrial operation.",
    ],
    features: [
      { title: "Precise Temperature Regulation", description: "Digital controller maintains stable mould surface temperature for consistent part quality." },
      { title: "Rapid Heat Transfer", description: "High-efficiency circulation pump ensures uniform thermal distribution across the tool." },
      { title: "Water & Oil Configurations", description: "Water units for standard mould temperatures, oil units for higher process temperatures." },
      { title: "Reduced Cycle Time", description: "Stable tool temperature shortens moulding cycles and improves dimensional accuracy." },
      { title: "Integrated Safety Suite", description: "Overheat protection, automatic fault alarms and pressure monitoring as standard." },
      { title: "Energy-Efficient Heating", description: "Optimised heating elements deliver fast heat-up with low power consumption." },
      { title: "Compact Footprint", description: "Space-saving unit design fits alongside the moulding machine." },
      { title: "Continuous-Duty Construction", description: "Robust components built for 24/7 industrial operation with low maintenance." },
    ],
    specs: {
      columns: ["Model", "Medium", "Heating Capacity (KW)", "Pump Motor (HP)", "Max Temperature", "Power Supply"],
      rows: [
        ["TATC-6W", "Water", "6", "0.5", "90 °C", "415V, 3PH, 50Hz"],
        ["TATC-9W", "Water", "9", "1.0", "90 °C", "415V, 3PH, 50Hz"],
        ["TATC-12O", "Oil", "12", "1.0", "150 °C", "415V, 3PH, 50Hz"],
        ["TATC-18O", "Oil", "18", "2.0", "150 °C", "415V, 3PH, 50Hz"],
      ],
      note: "Representative model range — final heating capacity, pump flow and temperature class are confirmed against your mould and process requirements before ordering.",
    },
    applications: [
      "Injection moulding tools",
      "Die casting dies",
      "Rubber and silicone moulding",
      "Extrusion downstream equipment",
    ],
    industries: [
      "Injection Molding Units",
      "Complete Plastic Processing Plants",
      "Blown Film & Extrusion Industry",
    ],
    faqs: [
      {
        question: "Should I choose a water or oil type unit?",
        answer:
          "Water units are the economical choice for mould temperatures up to about 90 °C. Oil units are used where the process demands higher temperatures — typically up to 150 °C — or where oil's lower vapour pressure at temperature is advantageous. Tell us your target mould temperature and we will recommend the right type.",
      },
      {
        question: "How does mould temperature control improve part quality?",
        answer:
          "A stable mould surface temperature reduces internal stresses, sink marks and warpage, improves surface finish and keeps shrinkage consistent — which also shortens cycle time, since the tool always runs at its optimal temperature.",
      },
      {
        question: "Can it be used for more than one machine?",
        answer:
          "A controller is normally dedicated to one tool or machine so each tool runs at its own setpoint. For multi-machine layouts we recommend one unit per machine — contact us with your machine list and we will plan the layout.",
      },
    ],
    image: "/img/products/mold-temperature-controller.png",
    seo: {
      title: "Mould Temperature Controller Manufacturer & Supplier",
      description:
        "Water and oil type mould temperature controllers for injection moulding, die casting and extrusion. Stable tool temperature, shorter cycles, better part quality. Made in Ahmedabad.",
    },
  },
];
