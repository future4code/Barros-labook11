import { FriendshipBusiness } from "../business/friendship/FriendshipBusiness";
import { friendship, friendshipDTO } from "../model/friendship";
import { Request, Response } from "express";
import { send } from "process";

export class FriendshipController {
    constructor(private friendshipBusiness:FriendshipBusiness){}

    makeFriends = async(req:Request, res:Response):Promise<void> => {
        try {
            let input:friendshipDTO = {
               fkUser1:req.body.fkUser1,
               fkUser2:req.body.fkUser2 
            }
            console.log(input);
            
            await this.friendshipBusiness.makeFriends(input)
            res.status(201).send("Sucess!")
        } catch (error:any) {
            res.status(error.message || error.sqlMessage)
        }
    }
    getAll = async(req:Request, res:Response) =>{
        try {
            let result =  await this.friendshipBusiness.getAll()
            res.status(200).send(result)
        } catch (error:any) {
            throw new Error(error.message||error.sqlMessage);
            
        }
    }
    getById = async(req:Request, res:Response) => {
        try {
            let id:string = req.params.id
            let result = await this.friendshipBusiness.getById(id)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(error.statusCode||404).send(error.message)
        }
    }

    deleteById = async(req:Request, res:Response):Promise<void> => {
        try {
            let id: string = req.params.id as string
            await this.friendshipBusiness.deleteById(id)
            res.status(201).send("Sucess!!")
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message||error.sqlMessage)
        }
    }
}