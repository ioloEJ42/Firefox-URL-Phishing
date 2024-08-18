document.getElementById('save').addEventListener('click', () => {
    const enableProtection = document.getElementById('enableProtection').checked;
    browser.storage.sync.set({ enableProtection });
  });
  
  browser.storage.sync.get('enableProtection', (result) => {
    document.getElementById('enableProtection').checked = result.enableProtection ?? true;
  });
  