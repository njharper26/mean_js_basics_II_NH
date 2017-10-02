function magic_multiply(x, y){
    if (x === 0 && y === 0){
        return "All inputs 0";
    }
    else if (x.constructor === Array){
        for(i in x ){
            x[i] = x[i] * y;    
        }
        return x;
    }
    else if (x.constructor === String){
        let res = x;
        while (y - 1 > 0){
            res += x;
            y--;
        }
        return res;
    }
    else if (y.constructor === String){
        return "Error: Can not multiply by a string";
    }
    else{
        x = x * y;
        return x;
    }
}

let test1 = magic_multiply(5, 2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, 'three');
console.log(test4);

let test5 = magic_multiply('Brendo', 4);
console.log(test5);