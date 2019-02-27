//로또 당첨번호
const setLuckeyNumber =()=> {
    console.log('>setLuckyNumbers([1, 2, 3, 4, 5, 6])');
}
const budget = 14000;
const lottoAmount = parseInt(budget/1000);

//로또사기
function buyLottos() {
    return(lottoAmount);
}


//랜덤번호
const getRandomNumber = () => {
    /*예산만큼 발행할 수 있는 로또수*/
    const lottoNumbers = [];
    /*발행 할 수 있는만큼 랜덤 로또 번호발행*/
    for (let i = 0; i < lottoAmount; i++) {
        /*로또 발행번호 중복체크*/
        for (let i = 0; i < 6; i++) {
            const result = Math.floor(Math.random() * 45) + 1;
            if (lottoNumbers.indexOf(result) < 0) {
                lottoNumbers.push(result);
            } else {
                result;
            }
        }
    } 
    /*발행번호 6개씩 배열나누기*/
    Array.prototype.division = function (n) {
        const arr = this;
        const len = arr.length;
        const cnt = Math.floor(len / n);
        const tmp = [];
        for(let i=0; i<cnt; i++){
            tmp.push(arr.splice(0,n));
        }
        return tmp;
    }
    const a = lottoNumbers;
    const budget = 14000;
    const lottoAmount = parseInt(budget/1000);
    /*출력-최종발행번호*/
    const array = a.division(6);
    for(let i = 0; i<lottoAmount; i++) {
        console.log(array[i]);
    }
}

const displayResult = () => {
    buyLottos();
    console.log('>로또' + buyLottos() + '개를 발행했습니다.')
    getRandomNumber()
    setLuckeyNumber();
    console.log(`> 당첨 통계`)
    console.log(`————`)
    console.log(
    `3개 일치 (5000원)- 1개
    4개 일치 (50000원)- 0개
    5개 일치 (1500000원)- 0개
    6개 일치 (2000000000원)- 0개`
    )
}
displayResult();