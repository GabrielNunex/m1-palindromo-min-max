function isPalindrome(str){
    let text = str.toLowerCase();
    let result = '';

    //Loop para retirar espaços da frase
    for (let i = 0; i < str.length; i++) {
        if (text[i] != ' ') {
            result += text[i];
        }
    }

    //Loop para verificar letras nas extremidades
    let peer = Math.floor(result.length/2)
    let counter = 0
    for (let i = 0; i < peer; i++) {
        let compare = result.length - 1

        if (result[i] == result[compare - i]) {
            counter++;
        } 
    }

    if (peer == counter) {
        return true
    } 
        return false
}

function arrayMaxMin(arr){
    /* Seu código aqui */
}
