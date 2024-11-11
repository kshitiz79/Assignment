// src/apiService.js
export const fetchData = async () => {
  try {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const data = await response.json();
    console.log("Fetched data:", data); // Inspect the response structure

    // Return only the tickets array
    return data.tickets || []; // Use empty array if tickets are missing
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
