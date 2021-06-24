function compute() {
  // Get Principal V
  const principalValue = document.getElementById("principal").value;
  // Make sure the principal value 0, a negative number or empty 
  if (principalValue <= 0) {
    alert("Enter a positive number.")
    document.getElementById("principal").focus();
  } else {
    // Get the values from the users input and display them.
    const numberOfYears = parseInt(document.getElementById("years").value);
    const rate = document.getElementById("rate").value;
    const interest = principalValue * numberOfYears * parseInt(rate) / 100;
    const returnDate = parseInt(new Date().getFullYear() + years);
    document.getElementById("result").innerHTML = `If you deposit ${principalValue} at an interest rate of ${rate}%.You will recieve an amount of ${interest}, in the year ${returnDate}`;
  }
}



function updateRate() {
  var rateValue = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateValue}%`;
}

