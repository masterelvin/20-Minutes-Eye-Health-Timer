const statusText = document.getElementById("status");

document.getElementById("startBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start" });
  statusText.textContent = "Status: Running";
});

document.getElementById("stopBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stop" });
  statusText.textContent = "Status: Stopped";
});
