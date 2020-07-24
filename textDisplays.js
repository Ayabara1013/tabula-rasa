// function displayTranslations()
// {
// 	results.innerHTML  = "";
// 	original.innerHTML = input_phrase.join(" ");
// 	translation.innerHTML = new_phrase.join(" ");
// }

// // display alert functions
// function displayInputAlert(string, color, weight, classes) // change this so it just passes in an array of classes
// {
// 	inputAlert.style.display = "block";
// 	inputAlert.classList.add(color, weight);
// 	inputAlert.innerHTML = string;
// }

// function displayCheckboxes(vowArr, conArr, vowId, conId, name)
// {
// 	for (const item of vowArr)
// 	{
// 		let btn = document.createElement("input")
// 		let label = document.createElement("label");
		
// 		btn.type = "checkbox";
// 		btn.name = name;
// 		btn.id = item;
// 		btn.checked = true;
// 		label.innerHTML = `${item}`;
// 		label.classList.add("white");
		
// 		document.querySelector(vowId).appendChild(btn);
// 		document.querySelector(vowId).appendChild(label);
// 	}

// 	for (const item of conArr)
// 	{
// 		let btn = document.createElement("input")
// 		let label = document.createElement("label");
		
// 		btn.type = "checkbox";
// 		btn.name = name;
// 		btn.id = item;
// 		btn.checked = true;
// 		label.innerHTML = `${item}`;
// 		label.classList.add("white");
		
// 		document.querySelector(conId).appendChild(btn);
// 		document.querySelector(conId).appendChild(label);
// 	}
// }


