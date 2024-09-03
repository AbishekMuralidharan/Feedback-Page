var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbtn = document.getElementById("add-button")

addbtn.addEventListener("click",function(){
    popupoverlay.style.display= "block"
    popupbox.style.display= "block"
})

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
})

var content = document.querySelector(".content")
var addpopup = document.getElementById("add-popup")
var inputtext = document.getElementById("input-text")
var textareatext = document.getElementById("textarea-text")

addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "contentbox")
    div.innerHTML=`<h2>${inputtext.value}</h2>
    <hr>
    <p>${textareatext.value}</p>
    <button onclick="deletebtn(event)">Delete</button>`
    content.append(div)
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
})
 function deletebtn(event){
    event.target.parentElement.remove()
 }