class PhishingDetector {
    constructor() {
      this.suspiciousDomains = ['evil.com', 'phishing.com']; // Example list
    }
  
    isPhishingUrl(url) {
      const domain = new URL(url).hostname;
      return this.suspiciousDomains.includes(domain);
    }
  }