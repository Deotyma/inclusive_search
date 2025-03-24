export function expandKeywords(input: string, dictionary: Record<string, string[]>): string {
    const words = input.split(" ");
    return words.map(word => {
      const base = word.toLowerCase();
      if (dictionary[base]) {
        return `(${[word, ...dictionary[base]].join(" OR ")})`;
      }
      return word;
    }).join(" ");
  }
  