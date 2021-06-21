let linkedin_Profil = document.querySelector("#linkedinUrl")
linkedin_Profil.setAttribute("href", "https://www.linkedin.com/in/mtalha-aydin/")

let github_Profil = document.querySelector("#githubUrl")
github_Profil.setAttribute("href", "https://github.com/talhaydin")

let hackerrank_Profil = document.querySelector("#hackerrankUrl")
hackerrank_Profil.setAttribute("href", "https://www.hackerrank.com/mt_aydin")

let isim_yas_butonu = document.querySelector("#isimYasButon")
isim_yas_butonu.addEventListener("click", h1h2ekle)

let myName = "Talha"
let mySurName = "Aydın"
let myAge = "22"

function h1h2ekle(){
    isim_yas_butonu.remove();
    document.querySelector("#nameSurname").innerHTML=  `${myName} ${mySurName}`
    document.querySelector("#age").innerHTML= `${myAge}`
}
