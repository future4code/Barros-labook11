import { PostBusiness } from "../business/post/PostBusiness";
import { Request, Response } from 'express'
import { postDTO } from "../model/post";

export class PostController {
    constructor(private postBusiness:PostBusiness ) {}
    insertPost = async (req:Request, res:Response):Promise<void> => {
        try {
            const post:postDTO = {
                photo:req.body.photo,
                description:req.body.description,
                type:req.body.type,
                authorId:req.body.authorId
            }
            await this.postBusiness.insertPost(post)
            res.status(201).send("Sucess!")
        } catch (error:any) {
            throw new Error(error.message||error.sqlMessage);            
        }
    }
}