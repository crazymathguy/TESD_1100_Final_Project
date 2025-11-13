"use strict";

/*
	Rubik's Solver code to display an example cube

	Author: Sean Briggs
	Date:   2025-11-13

	Filename: cube.js

*/

function createCube(name) {
	var cubeIndex = cubeIDs.indexOf(name);
	var thisCube = cubeData[cubeIndex];
	var htmlCode = "";
	for (var face = 0; face < 3; face++) {
		htmlCode += "<table class='face" + (face + 1) + "'> ";
		for (var i = 0; i < 3; i++) {
			htmlCode += "<tr> ";
			for (var j = 0; j < 3; j++) {
				htmlCode += "<td class='" + colors[thisCube[face][3 * i + j]] + "'></td> ";
			}
			htmlCode += "</tr> ";
		}
		htmlCode += "</table> ";
	}
	htmlCode += "<figcaption>" + cubeCaptions[cubeIndex] + "</figcaption>";

	document.getElementById(name).innerHTML = htmlCode;
}
