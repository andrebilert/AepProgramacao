
// 15 - Importamos o Router do Express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import userFindController from './controller/userFindController'

// 16 - criamso uma constante routes e atribuimos a ela uma instancia de Router() 
const routes = Router()

// 17 - Estamos utilizando o método get da Router e passando como parametro o nome da rota e o que será executado quando ela for chamada

routes.get('/', healthCheckController.check)

routes.get('/users', userFindController.find)
// criando rota post que se chama products e vai executar o método que está no productController
routes.post('/products', productController.create)
//rota get para acessar os produtos e retornar os valores presentes nesse arquivo
routes.get('/products', productController.find)
//irá ler o arquivo e retornar um novo array de objetos 
routes.get('/products-stock', productController.stock)
//soma o valor do estoque e devolve na rota
routes.get('/products-stock-value', productController.stockSum)

export default routes