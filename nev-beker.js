function regisztracio() {
    // lekérdezzük a név és jelszó mezők értékét
    var nev = document.getElementById("nev").value;
    var jelszo = document.getElementById("jelszo").value;
    
    // Ellenőrzés, hogy mindkét mező ki legyen töltve
    if (nev == "" || jelszo == "") {
      alert("Kérem, töltse ki az összes mezőt!");
      return false;
    }
    
    // Ha minden mező ki van töltve, kiírjuk a regisztráció sikeres volt
    alert("Sikeres regisztráció!");
    return true;
  }
  