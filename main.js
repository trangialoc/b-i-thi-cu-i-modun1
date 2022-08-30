
function findAvg(arr) {
    let Avg = 0
    for(let i=0;i<arr.length;i++){
        Avg +=arr[i];
    }
    let dtb = Avg/arr.length;
    document.write("điểm trung bình là :" + dtb);
}
let arr=[2,5,7,8,9,10]
findAvg(arr)



