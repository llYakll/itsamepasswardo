var myDoc = document,
    characterlength = 8,
    lowerCharacterArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x', 'y', 'z'],
    upperCharacterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z'],
    specialCharacterArray = ['!','#','$', '%', '@','&'],
    numArray = ['1','2','3','4','5','6','7','8','9','0'],
    generateBtn = document.querySelector("#generate"),
    choiceArray = [];

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var truePrompts = getPrompts(), //returns true or false
      passwordText = document.querySelector("#password"); //writes password to the document

  if(truePrompts) {
    var newPassword = generatePassword();
        passwordText.value = newPassword;

  } else {
    passwordText.value = "";
  }
}


//  Generate Password

function generatePassword(){
  console.log("Ahaha you clicka' 'da button!"); // logs that the button was pressed
  var password = "";
  for (var index = 0; index < characterlength; index++) {
       var randomLetter = Math.floor(Math.random() * choiceArray.length);
       password = password + choiceArray[randomLetter];
  }
  return password;
}

//  Prompt user for password data

//      Character length: 8 - 128
//      Lower, Upper, Number, Special Characters

function getPrompts(){
  choiceArray = [];

  characterlength = parseInt(prompt("How many characters would you like your password to be?")); //converst string to integer

    if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) { //prompts user to specify password length
      alert("Character length must be between 8 - 128 characters.")
      return false;
    }
    if (confirm("would you like lowercase letters in your password?")) { //prompts user to specify if they want lower case letters
      choiceArray = choiceArray.concat(lowerCharacterArray);
    }
    if (confirm("would you like uppercase letters in your password?")) { //prompts user to specify if they want upper case letters
      choiceArray = choiceArray.concat(upperCharacterArray);
    }
    if (confirm("Would you like special characters in your password")) { //prompts user to specify if they want pecial characters
      choiceArray = choiceArray.concat(specialCharacterArray);
    }
    if (confirm("would you like numbers in your password?")) { //prompts user to specify if they want numbers
      choiceArray = choiceArray.concat(numArray);
    }

    return true;

}





