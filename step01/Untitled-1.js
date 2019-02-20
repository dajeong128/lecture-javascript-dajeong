const buyLottos = () => {
    const budget = 14000;
    const lottoAmount = parseInt(budget/1000);
    const randomLottoArray = [];

    for(let i=0; i<lottoAmount; i++) {

        if (lottoAmount > 0) {
            const randomLotto = Math.floor(Math.random() * 45) + 1;
            randomLottoArray.push(randomLotto)
            if (randomLotto === randomLottoArray) {
                randomLotto = Math.floor(Math.random() * 45) + 1;
                randomLottoArray.push(randomLotto)
            } else if (randomLottoArray.forEach(function(randomLottoArray){
                if (randomLottoArray !== randomLotto) {
                    randomLottoArray.push(randomLotto)
                }
            }))
            console.log(randomLottoArray);
        }
    }
    
}

//> buyLottos(14000); 
//> 로또 14개를 발행했습니다.
//>[로또 랜덤 배열]
//> setLuckyNumbers([1, 2, 3, 4, 5, 6]);
//> 당첨 통계
// ————
// 3개 일치 (5000원)- 1개
// 4개 일치 (50000원)- 0개
// 5개 일치 (1500000원)- 0개
// 6개 일치 (2000000000원)- 0개


buyLottos();