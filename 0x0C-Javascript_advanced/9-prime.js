function countPrimeNumbers() {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            };
        };
        return true;
    };
    
    function display(n) {
        let arr = [2];
        for (let i = 3; i < n; i+=2) {
            if ( isPrime(i) ) {
                arr.push(i);
            };
        };
        console.log(arr);
    };
    display(100);
};

const time0 = performance.now();
countPrimeNumbers();
const time1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${time1 - time0} milliseconds.`);
