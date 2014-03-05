/* 
**********************************************************
               SIMPLE JAVA SCRIPT FOR			         
				TOGGLE PARAGRAPH TEXT										 *
********************************************************** 
*/


$(document).ready(function(){/* Once The page Loads */
  $("button").click(function(){/* This function kicks in to make a button and waits for a click function */
    $("p").toggle();/* once it receives a click function this script runs and toggles every paragraph text to hide */
  });/* we move down the Java script tree */
});/* and end here (rinse,and repeat) once you click the button again we move back down the script but this time showing the text hence toggle */


/* Every time you click the button you call the function toggle and because we gave it a "p" element, 
it means that everything in <p> brackets will get hidden,
once its finished the script stops at the bottom then the old rinse repeat function, 
once you click the button again it then goes back down the script this time it toggles the text 
to be opposite of what it was if its hidden then it shows if its shown it hides.
*/