const generatememebtn=document.querySelector(".memegenerator-btn")
const memeimage=document.querySelector(".memegenerator img")
const memetitle=document.querySelector(".memegenerator .memetitle")
const memeautor=document.querySelector(".memegenerator .memeauthor")
const generatememe= () =>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=> response.json()).then(data =>{
        updatedetails(data.url,data.title,data.author)
    })

}
const updatedetails=(url,title,author)=>{
    memeimage.setAttribute("src",url)
    memetitle.innerHTML=title;
    memeautor.innerHTML=`meme by :${author}`;
}
generatememebtn.addEventListener("click",generatememe)

generatememe();