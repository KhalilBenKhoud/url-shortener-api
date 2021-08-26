
var input = document.getElementsByTagName("input")[0]
var submit = document.getElementsByClassName("submit")[0]
var container = document.getElementsByClassName("container3")[0]
var msg = document.getElementsByClassName("msg")[0]

submit.addEventListener("click", async() => {

     if(input.value == "")
     {
        msg.style.display = "block" 
        return 
     }
    msg.style.display = ""
    var response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 093e2bb59a2fc4c09116c8a4ea0ce2dba618d6a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": "https://" + input.value , "domain": "bit.ly" })
    });
    
    var data = await response.json()
  
    var output = data.id
    
   var link = document.createElement("div")
   link.classList.add("link")
   link.innerHTML = `
     <p> ${input.value}  </p>   
     <p>${output}</p> 
      <div class="button">Copy</div> 
   `
    link.getElementsByClassName("button")[0].addEventListener("click",(e) => {
        var toCopy = e.target.parentElement.getElementsByTagName("p")[1].innerText
        navigator.clipboard.writeText(toCopy);
    })

    container.prepend(link)
})


AOS.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });


//menu 

var menu = document.getElementsByClassName("menu")[0]
var nav = document.getElementsByTagName("nav")[0]
menu.addEventListener("click", (e) => {
    
    if(e.target.getAttribute("src") == 'images/menu.png' )
     { e.target.src = 'images/close.png' 
       nav.style.display = "block"
     }
     else {
        e.target.src = 'images/menu.png'
        nav.style.display = "none"
     }
    
})