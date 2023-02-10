import { CustomError, InvalidInput } from "../../error/CustomError";
import { friendship, friendshipDTO } from "../../model/friendship";
import { FriendshipRepository } from "./FriendshipRepository";
import { v4 as generateId } from 'uuid'

export class FriendshipBusiness {
    constructor(private friendshipDatabase:FriendshipRepository){}

    makeFriends = async(friendship:friendshipDTO):Promise<void> => {
        try {
            if (!friendship.fkUser1 || !friendship.fkUser2) {
                throw new InvalidInput()
            }
            let id = generateId()
            let input:friendship = {
                id,
                FK_user1:friendship.fkUser1,
                FK_user2:friendship.fkUser2
            }
            await this.friendshipDatabase.makeFriends(input)
        } catch (error:any) {
            throw new Error(error.message);     
        }
    }

    getAll = async ():Promise<friendship[]> => {
        try {
            return await this.friendshipDatabase.getAll()
        } catch (error:any) {
            throw new Error(error.message);          
        }
    }
    getById = async(id:string):Promise<friendship[]> => {
        try {
            if (!id) {
                throw new CustomError(400, "Id must be passed as params")
            }
            
            let result:any = await this.friendshipDatabase.getById(id)
    
            
            if (result.length <= 0) {
                throw new CustomError(404, "Post not found :/")
            }
            
            return result

        } catch (error:any) {
            throw new CustomError(404, error.message);
            
        }
    }

    deleteById = async (id:string):Promise<void> => {
        try {
            if (!id) {
                throw new CustomError(400, "Id must be passed as params")
            }
            let  checkIfExists:any = await this.getById(id)
            checkIfExists = checkIfExists.length
            if (checkIfExists <= 0) {
                throw new CustomError(404, "Id not found");     
            }
            await this.friendshipDatabase.deleteById(id)
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);  
        }
    }
}