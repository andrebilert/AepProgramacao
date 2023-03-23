import { Request, Response } from "express";

class UserFindController{
    public async find(req:Request, res:Response){
        return res.json("Andre")
    }
}

export default new UserFindController()