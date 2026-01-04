/**
 * Path utilities for handling base path in production (GitHub Pages)
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Get the full path with base path prefix for production
 * @param path - The path to prefix (e.g., '/features')
 * @returns The path with base path if in production
 */
export const getPath = (path: string): string => {
  // Remove leading slash if basePath already has one
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // In production with basePath, prepend it
  if (basePath && basePath !== "/") {
    return `${basePath}${cleanPath}`;
  }
  
  return cleanPath;
};

/**
 * Get the base path (useful for assets, API calls, etc.)
 */
export const getBasePath = (): string => {
  return basePath || "";
};

