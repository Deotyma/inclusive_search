import { expandKeywords } from "../utils/expandKeywords";

async function loadDictionary(): Promise<Record<string, string[]>> {
  const locale = chrome.i18n.getUILanguage().split("-")[0]; // np. "pl", "fr"
  const dictPath = `dictionary/dictionary.${locale}.json`;
  const response = await fetch(dictPath);
  return await response.json();
}

document.getElementById("submit")?.addEventListener("click", async () => {
  const input = (document.getElementById("search") as HTMLInputElement).value;
  const dictionary = await loadDictionary();
  const finalQuery = expandKeywords(input, dictionary);
  const url = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(finalQuery)}`;
  chrome.tabs.create({ url });
});

document.getElementById("filterWomen")?.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          const feminineForms = [
            'développeuse', 'programmeuse', 'ingénieure', 'scientiste', 'testerka',
            'programistka', 'inżynierka', 'analityczka', 'architektka'
          ];
          document.querySelectorAll('.entity-result').forEach(result => {
            const text = (result as HTMLElement).innerText.toLowerCase();
            if (!feminineForms.some(form => text.includes(form))) {
              (result as HTMLElement).style.display = 'none';
            }
          });
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    console.log("Język przeglądarki:", chrome.i18n.getUILanguage());
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const msg = el.getAttribute("data-i18n");
      const translated = chrome.i18n.getMessage(msg || "");
      if (translated) el.textContent = translated;
    });
  
    const placeholder = chrome.i18n.getMessage("search_placeholder");
    if (placeholder) {
      const input = document.getElementById("search") as HTMLInputElement;
      input.placeholder = placeholder;
    }
  
    const title = chrome.i18n.getMessage("app_name");
    if (title) document.title = title;
  });
  