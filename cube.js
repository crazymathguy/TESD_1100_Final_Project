"use strict";

/*
	Rubik's Solver code to display an example cube

	Author: Sean Briggs
	Date:   2025-11-13

	Filename: cube.js

*/

function createCube(name) {
	const fig = document.getElementById(name);
	var cubeIndex = cubeIDs.indexOf(name);
	var thisCube = cubeData[cubeIndex];
	for (var face = 0; face < 3; face++) {
		const thisFace = document.createElement("table");
		thisFace.classList.add("face" + (face + 1));
		if (fig.classList.contains("bottom")) {
			thisFace.classList.add("bottom");
		}
		var htmlCode = "";
		for (var i = 0; i < 3; i++) {
			htmlCode += "<tr> ";
			for (var j = 0; j < 3; j++) {
				htmlCode += "<td class='" + colors[thisCube[face][i * 3 + j]] + "'></td> ";
			}
			htmlCode += "</tr> ";
		}
		thisFace.innerHTML = htmlCode;
		fig.append(thisFace);
	}
	const caption = document.createElement("figcaption");
	caption.textContent = cubeCaptions[cubeIndex];
	fig.append(caption);
}
