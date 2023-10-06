const browserInfoDiv = document.getElementById("browser-info");

    // Get the browser name from navigator.appName
    const browserName = navigator.appName;

    // Get the browser version from navigator.appVersion
    const browserVersion = navigator.appVersion;

    // Create a message with the browser name and version
    const message = `You are using ${browserName} version ${browserVersion}`;

    // Set the message as the inner text of the "browser-info" div
    browserInfoDiv.innerText = message;