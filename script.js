// adding list to ul

const listAdd = function () {
  const list = document.createElement("li");
  const input = document.getElementById("myInput").value;
  const inputText = document.createTextNode(input);
  list.appendChild(inputText);
  document.getElementById("taskUL").appendChild(list);
};
document.getElementById("myInput").value = "";

// checking list on click

const listCheck = document.querySelector("ul");
listCheck.addEventListener(
  "click",
  function (check) {
    if (check.target.tagName === "li") {
      check.target.classList.toggle("checkedList");
    }
  },
  false
);

// close button

const listItems = document.querySelectorAll("ul li");
listItems.forEach(function (item) {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", function () {
    item.remove();
  });
  item.appendChild(deleteButton);
});

// const listItems = document.getElementsByTagName("LI");
// for (i = 0; i < listItems.length; i++) {
//   const button = document.createElement("button");
//   const text = document.createTextNode("X");
//   button.className = "close";
//   button.appendChild(text);
//   listItems[i].appendChild(button);
// }

const closeButton = document.getElementsByClassName("closeButton");
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function () {
    const li = this.parentElement;
    li.style.display = "none";
  };
}
