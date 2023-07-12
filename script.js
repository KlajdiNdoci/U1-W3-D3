// adding list to ul

const listAdd = function () {
  const input = document.querySelector("input#myInput");
  const ul = document.querySelector("ul");
  ul.innerHTML += `
    <li>
      <span onclick='fill(event)'> ${input.value}</span>
      <button onclick='delButton(event)'>X</button>
    </li>
  `;
  console.log(ul);
};

// checking list on click

const fill = function (clickEvent) {
  clickEvent.target.classList.toggle("check");
};

// close button

const delButton = function (clickEvent) {
  clickEvent.target.parentElement.style.display = "none";
};
