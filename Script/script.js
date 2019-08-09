function outputtext(input) {
	console.log("input:  " + input);

	// End Unclosed Tags
	this.close_all_tags = function() {
		if (state.large){ output += "</h1>"; }
		if (state.ital) { output += "</h1>"; }
		if (state.bold) { output += "</h1>"; }
	}

	// Styling Check (Allows Colours, Borders etc)
	this.checkforstyling = function() {
		var false_return = [false, null];
		console.log("CHAR: " + char);
		if (char == '$') {
			i++; char = input[i];
			if (char == '[') {
				i++; char = input[i];
				var style_string = "";
				while (char != ']') { console.log(char);
					style_string += char;

					// Update char
					i++; char = input[i];
				}
				if (style_string) {
					return [true, style_string];
				} else {
					return false_return;
				}
			} else { return false_return; }
		} else { return false_return; }
	}

	let state_default = {
		large: false,
		ital: false,
		bold: false,
		escaped: false
	}
	let state = state_default;
	let output = "";

	let i = 0;
	let char = "";
	char = input[i];

	var styleStart = this.checkforstyling();
	if (styleStart[0]) {
		output = "<div style='"+styleStart[1]+"'>";
		i++;
	} else {
		output = "<div>";
	}
	while (i < input.length) {
		char = input[i];
		if (!state.escaped) {
			// Formatting
			if (char == '#') { switch(state.large) { // Large && Bold // <h1>
				case false:
					i++; char = input[i];
					var style = this.checkforstyling();
					console.log(style);
					if (style[0]) {
						output += "<h1 style='text-transform: uppercase;"+style[1]+"'>";
					} else {
						output += "<h1 style='text-transform: uppercase;'>";
						output += char;
					}
					state.large = true;
					break;
				case true:
					output += "</h1>";
					state.large = false;
					break;
				default:
					output += char;
					break;
			} }
			else if (char == '\\') { // Escape Char
				state.escaped = true;
			}

			// Reset Formatting
			else if (char + input[i+1] == '  ' || char + input[i+1] == '//') {
				let state = state_default;
				close_all_tags();
				i++;
			} else if (char == "\n") {
				let state = state_default;
				close_all_tags();
			}

			// Default
			else { output += char; }
		} else {
			output += char;
			state.escaped = false;
		}

		// Increment i
		i++;
	}

	// Apply Output
	output += "</div>";
	console.log("output: " + output)
	document.getElementById("div_output").innerHTML = output;
}