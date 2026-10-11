import { z } from "zod";

/** Maximum allowed attachment size in megabytes. */
export const MAX_FILE_MB = 5;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
];

/**
 * Shared RFQ (request for quotation) schema — used by the client form
 * (react-hook-form via zodResolver) and by the /api/rfq route handler,
 * so validation rules are a single front/back-end contract.
 */
export const rfqSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(160, "Company name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(20)
    .regex(
      /^[+0-9][0-9 ()-]+$/,
      "Phone can contain digits, spaces and + ( ) - only.",
    ),
  product: z.string().trim().min(1, "Please select a product.").max(160),
  quantity: z
    .string()
    .trim()
    .max(100, "Keep the quantity under 100 characters.")
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .trim()
    .max(100, "City name is too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please describe your requirement in at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
  /** Honeypot — must stay empty; bots fill it. */
  website: z
    .string()
    .max(0, "Spam detected.")
    .optional()
    .or(z.literal("")),
});

export type RfqInput = z.infer<typeof rfqSchema>;

export const RFQ_PRODUCT_OPTIONS = [
  "General enquiry",
  "Multiple products / complete plant",
  "Hopper Dryer",
  "Vacuum Hopper Loader",
  "Volumetric Doser/Feeder",
  "Mold Temperature Controller",
  "Batch Mixer",
  "Air Cooled Water Chiller",
  "Vertical Mixer with Dryer",
  "Volumetric Master Batch Doser",
  "Vertical Mixer",
  "Vertical Mixer with Heater",
  "Extrusion Process Controller",
  "Gravimetric Dosing & Blending",
  "Grinder / Flake Cutter",
  "Water Cooled Water Scroll Chiller",
] as const;
