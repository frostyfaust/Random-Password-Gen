// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var symbols = "!\"#$({|})%&'*+<=>,-./:;?@[]^_`~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Password criteria
  var passLength = prompt(
    "how many characters would you like your password to be? minimum - 8  maximum - 128"
  );
  var includeLower = confirm(
    "Would you like your password to include lowercase letters?"
  );
  var includeUpper = confirm(
    "Would you like your password to include uppercase letters?"
  );
  var includeNum = confirm("Would you like your password to include numbers?");
  var includeSymbols = confirm(
    "Would you like your password to include symbols?"
  );

  //confirms that atleast one password criteria was met
  if (!includeSymbols && !includeNum && !includeUpper && !includeLower) {
    alert("You must select at least one password criteria.");
    includeLower = confirm(
      "Would you like your password to include lowercase letters?"
    );
    includeUpper = confirm(
      "Would you like your password to include uppercase letters?"
    );
    includeNum = confirm("Would you like your password to include numbers?");
    includeSymbols = confirm(
      "Would you like your password to include symbols?"
    );
  }
  //Ensures password has appropriate length
  else if (passLength < 8 || passLength > 128 || passLength == null) {
    alert("The length of your password must be between 8 to 128 characters.");
    passLength = prompt(
      "how many characters would you like your password to be? minimum - 8  maximum - 128"
    );
  }

  function generatePassword() {
    var randomChars = "";

    // checks crtieria and adds random characters to new password
    while (randomChars.length < passLength) {
      if (includeLower === true && randomChars.length < passLength) {
        randomChars += lower.charAt(Math.floor(Math.random() * lower.length));
      }

      if (includeUpper === true && randomChars.length < passLength) {
        randomChars += upper.charAt(Math.floor(Math.random() * upper.length));
      }

      if (includeNum === true && randomChars.length < passLength) {
        randomChars += nums.charAt(Math.floor(Math.random() * nums.length));
      }

      if (includeSymbols === true && randomChars.length < passLength) {
        randomChars += symbols.charAt(
          Math.floor(Math.random() * symbols.length)
        );
      }
    }
    console.log(randomChars);
    return randomChars;
  }

  var password = generatePassword();
  document.getElementById("password").value = password;
  console.log(password + " final password check");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Copys the password to clipboard
function copyPassword(){
  var copiedPassword = document.getElementById("password");
  copiedPassword.select();
  copiedPassword.setSelectionRange (0, 99999);
  navigator.clipboard.writeText(copiedPassword.value);
  alert("You copied your new randomly generated password!");
}