let storeProteinProduct = []
const dialog = document.querySelector("dialog");

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

let editState;

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
// stores user values into variables
function getUserValues(){
    pn = storeProteinName.value;
    pa = storeProteinAmount.value;
    pc = storeProteinCalories.value;
    pca = storeProteinCarbs.value;
    pf = storeProteinFats.value;
    pt = storeProteinTry.value;
    pi = storeProteinImg.value;
}
// stores user values into an array
function AddProtein(name,proteinAmount,calories, carbs, fats, brandImg,tryAgain){
this.name = name;
this.proteinAmount = proteinAmount;
this.calories = calories;
this.carbs = carbs;
this.fats = fats;
this.brandImg = brandImg;
this.tryAgain = tryAgain;
}
// adds HTML of values, this does ONLY the visual aspect.
function addProteinHTML() {
  displayPP.innerText = "";
  for (let i = 0; i < storeProteinProduct.length; i++) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("protein__productCard");
    // Holds the values to show onto the template literal
    let name = storeProteinProduct[i].name;
    let proteinAmount = storeProteinProduct[i].proteinAmount;
    let calories = storeProteinProduct[i].calories;
    let brandImg = storeProteinProduct[i].brandImg;
    let tryAgain = storeProteinProduct[i].tryAgain;
    let carbs = storeProteinProduct[i].carbs
    let fats = storeProteinProduct[i].fats
    let p = document.createElement("p");
    let edit = document.createElement("i");
    console.log(calories);
    // adds the font awesome icon with classList
    edit.classList.add(...addEditIcon);
    p.textContent = `The protein ${name}, has ${proteinAmount} grams of protein with ${calories} calories, ${carbs} carbs, and ${fats} grams of total fats. You said ${tryAgain} to trying it again.`;
    // gives the default img if no image is provided
    createDiv.style.backgroundImage = `url(${brandImg})`;
    createDiv.setAttribute("data-attribute",i)
    createDiv.append(p);
    createDiv.append(edit);
    displayPP.append(createDiv);
  }
}

let submitProtein = document.querySelector(".submitProtein");
editState = false;

// submit has two options, if edit state is true, values are found and replaced with new values, if edit state is false, values are added on as a new product.
submitProtein.addEventListener("click",(e)=>{
  if(editState == true){
    if(pn == "" || pn == undefined ){
      pn = "Unnamed Protein"
    } if(pi == "" || pi == undefined ){
      pi = "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/ProteinPowder.jpg"
    }
    sliceOutAndInsertEdit(getParentIndex);    
  }
  else if (editState == false){
    getUserValues();
    if(pi == "" || pi == undefined ){
      pi = "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/ProteinPowder.jpg"
    }
    if(pn == "" || pn == undefined ){
      pn = "Unnamed Protein"
    }
    storeProteinProduct.push(new AddProtein(pn,pa,pc,pca,pf,pi,pt));
  }
  // prevents the values from being sent as a form.
  editState = false;
  e.preventDefault();
  dialog.close();
  addProteinHTML();
  findAllEditBtns();
  console.log(storeProteinProduct);
  // resets form values back to 0
  form.reset();
})

// if a new product is added, all edit btns need to be found again
function findAllEditBtns(){
  editBtns = document.querySelectorAll(".fa-pen-to-square");
  retriveAllEditValues(editBtns);
}
let getParentIndex;

// edit btn will retrieve the index values
function retriveAllEditValues(editBtns){
  editBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
      dialog.showModal();
      //gets the i position of the clicked edit card.
      getParentIndex = btn.parentElement.getAttribute("data-attribute");
      // will show 
      pullFormDataToEdit(getParentIndex);
      // now true, a new product in theory should not be made.
      editState = true;
    })
  })
}
function pullFormDataToEdit(i){
  storeProteinName.value = storeProteinProduct[i].name;
  storeProteinAmount.value = storeProteinProduct[i].proteinAmount;
  storeProteinCalories.value = storeProteinProduct[i].calories
  storeProteinCarbs.value = storeProteinProduct[i].carbs
  storeProteinFats.value = storeProteinProduct[i].fats
  storeProteinTry.value = storeProteinProduct[i].tryAgain
  storeProteinImg.value = storeProteinProduct[i].brandImg;
}

function sliceOutAndInsertEdit(getParentIndex){
    getUserValues();
    storeProteinProduct[getParentIndex].name = pn;
    storeProteinProduct[getParentIndex].proteinAmount = pa;
    storeProteinProduct[getParentIndex].calories = pc;
    storeProteinProduct[getParentIndex].carbs = pca;
    storeProteinProduct[getParentIndex].fats = pf;
    storeProteinProduct[getParentIndex].tryAgain = pt;
    storeProteinProduct[getParentIndex].brandImg = pi;
    dialog.close();
    return;
}

