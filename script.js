// target 

//  js- selector

// id - document.getElementById("")
// class - document.getElementByClassName("")
// tag - document.getElementByTagName("")

// master - document.querySelector("#id")
// master - document.querySelector(".class")
// master - document.querySelector("tag")

var copy = document.querySelector(".logo-slide").cloneNode(true)
document.querySelector(".logo-slider").append(copy)
