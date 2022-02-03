const userChoices = {
    
    bispo: "Diagonais",
    rei: "(horizontal, vertical e diagonal) somente uma casa de cada vez",
    rainha: "horizontal, vertical e diagonais mas não pode pular outras peças",
    cavalo: "O movimento do cavalo é em forma de L",
    torre: "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.",
    peao: "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal."
}

const choice = userChoices["bispo".toLocaleLowerCase()];

console.log(choice)