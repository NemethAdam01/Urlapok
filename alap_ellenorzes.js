// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap()
{
    let nev = document.forms["alapUrlap"]["nev"].value
    console.log(nev)

    if(nev.trim() === "")
        {
        alert("A név mező nem lehet üres!")
        return false
        }
        
    let nevFilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/
    if(!nevFilter.test(nev))
        {
        alert("A név mező csak betűket és szóközt tartalmazhat!")
        return false
        }

    let nevKiirasa = document.getElementById("nevEredmeny")
    nevKiirasa.innerText = "A megadott név: " + nev
    return false
}
