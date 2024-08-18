let phishingDetector = new PhishingDetector();

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (phishingDetector.isPhishingUrl(details.url)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);