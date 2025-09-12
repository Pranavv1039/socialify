let BASE_URL = import.meta.env.VITE_BASE_URL;

// Optional: fallback to localhost in development only
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
