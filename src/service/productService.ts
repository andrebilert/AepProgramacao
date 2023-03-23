import { writeFile } from 'fs/promises'
import { readFile } from 'fs/promises'

class ProductService {
    async createProduct(data) {
        try {
            // cria um arquivo products.json 
            await writeFile('products.json', JSON.stringify(data, null, 2))
        } catch (error) {
            console.log("Erro ", error)
        }
    }

    async readProduct() {
        try {
            const leuArquivo = await readFile('products.json', "utf-8")
            let result = JSON.parse(leuArquivo)//parse para evitar duplicação de codigo
            console.log(result)//nem precisa disso ja da pra testar na rota
            return result
        } catch (error) {
            console.log("Erro ", error)
        }
    }

    async stockProduct() {
        try {
            const produtos = await this.readProduct()//usando metodo já criado para ler os arquivos e jogar em uma variavel
            const produtosMap = produtos.map(produto => {//inserindo em uma constante a leitura mapeada da forma solicitada
                const obj = {
                    nome: produto.nome,
                    qtd: produto.qtde,
                    preco: produto.preco,
                    valor_estoque: produto.qtde * produto.preco
                }
                return obj
            })
            return produtosMap
        } catch (error) {
            console.log("Erro ", error);
        }
    }

    async getStockValue() {
        try {
            const stockList = await this.stockProduct()
            const stockValue = stockList.reduce((acc, atual) => {
                return acc + atual.valor_estoque
            }, 0)//acumulador começa em zero
            return stockValue
        } catch (error) {
            console.log("Erro ", error);
        }
    }
}

export default new ProductService()