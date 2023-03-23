import { Request, Response } from "express";
import ProductService from "../service/productService";

// controller pega o parametro e passa para a service
class ProductController {
    async postCreate(req: Request, res: Response) {
        //escrever o body da requisição 
        await ProductService.createProduct(req.body)
        return res.status(201).send()
    }
    //controller para buscar e retornar valores 
    async getReadProduct(req: Request, res: Response) {
        const produtos = await ProductService.readProduct()
        return res.status(200).send(produtos)
    }

    async getStock(req: Request, res: Response) {
        const produtos = await ProductService.stockProduct()
        return res.status(200).send(produtos)
    }

    async getStockSum(req: Request, res: Response) {
        const stockValue = await ProductService.getStockValue()
        return res.status(200).json(stockValue)
    }
}

export default new ProductController()
