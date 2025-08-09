let BASE_URL = "http://<your-ec2-public-ip>:5000/";

// Optional: fallback to localhost in development only
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
