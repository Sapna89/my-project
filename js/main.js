// JS file for dynamic header and footer

var myTwitterLink = document.createElement('a');
var myFbLink = document.createElement('a');
// var myGplusLink = document.createElement('a');

var myTwitterImg = document.createElement('img');
var myFbImg = document.createElement('img');
// var myGplusImg = document.createElement('img');

myTwitterImg.setAttribute('src', 'img/twitter.PNG');
myFbImg.setAttribute('src', 'img/facebook.PNG');
// myGplusImg.setAttribute('src', 'img/g+.png');

myTwitterLink.appendChild(myTwitterImg);
myFbLink.appendChild(myFbImg);
// myGplusLink.appendChild(myGplusImg);

myTwitterLink.setAttribute('href', 'https://twitter.com/Sapna_Naveen');
myFbLink.setAttribute('href', 'https://www.facebook.com/sapnacp.swamy');


var header = document.querySelector('header');
header.appendChild(myTwitterLink);
header.appendChild(myFbLink);
// header.appendChild(myGplusLink);


var myNav = document.createElement('nav');
myNav.setAttribute('class', 'navigationHeader');


var myUl = document.createElement('ul');

var myLi1 = document.createElement('li');
var myLi2 = document.createElement('li');
var myLi3 = document.createElement('li');
var myLi4 = document.createElement('li');

var myPage1 = document.createElement('a');
var myPage2 = document.createElement('a');
var myPage3 = document.createElement('a');
var myPage4 = document.createElement('a');

myPage1.setAttribute('href', 'index.html');
myPage2.setAttribute('href', 'blog.html');
myPage3.setAttribute('href', 'resume.html');
myPage4.setAttribute('href', 'contact.html');

myPage1.textContent = "HOME";
myPage2.textContent = "BLOG";
myPage3.textContent = "RESUME";
myPage4.textContent = "CONTACT";



// myLi1.setAttribute('class', 'active');
// myPage1.setAttribute('href', '#');

if(activePage == 'index'){
	myLi1.setAttribute('class', 'active');
	// myPage1.setAttribute('href', 'index.html');
} else if (activePage == 'blog'){
	myLi2.setAttribute('class', 'active');
	// myPage2.setAttribute('href', 'blog.html');
} else if (activePage == 'resume'){
	myLi3.setAttribute('class', 'active');
	// myPage3.setAttribute('href', 'resume.html');
} else {
	myLi4.setAttribute('class', 'active');
	// myPage4.setAttribute('href', 'contact.html');
}

myLi1.appendChild(myPage1);
myLi2.appendChild(myPage2);
myLi3.appendChild(myPage3);
myLi4.appendChild(myPage4);

myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
myUl.appendChild(myLi4);

myNav.appendChild(myUl);

header.appendChild(myNav);

var myPara = document.createElement('p');
myPara.innerHTML = 'Copyright &copy; <a href="#">Sapna Naveen</a> 2015';
var footer = document.querySelector('footer');
footer.appendChild(myPara);

