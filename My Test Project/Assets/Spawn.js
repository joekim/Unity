#pragma strict

var Piece = GameObject();
var spawnPos = Vector2();
private var spawnRot = Quaternion();

function Start () {

}

function Update () {
	Instantiate(Piece, spawnPos, spawnRot);
}