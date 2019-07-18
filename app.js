//task 1
function isParent(parent, child) {
  return parent.contains(child);
}

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

//task 2
const allRef = document.querySelectorAll(":not(li) > a");

console.log(allRef);

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
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    balance: 2853.33,
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    balance: 1464.63,
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    balance: 2823.39,
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];

const header = {
  sharp: "#",
  name: "Name",
  email: "Email",
  balance: "Balance"
};
function createTable(users, header) {
  const container = document.querySelector(".table-container");
  const fragment = document.createDocumentFragment();
  const table = document.createElement("table");
  table.classList.add("table");
  fragment.appendChild(table);

  const headerTab = document.createElement("tr");
  headerTab.classList.add("row");
  table.appendChild(headerTab);

  for (prop in header) {
    const headerCell = document.createElement("th");
    if (prop === "sharp") {
      prop = "#";
    }
    headerCell.textContent = prop.slice(0, 1).toUpperCase() + prop.slice(1);
    headerTab.appendChild(headerCell);
  }

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);

    const cellIndex = document.createElement("td");
    cellIndex.textContent = index;
    row.appendChild(cellIndex);

    for (prop in user) {
      if (prop === "name" || prop === "email" || prop === "balance") {
        const cell = document.createElement("td");
        cell.textContent = user[prop];
        row.appendChild(cell);
      }
    }
  });

  const total = document.createElement("div");
  total.textContent = "Total balance: " + users.reduce((acc, user) => (acc += user.balance), 0);
  total.classList.add("total");
  fragment.appendChild(total);

  container.appendChild(fragment);
}

createTable(users, header);

//task 5

let btn = document.querySelector("#btn-msg");
btn.addEventListener("click", function() {
  alert(btn.getAttribute("data-text"));
});

let allEl = document.querySelector("body");
allEl.addEventListener("click", function(e) {
  let tag = document.getElementById("tag");
  tag.innerHTML = e.target.tagName;
});

//task 6

let button = document.getElementById("button");

button.addEventListener("click", function() {
  if (button.className === "arrow-down") {
    users.sort((a, b) => a.balance - b.balance);
    button.className
    button.classList.remove("arrow-down");
    button.classList.add("arrow-up");
  } else {
    button.addEventListener("click", function() {
      users.sort((a, b) => b.balance - a.balance);
      button.classList.remove("arrow-up");
      button.classList.add("arrow-down");
    });
  }

  createTable(users, header);
});
