// The site is served by GitHub Pages at https://jaimelr10.github.io/web/.
// If it moves to its own domain (e.g. jaimeleon.dev), set this to "".
const basePath = process.env.NODE_ENV === "production" ? "/web" : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  env: {
    // Exposed so plain <a href> links to files in /public get the same prefix.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
