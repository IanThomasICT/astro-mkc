import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
  const spacedStr = str.replace(/([A-Z])/g, " $1");
  return spacedStr.charAt(0).toUpperCase() + spacedStr.slice(1);
}

/** Converts string yyyy-MM-dd to MM-dd-yyyy */
export function toUSDateStr(dateStr: string): string {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (pattern.test(dateStr)) {
    const [year, month, day] = dateStr.split("-");
    return `${month}-${day}-${year}`;
  } else {
    return dateStr;
  }
}

export function getWindowLocation() {
  if (typeof window !== "undefined") {
    return window.location
  }
  return undefined
}