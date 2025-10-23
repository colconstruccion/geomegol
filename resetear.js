document.addEventListener("DOMContentLoaded", () => {
  const resetLink = document.getElementById("resetLevelsLink");
  if (resetLink) {
    resetLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Reset stored level to 1
      localStorage.setItem("game_level", "1");

      // Find the current game script and swap it to geomegol_v41.js
      const gameScript = document.getElementById("gameVersion");
      if (gameScript) {
        gameScript.src = `geomegol_v41.js?v=${Date.now()}`;
      }

      // Optional: reset scoreboard and reload page for consistency
      const marcador1 = document.getElementById("scoreTeam1");
      const marcador2 = document.getElementById("scoreTeam2");
      if (marcador1) marcador1.value = "0";
      if (marcador2) marcador2.value = "0";

      // Reload after a short delay to ensure script update
      setTimeout(() => location.reload(), 300);
    });
  }
});

