export function getSlug(href = "") {
  if (!href) return null;
  return href.split("/").filter(Boolean).pop();
}