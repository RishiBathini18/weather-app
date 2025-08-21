document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("searchInput").value;
    if (city.trim() === "") return;

    // Example preview (you can later integrate real API call)
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/01d@2x.png";
    document.getElementById("location").textContent = city;
    document.getElementById("temperature").textContent = "28°C";
    document.getElementById("description").textContent = "Clear Sky";

    document.getElementById("weatherInfo").classList.remove("hidden");
});
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("searchBtn").click();
    }
});