// Prefixes a path in /public with the site's base path (see next.config.mjs).
export const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`

export const CV_URL = withBasePath("/files/JaimeLeon_CV.pdf")
export const THESIS_URL = withBasePath("/files/JaimeLeon_MSc_Thesis_wCBDC.pdf")
