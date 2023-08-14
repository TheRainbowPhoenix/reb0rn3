var classCounter = 0;

var mappedClasses = {};

function getAlphanumericCounter(count) {
  var result = "";
  var digits = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var base = digits.length; // 26 letters in the alphabet

  while (count > 0) {
    var remainder = count % base;
    result = digits.charAt(remainder) + result;
    count = Math.floor(count / base);
  }

  return result || "a";
}

function packNodeStyle(targetElement) {
  var stylesheets = document.styleSheets;
  var mergedStyles = {};

  combinedClass = "a";

  for (var i = 0; i < stylesheets.length; i++) {
    var rules = stylesheets[i].cssRules || stylesheets[i].rules;

    if (rules) {
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (targetElement.matches(rule.selectorText)) {
          var style = rule.style;

          for (var k = 0; k < style.length; k++) {
            var property = style[k];
            var value = style.getPropertyValue(property);
            mergedStyles[property] = mergedStyles[property] || {};
            mergedStyles[property][combinedClass] = value;
          }
        }
      }
    }
  }

  var stylesheets = document.styleSheets;
  var mergedStyles = {};

  for (var i = 0; i < stylesheets.length; i++) {
    var rules = stylesheets[i].cssRules || stylesheets[i].rules;

    if (rules) {
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (targetElement.matches(rule.selectorText)) {
          var style = rule.style;

          for (var k = 0; k < style.length; k++) {
            var property = style[k];
            var value = style.getPropertyValue(property);
            mergedStyles[property] = mergedStyles[property] || {};
            mergedStyles[property][combinedClass] = value;
          }
        }
      }
    }
  }

  var mergedStyleString = "";
  for (var property in mergedStyles) {
    var styleObject = mergedStyles[property];
    var styleString = "";
    for (var className in styleObject) {
      if ((property || "").startsWith("--")) {
        continue;
      }
      if ((styleObject[className] || "").includes("var(")) {
        styleString +=
          (property + ": " + getComputedStyle(targetElement)[property] || 0) +
          ";\n";
      } else {
        styleString += (property + ": " + styleObject[className] || 0) + ";\n";
      }
      // styleString +=
      //   className + " { " + property + ": " + styleObject[className] + "; } ";
    }
    mergedStyleString += styleString;
  }

  return mergedStyleString;
}

var outStyle = "";

function traverseAndProcess(node) {
  var classList = node.classList?.value || "";
  if (classList !== "" && mappedClasses[classList]) {
    node.classList = [mappedClasses[classList]];
  } else {
    var style = packNodeStyle(node);
    var className = getAlphanumericCounter(classCounter);

    outStyle += `.${className} {\n\t${style}\n}\n`;
    node.classList = [className];

    mappedClasses[classList] = className;

    classCounter++;
  }

  // LOOP

  for (var i = 0; i < node.children.length; i++) {
    var outS = traverseAndProcess(node.children[i]);
  }

  // END-LOOP
  return outStyle;
}

const root = document.querySelector("#app");
traverseAndProcess(root);

console.log(`${root?.outerHTML}\n<style>${outStyle}</style>`);
