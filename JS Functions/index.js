function vowelFunction() {
  let vowelInput = Array.from(document.getElementById("vowel").value);
  const firstVowel = vowelInput.filter((x) => "aeiouAEIOU".includes(x));
  document.getElementById("resultVowel").innerHTML = firstVowel[0];
}

function reverseFunction() {
  let temp = parseInt(document.getElementById("reverse").value);
  let remainder = 0;
  let reverse = 0;
  while (temp > 0) {
    remainder = temp % 10;
    reverse = reverse * 10 + remainder;
    temp = parseInt(temp / 10);
  }
  document.getElementById("resultReverse").innerHTML = reverse;
}
