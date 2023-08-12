/**
 *
 * @param {string} url
 * @returns
 */
export function extractFilename(url) {
  const lastSlashIndex = url.lastIndexOf("/");
  const lastDotIndex = url.lastIndexOf(".");

  if (lastDotIndex < lastSlashIndex) {
    // No dot after the last slash, return the full filename
    return url.substring(lastSlashIndex + 1);
  }

  return url.substring(lastSlashIndex + 1, lastDotIndex);
}
