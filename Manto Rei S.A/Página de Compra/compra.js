let miniaturaUm = document.getElementById("miniatura1") 
let miniaturaDois = document.getElementById("miniatura2") 
let miniaturaTres = document.getElementById("miniatura3") 
let principalImg = document.getElementById("img-principal")

let camisaNome = document.getElementById("nome-camisa")
let camisaPrecoCortado = document.getElementById("preco-camisa-cortado")
let camisaPreco = document.getElementById("preco-camisa")
let descricaoTime = document.getElementById("descricao-time")
let descricaoMarca = document.getElementById("marca")
let descricaoMaterial = document.getElementById("material")
let descricaoGarantia = document.getElementById("garantia")
let descricaoPatrocinio = document.getElementById("patrocinio")
let descricaoCor = document.getElementById("cor-predominante")

let similares1 = document.getElementById("produtos-similares-um")
let similares2 = document.getElementById("produtos-similares-dois")
let similares3 = document.getElementById("produtos-similares-tres")
let similares4 = document.getElementById("produtos-similares-quatro")

let botaoP = document.getElementById("btP")
let botaoM = document.getElementById("btM")
let botaoG = document.getElementById("btG")
let botao
let addBotao

let compras = []

let time
let clube
let addVariacao
let addCamisa
let addPreco
let vetorVariacaoCamisa = []
let camisas = []
let camisaNaTela = null

const imgs = ["../IMG/propaganda2.png", "../IMG/propaganda3.png", "../IMG/propaganda.png"]

let divCarro = document.getElementById("img-propaganda") 
let i = 0 
let interval = setInterval(function(){
if(i <= imgs.length - 1){
    divCarro.src = imgs[i]
    i++;
}
else{
    i = 0
}
},6000);

carregamentoInicial()


function efetuarCompra(){

    comprasCarrinho = JSON.parse(localStorage.getItem("COMPRA"))
    if(comprasCarrinho == null){

        comprasCarrinho = []
    }

    addBotao = JSON.parse(localStorage.getItem("Tamanho"))
    time = JSON.parse(localStorage.getItem("Camisa"))
    addVariacao = JSON.parse(localStorage.getItem("VariacaoDaCamisa"))
    addPreco = JSON.parse(localStorage.getItem("Preco"))
    
    let carrinho = {

        camisaObjeto: "",
        variacaoObjeto: "",
        tamanhoObjeto: "",
        valorObjeto: ""
    }
    
    carrinho.tamanhoObjeto = addBotao
    carrinho.camisaObjeto = time
    carrinho.variacaoObjeto = addVariacao
    carrinho.valorObjeto = addPreco

    
    comprasCarrinho.push(carrinho)
    
    
    localStorage.setItem("COMPRA", JSON.stringify(comprasCarrinho))

    alert("Compra Efetuada")
}

function mudarVariacao(nova){
    camisas[camisaNaTela].variacao = nova;
    localStorage.setItem("VariacaoDaCamisa", JSON.stringify(nova))
    // colocar a camisa 
    principalImg.src = `../IMG/camisa${camisas[camisaNaTela].descricaoTime}${nova}.png`

    

    botaoP.style.backgroundColor = "#ffffff"
    botaoM.style.backgroundColor = "#ffffff"
    botaoG.style.backgroundColor = "#ffffff"
    

}

function salvaTime(time){

    localStorage.setItem("Camisa", JSON.stringify(time))
    clube = time
    localStorage.setItem("Camisa", JSON.stringify(clube))
    addCamisa = time
    
    
    window.location.href="../Página de Compra/compra.html"
}


