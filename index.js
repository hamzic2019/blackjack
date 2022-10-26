let zbir_kuca   = document.querySelector('.zbir-kuca'),
    zbir_gost   = document.querySelector('.zbir-gost'),
    opklada     = document.querySelector('.opklada'),
    cip_opklada = document.querySelector('.cip-opklada'),
    karte       = document.querySelector('.karte'),
    karta       = document.querySelector('.karta'),
    karte_gosta = document.querySelector('.karte-gosta'),
    karta_gosta = document.querySelector('.karta-gosta'),
    cipovi      = document.querySelector('.cipovi'),
    cip         = document.querySelector('.cip'),
    action_btns = document.querySelector('.action-btns'),
    hit         = document.querySelector('.hit'),
    stand       = document.querySelector('.stand'),
    bank        = document.querySelector('.bank-amount-display');


    let deposit = 500;
    let displayAmount =  deposit + '.00 $'
    let zbir_gost_dec = 0;
    let zbir_kuca_dec = 0;
    let karte_gosta_lista = []
    let karte_kuca_lista = []
    
        bank.innerHTML = displayAmount;
    
        zbir_kuca.innerHTML = zbir_kuca_dec;
        zbir_gost.innerHTML = zbir_gost_dec;
    

    hit.addEventListener('mousedown', () => {
        
        let gost1 = getRandomCard();
        let gost2 = getRandomCard();
        zbir_gost_dec += gost1 + gost2;
        karte_gosta_lista.push(gost1)
        karte_gosta_lista.push(gost2)     
        

        karte_kuca_lista.push(getRandomCard())
        karte_kuca_lista.push(getRandomCard())

        console.log({karte_gosta_lista})
        console.log({karte_kuca_lista})


        bank.innerHTML = displayAmount;
    

    })


    function getRandomCard(){
        var randomnumber = Math.floor(Math.random() * (52 - 1 + 1)) + 1;

        return randomnumber;
    }