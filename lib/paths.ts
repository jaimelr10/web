// Prefixes a path in /public with the site's base path (see next.config.mjs).
export const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`

export const CV_URL = withBasePath("/files/JaimeLeon_CV.pdf")
export const MSC_THESIS_URL = withBasePath("/files/JaimeLeon_MSc_Thesis_wCBDC.pdf")
export const BSC_THESIS_URL = withBasePath("/files/JaimeLeon_BSc_Thesis_Cronos.pdf")
