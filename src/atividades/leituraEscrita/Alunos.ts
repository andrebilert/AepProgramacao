import {writeFile} from 'fs/promises'
import {readFile} from 'fs/promises'

//criando array de objetos
const alunosArr = [
    {
        nome: 'Luana',
        idade: 19,
        ra: '00000-01'
    },
    {
        nome: 'Mykaelly',
        idade: 20, 
        ra: '00000-02'
    },
    {
        nome: 'Gabriel',
        idade: 23,
        ra: '00000-03'
    },
    {
        nome: 'Wilson',
        idade: '102',
        ra: '00000-00'
    }
]

export class Alunos{
    private alunos = alunosArr

    constructor(){

    }

    public writeStudent(){
        // criando arquivo json com o array de objetos
        try{
            console.log("Criando lista de alunos")
            // converte um objeto js para um objeto json
            // writeFile -> escreve um array em um json
            writeFile('alunos.json', JSON.stringify(this.alunos, null, 2))
        }
        catch(err){
            console.error('Erro ao tentar escrever no arquivo', err)
        }
    }

    async readStudent(){
        // readFile -> leitura de um json 
        // 
        const leuMemo = await readFile('alunos.json', "utf-8")
        let result = JSON.parse(leuMemo);
        console.log(result[1].nome)
    }
}