function puxaCamisa(){
    
    botaoP.style.backgroundColor = "#ffffff"
    botaoM.style.backgroundColor = "#ffffff"
    botaoG.style.backgroundColor = "#ffffff"
    
    clube = JSON.parse(localStorage.getItem("Camisa"))
    time = clube
    
    addVariacao = JSON.parse(localStorage.getItem("VariacaoDaCamisa"))
    if(addVariacao == null){

        addVariacao = 1
        localStorage.setItem("VariacaoDaCamisa", JSON.stringify(addVariacao))
    }else{
        addVariacao = 1
        localStorage.setItem("VariacaoDaCamisa", JSON.stringify(addVariacao))
    }

    for(i=0; i<camisas.length; i++){

        
        if(camisas[i].descricaoTime == clube){

            camisaNaTela = i
            
            miniaturaUm.src = camisas[i].miniaturaUm
            miniaturaDois.src = camisas[i].miniaturaDois
            miniaturaTres.src = camisas[i].miniaturaTres
            principalImg.src = camisas[i].principalImg
            
            camisaNome.innerHTML = camisas[i].camisaNome
            camisaPrecoCortado.innerHTML = camisas[i].camisaPrecoCortado
            camisaPreco.innerHTML = camisas[i].camisaPreco
            addPreco = camisas[i].camisaPreco
            localStorage.setItem("Preco", JSON.stringify(addPreco))

            descricaoTime.innerHTML = camisas[i].descricaoTime
            descricaoMarca.innerHTML = camisas[i].descricaoMarca
            descricaoPatrocinio.innerHTML = camisas[i].descricaoPatrocinio

            similares1.src = "../IMG/camisaFlamengo1.png"
            similares2.src = "../IMG/camisaArgentina1.png"
            similares3.src = "../IMG/camisaInternacional1.png"
            similares4.src = "../IMG/camisaArgentina3.png"
        }
    }
    
}

function carregarCamisa(time){
    
    botaoP.style.backgroundColor = "#ffffff"
    botaoM.style.backgroundColor = "#ffffff"
    botaoG.style.backgroundColor = "#ffffff"

    localStorage.setItem("Camisa", JSON.stringify(time))
    clube = time
    localStorage.setItem("Camisa", JSON.stringify(clube))
    
    addVariacao = JSON.parse(localStorage.getItem("VariacaoDaCamisa"))
    if(addVariacao == null){

        addVariacao = 1
        localStorage.setItem("VariacaoDaCamisa", JSON.stringify(addVariacao))
    }else{
        addVariacao = 1
        localStorage.setItem("VariacaoDaCamisa", JSON.stringify(addVariacao))
    }

    for(i=0; i<camisas.length; i++){

        
        if(camisas[i].descricaoTime == time){

            camisaNaTela = i
            
            miniaturaUm.src = camisas[i].miniaturaUm
            miniaturaDois.src = camisas[i].miniaturaDois
            miniaturaTres.src = camisas[i].miniaturaTres
            principalImg.src = camisas[i].principalImg
            
            camisaNome.innerHTML = camisas[i].camisaNome
            camisaPrecoCortado.innerHTML = camisas[i].camisaPrecoCortado
            camisaPreco.innerHTML = camisas[i].camisaPreco
            addPreco = camisas[i].camisaPreco
            localStorage.setItem("Preco", JSON.stringify(addPreco))
            
            descricaoTime.innerHTML = camisas[i].descricaoTime
            descricaoMarca.innerHTML = camisas[i].descricaoMarca
            descricaoPatrocinio.innerHTML = camisas[i].descricaoPatrocinio

            similares1.src = "../IMG/camisaFlamengo1.png"
            similares2.src = "../IMG/camisaArgentina1.png"
            similares3.src = "../IMG/camisaInternacional1.png"
            similares4.src = "../IMG/camisaArgentina3.png"

            
        }
    }
    
    
}

function botaoAcionado(botao){

    if(botao == "Tamanho P"){

        botaoP.style.backgroundColor = "#808080"
        botaoM.style.backgroundColor = "#ffffff"
        botaoG.style.backgroundColor = "#ffffff"
        localStorage.setItem("Tamanho", JSON.stringify(botao))
    }

    if(botao == "Tamanho M"){

        botaoP.style.backgroundColor = "#ffffff"
        botaoM.style.backgroundColor = "#808080"
        botaoG.style.backgroundColor = "#ffffff"
        localStorage.setItem("Tamanho", JSON.stringify(botao))
    }

    if(botao == "Tamanho G"){

        botaoP.style.backgroundColor = "#ffffff"
        botaoM.style.backgroundColor = "#ffffff"
        botaoG.style.backgroundColor = "#808080"
        localStorage.setItem("Tamanho", JSON.stringify(botao))
    }

    
}

function pesquisaCamisa() {

    let inputPesquisa = document.getElementById('pesquisa').value
    inputPesquisa = inputPesquisa.toLowerCase();
    let classCamisetas = document.getElementsByClassName('camisetas');
      
    for (i = 0; i < classCamisetas.length; i++) { 
        if (!classCamisetas[i].innerHTML.toLowerCase().includes(inputPesquisa)) {
            classCamisetas[i].style.display="none";
        }
        else {
            classCamisetas[i].style.display="list-item";                 
        }
    }
}


