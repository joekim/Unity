#pragma strict

var sideNudge = Vector2(0.2, 0);

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.A)) {
		rigidbody2D.position -= sideNudge;
		
	}
	
	if(Input.GetKeyDown(KeyCode.D)) {
		rigidbody2D.position += sideNudge;
		
	}
	
	if(Input.GetKeyDown(KeyCode.Space)) {
		rigidbody2D.rotation -= 90;
		
	}
}

			//Debug.Log(rigidbody2D.position);