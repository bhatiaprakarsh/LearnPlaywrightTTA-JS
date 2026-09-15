enum Browser {
    CHROME = "chrome",
    FIREFOX = "firefox",
    EDGE = "edge",
    SAFARI = "safari"
}

function launchBrowser(browser: Browser) : void {
    switch (browser) {
        case Browser.CHROME:
            console.log("Launching Chrome...");
            // Launch Chrome
            break;
        case Browser.FIREFOX:
            console.log("Launching Firefox...");
            // Launch Firefox
            break;
        case Browser.EDGE:
            console.log("Launching Edge...");
            // Launch Edge
            break;
        case Browser.SAFARI:
            console.log("Launching Safari...");
            // Launch Safari
            break;
    }
}

launchBrowser(Browser.CHROME); // Output: "Launching Chrome..."