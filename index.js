var includeDot = false;
$(document).ready(function () {
  $(".num").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");

    if (display.val() === "Error") {
      display.val(value);
      display2.val(value);
    } else if (display.val() == 0 && display.val().length <= 1) {
      display.val(value);
      display2.val(value);
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + value);
    }
  });
  $(".clear").click(function () {
    $("#display").val("");
    $("#display2").val("");
    includeDot = false;
  });
  $(".equals").click(function () {
    var expression = $("#display").val();
    expression = expression.toString();
    var result = calculate(expression);
    $("#display").val(result);
    $("#display2").val(result);
  });
  // Operator click handler
  // Operator click handler
  $(".operator").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    var lastChar = display.val().slice(-1);
    if (!display.val()) {
      return;
    }
    // Check if the last character is an operator
    var isOperator =
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === ".";

    if (isOperator) {
      // Replace the existing operator
      display.val(display.val().slice(0, -1) + value);
      if (value == "*") {
        value = "x";
      }
      if (value == "/") {
        value = "÷";
      }
      display2.val(display2.val().slice(0, -1) + value);
      includeDot = false;
    } else {
      // Add operator
      display.val(display.val() + value);
      if (value == "*") {
        value = "x";
      }
      if (value == "/") {
        value = "÷";
      }
      includeDot = false;

      display2.val(display2.val() + value);
    }
  });

  $(".multiply").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    if (!display.val()) {
      return;
    }
    if (display.val() == 0) {
      display.val(value);
      display2.val("x");
    }
    if (display.val().slice(-1) == value) {
      return;
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + "x");
    }
  });
  $(".plus").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    if(!display.val()){
      return
    }
    if (display.val() == 0) {
      display.val(value);
      display2.val(value);
    }
    if (display.val().slice(-1) == value) {
      return;
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + value);
    }
  });
  $(".minus").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");

    if (display.val() == 0) {
      display.val(value);
      display2.val(value);
    }
    if (display.val().slice(-1) == value) {
      return;
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + value);
    }
  });
  $(".division").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    if (!display.val()) {
      return;
    }

    if (display.val() == 0) {
      display.val(value);
      display2.val("÷");
    }
    if (display.val().slice(-1) == value) {
      return;
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + "÷");
    }
  });

  $(".percent").click(function () {
    var expression = $("#display").val();
    expression = expression.toString();
    var display = $("#display").val();
    if (!display) {
      return;
    }
    var result = calculate(expression);
    $("#display").val(result / 100);
    $("#display2").val(result / 100);
  });
  $(".x2").click(function () {
    var expression = $("#display").val();
    expression = expression.toString();
    var display = $("#display").val();
    if (!display) {
      return;
    }
    var result = calculate(expression);
    $("#display").val(result * result);
    $("#display2").val(result * result);
  });

  $(".dot").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    var lastChar = display.val().slice(-1);

    // Check if the last character is an operator
    var isOperator =
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" ||
      lastChar === ".";

    if (!display.val()) {
      display.val("0.");
      display2.val("0.");
    }
    if (display.val().slice(-1) === value) {
      return;
    } else if (includeDot) {
      return;
    } else {
      if (isOperator) {
        if (value == ".") {
          display.val(display.val() + "0.");
          display2.val(display2.val() + "0.");
        } else {
          display.val(display.val().slice(0, -1) + value);
          display2.val(display2.val().slice(0, -1) + value);
        }
      } else {
        display.val(display.val() + value);
        includeDot = true;
        display2.val(display2.val() + value);
      }
    }
  });
  $(".zero").click(function () {
    var value = $(this).val();
    var display = $("#display");
    var display2 = $("#display2");
    if (
      display.val().slice(-1) === value &&
      display
        .val()
        .slice(display.val().length - 2, display.val().length - 1) === "."
    );

    if (display.val().slice(-1) === value && display.val().length <= 1) {
      return;
    } else {
      display.val(display.val() + value);
      display2.val(display2.val() + value);
    }
  });
});
// function calculate(expression) {
//   // Function to tokenize the expression
//   function tokenize(expression) {
//       // Regular expression to match numbers and operators (+, -, *, /)

//       var regex = /\d+(\.\d+)?|[\+\-\*\/]/g;
//       return expression.match(regex) || [];
//   }

//   var tokens = tokenize(expression); // Tokenize the expression

//   // Function to evaluate the expression
//   function evaluate(tokens) {
//       var values = [];
//       var operators = [];

//       function applyOperator() {
//           var b = values.pop();
//           var a = values.pop();
//           var operator = operators.pop();
//           switch (operator) {
//               case '+': values.push(a + b); break;
//               case '-': values.push(a - b); break;
//               case '*': values.push(a * b); break;
//               case '/': values.push(a / b); break;
//           }
//       }

//       tokens.forEach(function(token) {
//           if (!isNaN(token)) { // Number
//               values.push(parseFloat(token));
//           } else { // Operator
//               while (operators.length > 0) {
//                   var topOperator = operators[operators.length - 1];
//                   // Evaluate operators with higher precedence
//                   if ((topOperator === '+' ||  topOperator === '-') &&
//                       (token === '  *' || token === '/')) {
//                       break;
//                   } else {
//                       applyOperator();
//                   }
//               }
//               operators.push(token);
//           }
//       });

//       while (operators.length > 0) {
//           applyOperator();
//       }

//       return values.pop();
//   }

//   return evaluate(tokens);
// }
function calculate(expression) {
  try {
    // Using JavaScript's eval() function to evaluate the expression
    var result = eval(expression);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid expression");
    }
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    return "Error";
  }
}
