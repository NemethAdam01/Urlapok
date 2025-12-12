function ellenor(){
    let telefonEredmeny = document.getElementById("telefonEredmeny");
    let mailEredmeny = document.getElementById("mailEredmeny");
    let telefon = document.forms["urlap"]["tel"].value;
    let mail = document.forms["urlap"]["mail"].value;

    if(telefon.trim() === "")
        {
        alert("A telefonszám mező nem lehet üres!")
        telefonEredmeny = document.getElementById("telefonEredmeny")
        if(telefonEredmeny){
            telefonEredmeny.innerText = "A telefonszám mező nem lehet üres!"
            telefonEredmeny.classList.add("hiba")
        }
        return false
        }
        let telefonFilter = /^06[0-9]{9}$/;
        if(!telefonFilter.test(telefon))
            {
            alert("A telefonszám formátuma nem megfelelő! (Pl.: 06123456789)")
            telefonEredmeny.innerText = "A telefonszám formátuma nem megfelelő! (Pl.: 06123456789)"
            telefonEredmeny.classList.add("hiba")
            return false
        }
        else{
            telefonEredmeny.innerText = "A megadott telefonszám: " + telefon
            telefonEredmeny.classList.remove("hiba")
            }
    if(mail.trim() === "")
        {
        alert("Az e-mail mező nem lehet üres!")
        mailEredmeny = document.getElementById("mailEredmeny")
        if(mailEredmeny){
            mailEredmeny.innerText = "Az e-mail mező nem lehet üres!"
            mailEredmeny.classList.add("hiba")
        }
        return false
        }
    
    return false
}