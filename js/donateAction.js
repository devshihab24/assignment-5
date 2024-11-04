// first donation section
document
  .getElementById("first-donate-btn")
  .addEventListener("click", function () {
    const firstInputValue = getInputValueById("first-donate-input");
    const balance = getTextFieldValueBuId("balance");
    const firstDonateBalance = getTextFieldValueBuId("first-donate-balance");
    console.log(firstInputValue, balance);
    if (isNaN(firstInputValue)) {
      alert("Invalid input!");
      document.getElementById("first-donate-input").value = "";
      return;
    }
    if (firstInputValue > balance) {
      alert("Insufficient Balance!");
      document.getElementById("first-donate-input").value = "";
      return;
    }
    if (firstInputValue <= 0) {
      alert("Please donate us🥺!");
      document.getElementById("first-donate-input").value = "";
      return;
    }
    const firstDonateNewBalance = firstInputValue + firstDonateBalance;
    const newBalance = balance - firstInputValue;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("first-donate-balance").innerText =
      firstDonateNewBalance;
    alert("You have donated successfully for humankind😊");
    document.getElementById("first-donate-input").value = "";
    //history add section
    const date = dateTime();
    const detail = document.createElement("div");
    detail.innerHTML = `
    <div class="text-base sm:text-xl font-normal sm:font-medium border rounded p-3 my-2">
        <h2>${firstInputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2> 
        <p class="text-xs sm:text-sm font-thin sm:font-normal">${date}</p>  
    </div>
  `;
    document.getElementById("history-section").appendChild(detail);
    document.getElementById("no-history").classList.add("hidden");
  });
// second donation section
document
  .getElementById("second-donate-btn")
  .addEventListener("click", function () {
    const secondInputValue = getInputValueById("second-donate-input");
    const balance = getTextFieldValueBuId("balance");
    const secondDonateBalance = getTextFieldValueBuId("second-donate-balance");
    console.log(secondInputValue, balance);
    if (isNaN(secondInputValue)) {
      alert("Invalid input!");
      document.getElementById("second-donate-input").value = "";
      return;
    }
    if (secondInputValue > balance) {
      alert("Insufficient Balance!");
      document.getElementById("second-donate-input").value = "";
      return;
    }
    if (secondInputValue <= 0) {
      alert("Please donate us🥺!");
      document.getElementById("first-donate-input").value = "";
      return;
    }
    const secondDonateNewBalance = secondInputValue + secondDonateBalance;
    const newBalance = balance - secondInputValue;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("second-donate-balance").innerText =
      secondDonateNewBalance;
    alert("You have donated successfully for humankind😊");
    document.getElementById("second-donate-input").value = "";
    //history add section
    const date = dateTime();
    const detail = document.createElement("div");
    detail.innerHTML = `
    <div class="text-base sm:text-xl font-normal sm:font-medium border rounded p-3 my-2">
        <h2>${secondInputValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h2> 
        <p class="text-xs sm:text-sm font-thin sm:font-normal">${date}</p>  
    </div>
`;
    document.getElementById("history-section").appendChild(detail);
    document.getElementById("no-history").classList.add("hidden");
  });
// third donation section
document
  .getElementById("third-donate-btn")
  .addEventListener("click", function () {
    const thirdInputValue = getInputValueById("third-donate-input");
    const balance = getTextFieldValueBuId("balance");
    const thirdDonateBalance = getTextFieldValueBuId("third-donate-balance");
    console.log(thirdInputValue, balance);
    if (isNaN(thirdInputValue)) {
      alert("Invalid input!");
      document.getElementById("third-donate-input").value = "";
      return;
    }
    if (thirdInputValue > balance) {
      alert("Insufficient Balance!");
      document.getElementById("third-donate-input").value = "";
      return;
    }
    if (thirdInputValue <= 0) {
      alert("Please donate us🥺!");
      document.getElementById("first-donate-input").value = "";
      return;
    }
    const thirdDonateNewBalance = thirdInputValue + thirdDonateBalance;
    const newBalance = balance - thirdInputValue;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("third-donate-balance").innerText =
      thirdDonateNewBalance;
    alert("You have donated successfully for humankind😊");
    document.getElementById("third-donate-input").value = "";
    //history add section
    const date = dateTime();
    const detail = document.createElement("div");
    detail.innerHTML = `
          <div class="text-base sm:text-xl font-normal sm:font-medium border rounded p-3 my-2">
              <h2>${thirdInputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2> 
              <p class="text-xs sm:text-sm font-thin sm:font-normal">${date}</p>  
          </div>
        `;
    document.getElementById("history-section").appendChild(detail);
    document.getElementById("no-history").classList.add("hidden");
  });
