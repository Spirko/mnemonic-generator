
var myStatus = document.querySelector('#status');
var wordsFilename = document.querySelector('#words').value;

myStatus.value = "Ready.";

async function loadWords(theEvent) {
  myStatus.value = `Loading: ${wordsFilename}`;
  wordsFile = fetch(wordsFilename);
}
document.querySelector('#load-words').addEventListener('click', loadWords);

async function doFetch() {
  return await fetch('https://faculty.tamucc.edu/jspirko/', { mode: 'cors'});
}
var rp = doFetch();
