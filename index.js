// Simulador de crétos
// Préstamos hasta $500.000
// 12 meses 70%
// 24 meses 150%
// 36 meses 200%

let opcion, fv = false, prestamo, interes, mes;

function resultados(){
    alert(`Tendrás que abonar una cuota mensual de $${parseInt(prestamo)} durante ${mes} meses.`);
}

function calculaValor(){
    if(opcion == 1){
        prestamo = (50000*interes)/12;
    }
    else if(opcion == 2){
        prestamo = (100000*interes)/12;
    }
    else if(opcion == 3){
        prestamo = (250000*interes)/12;
    }
    else if(opcion == 4){
        prestamo = (500000*interes)/12;
    }
}
function intereses(){
    interes = +prompt(`
    Seleccione el número de opción que necesita:

    12 meses---------> 1
    24 meses---------> 2
    36 meses---------> 3`);
    if(interes == 1){
        interes = 1.7;
        mes = 12;
    }
    else if(interes == 2){
        interes = 2.5;
        mes = 24;
    }
    else if(interes == 3){
        interes = 3;
        mes = 36;
    }
    else{
        alert("La opcíon ingresada es incorrecta. Por favor, intente nuevamente.");
        intereses();
    }
}
alert(`
*************Bienvenido al simulador de créditos*************

Sacá tu préstamo personal hasta $500.000 con la tasa más baja que la inflación anual de Argentina.`);
while(fv != true){
    opcion = +prompt(`
    Seleccione el número de la cantidad que necesita:

    $50.000---------> 1
    $100.000--------> 2
    $250.000--------> 3
    $500.000--------> 4`);
    if(opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4){
        fv=true;
    }
    else{
        alert("La opcíon ingresada es incorrecta. Por favor, intente nuevamente.");
    }
}
intereses();
calculaValor();
resultados();