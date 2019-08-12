# JS-Text-Formatting
Basic Text Formatter for HTML Inputs.

The Formatter Currently allows you to used CSS Directly on your text to offer extra customization to a simple input string

# Syntax
$  - Tells the formatter that the following items inside of the '\[\]', will be CSS Style formatting. \
// - Will End the last formatting option set, going back to the previous $\[\] defined.

# Basic Layout
__Initital CSS:__\
A String can start with a $\[CSS\] Modifier, to give the whole string the CSS defined. \
For Example; This allows you to give Everything hat follows a solid black border.

__The Main String:__\
Next comes the Word parts of your String, this can include extra $\[CSS\] Modifiers to allow just afew words of your string to be underlined and in a different colour.

__Ending Current $\[CSS\] Modifiers:__\
You can use __'//'__ To end the currently inuse $\[CSS\] Modifier. \
Using Another $\[CSS\] Modifier will also end the current modifer and start a new one.

# Examples
Basic Colouring.
- $[color: green;]This Whole String Will Be Green!

Borders
- $\[border: 1px dashed black; color: red;\]Red Text Inside A Black Border?!
- $\[border: 1px solid black; color: blue;\]Blue Text, Black Border,$\[border: 1px dashed black;\]A Border In A Border???//Thats Impressive!
