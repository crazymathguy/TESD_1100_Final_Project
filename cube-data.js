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
	"cornerInSlot", "cornerUp", "secondEdge", "secondEdgeL", "cross", "dot", "lShape", "line",
	"adjacentEdges", "oppositeEdges", "fullCross", "twistedCorner"
];
var upsideDown = [false, true, true, false, false, false, true, false, true, false, false, false,
	true, true, false, false, false, false, false, false, false, false, false, false, false
];
var cubeCaptions = ["The White Cross", "The First Layer", "The Second Layer", "The Yellow Cross",
	"The Solved Cube", "Fig. a: A Matching White Edge (blue front)", "",
	"Fig. b: A Non-Matching White Edge (blue front)", "", "Fig. c: Your First Cross Piece",
	"Fig. d: A Corner Ready To Go (blue front)", "(red front)", "Your first Corner Piece",
	"Fig. e: Bad cases (blue front)", "(blue front)", "Fig. f: A second Layer Edge (red front)",
	"(blue front)", "The Cross", "Fig. g: The Dot (blue front)", "The L Shape (blue front)",
	"The Line (blue front)", "Fig. h: Incorrect Edges (blue front)", "",
	"The Entire Yellow Cross", "Fig. i: A correct corner"
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
	[[0,0,0,0,2,0,0,6,0], [0,0,0,0,6,0,6,6,6], [0,3,0,0,3,0,3,3,3]], // second layer edge
	[[0,0,0,3,2,0,0,0,0], [0,6,0,0,6,0,6,6,6], [0,0,0,0,3,0,3,3,3]], // second layer edge on the left
	[[0,2,0,2,2,2,0,2,0], [0,0,0,6,6,6,6,6,6], [0,0,0,3,3,3,3,3,3]], // oriented yellow cross
	[[0,0,0,0,2,0,0,0,0], [0,0,0,6,6,6,6,6,6], [0,0,0,3,3,3,3,3,3]], // the dot
	[[0,0,0,2,2,0,0,2,0], [0,0,0,6,6,6,6,6,6], [0,0,0,3,3,3,3,3,3]], // the l shape
	[[0,2,0,0,2,0,0,2,0], [0,0,0,6,6,6,6,6,6], [0,0,0,3,3,3,3,3,3]], // the line
	[[0,2,0,2,2,2,0,2,0], [0,3,0,6,6,6,6,6,6], [0,6,0,3,3,3,3,3,3]], // adjacent edges
	[[0,2,0,2,2,2,0,2,0], [0,6,0,6,6,6,6,6,6], [0,4,0,3,3,3,3,3,3]], // opposite edges
	[[0,2,0,2,2,2,0,2,0], [0,6,0,6,6,6,6,6,6], [0,3,0,3,3,3,3,3,3]], // full yellow cross
	[[0,2,0,2,2,2,6,2,0], [0,6,3,6,6,6,6,6,6], [2,3,0,3,3,3,3,3,3]], // twisted corner
];