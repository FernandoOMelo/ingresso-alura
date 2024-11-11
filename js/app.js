let qtdPista        = parseInt(document.getElementById('qtd-pista').textContent);
let qtdCadeiraSup   = parseInt(document.getElementById('qtd-superior').textContent);
let qdtCadeiraInf   = parseInt(document.getElementById('qtd-inferior').textContent);
let edtQuantidade   = document.getElementById('qtd');

const Ingressos = {
        CadeiraInferior: 0,  
        CadeiraSuperior: 1,
        Pista: 2
    };
        

function comprar(){
    let Ingresso = document.getElementById('tipo-ingresso').selectedIndex;
  
    validaQuantidade(edtQuantidade);
    
    switch (Ingresso){
        case Ingressos.Pista:
            qtdPista = vendeIngresso(Ingressos.Pista, parseInt(edtQuantidade.value), qtdPista);
            atualizaQtd('qtd-pista', qtdPista);
            break;
        case Ingressos.CadeiraSuperior:
            qtdCadeiraSup = vendeIngresso(Ingressos.CadeiraSuperior, parseInt(edtQuantidade.value), qtdCadeiraSup); 
            atualizaQtd('qtd-superior', qtdCadeiraSup);
            break;
        case Ingressos.CadeiraInferior:
            qtdCadeiraInf = vendeIngresso(Ingressos.CadeiraInferior, parseInt(edtQuantidade.value), qdtCadeiraInf); 
            atualizaQtd('qtd-inferior', qdtCadeiraInf);
            break;
    }
}

function validaQuantidade(Quantidade) {
    if (Quantidade.value == '') {
        alert('Preencha o campo quantidade!');
    }

    if (parseInt(Quantidade.value) <= 0) {
        alert('A quantidade deve ser maior que zero!');
    }
}

function validaIngresso(AQtdIngresso, AQtdTipoIngresso){
    if (AQtdIngresso > AQtdTipoIngresso){
        return false;
    }
    else{
        return true;
    }
}

function vendeIngresso(Ingresso, Quantidade, Disponiveis){
    let temIngresso;
    temIngresso = validaIngresso(Quantidade, Disponiveis);
    if (temIngresso){
        edtQuantidade.value = '';
        Disponiveis = Disponiveis - Quantidade;
        return Disponiveis; 
    }
    else{
        alert(`Ingressos para indisponíveis`);
        edtQuantidade.value = '';
        return Disponiveis;
    }
}

function atualizaQtd(Ingresso, Quantidade){
    let campo = document.getElementById(Ingresso);
    campo.innerText = String(Quantidade);
}