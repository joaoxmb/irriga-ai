export default function typingEffect(string, element) {
  return new Promise((resolve) => {
    let count = 1;
  
    const effect = setInterval(() => {
      if (count <= string.length) {
        element.text(string.substring(0, count));
        
        count++
        return;
      }
      clearInterval(effect);
      resolve();
    }, 25)
  })
} 