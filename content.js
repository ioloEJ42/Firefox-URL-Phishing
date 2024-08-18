document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link) {
      browser.runtime.sendMessage({
        action: "checkUrl",
        url: link.href
      });
    }
  });