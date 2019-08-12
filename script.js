function outputtext(input) {
	/*
		Exaple Strings:
		#$[color: red;]Hello, World!
		Two Lines // For One
	*/
	console.log("input:  " + input);
	 let i = 0;
	 let output = "";
	 let char = input[i];

	 let escaped = false;

	 let showError = false;
	 let error = "";
	 let errors = {
	 	syntax: {
	 		missing_array_pair: "<p>$ Found without Pairing '[]';</p><p>Consider Removing '$', or add pairing '[]';</p>"
	 	}
	 };

	 this.getStyling = function() {
		falseReturn = [false, null];

		if (char == "$") {
			i++; char = input[i];
			if (char == "[") {
				var styleString = "";
				while(true) {
					i++; char = input[i];
					if (char == "]") {
						return [true, "<div style='"+styleString+"'>"];
					} else {
						styleString += char;
					}
				}
			} else {
				return falseReturn;
			}
		 } else {
			return falseReturn;
		 }
	 }

	 // Initial Styling?
	 if (char == "$") {
		i++; char = input[i];
		if (char == "[") {
			var styleString = "";
			while(true) {
				i++; char = input[i];
				if (char == "]") {
					output = "<div style='display: flex;"+styleString+"'><div>";
					i++;
					break;
				} else {
					styleString += char;
				}
			}
		} else {
			error = errors.syntax.missing_array_pair;
			showError = true;
		}
	 } else {
		output = "<div style='display: flex;'><div>";
	 }

	 while (i < input.length && showError != true) {
		char = input[i];
		// console.log(char);
		if (escaped != true) {
			switch(char) {
				case "$":
					var style = this.getStyling();
					if (style[0] == true) {
						output += "</div>&nbsp;" + style[1];
					} else {
						error = errors.syntax.missing_array_pair;
						showError = true;
					}
					break;
				case "/":
					i++; char = input[i];
					if (char == "/") {
						output += "</div>&nbsp;";
						i++; char = input[i];
						if (char == "$") {
							var style = this.getStyling();
							if (style[0] == true) {
								output += style[1];
							} else {
								output += "<div>";
							}
						} else {
							output += char;
						}
					}
				break;
				case "\\":
					escaped = true;
				break;
				default:
					output += char;
				break;
			}
		} else {
			output += char;
			escaped = false;
		}
		// Increment
		i++;
	 }


	// Apply Output
	if (showError != true) {
		output += "</div></div>";
		console.log("output: " + output);
		document.getElementById("div_output").innerHTML = output;
	} else {
		console.log(error);
		document.getElementById("div_output").innerHTML = error;
	}
}