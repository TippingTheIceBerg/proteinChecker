let storeProteinProduct = []
const dialog = document.querySelector("dialog");


let form = document.querySelector(".form__container");

let storeProteinName = document.querySelector(".proteinName");
let storeProteinAmount = document.querySelector(".proteinAmount");
let storeProteinCalories = document.querySelector(".proteinCalories");
let storeProteinCarbs = document.querySelector(".proteinCarbs");
let storeProteinFats = document.querySelector(".proteinFats");
let storeProteinTry = document.querySelector(".proteinTryAgain");
let storeProteinImg = document.querySelector(".proteinImg");

let addEditIcon = ['fa-solid','fa-pen-to-square'];



let pn;
let pa;
let pc;
let pca;
let pf;
let pt;
let pi;
function getUserValues(){
    pn = storeProteinName.value;
    pa = storeProteinAmount.value;
    pc = storeProteinCalories.value;
    pca = storeProteinCarbs.value;
    pf = storeProteinFats.value;
    pt = storeProteinTry.value;
    pi = storeProteinImg.value;

}

function AddProtein(proteinName,proteinAmount,calories, carbs, fats, brandImg,tryAgain){
this.proteinName = proteinName;
this.proteinAmount = proteinAmount;
this.calories = calories;
this.carbs = carbs;
this.fats = fats;
this.brandImg = brandImg;
this.tryAgain = tryAgain;
}
function addProteinHTML() {
  displayPP.innerText = "";
  for (let i = 0; i < storeProteinProduct.length; i++) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("protein__productCard");
    let proteinName = storeProteinProduct[i].name;
    let proteinAmount = storeProteinProduct[i].proteinAmount;
    let calories = storeProteinProduct[i].calories;
    let brandImg = storeProteinProduct[i].brandImg;
    let tryAgain = storeProteinProduct[i].tryAgain;
    let p = document.createElement("p");
    let edit = document.createElement("i");
    edit.classList.add(...addEditIcon);
    p.textContent = `The protein ${proteinName}, has ${proteinAmount} grams of protein with ${calories} calories per serving. You said ${tryAgain} to trying it again.`;
    createDiv.style.backgroundImage = `url(${brandImg})`;
    createDiv.setAttribute("data-attribute",i)
    createDiv.append(p);
    createDiv.append(edit);
    displayPP.append(createDiv);
    editBtn = document.querySelectorAll(".fa-pen-to-square");
    findAllEditBtns();

  }

}

let submitProtein = document.querySelector(".submitProtein");



submitProtein.addEventListener("click",(e)=>{
  e.preventDefault();
  getUserValues();
  if(pi == ""){
    pi = "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/ProteinPowder.jpg"
  }
storeProteinProduct.push(new AddProtein(pn,pa,pc,pca,pf,pi,pt));
dialog.close();
addProteinHTML();
form.reset();
})


// biggest thing for protien is the far, protein amount, and carbs
// protein to build/spare muscle
// Carbs to provide mental and physical energy
// Fats to keep hormonal and health metrics up.
// some tips, usually more protein per calorie is good, IE 160 calories with 7 grams of protein vs another one tht is 180 calories but 20 grams of protein
// if more fat than protein, then it's a candy bar
let displayPP = document.querySelector(".allProteinProducts");
const showButton = document.querySelector(".openDialog");
const closeButton = document.querySelector(".closeDialog");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();

});

// removes items from list.
function findAllEditBtns(){
  editBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
      console.log(btn.parentElement.getAttribute("data-attribute"));
    })
  })
  
}




