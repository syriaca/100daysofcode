// Query DOM
const result = document.querySelector(".result");
const form = document.querySelector(".form");

// Chunk array into a new array
const chunkArrayInGroups = (arr = [1,2,3,4,5,6], size = 2) => {
 
  	let newArray = []; 
    
  	while (arr.length) {
    	newArray.push(arr.splice(0, size));
	}
	console.log(newArray);
  	return newArray;
}

// Listen to form submit event
form.addEventListener("submit", e => {
	e.preventDefault();
	let arrayToChunk = e.target.test.value.split(",").map(x => Number(x));
	let chunkSize = Number(e.target.chunkSize.value.trim());
	let chunkResult = chunkArrayInGroups(arrayToChunk, chunkSize);
	console.log(chunkResult);

	form.classList.toggle("hidden");
	result.classList.toggle("hidden");

	result.innerHTML = `
			<p class="my-5">
				This is your result: [${chunkResult}]
			</p>
			<ul class="list-disc list-inside">
				<li>
					Your Array was ${arrayToChunk}
				</li>
				<li>
					Your chunk size was ${chunkSize}
				</li>
			</ul>
			<button class="w-55 rounded p-4 bg-green-400 text-white button-chunk-again">
                Chunk it again !
            </button>
			`;
	form.reset();
});

// Listen to button that doesn't exist yet
result.addEventListener("click", e => {
	if (e.target.classList.contains("button-chunk-again")) {
		form.classList.toggle('hidden');
		result.classList.toggle('hidden');
		result.innerHTML = "";
	}
});

