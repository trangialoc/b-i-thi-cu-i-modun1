
let array1 = [2, 7, 6, 8, 7, 6, 9];

let x = +prompt("Nhập số trong mảng");
let index = +prompt("Nhập vị trí trong mảng")

function insertNumberToArray(array, x, index) {
    if (index < 0 || index > array.length) {
        return(array);
    } else {
        let arraynew= [];
        for (let i = 0; i < array.length+1; i++) {
            if (i < index) {
                arraynew.push(array[i])
            } else {
                if (i === index) {
                    arraynew.push(x)
                } else {
                    arraynew.push(array[i - 1])
                }

            }
        }
        return arraynew;
    }

}

alert(insertNumberToArray(array1,x,index ))
