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
			output = "<div style='display: flex;'><div>";
			i++;
		}
	 } else {
		output = "<div style='display: flex;'><div>";
	 }

	 while (i < input.length) {
		char = input[i];
		// console.log(char);

		switch(char) {
			case "$":
				var style = this.getStyling();
				if (style[0] == true) {
					output += style[1];
				}
				break;
			case "/":
				i++; char = input[i];
				if (char == "/") {
					output += "&nbsp</div>";
					i++; char = input[i];
					if (char == "$") {
						var style = this.getStyling();
						if (style[0] == true) {
							output += style[1];
						} else {
							output += "<div>";
						}
					} else {
						output += "<div>" + char;
					}
				}
			break;
			default:
				output += char;
			break;
		}

		// Increment
		i++;
	 }


	// Apply Output
	output += "</div></div>";
	console.log("output: " + output)
	document.getElementById("div_output").innerHTML = output;
}