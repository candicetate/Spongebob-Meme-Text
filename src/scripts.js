function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#textinput").value;
  let result = document.querySelector("#converted");

  for (i = 0; i < input.length; i += 2) {
    input = input.substr(0, i) + input[i].toUpperCase() + input.substr(i + 1);
  }
  return (result.innerHTML = `${input}`);
}

let convert = document.querySelector("#text");
convert.addEventListener("submit", handleSubmit);
