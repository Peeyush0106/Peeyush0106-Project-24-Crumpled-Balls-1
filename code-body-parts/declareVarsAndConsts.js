const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ground, binLeft, binRight, binTop;
var bin_options;
var joined_bin_1_options, joined_bin_2_options, joined_bin_3_options, bin1, bin2, bin3;
var ball_x_speed_decreaser;

var canvasWidth, canvasHeight, side_EdgesWidth, topAndBottom_EdgesHeight, rightEdge, leftEdge, topEdge, bottomEdge;

var ballHasBeenShot, gameDone;