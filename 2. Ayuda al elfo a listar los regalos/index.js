export default function listGifts(letter) {
  // ¡Tú puedes!
  const gifts = letter.split(' ').filter(r => r != "")
  const counts = {};
  gifts.forEach((x) => {
    if (!x.includes('_')) {
      counts[x] = (counts[x] || 0) + 1;
    }
  });
  return counts
}