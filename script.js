import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("input-text").value.toLowerCase();
  const inputLanguage = document.getElementById("input-language").value;

  const outputText = document.getElementById("output-text");
  const outputLanguage = document.getElementById("output-language").value;
  const translated = translate(inputLanguage, outputLanguage, inputText);
  outputText.value = translated;
}

window.translateText = translateText;
