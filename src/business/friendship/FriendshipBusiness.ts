import { InvalidInput } from "../../error/CustomError";
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
}