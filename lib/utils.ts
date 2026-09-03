import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { months } from "@/lib/config"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats an API date-time as "4 September 2026". UTC is used so the server and
 * the browser always render the same day.
 */
export function formatDate(value: Date | string | null): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}
