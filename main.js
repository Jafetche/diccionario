const word = document.getElementById("word");
const search = document.getElementById("search");
const display = document.getElementById("display");
const partOfSpeechDiv = document.getElementById("partOfSpeechDiv");
const partOfSpeechHeader = document.getElementById("partOfSpeechHeader");
const partOfSpeechPara = document.getElementById("partOfSpeechPara");
const meaningDiv = document.getElementById("meaningDiv");
const meaningHeader = document.getElementById("meaningHeader");




search.addEventListener("click", async () => {
    try {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.toLowerCase()}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
    } catch (error) {
    console.log(error);
    }
    });

    const displayData = (data) => {
        console.log(data);
        
        const meanings = data[0].meanings[0].definitions;
        
        let meaningList = ``;
        meanings.forEach((meaning, ind) => {
        meaningList += `<p class='my-3 px-4 py-1 text-md'>${ind + 1}) ${
        meaning.definition
        } </p>`;
        });
        meaningDiv.className =
        "text-center w-1/4 bg-gray-100 my-6 border-2 border-green-500 rounded block";
        meaningHeader.innerText = "Meanings";
        meaningDiv.innerHTML = meaningList;
        
        
        };