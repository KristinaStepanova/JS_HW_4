//task 1
function isParent(parent, child) {
    return parent.contains(child);
}

console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//task 2
const allRef = document.querySelectorAll('a');
const resRef = [];
allRef.forEach(item => {
    if(!item.closest('li')) {
        resRef.push(item);
    }
})

console.log(resRef);

//task 3
const prevEl = document.querySelector('ul').previousElementSibling;
const nextEl = document.querySelector('ul').nextElementSibling;

console.log(prevEl);
console.log(nextEl);