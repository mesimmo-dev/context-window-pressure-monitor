function analyze() {
  const text = document.getElementById("text").value.trim();
  const limit = parseInt(document.getElementById("limit").value, 10);

  if (!text || !limit || limit <= 0) {
    alert("Enter text and a valid context limit.");
    return;
  }

  const chars = text.length;
  const tokens = Math.ceil(chars / 4);
  const ratio = tokens / limit;

  let level = "Low";
  if (ratio >= 1) level = "Critical";
  else if (ratio >= 0.8) level = "High";
  else if (ratio >= 0.5) level = "Moderate";

  const safeLimit = Math.floor(limit * 0.7);
  const chunks = Math.max(1, Math.ceil(tokens / safeLimit));

  document.getElementById("chars").textContent = chars.toLocaleString();
  document.getElementById("tokens").textContent = tokens.toLocaleString();
  document.getElementById("ratio").textContent = ratio.toFixed(2);
  document.getElementById("level").textContent = level;
  document.getElementById("chunks").textContent = chunks;
}
