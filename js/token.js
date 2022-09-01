/* This creates all the TOKEN input fields dynamically. Change the token_length variable  to change the TOKEN Length */
const $token_length = 8;

const element = document.getElementById('tokenInput');
for (let i = 0; i < $token_length; i++) {
    let inputField = document.createElement('input'); // Creates a new input element
    inputField.className = "w-12 h-12 bg-gray-100 border-gray-100 outline-none focus:bg-gray-200 m-2 text-center rounded focus:border-blue-400 focus:shadow-outline";
    // Do individual TOKEN input styling here;
    inputField.style.cssText = "color: transparent; text-shadow: 0 0 0 gray;"; // Input field text styling. This css hides the text caret
    inputField.id = 'token-field' + i; // Don't remove
    inputField.maxLength = 1; // Sets individual field length to 1 char
    element.appendChild(inputField); // Adds the input field to the parent div (tokenInput)
}

/*  This is for switching back and forth the input box for user experience */
const inputs = document.querySelectorAll('#tokenInput > *[id]');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function (event) {
        if (event.key === "Backspace") {

            if (inputs[i].value == '') {
                if (i != 0) {
                    inputs[i - 1].focus();
                }
            } else {
                inputs[i].value = '';
            }

        } else if (event.key === "ArrowLeft" && i !== 0) {
            inputs[i - 1].focus();
        } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
            inputs[i + 1].focus();
        } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
            inputs[i].setAttribute("type", "text");
            inputs[i].value = ''; // Bug Fix: allow user to change a random TOKEN digit after pressing it
            setTimeout(function () {
                inputs[i].setAttribute("type", "password");
            }, 1000); // Hides the text after 1 sec
        }
    });
    inputs[i].addEventListener('input', function () {
        inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
        if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
        } else if (inputs[i].value !== '') {
            inputs[i + 1].focus();
        }
    });

}
/*  This is to get the value on pressing the submit button
  *   In this example, I used a hidden input box to store the TOKEN after compiling data from each input fields
  *   This hidden input will have a name attribute and all other single character fields won't have a name attribute
  *   This is to ensure that only this hidden input field will be submitted when you submit the form */

document.getElementById('tokenSubmit').addEventListener("click", function () {
    const inputs = document.querySelectorAll('#tokenInput > *[id]');
    let compiledToken = '';
    for (let i = 0; i < inputs.length; i++) {
        compiledToken += inputs[i].value;
    }
    document.getElementById('token').value = compiledToken;
    return true;
});