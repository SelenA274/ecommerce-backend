export const DEPARTMENTS = [
  "makeup",
  "skincare",
  "fragrance",
  "hair-care",
  "body-care",
] as const;

export type Department = (typeof DEPARTMENTS)[number];

export const SUBCATEGORIES_BY_DEPARTMENT = {
  makeup: ["lips", "face", "eyes", "brows", "tools"],
  skincare: [
    "morning-routine",
    "evening-routine",
    "spf-sun-care",
    "masks-treatments",
  ],
  fragrance: ["floral", "woody", "fresh", "oriental"],
  "hair-care": ["shampoo-conditioner", "hair-masks-treatments", "styling"],
  "body-care": ["moisturizers", "scrubs", "bath-shower"],
} as const satisfies Record<Department, readonly string[]>;

export type Subcategory<D extends Department = Department> =
  (typeof SUBCATEGORIES_BY_DEPARTMENT)[D][number];

export type ProductSubcategory =
  (typeof SUBCATEGORIES_BY_DEPARTMENT)[Department][number];

export const ALL_SUBCATEGORIES = Object.values(
  SUBCATEGORIES_BY_DEPARTMENT
).flat() as ProductSubcategory[];

export const VARIANT_KINDS = ["color", "size"] as const;
export type VariantKind = (typeof VARIANT_KINDS)[number];

/** Makeup shade products use color variants; tools and all other departments use size/volume. */
export function resolveVariantKind(
  department: Department,
  subcategory: string
): VariantKind {
  if (department === "makeup" && subcategory !== "tools") {
    return "color";
  }
  return "size";
}

export function isSubcategoryValid(
  department: Department,
  subcategory: string
): subcategory is Subcategory<typeof department> {
  return (SUBCATEGORIES_BY_DEPARTMENT[department] as readonly string[]).includes(
    subcategory
  );
}

export const DEPARTMENT_LABELS: Record<Department, string> = {
  makeup: "Makeup",
  skincare: "Skincare",
  fragrance: "Fragrance",
  "hair-care": "Hair Care",
  "body-care": "Body Care",
};

export const SUBCATEGORY_LABELS: Record<ProductSubcategory, string> = {
  lips: "Lips",
  face: "Face",
  eyes: "Eyes",
  brows: "Brows",
  tools: "Tools",
  "morning-routine": "Morning Routine",
  "evening-routine": "Evening Routine",
  "spf-sun-care": "SPF & Sun Care",
  "masks-treatments": "Masks & Treatments",
  "hair-masks-treatments": "Masks & Treatments",
  floral: "Floral",
  woody: "Woody",
  fresh: "Fresh",
  oriental: "Oriental",
  "shampoo-conditioner": "Shampoo & Conditioner",
  styling: "Styling",
  moisturizers: "Moisturizers",
  scrubs: "Scrubs",
  "bath-shower": "Bath & Shower",
};
