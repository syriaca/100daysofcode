// Query DOM
const result = document.querySelector(".result");
const wordForm = document.querySelector(".word-form");

const mutation = (arr) => {
  let firstWord = arr[0].toLowerCase().split("");
  let secondWord = arr[1].toLowerCase().split("");
  return secondWord.every(letter => firstWord.indexOf(letter) != -1);
}

wordForm.addEventListener('submit', e => {
	e.preventDefault();
	let firstWord = e.target.firstWord.value.trim();
	let secondWord = e.target.secondWord.value.trim();
	let mutationResult = mutation([firstWord, secondWord]);
	let alertColor = mutationResult ? "green" : "red";
	result.classList.remove("hidden");
	
	result.innerHTML = `<p class="p-5 rounded bg-${alertColor}-300 text-${alertColor}-700"><strong>${firstWord}</strong> ${mutationResult ? "contains" : "doesn't contain"} all of the letters of <strong>${secondWord}</strong></p>`;
	wordForm.reset();
	setTimeout(() => {
		result.innerHTML = "";
	}, 3000)
})

