// function show(){
//     document.getElementById('sub-cat').style.display="block";
// }

function hide() {
	document.getElementById('sub-cat').style.display = "none";
}
function show() {
	document.getElementById('sub-cat').style.display = "block";
}





// function ShowAndHide() {
//  document.getElementById('aside').style.display="block"
//  document.getElementById('aside').style.display="none"

function ShowAndHide() {
    var x = document.getElementById('aside');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}