function linkPaginaPrincipal(){

    window.location.href = "../HomePage/HomePage.html"

}

function linkCadastroProdutos(){

    window.location.href = "../CadastroProdutos/CadastroProdutos.html"

}

function linkLogin(){

    window.location.href = "../Login/Login.html"

}

function linkCarrinho(){

    window.location.href = "../Carrinho/carrinho.html"

}
function carregamentoInicial(){

    let alemanha = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha1.png`,

        camisaNome: "Camisa da Alemanha",
        camisaPrecoCortado: "R$349,00",
        camisaPreco: 249,

        descricaoTime: "Alemanha",
        descricaoMarca: "Adidas",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Branco",

        variacao: 1
    }

        camisas.push(alemanha)


    let alemanha2 = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha2.png`,

        camisaNome: "Camisa da Alemanha",
        camisaPrecoCortado: "",
        camisaPreco: 249,

        descricaoTime: "Alemanha2",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Preto",
        
        variacao: 2
    }

        camisas.push(alemanha2)



    let alemanha3 = { 

        miniaturaUm: `../IMG/camisaAlemanha1.png`,        
        miniaturaDois: `../IMG/camisaAlemanha2.png`,        
        miniaturaTres: `../IMG/camisaAlemanha3.png`,        
        principalImg: `../IMG/camisaAlemanha3.png`,

        camisaNome: "Camisa da Alemanha",
        camisaPrecoCortado: "",
        camisaPreco: 249,

        descricaoTime: "Alemanha3",
        descricaoMarca: "Adidas",
        descricaoMaterial: "Poliéster",
        descricaoGarantia: "Contra defeito de fabricação",
        descricaoPatrocinio: "Nenhum",
        descricaoCor: "Vinho",
        
        variacao: 3
    }

        camisas.push(alemanha3)


    let argentina = { 

        miniaturaUm: `../IMG/camisaArgentina1.png`,        
        miniaturaDois: `../IMG/camisaArgentina2.png`,        
        miniaturaTres: `../IMG/camisaArgentina3.png`,        
        principalImg: `../IMG/camisaArgentina1.png`,

        camisaNome: "Camisa da Argentina",
        camisaPrecoCortado: "R$349,99",
        camisaPreco: 299,

        descricaoTime: "Argentina",
        descricaoMarca: "Adidas",
        descricaoPatrocinio: "Nenhum",
        
        variacao: 1
    }

        camisas.push(argentina)

        let argentina2 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina2.png`,
    
            camisaNome: "Camisa da Argentina",
            camisaPrecoCortado: "R$349,99",
            camisaPreco: 299,
    
            descricaoTime: "Argentina2",
            descricaoMarca: "Adidas",
            descricaoPatrocinio: "Nenhum",
            
            variacao: 2
        }
    
            camisas.push(argentina2)

        let argentina3 = { 

            miniaturaUm: `../IMG/camisaArgentina1.png`,        
            miniaturaDois: `../IMG/camisaArgentina2.png`,        
            miniaturaTres: `../IMG/camisaArgentina3.png`,        
            principalImg: `../IMG/camisaArgentina3.png`,
    
            camisaNome: "Camisa da Argentina",
            camisaPrecoCortado: "349,00",
            camisaPreco: 299,
    
            descricaoTime: "Argentina3",
            descricaoMarca: "Adidas",
            descricaoPatrocinio: "Nenhum",
            
            variacao: 3
        }
    
            camisas.push(argentina3)

        let brasil = { 

            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil1.png`,
    
            camisaNome: "Camisa do Brasil",
            camisaPrecoCortado: "R$400,00",
            camisaPreco: 359,
    
            descricaoTime: "Brasil",
            descricaoMarca: "Nike",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Amarelo",
    
            variacao: 1
        }
    
            camisas.push(brasil)
        
        
        let brasil2 = { 
    
            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil2.png`,
    
            camisaNome: "Camisa do Brasil",
            camisaPrecoCortado: "R$400,00",
            camisaPreco: 359,
    
            descricaoTime: "Brasil2",
            descricaoMarca: "Nike",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Azul",
            
            variacao: 2
        }
    
            camisas.push(brasil2)
        
        
        
        let brasil3 = { 
    
            miniaturaUm: `../IMG/camisaBrasil1.png`,        
            miniaturaDois: `../IMG/camisaBrasil2.png`,        
            miniaturaTres: `../IMG/camisaBrasil3.png`,        
            principalImg: `../IMG/camisaBrasil3.png`,
    
            camisaNome: "Camisa do Brasil",
            camisaPrecoCortado: "R$280,00",
            camisaPreco: 359,
    
            descricaoTime: "Brasil3",
            descricaoMarca: "Nike",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
            
            variacao: 3
        }
    
            camisas.push(brasil3)

        let coreia = { 

            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia1.png`,
    
            camisaNome: "Camisa da Coreia do Sul",
            camisaPrecoCortado: "",
            camisaPreco: 249,
    
            descricaoTime: "Coreia",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
    
            variacao: 1
        }
    
            camisas.push(coreia)
        
        
        let coreia2 = { 
    
            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia2.png`,
    
            camisaNome: "Camisa da Coreia do Sul",
            camisaPrecoCortado: "",
            camisaPreco: 249,

    
            descricaoTime: "Coreia2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(coreia2)
        
        
        
        let coreia3 = { 
    
            miniaturaUm: `../IMG/camisaCoreia1.png`,        
            miniaturaDois: `../IMG/camisaCoreia2.png`,        
            miniaturaTres: `../IMG/camisaCoreia3.png`,        
            principalImg: `../IMG/camisaCoreia3.png`,
    
            camisaNome: "Camisa da Coreia do Sul",
            camisaPrecoCortado: "",
            camisaPreco: 249,

    
            descricaoTime: "coreia3",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            
            variacao: 3
        }
        
            camisas.push(coreia3)

        let franca = { 

            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca1.png`,
    
            camisaNome: "Camisa da França",
            camisaPrecoCortado: "R$349,99",
            camisaPreco: 299,
    
            descricaoTime: "Franca",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(franca)
        
        
        let franca2 = { 
    
            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca2.png`,
    
            camisaNome: "Camisa da França",
            camisaPrecoCortado: "R$349,99",
            camisaPreco: 299,
    
            descricaoTime: "Franca2",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(franca2)
        
        
        
        let franca3 = { 
    
            miniaturaUm: `../IMG/camisaFranca1.png`,        
            miniaturaDois: `../IMG/camisaFranca2.png`,        
            miniaturaTres: `../IMG/camisaFranca3.png`,        
            principalImg: `../IMG/camisaFranca3.png`,
    
            camisaNome: "Camisa da França",
            camisaPrecoCortado: "R$349,99",
            camisaPreco: 299,
    
            descricaoTime: "Franca3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }
    
            camisas.push(franca3)

        let holanda = { 

            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda1.png`,
    
            camisaNome: "Camisa da Holanda",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,
    
            descricaoTime: "Holanda",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(holanda)
        
        
        let holanda2 = { 
    
            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda2.png`,
    
            camisaNome: "Camisa da Holanda",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,
    
            descricaoTime: "Holanda2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(holanda2)
        
        
        
        let holanda3 = { 
    
            miniaturaUm: `../IMG/camisaHolanda1.png`,        
            miniaturaDois: `../IMG/camisaHolanda2.png`,        
            miniaturaTres: `../IMG/camisaHolanda3.png`,        
            principalImg: `../IMG/camisaHolanda3.png`,
    
            camisaNome: "Camisa da Holanda",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,
    
            descricaoTime: "Holanda3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }
    
            camisas.push(holanda3)



        let portugal = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal1.png`,

            camisaNome: "Camisa de Portugal",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,

            descricaoTime: "Portugal",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",

            variacao: 1
        }

            camisas.push(portugal)
        
        
        let portugal2 = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal2.png`,

            camisaNome: "Camisa de Portugal",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,

            descricaoTime: "Portugal2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }

            camisas.push(portugal2)
        
        
        
        let portugal3 = { 

            miniaturaUm: `../IMG/camisaPortugal1.png`,        
            miniaturaDois: `../IMG/camisaPortugal2.png`,        
            miniaturaTres: `../IMG/camisaPortugal3.png`,        
            principalImg: `../IMG/camisaPortugal3.png`,

            camisaNome: "Camisa de Portugal",
            camisaPrecoCortado: "R$299,99",
            camisaPreco: 249,

            descricaoTime: "Portugal3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }

            camisas.push(portugal3)


        let barcelona = { 

            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "Barcelona",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Spotify",
    
            variacao: 1
        }
    
            camisas.push(barcelona)
        
        
        let barcelona2 = { 
    
            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "Barcelona2",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Spotify",
            
            variacao: 2
        }
    
            camisas.push(barcelona2)
        
        
        
        let barcelona3 = { 
    
            miniaturaUm: `../IMG/camisaBarcelona1.png`,        
            miniaturaDois: `../IMG/camisaBarcelona2.png`,        
            miniaturaTres: `../IMG/camisaBarcelona3.png`,        
            principalImg: `../IMG/camisaBarcelona1.png`,
    
            camisaNome: "Camisa do Barcelona",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "Barcelona3",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Spotify",
            
            variacao: 3
        }
    
            camisas.push(barcelona3)


        let borussia = { 

            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia1.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 179,
    
            descricaoTime: "Borussia",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "1&1",
    
            variacao: 1
        }
    
            camisas.push(borussia)
        
        
        let borussia2 = { 
    
            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia2.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 179,
    
            descricaoTime: "Borussia2",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "1&1",
            
            variacao: 2
        }
    
            camisas.push(borussia2)
        
        
        
        let borussia3 = { 
    
            miniaturaUm: `../IMG/camisaBorussia1.png`,        
            miniaturaDois: `../IMG/camisaBorussia2.png`,        
            miniaturaTres: `../IMG/camisaBorussia3.png`,        
            principalImg: `../IMG/camisaBorussia1.png`,
    
            camisaNome: "Camisa do Borussia",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 179,
    
            descricaoTime: "Borussia3",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "1&1",
            
            variacao: 3
        }
    
            camisas.push(borussia3)


        let liverpool = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool1.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,

            descricaoTime: "Liverpool",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Standard Chartered",

            variacao: 1
        }

            camisas.push(liverpool)
        
        
        let liverpool2 = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool2.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 199,

            descricaoTime: "Liverpool2",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Standard Chartered",
            
            variacao: 2
        }

            camisas.push(liverpool2)
        
        
        
        let livepool3 = { 

            miniaturaUm: `../IMG/camisaLiverpool1.png`,        
            miniaturaDois: `../IMG/camisaLiverpool2.png`,        
            miniaturaTres: `../IMG/camisaLiverpool3.png`,        
            principalImg: `../IMG/camisaLiverpool3.png`,

            camisaNome: "Camisa do Liverpool",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 199,

            descricaoTime: "Livepool3",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Standard Chartered",
            
            variacao: 3
        }

            camisas.push(livepool3)

        let manchestercity = { 

            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity1.png`,
    
            camisaNome: "Camisa do Manchester City",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "ManchesterCity",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Etihad Airways",
    
            variacao: 1
        }
    
            camisas.push(manchestercity)
        
        
        let manchestercity2 = { 
    
            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity2.png`,
    
            camisaNome: "Camisa do ManchesterCity",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "ManchesterCity2",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Etihad Airways",
            
            variacao: 2
        }
    
            camisas.push(manchestercity2)
        
        
        
        let manchestercity3 = { 
    
            miniaturaUm: `../IMG/camisaManCity1.png`,        
            miniaturaDois: `../IMG/camisaManCity2.png`,        
            miniaturaTres: `../IMG/camisaManCity3.png`,        
            principalImg: `../IMG/camisaManCity3.png`,
    
            camisaNome: "Camisa do ManchesterCity",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "ManchesterCity3",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Etihad Airways",
            
            variacao: 3
        }
    
            camisas.push(manchestercity3)


        let milan = { 

            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan1.png`,
    
            camisaNome: "Camisa do milan",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Milan",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Emirates",
    
            variacao: 1
        }
    
            camisas.push(milan)
        
        
        
        let milan2 = { 
    
            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan2.png`,
    
            camisaNome: "Camisa do milan",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Milan2",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Emirates",
    
            variacao: 2
        }
    
            camisas.push(milan2)
        
        
        
        
        let milan3 = { 
    
            miniaturaUm: `../IMG/camisaMilan1.png`,        
            miniaturaDois: `../IMG/camisaMilan2.png`,        
            miniaturaTres: `../IMG/camisaMilan3.png`,        
            principalImg: `../IMG/camisaMilan3.png`,
    
            camisaNome: "Camisa do Milan",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Milan3",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Emirates",
    
            variacao: 3
        }
    
            
            camisas.push(milan3)



        let psg = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG1.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,

            descricaoTime: "PSG",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Accor Live Limitless",

            variacao: 1
        }

            camisas.push(psg)
        
        
        let psg2 = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG2.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 199,

            descricaoTime: "PSG2",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Accor Live Limitless",

            variacao: 2
        }

            camisas.push(psg2)
        
        
        
        let psg3 = { 

            miniaturaUm: `../IMG/camisaPSG1.png`,        
            miniaturaDois: `../IMG/camisaPSG2.png`,        
            miniaturaTres: `../IMG/camisaPSG3.png`,        
            principalImg: `../IMG/camisaPSG1.png`,

            camisaNome: "Camisa do PSG",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 199,

            descricaoTime: "PSG3",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Accor Live Limitless",

            variacao: 3
        }

            camisas.push(psg3)


        let realmadrid = { 

            miniaturaUm: `../IMG/camisaRealMadrid1.png`,        
            miniaturaDois: `../IMG/camisaRealMadrid2.png`,        
            miniaturaTres: `../IMG/camisaRealMadrid3.png`,        
            principalImg: `../IMG/camisaRealMadrid1.png`,
    
            camisaNome: "Camisa do Real Madrid",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "RealMadrid",
            descricaoCor: "Branco",
            descricaoPatrocinio: "Emirates",
    
            variacao: 1
        }
    
            camisas.push(realmadrid)
        
        
        let realmadrid2 = { 
    
            miniaturaUm: `../IMG/camisaRealMadrid1.png`,        
            miniaturaDois: `../IMG/camisaRealMadrid2.png`,        
            miniaturaTres: `../IMG/camisaRealMadrid3.png`,        
            principalImg: `../IMG/camisaRealMadrid2.png`,
    
            camisaNome: "Camisa do Real Madrid",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "RealMadrid2",
            descricaoCor: "Preto",
            descricaoPatrocinio: "Emirates",
            
            variacao: 2
        }
    
            camisas.push(realmadrid2)
        
        
        
        let realmadrid3 = { 
    
            miniaturaUm: `../IMG/camisaRealMadrid1.png`,        
            miniaturaDois: `../IMG/camisaRealMadrid2.png`,        
            miniaturaTres: `../IMG/camisaRealMadrid3.png`,        
            principalImg: `../IMG/camisaRealMadrid3.png`,
    
            camisaNome: "Camisa do Real Madrid",
            camisaPrecoCortado: "R$249,99",
            camisaPreco: 199,
    
            descricaoTime: "RealMadrid3",
            descricaoCor: "Vinho",
            descricaoPatrocinio: "Emirates",
            
            variacao: 3
        }
    
            camisas.push(realmadrid3)


        let corinthians = { 

            miniaturaUm: `../IMG/camisaCorinthians1.png`,        
            miniaturaDois: `../IMG/camisaCorinthians2.png`,        
            miniaturaTres: `../IMG/camisaCorinthians3.png`,        
            principalImg: `../IMG/camisaCorinthians1.png`,
    
            camisaNome: "Camisa do Corinthians",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Corinthians",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(corinthians)
        
        
        let corinthians2 = { 
    
            miniaturaUm: `../IMG/camisaCorinthians1.png`,        
            miniaturaDois: `../IMG/camisaCorinthians2.png`,        
            miniaturaTres: `../IMG/camisaCorinthians3.png`,        
            principalImg: `../IMG/camisaCorinthians2.png`,
    
            camisaNome: "Camisa do Corinthians",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Corinthians2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(corinthians2)
        
        
        
        let corinthians3 = { 
    
            miniaturaUm: `../IMG/camisaCorinthians1.png`,        
            miniaturaDois: `../IMG/camisaCorinthians2.png`,        
            miniaturaTres: `../IMG/camisaCorinthians3.png`,        
            principalImg: `../IMG/camisaCorinthians3.png`,
    
            camisaNome: "Camisa do Corinthians",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Corinthians3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Nike",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }
    
            camisas.push(corinthians3)


        let flamengo = { 

            miniaturaUm: `../IMG/camisaFlamengo1.png`,        
            miniaturaDois: `../IMG/camisaFlamengo2.png`,        
            miniaturaTres: `../IMG/camisaFlamengo3.png`,        
            principalImg: `../IMG/camisaFlamengo1.png`,
    
            camisaNome: "Camisa do Flamengo",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Flamengo",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(flamengo)
        
        
        let flamengo2 = { 
    
            miniaturaUm: `../IMG/camisaFlamengo1.png`,        
            miniaturaDois: `../IMG/camisaFlamengo2.png`,        
            miniaturaTres: `../IMG/camisaFlamengo3.png`,        
            principalImg: `../IMG/camisaFlamengo2.png`,
    
            camisaNome: "Camisa do Flamengo",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Flamengo2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(flamengo2)
        
        
        
        let flamengo3 = { 
    
            miniaturaUm: `../IMG/camisaFlamengo1.png`,        
            miniaturaDois: `../IMG/camisaFlamengo2.png`,        
            miniaturaTres: `../IMG/camisaFlamengo3.png`,        
            principalImg: `../IMG/camisaFlamengo3.png`,
    
            camisaNome: "Camisa do Flamengo",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Flamengo3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }
    
            camisas.push(flamengo3)

        let fluminense = { 

            miniaturaUm: `../IMG/camisaFluminense1.png`,        
            miniaturaDois: `../IMG/camisaFluminense2.png`,        
            miniaturaTres: `../IMG/camisaFluminense3.png`,        
            principalImg: `../IMG/camisaFluminense1.png`,
    
            camisaNome: "Camisa do Fluminense",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Fluminense",
            descricaoMarca: "nike",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Betano",

            variacao: 1
        }
    
            camisas.push(fluminense)
        
        
        let fluminense2 = { 
    
            miniaturaUm: `../IMG/camisaFluminense1.png`,        
            miniaturaDois: `../IMG/camisaFluminense2.png`,        
            miniaturaTres: `../IMG/camisaFluminense3.png`,        
            principalImg: `../IMG/camisaFluminense2.png`,
    
            camisaNome: "Camisa do Fluminense",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Fluminense2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Betano",
            
            variacao: 2
        }
    
            camisas.push(fluminense2)
        
        
        
        let fluminense3 = { 
    
            miniaturaUm: `../IMG/camisaFluminense1.png`,        
            miniaturaDois: `../IMG/camisaFluminense2.png`,        
            miniaturaTres: `../IMG/camisaFluminense3.png`,        
            principalImg: `../IMG/camisaFluminense3.png`,
    
            camisaNome: "Camisa do Fluminense",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Fluminense3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Betano",

            variacao: 3
        }
    
            camisas.push(fluminense3)

        let fortaleza = { 

            miniaturaUm: `../IMG/camisaFortaleza1.png`,        
            miniaturaDois: `../IMG/camisaFortaleza2.png`,        
            miniaturaTres: `../IMG/camisaFortaleza3.png`,        
            principalImg: `../IMG/camisaFortaleza1.png`,
    
            camisaNome: "Camisa do Fortaleza",
            camisaPrecoCortado: "R$159,99",
            camisaPreco: 119,
    
            descricaoTime: "Fortaleza",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Leão 1918",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(fortaleza)
        
        
        let fortaleza2 = { 
    
            miniaturaUm: `../IMG/camisaFortaleza1.png`,        
            miniaturaDois: `../IMG/camisaFortaleza2.png`,        
            miniaturaTres: `../IMG/camisaFortaleza3.png`,        
            principalImg: `../IMG/camisaFortaleza2.png`,
    
            camisaNome: "Camisa do Fortaleza",
            camisaPrecoCortado: "R$159,99",
            camisaPreco: 119,
    
            descricaoTime: "Fortaleza2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Leão 1918",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            
            variacao: 2
        }
    
            camisas.push(fortaleza2)
        
        
        
        let fortaleza3 = { 
    
            miniaturaUm: `../IMG/camisaFortaleza1.png`,        
            miniaturaDois: `../IMG/camisaFortaleza2.png`,        
            miniaturaTres: `../IMG/camisaFortaleza3.png`,        
            principalImg: `../IMG/camisaFortaleza3.png`,
    
            camisaNome: "Camisa do Fortaleza",
            camisaPrecoCortado: "R$159,99",
            camisaPreco: 119,
    
            descricaoTime: "Fortaleza3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Leão 1918",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            
            variacao: 3
        }
    
            camisas.push(fortaleza3)

        let internacional = { 

            miniaturaUm: `../IMG/camisaInternacional1.png`,        
            miniaturaDois: `../IMG/camisaInternacional2.png`,        
            miniaturaTres: `../IMG/camisaInternacional3.png`,        
            principalImg: `../IMG/camisaInternacional1.png`,
    
            camisaNome: "Camisa do Internacional",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Internacional",
            descricaoMarca: "Adidas",
            descricaoPatrocinio: "Banrisul",
    
            variacao: 1
        }
    
            camisas.push(internacional)
        
        
        let internacional2 = { 
    
            miniaturaUm: `../IMG/camisaInternacional1.png`,        
            miniaturaDois: `../IMG/camisaInternacional2.png`,        
            miniaturaTres: `../IMG/camisaInternacional3.png`,        
            principalImg: `../IMG/camisaInternacional2.png`,
    
            camisaNome: "Camisa do Internacional",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Internacional2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            descricaoPatrocinio: "Banrisul",
            
            variacao: 2
        }
    
            camisas.push(internacional2)
        
        
        
        let internacional3 = { 
    
            miniaturaUm: `../IMG/camisaInternacional1.png`,        
            miniaturaDois: `../IMG/camisaInternacional2.png`,        
            miniaturaTres: `../IMG/camisaInternacional3.png`,        
            principalImg: `../IMG/camisaInternacional3.png`,
    
            camisaNome: "Camisa do Internacional",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Internacional3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            descricaoPatrocinio: "Banrisul",
    
            
            variacao: 3
        }
    
            camisas.push(internacional3)

        let palmeiras = { 

            miniaturaUm: `../IMG/camisaPalmeiras1.png`,        
            miniaturaDois: `../IMG/camisaPalmeiras2.png`,        
            miniaturaTres: `../IMG/camisaPalmeiras3.png`,        
            principalImg: `../IMG/camisaPalmeiras1.png`,
    
            camisaNome: "Camisa do Palmeiras",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Palmeiras",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Crefisa",
    
    
            variacao: 1
        }
    
            camisas.push(palmeiras)
        
        
        let palmeiras2 = { 
    
            miniaturaUm: `../IMG/camisaPalmeiras1.png`,        
            miniaturaDois: `../IMG/camisaPalmeiras2.png`,        
            miniaturaTres: `../IMG/camisaPalmeiras3.png`,        
            principalImg: `../IMG/camisaPalmeiras2.png`,
    
            camisaNome: "Camisa do Palmeiras",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Palmeiras2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Crefisa",
            
            variacao: 2
        }
    
            camisas.push(palmeiras2)
        
        
        
        let palmeiras3 = { 
    
            miniaturaUm: `../IMG/camisaPalmeiras1.png`,        
            miniaturaDois: `../IMG/camisaPalmeiras2.png`,        
            miniaturaTres: `../IMG/camisaPalmeiras3.png`,        
            principalImg: `../IMG/camisaPalmeiras3.png`,
    
            camisaNome: "Camisa do Palmeiras",
            camisaPrecoCortado: "",
            camisaPreco: 199,
    
            descricaoTime: "Palmeiras3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            descricaoMarca: "Puma",
            descricaoPatrocinio: "Crefisa",
    
            
            variacao: 3
        }
    
            camisas.push(palmeiras3)

        let santos = { 

            miniaturaUm: `../IMG/camisaSantos1.png`,        
            miniaturaDois: `../IMG/camisaSantos2.png`,        
            miniaturaTres: `../IMG/camisaSantos3.png`,        
            principalImg: `../IMG/camisaSantos1.png`,
    
            camisaNome: "Camisa do Santos",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Santos",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Branco",
    
            variacao: 1
        }
    
            camisas.push(santos)
        
        
        let santos2 = { 
    
            miniaturaUm: `../IMG/camisaSantos1.png`,        
            miniaturaDois: `../IMG/camisaSantos2.png`,        
            miniaturaTres: `../IMG/camisaSantos3.png`,        
            principalImg: `../IMG/camisaSantos2.png`,
    
            camisaNome: "Camisa do Santos",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Santos2",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Preto",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Sumup",
            
            variacao: 2
            
        }
        
        camisas.push(santos2)
        
        
        let santos3 = { 
    
            miniaturaUm: `../IMG/camisaSantos1.png`,        
            miniaturaDois: `../IMG/camisaSantos2.png`,        
            miniaturaTres: `../IMG/camisaSantos3.png`,        
            principalImg: `../IMG/camisaSantos3.png`,
    
            camisaNome: "Camisa do Santos",
            camisaPrecoCortado: "R$199,99",
            camisaPreco: 149,
    
            descricaoTime: "Santos3",
            descricaoMarca: "Adidas",
            descricaoMaterial: "Poliéster",
            descricaoGarantia: "Contra defeito de fabricação",
            descricaoPatrocinio: "Nenhum",
            descricaoCor: "Vinho",
            descricaoMarca: "Umbro",
            descricaoPatrocinio: "Banco BMG",
    
            
            variacao: 3
        }
    
            camisas.push(santos3)
                    
}
    