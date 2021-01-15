let saisieKeydown = document.getElementById('saisie');
let saisieSubmit = document.getElementById('validationSaisie');

let saisieChoixKeydown = document.getElementById('choix');
let saisieChoixSubmit = document.getElementById('validationChoix');

let submitResetGame = document.getElementById('reset');
let keyResetGame = document.querySelector('body');

let valueToFind = 0;
let valueToCompare = 0;

function reset() {
    console.log("Fonction Reset");
    valueToFind = 0;
    valueToCompare = 0;
    document.getElementById('saisie').value="";
    document.getElementById('choix').value="";
    saisieKeydown.disabled = false;
    saisieSubmit.disabled = false;
    saisieChoixKeydown.disabled = true;
    saisieChoixSubmit.disabled = true;
    saisieKeydown.focus();
};

function resetSaisieChoix(){
    document.getElementById('choix').value="";
    saisieChoixKeydown.focus();
};

function initValue(e) {
    console.log("Fonction initValue");
    console.log(e);
    if (e==null || e.key==='Enter'){
        console.log("you have just press ENTER key or SUBMIT BUTTON");
        valueToFind = parseInt(saisieKeydown.value, 10);
        console.log("saisieKeydown "+saisieKeydown.value);
        if (valueToFind > 0 && valueToFind < 100){
            alert ("Tout est OK, place au jeu");
            gameListener();
        } else {
            alert ("Merci de saisir un nombre entier positif inférieur à 100");
            reset();
        };
        // console.log("Value to find : "+valueToFind);
        // console.log("Type de variable de valueTofind a la saisie : "+typeof (valueToFind));
    } else if (e.key===!'Enter'){
        console.log("You have press the key : "+e.key+" and he key code value is : "+e.key);
    };
};

function gameListener(){
    console.log("fonction gameListener");
    document.getElementById('saisie').value="";
    saisieKeydown.disabled = true;
    saisieSubmit.disabled = true;
    saisieChoixKeydown.disabled = false;
    saisieChoixSubmit.disabled = false;
    saisieChoixKeydown.focus();
    //saisieChoixSubmit.addEventListener('click', fonction);
    saisieChoixKeydown.addEventListener('keydown', e=>{
        game(e);
    });
    saisieChoixSubmit.addEventListener('click', e=>{
        e.preventDefault();
        game(null);
    });
};

function game (e){
    console.log("fonction game");
    if (e==null || e.key==='Enter'){
        // e.preventDefault();
        // e.stopPropagation();
        console.log("you have just enter a choice");
        valueToCompare = parseInt(saisieChoixKeydown.value, 10);
        compare(valueToCompare);
    };
};

function compare(e){
    console.log("vous etes dans la fonction de comparaisons");
    if (e > valueToFind){
        alert ("On cherche un nombre plus petit");
        resetSaisieChoix();
    } else if (e < valueToFind){
        alert ("On cherche un nombre plus grand");
        resetSaisieChoix();
    } else if (e === valueToFind){
        alert ("Felicitation vous avez trouvé");
        reset();
    };
};

document.addEventListener('DOMContentLoaded', reset);

saisieKeydown.addEventListener('keydown', function(e){
    //e.preventDefault();
    //e.stopPropagation();
    console.log('saisieKeydown');
    //initValue(e);
});
// sur un addEventListner nécéssité de crée une fonction anonyme car le addEvent
// ne peut pas transmettre de parametres, il peut en revanche appeler une fonction.
// => idem pour SETINTERVAL
saisieSubmit.addEventListener('click', function(e){
    console.log('saisieSubmit');
    e.preventDefault();
    initValue(null);
});

submitResetGame.addEventListener('click', e=>{
    alert("Reset du jeu");
    reset();
});

keyResetGame.addEventListener('keydown', e=> {
    if (e.key==='r'){
        alert("Reset du jeu");
        reset();
    };
});