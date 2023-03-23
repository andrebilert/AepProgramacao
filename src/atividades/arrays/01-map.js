const nums = [1,2,3,4,5]

const dobro = (n) => n * 2

const resultado = nums.map(item => item * 2)

//console.log('resultado', resultado)
//console.log(nums.map(dobro))

const nomes = ['Myka', 'Andre', 'Luana', 'Lucas', 'Leon']
//pegar a primeira letra 

const letras = nomes.map(text => text[0])
//console.log(letras)
// ordem alfabetica
const nomesOrdem = nomes.sort()
//console.log(nomesOrdem)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

// 1 utilizando mostrar somente os nomes do produtos no carrinho
const produtos = carrinho.map(produto => produto.nome)
console.log(produtos)

// 2 exibam o array com multiplicação da qtde pelo preco
const preco = carrinho.map(produto => produto.qtde * produto.preco)
console.log(preco)