let nameInput = document.getElementById("nameInput"); let ageInput = document.getElementById("ageInput"); let createBtn = document.getElementById("createBtn"); let result = document.getElementById("result"); 

createBtn.addEventListener("click", function () {

let name = nameInput.value; 
let age = Number(ageInput.value);
if (name === "" || ageInput.value === "") {
     result.textContent = "Введите имя и возраст!"; return;
} 

let person = { 
name: name, 
age: age, 
category: ""
};

if (person.age < 12) { 
person.category = "Ребёнок";

 } 
 else if (person.age >= 12 && person.age <= 17) { person.category = "Подросток";
  
 } else { 
    person.category = "Взрослый";
   }
 result.textContent = "Имя: " + person.name + " | Возраст: " + person.age + " | Категория: " + person.category; 
}

);