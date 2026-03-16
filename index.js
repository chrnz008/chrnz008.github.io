function textflex() {
  let name = document.getElementById("namee");
  let checker = "Charan Mandati";
  let n = checker.length;
  let currstr = "";
  let delay = 0;
  for (let i = 0; i < n; i++) {
    let base = currstr;
    for (let j = 0; j <= checker.charCodeAt(i); j++) {
      let currchar = String.fromCharCode(j);
      setTimeout(() => {
        name.innerHTML = base + currchar;
      }, delay);
      delay += 1;
    }
    currstr += checker[i];
  }
}
window.onload = function () {
  textflex();
};
