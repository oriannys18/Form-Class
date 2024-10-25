function calculateMortgage(e) {
    e.preventDefault();

    let cuot = document.forms["mortgage"]["fcuota"].value;
    let valorr = document.forms["mortgage"]["valortotal"].value;
    let interess = document.forms["mortgage"]["interes"].value;
    let tiempo = document.forms["mortgage"]["plazo"].value;
    const MONTS = 12;


    const mortgage = {
        costoTotalInmueble: 0,
        totalprestamo: 0,
        totallinteres: 0,
        cuotamensual: 0
    };
    mortgage.costoTotalInmueble = valorr;
    mortgage.totalprestamo = valorr - cuot;
    mortgage.totallinteres = mortgage.totalprestamo * interess / 100;
    mortgage.cuotamensual = (mortgage.totalprestamo + mortgage.totallinteres) / (tiempo * MONTS);


   
    ouputMortgage(mortgage);

}
function ouputMortgage(finalMortgage){
    
    document.getElementById("prestamo").innerHTML = valueToDollar(finalMortgage.totalprestamo);
    document.getElementById("ocuota").innerHTML = valueToDollar(finalMortgage.cuotamensual);
    var totalPrestamoPorcentaje = 0;
    totalPrestamoPorcentaje = finalMortgage.totalprestamo * 100 / finalMortgage.costoTotalInmueble;
    alert(totalPrestamoPorcentaje);
    if (totalPrestamoPorcentaje > 90) {
        document.getElementById("prestamo").className += " AlertaPorcentaje";
    }else{
        document.getElementById("prestamo").className = "form-control";
    }
        
    }


function resetform(){

    document.forms["mortgage"].reset();
}

function valueToDollar(value){
    const dollarformatter = new Intl.NumberFormat('en-US',{ style:'currency', currency:'USD',minimumFractionDigits:2});
    return dollarformatter.format(value);
}




