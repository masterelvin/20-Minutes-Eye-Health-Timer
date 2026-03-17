function startAlarm() {
  chrome.alarms.create("eyeBreakAlarm", {
    periodInMinutes: 20
  });
}

function stopAlarm() {
  chrome.alarms.clear("eyeBreakAlarm");
}

chrome.runtime.onInstalled.addListener(() => {
  startAlarm();
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "start") {
    startAlarm();
  }
  if (message.action === "stop") {
    stopAlarm();
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "eyeBreakAlarm") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Time for an Eye Break",
      message: "Look 20 feet away for 20 seconds!",
      priority: 2
    });
  }
});
