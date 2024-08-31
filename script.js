let string = "";
let operators = ['+', '-', '/', '*', '%'];
let buttons = document.querySelectorAll('.button-custom');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            let temp = Number(string);
            temp = temp.toFixed(2);
            string = temp.toString();
            if (string == 'Infinity') { string = "Syntax Error"; }
            else if (string == '0.00') { string = 0; }
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "DE") {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        // prevents input of two simultaneous operators or .
        if ((e.target.classList.contains("operator")) &&
            operators.includes(string.charAt(string.length - 1)) &&
            operators.includes(string.charAt(string.length - 2))
        ) {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }

        if ((string.charAt(string.length - 1)) == '.' &&
            string.charAt(string.length - 2) == '.'
        ) {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }

        //prevents starting from /, *, %
        if (string.length == 1 && ((string.charAt(string.length - 1)) == '/' ||
            string.charAt(string.length - 1) == '*' ||
            string.charAt(string.length - 1) == '%')) {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
    })
})