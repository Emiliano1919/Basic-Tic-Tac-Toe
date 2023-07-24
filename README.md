# Basic-Tic-Tac-Toe
A tictactoe game implemented with java script and html/css. 

Notes:

To scale the svg the property viewbox is used the first two numbers
represent the starting point of the svg and the next two numbers 
represent width and height, set the last two numbers to the size of the svg.
Give the svg a size in css.

Borders can have many styles not only solid. 
According to W3 school 

   "dotted - Defines a dotted border
    dashed - Defines a dashed border
    solid - Defines a solid border
    double - Defines a double border
    groove - Defines a 3D grooved border. The effect depends on the border-color value
    ridge - Defines a 3D ridged border. The effect depends on the border-color value
    inset - Defines a 3D inset border. The effect depends on the border-color value
    outset - Defines a 3D outset border. The effect depends on the border-color value
    none - Defines no border
    hidden - Defines a hidden border"

    Taken from: https://www.w3schools.com/css/css_border.asp


To set the entire space of the github logo and my username I wrapped the container, 
for the logo and username, with an anchor tag.

We can add blur to the box-shadow: https://css-tricks.com/almanac/properties/b/box-shadow/
It is quite interesting how you can make some 3d effects using only css box shadow.
If the blur shadow does not work, add postion: relative; to the element.

When an image is inserted using the content attribute, you cannot edit the size of it.
But you can edit its size and position with background-size and background-position.

Stroke, fill and color are completely different attributes in svgs.

It is important to note when is it best to use flex or grid. For the gameboard it was
way easier to implement responsiveness with flexbox.

Dynamic view height will make the biggest container cover all available space in both
a computer and a mobile device.

To make the gameboard symmetrical it was easier to use dvw instead of a combination of
dvw and dvh, since screens normally have different vw and vh.

Features to add:
-Score display
-Only one person can win
-Once someone wins the game cannot continue
-Artificial Intelligence