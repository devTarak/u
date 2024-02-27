function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function helloText(name, ...phrases1){
    const phrases = phrases1;
  const el = document.getElementById(name);

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };
  writeLoop();

}
helloText("typeWriterPro","Tarak Rahman", "A Programmer","also an Enginner");
helloText("typeWriterDown","Hello Everyone, I'm a Creative Web Developer and Designer. I can design and develop any type of creative website for you by coding with HTML5, CSS3, JavaScript, Bootstrap, PHP, Python. I can design and modify any type of WordPress websites and Theme for you. Just inbox me, I'm always here for you project.");
helloText("LanKnow"," Bangla", "English", "Hindi");