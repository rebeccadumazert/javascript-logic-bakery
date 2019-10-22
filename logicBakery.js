// prix produits

const farine = 1;
const sucre = 1.5*2;
const oeuf = 3 / 10;
const lait = 2.5;
const chocolat = 2*10;
const deco = 3.5;
const fruit = 5;

// prix de la forêt noire

const prixForet = farine + sucre + (oeuf*20) + (lait / 2) + chocolat + (deco*5)

console.log("ma forêt noire coûte" +" "+ prixForet)

// prix de la tarte aux fraises

const prixTarte = (2*fruit) + (farine/2) + (sucre/2) + (5*oeuf) + (lait/2) + (chocolat/4) + (2*deco)

console.log("ma tarte aux fraises coûte" +" "+ prixTarte)

// COEFFICIENT DE MARGE

// const coef = 10 / 100

// const prixVenduTarte = (prixTarte*coef) + prixTarte
// console.log("Prix coutant : "+prixTarte+" - Prix vendu : "+prixVenduTarte)

// const prixVenduForet = (prixForet*coef) + prixForet
// console.log("Prix coutant : "+prixForet+" - Prix vendu : "+prixVenduForet)


//-------------

const pourcentage = prompt("Quelle marge souhaitez vous gagner (en pourcentage) sur votre création ?")/100

const prixVenduTarte2 = (prixTarte*pourcentage) + prixTarte
console.log("Prix coutant TARTE: "+prixTarte+" - Prix vendu : "+prixVenduTarte2)

const prixVenduForet2 = (prixForet*pourcentage) + prixForet
console.log("Prix coutant FORET: "+prixForet+" - Prix vendu : "+prixVenduForet2)


// J'ai 5 boutiques ! Je produits 6 gateaux de chaque type par jour et je ne vends que 90% des produits

const pourcentVente = 6 * (90 / 100)

const tresorerie = (pourcentVente*prixForet) + (pourcentVente*prixTarte)
console.log("La trésorerie quotidienne à prévoir pour faire les gateaux est de : "+tresorerie+" €")


const recetteQuotidienne = ( ( (6*prixVenduForet2) +(6*prixVenduTarte2) ) * 5)

console.log("la recette quotidienne est de : " + recetteQuotidienne)

const benef = recetteQuotidienne - (tresorerie*5)
console.log("mon benef quotidien est de : "+benef)


