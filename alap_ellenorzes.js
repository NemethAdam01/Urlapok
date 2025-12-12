// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap()
{
    let nevKiirasa = document.getElementById("nevEredmeny")
    let nev = document.forms["alapUrlap"]["nev"].value
    console.log(nev)

    if(nev.trim() === "")
        {
        alert("A név mező nem lehet üres!")
        nevKiirasa = document.getElementById("nevEredmeny")
        if(nevKiirasa){
            nevKiirasa.innerText = "A név mező nem lehet üres!"
            nevKiirasa.classList.add("hiba")
        }
        return false
        }
        
    let nevFilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/
    if(!nevFilter.test(nev))
        {
        alert("A név mező csak betűket és szóközt tartalmazhat!")
        return false
        }

    nevKiirasa = document.getElementById("nevEredmeny")
    nevKiirasa.innerText = "A megadott név: " + nev
    nevKiirasa.classList.remove("hiba")
    return false
}
