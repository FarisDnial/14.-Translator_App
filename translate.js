const translations = {
  "malay": {
    "english": {
      "selamat pagi": "good morning",
      "selamat petang": "good afternoon",
      " sealamt malam": "good evening",
      "apa khabar": "how are you"
    },
  },
  "english": {
    "malay": {
      "good morning": "selamat pagi",
      "good afternoon": "selamat petang",
      "good evening": "selamat malam",
      "how are you": "apa khabar"
    },
  },
};

export function translate(inputLanguage, outputLanguage, inputText) {
  return translations[inputLanguage][outputLanguage][inputText] || "not found";
}
