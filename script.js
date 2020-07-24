console.clear();

// selectors
const original = document.querySelector("#old-phrase");
const translation = document.querySelector("#new-phrase");
const entry = document.querySelector("#entry-field");
const results = document.querySelector("#results");
const inputAlert = document.querySelector("#input-alert");

// button selectors
const submit = document.querySelector("#submit");
const sample = document.querySelector("#sample");
const loremButton = document.querySelector("#lorem");
const sortButton = document.querySelector("#sort-button");
const clearButton = document.querySelector("#clear");

let input_phrase = [];
let new_phrase = [];
let sorted_phrase = [];

let vow = ['a','e','i','o','u', 'y'];
let con = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
let conButt = [];



//create the checkboxes and other visuals (dont delete the commented version in case of issues)
//#region initial checkbox script
/**
// vowels
for (const item of vow)
{
  let btn = document.createElement("input")
  let label = document.createElement("label");
  // conButt.push(btn);
  // console.log(conButt);
  
  btn.type = "checkbox";
  btn.name = "vow-rule";
  btn.id = item;
  btn.checked = true;
  label.innerHTML = `${item}`;
  label.classList.add("white");
  
  document.querySelector("#vowButt").appendChild(btn);
  document.querySelector("#vowButt").appendChild(label);
}

// consonants
for (const item of con)
{
  let btn = document.createElement("input")
  let label = document.createElement("label");
  // conButt.push(btn);
  // console.log(conButt);
  
  btn.type = "checkbox";
  btn.name = "con-rule";
  btn.id = item;
  btn.checked = true;
  label.innerHTML = `${item}`;
  label.classList.add("white");
  
  document.querySelector("#conButt").appendChild(btn);
  document.querySelector("#conButt").appendChild(label);
}
// console.log(conButt); 
*/
//#endregion
displayCheckboxes(vow, con, "#vowButt", "#conButt", "letter-rule");


// test , success
console.log(`letter arrays: ${con.length} + ${vow.length}`);


// selector functions
function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function selnum(num)
{
  return Math.floor(Math.random() * num);
}

function selcon()
{
  let n = getRandomInt(0, 20);
  // console.log(n);
  // if (n === 0)
  // {
  //   console.log(`consonant is incompatible`);
  //   while(n === 0) n = getRandomInt(0, 6);
  // }
  return con[n];
}

function selvow()
{
  let n = getRandomInt(0, 6);
  if (document.querySelector("#a:checked") == null)
  {
    if (n === 0)
    {
      console.log(n);
      console.log(`vowel [a] is incompatible, attempting new vowel`);
      while(n === 0) n = getRandomInt(0, 6);
    }
  }
  return vow[n];
}



//#region generator functions
function generateNewWord()
{
  let block = [];
  
  block.push(selcon());
  block.push(selvow());
  
  if (Math.random() > 0.5) {
    block.push(selvow());
    
    if (Math.random() > 0.5) {
      block.push(selcon());
    }
  }
  return block.join("");
}

function generateNewPhrase(input) // funct to generate the new words
{
  new_phrase = [];
   
  for (let word of input)
  {
    let gen_word = generateNewWord();
    new_phrase.push(gen_word);
  }

  console.log(`generated a new phrase, length = ${new_phrase.length} words`);
  // tested, success console.log(new_phrase);
}

function executeTranslate()
{
  // console.clear();
  generateNewPhrase(input_phrase);
}




//#region button shiz
submit.onclick = function()
{
  displayInputAlert("translation complete", "white", "normal") 
  
  consolidateText();
  
  executeTranslate();
  displayTranslations();


}

sample.onclick = function()
{
  displayInputAlert("providing a sample alert", "white", `normal-w`);
  entry.value = "hello world theres a song that were singing come on get happy";
  console.log("provided sample entry string");
  updateOriginal();
}

loremButton.onclick = function()
{
  displayInputAlert("this placeholder text was generated using text from a 1 sentence lorem ipsum generated at https://www.lipsum.com/", "white", `normal-w`);
  entry.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula dui eu mauris dapibus maximus a quis tortor.";
  updateOriginal();
  console.log("provided lorem entry string");
}

