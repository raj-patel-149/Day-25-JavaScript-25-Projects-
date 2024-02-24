// Hex color generator

const hexBtn = document.querySelector(".hex-button");
const HexValue = document.querySelector(".hex-color-text");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", () => {
  let charSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, chaeSetLength = charSet.length; i < 6; ++i) {
    hexColorOutput += charSet.charAt(Math.floor(Math.random() * chaeSetLength));
  }

  HexValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
  hexCopyBtn.style.color = `#${hexColorOutput}`;
});

//Rgb color generator

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputrange = document.querySelector("#red");
const getGreenInputrange = document.querySelector("#green");
const getBlueInputrange = document.querySelector("#blue");
const rgbContainer = document.querySelector(".rgb-color-container");
const rgbValue = document.querySelector(".rgb-color-text");
const rgbCopyBtn = document.querySelector(".rgb-color-copy");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputrange.value;
  let extractGreenValue = getGreenInputrange.value;
  let extractBlueValue = getBlueInputrange.value;

  rgbValue.textContent = `rgb( ${extractRedValue},${extractGreenValue},${extractBlueValue} )`;
  rgbContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbCopyBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(HexValue.textContent);
  alert("Hex color is copy to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbValue.textContent);
  alert("RGB color is copy to clipboarb");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
