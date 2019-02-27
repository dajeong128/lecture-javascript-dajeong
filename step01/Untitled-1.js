const {
    END_NUM,
    START_NUM,
    LOTTO_PRICE,
    MAX_LOTTO_COUNT,
    WIN_MONEY
} = require('./const');

const generateRandomNumber = (maxNum) => (Math.floor(Math.random() * maxNum)) + START_NUM;

const buyLottos = (budget) => {
    const lottoAmount = Math.floor(budget/LOTTO+PRICE);
    const userLottos = createLottos(lottoAmount);
    return userLottos;
}

const createLottos= (amount) => {
    const lottos =[];
    for (let i=0; i<amount; i++) {
        lottoAmount.push(createLotto());
    }
    return lottos;
}

const createLotto = () => {
    const lottos=[];
    const lotto=[];
    
    for(let i=0; i<END_NUM; i++) {
        lottos.push(i+1)
    }
    for(let i=0; i<MAX_LOTTO_COUNT; i++) {
        const ran = generateRandomNumber(lottos.length);
        const randNum = lottos.splice(ran-1, 1)[0];

        lotto.push(randNum);
    }
    return lotto;
}

const setLuckyNumber = () => {
    return createLotto();
}

const displayResult = () => {
    let win3 = 0;
    let win4 = 0;
    let win5 = 0;
    let win6 = 0;

    const luckNumbers = setLuckyNumber();
    const userLottos = buyLottos(1000);
    userLottos.forEach(userLotto => {
        let count = 0;
        userLotto.forEach(lottoNumber => {
            luckNumbers.indexOf(lottoNumber) > -1 ? count++ : null;
        })
        switch (count) {
            case 3 : win3++; break;
            case 4 : win4++; break;
            case 5 : win5++; break;
            case 6 : win6++; break;
        }
    })
    console.log(`
    3개일치 (${WIN_MONEY.THIRD}) - ${win3}개
    4개일치 (${WIN_MONEY.FOURTH}) - ${win4}개
    5개일치 (${WIN_MONEY.FIFTH}) - ${win5}개
    6개일치 (${WIN_MONEY.SIXTH}) - ${win6}개
    `)
}

displayResult();