let displayPP = document.querySelector(".allProteinProducts");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".openDialog");
const closeButton = document.querySelector(".closeDialog");


// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

let storeProteinProduct = [
  {
    name: "MRE",
    proteinAmount: 24,
    calories: 130,
    brandImg: "https://www.kroger.com/product/images/large/front/0085000475908",
    tryAgain: "yes",
    isItAProteinBar: "no",
  },
  {
    name: "hawaii",
    proteinAmount: 12,
    calories: 110,
    brandImg: "https://target.scene7.com/is/image/Target/GUEST_3ab98afc-4e8e-4e5a-bcfe-e65cf51fb197?wid=488&hei=488&fmt=pjpeg",
    tryAgain: "no",
    isItAProteinBar: "no",
  },
   {name: "hawaii",
    proteinAmount: 12,
    calories: 110,
    brandImg: "https://target.scene7.com/is/image/Target/GUEST_3ab98afc-4e8e-4e5a-bcfe-e65cf51fb197?wid=488&hei=488&fmt=pjpeg",
    tryAgain: "no",
    isItAProteinBar: "yes",
  },
];

// biggest thing for protien is the far, protein amount, and carbs
// protein to build/spare muscle
// Carbs to provide mental and physical energy
// Fats to keep hormonal and health metrics up.
// some tips, usually more protein per calorie is good, IE 160 calories with 7 grams of protein vs another one tht is 180 calories but 20 grams of protein
// if more fat than protein, then it's a candy bar
for(let i = 0; i < storeProteinProduct.length; i++){
  let createDiv = document.createElement("div");
  createDiv.classList.add("protein__productCard");
  let proteinName = storeProteinProduct[i].name;
  let proteinAmount = storeProteinProduct[i].proteinAmount;
  let calories = storeProteinProduct[i].calories;
  let brandImg = storeProteinProduct[i].brandImg;
  let tryAgain = storeProteinProduct[i].tryAgain;
  let p = document.createElement("p");
  p.textContent = `The protein ${proteinName}, has ${proteinAmount} grams of protein with ${calories} calories per serving. You said ${tryAgain} to trying it again.`;
  createDiv.style.backgroundImage = `url(${brandImg})`;
  createDiv.append(p);
  displayPP.append(createDiv);
}