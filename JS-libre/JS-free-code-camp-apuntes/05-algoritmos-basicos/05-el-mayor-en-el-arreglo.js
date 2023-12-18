/*  Devuelve los números mayores en los arreglos
------------------------------------------------
    Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. 
    Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

    Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, 
    y acceder a cada miembro del arreglo con la sintaxis arr[i].
*/

function largestOfFour(arr) {
  let result = []
  for(let i=0; i < arr.length; i++){
    let largestNumber = arr[i][0];
    for(let j=1; j < arr[i].length; j++){
      if(arr[i][j] > largestNumber){
        largestNumber = arr[i][j]
      }
    }
    result.push(largestNumber)    
  }
  console.log(result)
  return result;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
largestOfFour([[0, 10, 100, 1000], [10, 20, 30, 40], [6435, 1231, 534, 4354], [1001, 20, 3001, 40]]);
largestOfFour([[-2, -1, 0, 1], [0, 0, 2, 1], [-2, -2, 3, -4], [-1, -2, -3, 4]]);