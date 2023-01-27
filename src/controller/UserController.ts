import { user, userInputDTO } from "../model/user";
import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
    constructor(private userBusiness: UserBusiness ) {}
    insertUser = async(req:Request, res:Response) => {
        try {
            const user:userInputDTO = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
            await this.userBusiness.insertUser(user)
            res.status(201).send("Sucess!")
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }
}