// Main function
//Funcion que toma los valores de un arreglo y suma todos sus valores y devuelve el resultado en el tiempo especificado
const mainFunction = (callback) => {
    setTimeout(() => {
    callback([2, 3, 4, 5, 6, 7]);
    }, 1000)
    }
    // Add function
    const add = (array) => {
    let sum = 0;
    for(let i of array) {
    //mostrar elementos de la lista por consola
    console.log(i);
    sum += i;
    } 
    console.log(sum);
    }
    // Calling main function
    mainFunction(add);