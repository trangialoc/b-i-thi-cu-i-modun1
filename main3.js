
    let x=prompt("please insert x");
    function sumOfListPrime()
    {
        let n;
        let i;
        let sum = 0;
        for (n = 2; n <= x; n++) {
        let check = true;
        for (i = 2; i <= (n - 1); i++) {
        if (n % i === 0) {
        check = false;
        break;
    }
    }
        if (check === true) {
        sum = sum + n;
    }
    }
        return sum;
    }
    sumOfListPrime(x)
    document.write("tong cac so nguyen to toi x la "+ sumOfListPrime(x))