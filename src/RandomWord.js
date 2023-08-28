// RandomWord.js
export const getRandomWord = async () => {
  try {
    const response = await fetch('/dictionary.txt');
    const data = await response.text();
    
    // Split the data into lines and filter out lines that start with specific prefixes
    const lines = data.split('\n').filter(line => !line.startsWith('WordNet') && line !== 'START');
    const words = lines.map(word => word.trim());
    
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  } catch (error) {
    console.error('Error loading dictionary:', error);
    return null;
  }
};
