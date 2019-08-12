function addList() {
  var textValue = document.getElementById("input_text").value;
  var createLi = document.createElement("li");
  var createText = document.createTextNode(textValue);
  createLi.appendChild(createText);
  var ulTag = document.getElementById("myList").appendChild(createLi);
  var textValue = document.getElementById("input_text").value = "";

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  createLi.appendChild(delBtn);
  delBtn.addEventListener("click",remove);
}

function remove(){
	var textValue = document.getElementById("input_text").value;
	alert(textValue);
	var ulTag = document.getElementById("myList");
	ulTag.removeChild(textValue);
}