clearButton.onclick = function()
{
  console.log("clear button clicked");
  displayInputAlert("this button cleared the text field", "red", "normal-w");
  entry.value = null;
}

sortButton.onclick = function()
{
  document.querySelector("#sorted-words").innerHTML = "";
  console.log("sort button clicked");
  createSortedTable(new_phrase, input_phrase);
}


// make the sort and display features
// display


//#endregion




// function createResultBox(old_, new_)
// {
//   let box = document.createElement("DIV");
//   let old_word = document.createElement("DIV");
//   let new_word = document.createElement("DIV");
//   let hr = document.createElement("HR");
  
//   box.classList.add("result-box");
//   old_word.innerHTML = old_;
//   new_word.innerHTML = new_;
  
//   box.appendChild(old_word);
//   box.appendChild(hr);
//   box.appendChild(new_word);
  
//   results.appendChild(box);
  
//   // turn this into an object
  
//   // create a sorted table
// }



//#region text display functions
function displayTranslations()
{
	results.innerHTML  = "";
	// original.innerHTML = input_phrase.join(" ");
	translation.innerHTML = new_phrase.join(" ");
}

function consolidateText()
{
  input_phrase = entry.value.split(" ");
  console.log("entry.value has been converted to input_phrase and split", input_phrase);
}


// display alert functions
function displayInputAlert(string, color, weight, classes) // change this so it just passes in an array of classes
{
	inputAlert.style.display = "block";
	inputAlert.classList.add(color, weight);
	inputAlert.innerHTML = string;
}

function displayCheckboxes(vowArr, conArr, vowId, conId, name)
{
	for (const item of vowArr)
	{
		let btn = document.createElement("input")
		let label = document.createElement("label");
		
		btn.type = "checkbox";
		btn.name = name;
		btn.id = item;
		btn.checked = true;
		label.innerHTML = `${item}`;
		label.classList.add("white");
		
		document.querySelector(vowId).appendChild(btn);
		document.querySelector(vowId).appendChild(label);
	}

	for (const item of conArr)
	{
		let btn = document.createElement("input")
		let label = document.createElement("label");
		
		btn.type = "checkbox";
		btn.name = name;
		btn.id = item;
		btn.checked = true;
		label.innerHTML = `${item}`;
		label.classList.add("white");
		
		document.querySelector(conId).appendChild(btn);
		document.querySelector(conId).appendChild(label);
	}
}
//#endregion



//#region some 3d array stuff
/* // /* function create3dSortedArray(op, np)
{
  // op == old phrase, np == new phrase
  let mdArr = [];
  for (let i = 0; i < np.length; i++)
  {
    console.log(`${np[i]}, ${op[i]}`)
    let newRow = [np[i], op[i]];
    mdArr.push(newRow);
  }
  return mdArr;
}

function createSortedTable(sortedArr) {
  for (let item of sortedArr) {
    let parent = document.querySelector("#sort-table");
    let row = document.createElement("TR");
    let cella = document.createElement("TD");
    let cellb = document.createElement("TD");

    parent.appendChild(row);
    row.appendChild(cella);
    row.appendChild(cellb);
    
    row.innerHTML = item;
  }
} */

//#endregion




//#region listeners
function updateOriginal() 
{
  console.log(`entry field was changed`);
  original.innerHTML = entry.value;
}

// add the listeners
entry.addEventListener("input", updateOriginal);



// entry.addEventListener("keypress", updateOriginal);

//#endregion

//#region creating and modifying the table
// create the table
function createSortedTable(newArr, oldArr)
{
  console.log(new_phrase, input_phrase);

  const table = document.querySelector("#sorted-words");

  for (let i = 0; i < newArr.length; i++)
  {
    console.log(`running in the 90s`);
    let newc = document.createElement("td");
    let oldc = document.createElement("td");
    let new_row = document.createElement("tr");
    
    newc.innerHTML = newArr[i];
    oldc.innerHTML = oldArr[i];
    
    console.log(newArr[i], oldArr[i]);

    
    table.appendChild(new_row);
    new_row.appendChild(newc);
    new_row.appendChild(oldc);
  }
}

//#endregion


