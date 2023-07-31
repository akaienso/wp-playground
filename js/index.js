function getRandomGrayColor() {
    // Generate a random shade of gray in hexadecimal format (#RRGGBB)
    const grayValue = Math.floor(Math.random() * 256);
    const grayHex = grayValue.toString(16).padStart(2, "0");
    return `#${grayHex}${grayHex}${grayHex}`;
  }
  
  function getRandomGradient() {
    const angle = Math.floor(Math.random() * 360); // Random gradient angle between 0 and 359 degrees
    const color1 = getRandomGrayColor();
    const color2 = getRandomGrayColor();
    const color3 = getRandomGrayColor();
  
    return `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
  }
  
  function getRandomPattern() {
    // Create an array of patterns
    const patterns = [
      'url("img/bg/tiles.png")'
      // Add more pattern URLs here
    ];
  
    // Get a random pattern from the array
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    return randomPattern;
  }
  
  function attachDetachmentButton() {
    const iframe = document.querySelector("#wp-playground");
    const detachButton = document.getElementById("detachButton");
  
    if (iframe.contentDocument.readyState === "complete") {
      detachButton.disabled = false;
    } else {
      iframe.onload = () => {
        detachButton.disabled = false;
      };
    }
  }
  
  function detachPlayground() {
    const iframeContent = document.querySelector("#wp-playground").contentDocument
      .documentElement.innerHTML;
    const newWindowFeatures = "width=1440,height=900,resizable=yes";
    const newWindow = window.open("", "_blank", newWindowFeatures);
    newWindow.document.write(iframeContent);
  }
  
  // Set a random background on page load
  const body = document.querySelector("body");
  const randomGradient = getRandomGradient();
  const randomPattern = getRandomPattern();
  body.style.background = `${randomGradient}, ${randomPattern}`;
  