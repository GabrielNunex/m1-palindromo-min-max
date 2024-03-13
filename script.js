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
    let smallest = arr[0];
    largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        } else if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return arr = [smallest, largest];
}

