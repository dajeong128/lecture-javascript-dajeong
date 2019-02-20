const buyLottos = () => {

    const budget = 7000;

    /*예산만큼 발행할 수 있는 로또수*/
    if (budget >= 1000) {
        const lottoAmount = parseInt(budget / 1000)

        const lottoNumbers = [];

        /*발행 할 수 있는만큼 랜덤 로또 번호발행*/
            buyLotto.forEach(function(){
                /*로또 발행번호 중복체크*/
                for (let l = 0; l < 6; l++) {
                    const result = Math.floor(Math.random() * 45) + 1;
                    if (result !== lottoNumbers[l]) {
                        lottoNumbers.push(result);
                    }
                }
            })

        /*발행번호 6개씩 배열나누기*/
        Array.prototype.division = function (n) {
            const arr = this;
            const len = arr.length;
            const cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
            const tmp = [];

            for (let i = 0; i < cnt; i++) {
                tmp.push(arr.splice(0, n));
            }
            return tmp;
        }
        const a = lottoNumbers;
        const lottoQuantity = parseInt(lottoNumbers.length / 6);
        // console.log(lottoQuantity)


        /*출력-예산,로또수*/
        console.log(">buyLottos(" + budget + ")")
        console.log(`>로또 ${lottoQuantity} 개를 발행했습니다.`)

        /*출력-최종발행번호*/
        const array = a.division(6);
        for (let i = 0; i < lottoAmount; i++) {
            console.log(array[i]);
        }

        for (let i = 0; i < lottoAmount; i++) {
            /*당첨된 로또 확인*/
            const winThree = [];
            const winFour = [];
            const winFive = [];
            const winSix = [];
            var setLuckyNumbers = ([35, 32, 33, 34, 35, 36]);
            const winCheck = setLuckyNumbers.filter(arr => arr === array)
            console.log(winCheck);
            if (winCheck >= 6) {
                winSix.push(array[i])
            } else if (winCheck >= 5) {
                winFive.push(array[i])
            } else if (winCheck >= 4) {
                winFour.push(array[i])
            } else if (winCheck >= 3) {
                winThree.push(array)
            }
        }
        /*출력-당첨 로또수*/
        console.log(">setLuckyNumbers([" + setLuckyNumbers + ")]")
        console.log(">당첨통계")
        console.log("————")
        console.log(`3개 일치 (5000원)- ${winThree.length}개`)
        console.log(`4개 일치 (50000원)- ${winFour.length}개`)
        console.log(`5개 일치 (1500000원)- ${winFive.length}개`)
        console.log(`6개 일치 (2000000000원)- ${winSix.length}개`)
    }
}

buyLottos();