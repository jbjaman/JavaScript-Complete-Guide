// 1.

async function loadDashboard() {
  try {
    console.log("Loading dashboard...");

    const response = await fetch("/api/dashboard");

    if (!response.ok) {
      throw new Error("Failed to load dashboard");
    }

    const data = await response.json();

    console.log("Dashboard data:", data);
  } catch (error) {
    console.error("Dashboard error:", error.message);
  }
}

loadDashboard();

console.log("Application is running");
