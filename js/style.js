//Cette fonction sert a rendre le reste de la page incliquable (sauf le menu humeur)
function masquer_div(id)
{
       document.getElementById(id).style.display = 'none';
}

//Cette fonction sert a afficher la date du jour en format jour/mois/année

// function datefr(){
// var jour= new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
// var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
// var date= new Date();
// var message = jours[date.getDay()] + " ";   // nom du jour
// 	message += numjour.getDate() + " ";   // numero du jour
// 	message += mois[date.getMonth()] + " ";   // mois
//  	message += date.getFullYear();
//  	document.getElementById(date).innerHTML = message;
// }

function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
	//weekday[-2] = "Vendredi ";
    //weekday[-1] = "Samedi ";
    weekday[0] = "Dimanche ";
    weekday[1] = "Lundi ";
    weekday[2] = "Mardi ";
    weekday[3] = "Mercredi ";
    weekday[4] = "Jeudi ";
    weekday[5] = "Vendredi ";
    weekday[6] = "Samedi ";
    var q = new Date();
    var mois = new Array(12);
    mois[0] = "Janvier";
    mois[1] = "Février";
    mois[2] =  "Mars";
    mois[3] =  "Avril";
    mois[4] =  "Mai";
    mois[5] =  "Juin";
    mois[6] =  "Juillet";
    mois[7] =  "Août";
    mois[8] =  "Septembre";
    mois[9] =  "Octobre";
    mois[10] =  "Novembre";
    mois[11] =  "Décembre";
    var num = new Date();
	var rest = num.getDate();
	
    var n = weekday[d.getDay()];
    
    
    
    var m = mois[d.getMonth()];
    document.getElementById("date").innerHTML = n+rest+" "+m;
    //var n2 = weekday[d.getDay()-1];
    //document.getElementById("demo2").innerHTML = n2;
    //var n3 = weekday[d.getDay()-2];
    //document.getElementById("demo3").innerHTML = n3;
}
myFunction()

