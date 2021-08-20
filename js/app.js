function getPin() {
  const pin = Math.round(Math.random() * 10000);
  // Making it string to find length
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("didnt match");
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  console.log(pin);
  // displaying pin
  document.getElementById("display-pin").value = pin;
}
//calculator
document.getElementById("key-pad").addEventListener("click", function (event) {
  const calcInput = document.getElementById("typed-number");
  const number = event.target.innerText; /*get clicked value*/
  // check if input is number
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value =''; /*clear*/
    }
  } else {
    // show on calculator
    const prevNumber = calcInput.value;
    const newNumber = prevNumber + number;
    calcInput.value = newNumber;
  }
});

// match pin

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-number").value;
  const successMsg = document.getElementById("notify-success");
  const errorMsg = document.getElementById("notify-fail");
  if (pin == typedNumbers) {
    successMsg.style.display = "block";
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  }
}
