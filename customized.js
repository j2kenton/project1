window.onload = function () {
alert("onloading...");
// for start course page
if (document.querySelectorAll("a.unit_button")[0]){
document.querySelectorAll("a.unit_button")[0].innerHTML = "LIVE COURSE ACCESS INFO & VIDEO/AUDIO ARCHIVES";
//document.querySelectorAll("a.unit_button")[1].innerHTML = "BACK TO COURSE DETAILS";
}
//for course pages when your logged in already / signed up:
if(document.querySelector("input.course_button")){
document.querySelector("input.course_button").value="LIVE COURSE ACCESS INFO & VIDEO/AUDIO ARCHIVES";
}
//for cousr pgs when not loged in / signed up:
//--------------
var courseButtonForNotLoggedIn = document.querySelector("a.course_button");
if (courseButtonForNotLoggedIn){
courseButtonForNotLoggedIn.innerHTML=""; 
var newRegAnchor = document.createElement("a");           
if(newRegAnchor){
newRegAnchor.href="http://breslovcampus.org/register-3/? keepThis=true&amp;TB_iframe=true&amp;height=600&amp;width=800";
newRegAnchor.title="SIGN UP FOR FREE MEMBERSHIP";
newRegAnchor.className = "thickbox vbpregister";
newRegAnchor.style.backgroundColor="transparent"; 
newRegAnchor.style.fontSize="13px";
newRegAnchor.style.fontWeight="900";
newRegAnchor.innerHTML=" REGISTER NOW";
}
var newLoginAnchor = document.createElement("a");   
if(newLoginAnchor) {
newLoginAnchor.href = "#login";
newLoginAnchor.className = "smallimg vbplogin";
newLoginAnchor.style.fontSize="13px";
newLoginAnchor.style.fontWeight="900";
newLoginAnchor.innerHTML = "LOGIN";
newLoginAnchor.setAttribute("onclick","document.getElementById('vibe_bp_login').style.display = 'block'; ") ;
}
//now append the new anchors to course button
courseButtonForNotLoggedIn.appendChild(newRegAnchor);   
courseButtonForNotLoggedIn.innerHTML+=" / ";
courseButtonForNotLoggedIn.appendChild(newLoginAnchor);  
}
}

