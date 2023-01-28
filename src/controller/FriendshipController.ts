import { FriendshipBusiness } from "../business/friendship/FriendshipBusiness";
import { friendshipDTO } from "../model/friendship";
import { Request, Response } from "express";

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
}