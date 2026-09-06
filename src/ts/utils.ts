export const DOMLoaded = (callback: () => void) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback)
  } else {
    callback()
  }
}

export const withBase = (path: string = "/"): string => {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "")
  if (!path || path === "/") return base ? `${base}/` : "/"
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${base}${cleanPath}`
}
