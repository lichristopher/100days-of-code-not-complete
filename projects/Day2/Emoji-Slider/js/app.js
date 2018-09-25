const emojiContent = document.getElementsByClassName('emoji-icon')[0];
const emojiList = ['😀','😁','😂','😃','😄'];
const myRange = document.getElementById('myRange');

myRange.addEventListener('input', () => {
  const myRangeValue = parseInt(myRange.value);
  emojiContent.textContent = emojiList[myRangeValue];
});