"use strict";

/*
	The data for the cube.js script to use

	Author: Sean Briggs
	Date:   2025-11-13

	Filename: cube-data.js

*/

var colors = ["blank", "white", "yellow", "red", "orange", "green", "blue"];

var cubeIDs = ["whiteCross", "firstLayer", "secondLayer", "yellowCross", "solved", "matchEdge",
	"matchEdgeB", "notMatch", "notMatchB", "crossPiece", "cornerSlot", "cornerSlotL", "solvedCorner",
	"cornerInSlot", "cornerUp"
];
var upsideDown = [false, true, true, false, false, false, true, false, true, false, false, false,
	true, true, false
];
var cubeCaptions = ["The White Cross", "The First Layer", "The Second Layer", "The Yellow Cross",
	"The Solved Cube", "Fig. a: A Matching White Edge", "", "Fig. b: A Non-Matching White Edge", "",
	"Fig. c: Your First Cross Piece", "Fig. d: A Corner Ready To Go", "", "Your first Corner Piece",
	"Fig. e: Bad cases", ""
];

var cubeData = [
	[[0,1,0,1,1,1,0,1,0], [0,3,0,0,3,0,0,0,0], [0,6,0,0,6,0,0,0,0]], // white cross
	[[1,1,1,1,1,1,1,1,1], [0,0,0,0,6,0,6,6,6], [0,0,0,0,3,0,3,3,3]], // first layer
	[[1,1,1,1,1,1,1,1,1], [0,0,0,6,6,6,6,6,6], [0,0,0,3,3,3,3,3,3]], // second layer
	[[0,2,0,2,2,2,0,2,0], [0,6,0,6,6,6,6,6,6], [0,3,0,3,3,3,3,3,3]], // yellow cross
	[[2,2,2,2,2,2,2,2,2], [6,6,6,6,6,6,6,6,6], [3,3,3,3,3,3,3,3,3]], // solved
	[[0,0,0,0,1,0,0,0,0], [0,0,0,0,3,0,0,0,0], [0,0,0,0,6,0,0,6,0]], // matching edge
	[[0,0,0,0,2,1,0,0,0], [0,0,0,0,3,0,0,0,0], [0,0,0,0,6,0,0,6,0]], // matching edge bottom view
	[[0,0,0,0,1,0,0,0,0], [0,0,0,0,3,0,0,1,0], [0,0,0,0,6,0,0,0,0]], // non-matching edge
	[[0,6,0,0,2,0,0,0,0], [0,0,0,0,3,0,0,1,0], [0,0,0,0,6,0,0,0,0]], // non-matching edge bottom view
	[[0,0,0,0,1,0,0,1,0], [0,0,0,0,3,0,0,0,0], [0,6,0,0,6,0,0,0,0]], // white cross piece
	[[0,0,0,0,2,0,3,0,0], [0,0,6,0,6,0,0,6,0], [1,0,0,0,3,0,0,3,0]], // corner ready to go
	[[0,0,0,0,2,0,6,0,0], [0,0,1,0,6,0,0,6,0], [3,0,0,0,3,0,0,3,0]], // corner ready to go on the left
	[[0,1,1,1,1,1,0,1,0], [0,0,0,0,6,0,0,6,6], [0,0,0,0,3,0,3,3,0]], // solved corner
	[[0,1,6,1,1,1,0,1,0], [0,0,0,0,6,0,0,6,3], [0,0,0,0,3,0,1,3,0]], // corner already in slot
	[[0,0,0,0,2,0,1,0,0], [0,0,3,0,6,0,0,6,0], [6,0,0,0,3,0,0,3,0]], // corner facing up
];