//task 1
function isParent(parent, child) {
  return parent.contains(child);
}

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

//task 2
const allRef = document.querySelectorAll("a");
const resRef = [];
allRef.forEach(item => {
  if (!item.closest("li")) {
    resRef.push(item);
  }
});

console.log(resRef);

//task 3
const prevEl = document.querySelector("ul").previousElementSibling;
const nextEl = document.querySelector("ul").nextElementSibling;

console.log(prevEl);
console.log(nextEl);

//task 4
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];
const container = document.querySelector(".table-container");
const fragment = document.createDocumentFragment();
const table = document.createElement("table");
table.classList.add("table");
fragment.appendChild(table);

const header = {
  sharp: "#",
  name: "Name",
  email: "Email",
  balance: "Balance"
};

const headerTab = document.createElement("tr");
headerTab.classList.add("row");
table.appendChild(headerTab);

const headerDash = document.createElement("th");
headerDash.textContent = header.sharp;
headerTab.appendChild(headerDash);

const headerName = document.createElement("th");
headerName.textContent = header.name;
headerTab.appendChild(headerName);

const headerEmail = document.createElement("th");
headerEmail.textContent = header.email;
headerTab.appendChild(headerEmail);

const headerBalance = document.createElement("th");
headerBalance.textContent = header.balance;
headerTab.appendChild(headerBalance);

users.forEach((user, index) => {
  const row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);

  const cellIndex = document.createElement("td");
  cellIndex.textContent = index;
  row.appendChild(cellIndex);

  const cellName = document.createElement("td");
  cellName.textContent = user["name"];
  row.appendChild(cellName);

  const cellEmail = document.createElement("td");
  cellEmail.textContent = user["email"];
  row.appendChild(cellEmail);

  const cellBal = document.createElement("td");
  cellBal.textContent = user["balance"];
  row.appendChild(cellBal);
});

const total = document.createElement("div");
total.textContent =
  "Total balance: " + users.reduce((acc, user) => (acc += user.balance), 0);
total.classList.add("total");
fragment.appendChild(total);

container.appendChild(fragment);

//task 5

let btn = document.querySelector("#btn-msg");
btn.addEventListener("click", function() {
  alert(btn.getAttribute("data-text"));
});

let allEl = document.querySelector("*");
allEl.addEventListener("click", function(e) {
  let tag = document.getElementById("tag");
  tag.innerHTML = e.target.tagName;
});

//task 6

let button = document.getElementById("button");

button.addEventListener("click", function() {
  if (button.className === "arrow-down") {
    debugger;
    users.sort((a, b) => a.balance - b.balance);
    button.classList.remove("arrow-down");
    button.classList.add("arrow-up");
  }
  if (button.className === "arrow-up") {
    button.addEventListener("click", function() {
      users.sort((a, b) => b.balance - a.balance);
      button.classList.remove("arrow-up");
      button.classList.add("arrow-down");
    });
  }
});
