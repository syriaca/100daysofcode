// Query DOM
const result = document.querySelector(".result");
const form = document.querySelector(".form");

// Chunk array into a new array
const chunkArrayInGroups = (arr = [1,2,3,4,5,6], size = 2) => {
 
  	let newArray = []; 
    
  	while (arr.length) {newArray.push(arr.splice(0, size));}
  	return newArray;
}

// Listen to form submit event
form.addEventListener("submit", e => {
	e.preventDefault();
	let array = e.target.arrayValue.value;
	let arrayToChunk = array.split(",").map(x => Number(x));
	let chunkSize = Number(e.target.chunkSize.value.trim());
	let chunkResult = chunkArrayInGroups(arrayToChunk, chunkSize);

	form.classList.toggle("hidden");
	result.classList.toggle("hidden");

	let chunkResultHTML = "";

	for(let i in chunkResult) {
		chunkResultHTML += `[${chunkResult[i]}]${i < chunkResult.length - 1 ? "," :""}`;
	}

	result.innerHTML = `
			<ul class="list-disc list-inside">
				<li class="mb-2">
					Your initial Array was <code class="bg-gray-100 p-1 rounded font-bold">[${array}]</code>
				</li>
				<li class="mb-2">
					Your chunk size was <code class="bg-gray-100 p-1 rounded font-bold">${chunkSize}</code>
				</li>
			</ul>
			<div class="my-5">
				<h2 class="text-2xl">
					This is your result:
					<code class="bg-gray-100 p-1 rounded font-bold">[${chunkResultHTML}]</code>
				</h2>
			</div>
			<button class="w-55 rounded p-4 bg-green-400 text-white button-chunk-again">
                Chunk it again !
            </button>`;
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

