export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingTime: string;
  category: string;
  sections: BlogSection[];
  takeaways: string[];
};

/**
 * Seed articles — practical, evergreen buyer's guides.
 * Review and adapt to company positioning before relying on them for SEO.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-size-a-water-chiller",
    title: "How to Size an Industrial Water Chiller for Your Processing Line",
    description:
      "A practical four-step method to calculate cooling capacity, flow rate and chiller type for injection moulding and extrusion lines — and the sizing mistakes that cost processors the most.",
    date: "2026-09-02",
    readingTime: "6 min read",
    category: "Cooling",
    sections: [
      {
        paragraphs: [
          "An undersized chiller runs flat out on hot days and still lets your process water temperature climb — cycle times stretch, parts warp, and quality drifts. An oversized one wastes capital and cycles inefficiently. Getting the size right is the highest-leverage decision in your cooling system, and it comes down to four steps.",
        ],
      },
      {
        heading: "Step 1 — Calculate the process heat load",
        paragraphs: [
          "Start with the heat your process actually rejects into the water. For moulding and extrusion the dominant term is the heat removed from the plastic, but motors, hydraulics and gearboxes also add load if they are on the same circuit:",
        ],
        bullets: [
          "Plastic load (kW) ≈ throughput (kg/hr) × specific heat × temperature drop ÷ 3600 — your material supplier's data sheet gives the specific heat.",
          "Machine data: mould cooling duties from the machine or mould maker, often quoted in kW or kcal/hr per mould.",
          "Auxiliary loads: hydraulic oil coolers, gearbox cooling, compressor aftercooling — add each nameplate duty.",
          "When in doubt, measure: flow rate (LPM) × temperature difference across the return line gives you the real load.",
        ],
      },
      {
        heading: "Step 2 — Define temperature and flow targets",
        paragraphs: [
          "Chiller capacity falls as the chilled water temperature rises above the rating point — and falls again in Indian summer ambients. Fix two numbers before comparing models: the supply water temperature your process needs (commonly 10–15 °C for mould cooling) and the flow rate needed to carry the load, typically 2–3 LPM per kW with a return differential of 3–5 °C.",
        ],
      },
      {
        heading: "Step 3 — Add margin for ambience and growth",
        paragraphs: [
          "Rate the chiller at your highest expected ambient (for most of India, plan around 40–43 °C for air cooled units) and add a working margin of roughly 10–20% over the calculated load. That margin absorbs fouling, pump heat and the next machine you add to the loop.",
        ],
      },
      {
        heading: "Step 4 — Choose air cooled or water cooled",
        paragraphs: [
          "Air cooled chillers reject heat through a condenser fan — no cooling tower, no extra water circuit, simplest installation. Water cooled scroll chillers use a condenser water loop and generally deliver higher efficiency in continuous duty, with the heat rejected outside the hall. As a rule of thumb: air cooled for smaller loads and easy installs; water cooled for larger continuous loads where a tower already exists or can be justified.",
        ],
      },
      {
        heading: "The most common sizing mistakes",
        bullets: [
          "Sizing on machine tonnage instead of actual heat load.",
          "Ignoring summer ambience — a unit that performs in January fails in May.",
          "Forgetting pump and piping heat gains on long recirculation loops.",
          "Leaving no margin, so the next machine addition starves the whole loop.",
          "Underestimating flow — poor flow distribution causes hot spots no chiller can fix.",
        ],
      },
    ],
    takeaways: [
      "Size from measured or calculated heat load, not machine tonnage.",
      "Rate capacity at your worst-case summer ambient, not standard conditions.",
      "Fix supply temperature and flow rate before comparing models.",
      "Add 10–20% margin for fouling, pump heat and future growth.",
    ],
  },
  {
    slug: "gravimetric-vs-volumetric-dosing",
    title: "Gravimetric vs Volumetric Dosing: Which Fits Your Line?",
    description:
      "Both dosing technologies meter additives and masterbatch — but they solve different problems. Here is how volumetric and gravimetric systems actually differ, and how to choose.",
    date: "2026-09-18",
    readingTime: "5 min read",
    category: "Dosing & Blending",
    sections: [
      {
        paragraphs: [
          "Whether you are dosing masterbatch into a film line or blending regrind back into virgin material, the question is the same: how precisely must the ratio be held, and what happens to your product when it drifts? That question decides between volumetric and gravimetric dosing.",
        ],
      },
      {
        heading: "How volumetric dosing works",
        paragraphs: [
          "A volumetric doser meters by volume: a calibrated screw turns at a set speed, feeding a repeatable quantity per revolution. The ratio is set by adjusting screw speed against machine throughput. It is simple, compact and economical — and because the metered volume is fixed, accuracy depends on the material's bulk density staying reasonably constant.",
        ],
      },
      {
        heading: "How gravimetric dosing works",
        paragraphs: [
          "A gravimetric system weighs the material, typically with load cells, dosing batch by batch against the set recipe. Because it measures weight rather than volume, it self-corrects for bulk density variation and drift — the controller trims each feed to hold the ratio, no matter what the material is doing.",
        ],
      },
      {
        heading: "The practical differences",
        bullets: [
          "Accuracy: gravimetric holds ratio through density changes; volumetric assumes them away.",
          "Cost & complexity: volumetric units are simpler and cheaper to buy and maintain.",
          "Traceability: gravimetric systems report actual dosed weights — useful for audits and recipe records.",
          "Material sensitivity: expensive masterbatch, glass fillers and tight-tolerance compounds favour gravimetric.",
          "Changeovers: gravimetric recipe management recalls exact formulations; volumetric relies on operator settings.",
        ],
      },
      {
        heading: "A quick selection guide",
        paragraphs: [
          "Choose volumetric when the material is consistent, the additive is inexpensive, and the process tolerates small ratio variation — standard colouring and straightforward additive feeding are classic cases. Choose gravimetric when the additive is costly, the blend is multi-component, or the ratio directly decides product specification — regrind blending, masterbatch on light-coloured film, and compounding recipes all belong here.",
        ],
      },
    ],
    takeaways: [
      "Volumetric = set ratio by volume; simple and economical.",
      "Gravimetric = weighs every dose; self-correcting and traceable.",
      "Costly additives and multi-component blends justify gravimetric.",
      "Stable materials and simple colouring are fine with volumetric.",
    ],
  },
  {
    slug: "moisture-control-hopper-dryer-guide",
    title: "Why Moisture Control Decides Resin Quality: A Practical Hopper Dryer Guide",
    description:
      "Silver streaks, bubbles and brittle parts usually trace back to one root cause: moisture. How hot-air hopper drying works, which resins need it, and a practical checklist to get drying right.",
    date: "2026-09-26",
    readingTime: "6 min read",
    category: "Drying",
    sections: [
      {
        paragraphs: [
          "When parts come off the machine with silver streaks, splay marks, bubbles or unexplained brittleness, the investigation usually ends at the same place: moisture in the resin. Water flashes to steam inside the barrel, disrupts the melt, and leaves defects no downstream adjustment can hide. Drying is the cheapest quality investment in the plant — when it is done right.",
        ],
      },
      {
        heading: "Which resins need drying",
        paragraphs: [
          "Hygroscopic resins absorb moisture from the atmosphere and must be dried before processing: PET, polyamide (nylon), polycarbonate, ABS, PC/ABS blends, PBT, PMMA and TPU among them. Non-hygroscopic materials such as polyolefins only carry surface moisture and may need drying after cold storage or washing — but they do not chemically bond water the way the engineering plastics do.",
        ],
      },
      {
        heading: "How hot-air hopper drying works",
        paragraphs: [
          "A hopper dryer passes heated air through the bed of granules. Heat drives moisture out of the pellet, and the airflow carries it away — the air leaving the hopper must stay dry for this to work, which is why the hopper must be closed, the filter clean and the machine throat sealed. Temperature, airflow and residence time together decide the final residual moisture.",
        ],
      },
      {
        heading: "A practical drying checklist",
        bullets: [
          "Match hopper capacity to throughput × required residence time — undersized hoppers never dry fully.",
          "Set the temperature to the resin supplier's drying specification; hotter is not better and can degrade the material.",
          "Keep airflow consistent — a high-static blower maintains pressure even at full hopper load.",
          "Do not open the hopper mid-cycle; every opening reintroduces humid air.",
          "Dry only as long as specified — over-drying wastes energy and can add its own defects.",
          "Clean the hopper at colour and material changeovers; residue contaminates the next batch.",
        ],
      },
      {
        heading: "Choosing the right hopper dryer",
        paragraphs: [
          "Size the unit from your machine's throughput and the resin's drying time — the combination sets the litres of hopper volume you need. Look for PID temperature control, stainless steel internals and easy cleaning. For lines that also need blending with masterbatch or regrind, a mixer with integrated drying can replace two machines with one.",
        ],
      },
    ],
    takeaways: [
      "Hygroscopic resins — PET, PA, PC, ABS — always need drying.",
      "Temperature, airflow and residence time decide residual moisture.",
      "Size the hopper from throughput × drying time, not machine size.",
      "Defects like splay and bubbles usually start with moisture, not the machine.",
    ],
  },
  {
    slug: "what-an-extrusion-process-controller-does",
    title: "What an Extrusion Process Controller Actually Controls — and When to Upgrade",
    description:
      "Zone temperatures and screw speed decide melt quality. What a dedicated extrusion process controller manages, the precision it delivers, and the signs your line needs one.",
    date: "2026-10-05",
    readingTime: "5 min read",
    category: "Extrusion",
    sections: [
      {
        paragraphs: [
          "Extrusion output quality is governed by two things above all: melt temperature along the barrel and how steadily material is conveyed. Let either wander and you get dimension drift, gels, surging and scrap. A dedicated extrusion process controller puts both under precise, continuous supervision.",
        ],
      },
      {
        heading: "Zone temperature control",
        paragraphs: [
          "Each barrel zone is held by a PID loop with SSR heater control — typically to ±1 °C on J or K type thermocouples. Tight zone control keeps viscosity consistent along the screw, which is what dimensional stability downstream is built on. Multi-zone models coordinate 4 to 16 zones so the melt profile is shaped deliberately, not accidentally.",
        ],
      },
      {
        heading: "Drive and speed control",
        paragraphs: [
          "The controller's drive output is VFD-compatible, holding screw speed steady against load changes. Because output rate, melt pressure and part dimensions all track screw speed, stable speed control is the difference between a line that needs constant babysitting and one that runs itself.",
        ],
      },
      {
        heading: "Monitoring and centralisation",
        paragraphs: [
          "Modern controllers bring zone temperatures, drive status and alarms to one interface — digital or touch HMI — and larger models add RS485 / Modbus communication for plant-level monitoring. Operators spend less time walking the line and more time acting on real deviations.",
        ],
      },
      {
        heading: "Signs your line needs a controller upgrade",
        bullets: [
          "Dimensions drift between shifts or with ambient temperature.",
          "Operators frequently correct zone settings by hand to hold quality.",
          "Melt temperature surging shows up as periodic thickness variation.",
          "Scrap rises during start-up and material changes.",
          "An older line runs analogue controls with no alarm history or logging.",
        ],
      },
      {
        heading: "Retrofitting an existing line",
        paragraphs: [
          "Process controllers are among the most cost-effective retrofits: they integrate with the existing heater bands, thermocouples and VFD, and are configured per extruder. If your line has more than four zones, a touch-HMI model with RS485 keeps the door open to plant monitoring later.",
        ],
      },
    ],
    takeaways: [
      "Zone temperature (±1 °C PID) and stable screw speed decide extrusion quality.",
      "Centralised monitoring turns operator attention into early intervention.",
      "RS485/Modbus on larger models enables plant-level integration.",
      "Controllers retrofit onto existing lines — often the cheapest quality upgrade.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
