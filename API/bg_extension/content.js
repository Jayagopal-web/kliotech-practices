chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'changeWallpaper') {
      chrome.storage.sync.get(['wallpapers'], function (result) {
        const wallpapers = result.wallpapers || { images: [] };
  
        if (wallpapers.images.length > 0) {
          const randomIndex = Math.floor(Math.random() * wallpapers.images.length);
          const imageUrl = wallpapers.images[randomIndex];
  
          document.body.style.backgroundImage = `url("${imageUrl}")`;
        }
      });
    }
  });
  