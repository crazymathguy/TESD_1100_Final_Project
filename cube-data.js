"use strict";

/*
	The data for the cube.js script to use

	Author: Sean Briggs
	Date:   2025-11-13

	Filename: cube-data.js

*/

var colors = ["blank", "white", "yellow", "red", "orange", "green", "blue"];

var cubeIDs = ["whiteCross", "firstLayer", "secondLayer", "yellowCross", "solved", "matchEdge",
	"matchEdgeB", "notMatch", "notMatchB", "crossPiece"
];
var cubeCaptions = ["The White Cross", "The First Layer", "The Second Layer", "The Yellow Cross",
	"The Solved Cube", "Fig. a: A Matching White Edge", "", "Fig. b: A Non-Matching White Edge", "",
	"Fig. c: Your First Cross Piece"
];

var cubeData = [
	[[0,1,0,1,1,1,0,1,0], [0,3,0,0,3,0,0,0,0], [0,6,0,0,6,0,0,0,0]],
	[[1,1,1,1,1,1,1,1,1], [3,3,3,0,3,0,0,0,0], [6,6,6,0,6,0,0,0,0]],
	[[1,1,1,1,1,1,1,1,1], [3,3,3,3,3,3,0,0,0], [6,6,6,6,6,6,0,0,0]],
	[[0,2,0,2,2,2,0,2,0], [0,3,0,3,3,3,3,3,3], [0,5,0,5,5,5,5,5,5]],
	[[2,2,2,2,2,2,2,2,2], [3,3,3,3,3,3,3,3,3], [5,5,5,5,5,5,5,5,5]],
	[[0,0,0,0,1,0,0,0,0], [0,0,0,0,3,0,0,0,0], [0,0,0,0,6,0,0,6,0]],
	[[0,0,0,0,2,1,0,0,0], [0,0,0,0,3,0,0,0,0], [0,0,0,0,6,0,0,6,0]],
	[[0,0,0,0,1,0,0,0,0], [0,0,0,0,3,0,0,1,0], [0,0,0,0,6,0,0,0,0]],
	[[0,6,0,0,2,0,0,0,0], [0,0,0,0,3,0,0,1,0], [0,0,0,0,6,0,0,0,0]],
	[[0,0,0,0,1,0,0,1,0], [0,0,0,0,3,0,0,0,0], [0,6,0,0,6,0,0,0,0]]
];