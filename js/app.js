let qtdPista        = parseInt(document.getElementById('qtd-pista').textContent);
let qtdCadeiraSup   = parseInt(document.getElementById('qtd-superior').textContent);
let qtdCadeiraInf   = parseInt(document.getElementById('qtd-inferior').textContent);
let edtQuantidade   = document.getElementById('qtd');

const Ingressos = {
        CadeiraInferior: 0,  
        CadeiraSuperior: 1,
        Pista: 2
    };

function validaQuantidade(Quantidade) {
    if ((Quantidade.value == '') || (Quantidade.value <= 0)) {
        alert('Preencha corretamente o campo de quantidade!');
        return false;
    }
    else {
        return true;
    }    
}

function validaIngresso(Quantidade, Disponiveis){
    if (Quantidade > Disponiveis){
        return false;
    }
    else{
        return true;
    }
}

function atualizaQtd(Ingresso){
    switch (Ingresso.IDProduto) {
        case Ingressos.CadeiraInferior:
            qtdCadeiraInf = Ingresso.Disponiveis;
            break;
        case Ingressos.CadeiraSuperior:
            qtdCadeiraSup = Ingresso.Disponiveis;
            break;
        case Ingressos.Pista:
            qtdPista = Ingresso.Disponiveis;
            break;
    }

    let campo = document.getElementById(Ingresso.IDHTMLProduto);
    campo.innerText = String(Ingresso.Disponiveis);
}

function comprar(){
    
    if (!validaQuantidade(edtQuantidade)){
        return;
    }
    
    let Ingresso = document.getElementById('tipo-ingresso').options[document.getElementById('tipo-ingresso').selectedIndex];
    let IDProduto = Ingresso.index;
    let DescProduto = Ingresso.text;
    let Quantidade = parseInt(edtQuantidade.value);
    let IDHTMLProduto = '';
    let Disponiveis = 0;
    let AProduto = {DescProduto, Quantidade, IDProduto, IDHTMLProduto, Disponiveis};

    vendeIngresso(AProduto); 
}

function vendeIngresso(Ingresso){

    switch (Ingresso.IDProduto){
        case Ingressos.Pista:
            Ingresso.Disponiveis = qtdPista;
            Ingresso.IDHTMLProduto = 'qtd-pista';
            break;
        case Ingressos.CadeiraSuperior:
            Ingresso.Disponiveis = qtdCadeiraSup;
            Ingresso.IDHTMLProduto = 'qtd-superior';
            break;
        case Ingressos.CadeiraInferior:
            Ingresso.Disponiveis = qtdCadeiraInf;
            Ingresso.IDHTMLProduto = 'qtd-inferior';
            break;
    }
 
    let temIngresso = validaIngresso(Ingresso.Quantidade, Ingresso.Disponiveis);   
    if (temIngresso){
        edtQuantidade.value = '';
        Ingresso.Disponiveis = (Ingresso.Disponiveis - Ingresso.Quantidade);
        atualizaQtd(Ingresso);
    }
    else{
        alert(`Ingressos para ${Ingresso.DescProduto} indisponíveis`);
        edtQuantidade.value = '';
        focus(edtQuantidade);
    }
}

