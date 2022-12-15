var tipo_medalla = { 1 : "Oro" ,2 : "Plata", 3: "Bronce"};

function medallaSegunPuesto(a){
    if (a == 1) {
      return ("Oro");
    } 
    else if (a == 2){
      return ("Plata");
    }
    else if (a == 3){
      return ("Bronce");
    } 
    else {
      return ("Segui Participando");
    }
}

console.log(medallaSegunPuesto(1));
console.log(medallaSegunPuesto(2));
console.log(medallaSegunPuesto(3));
console.log(medallaSegunPuesto(4));

