import { FriendshipRepository } from "../business/friendship/FriendshipRepository";
import { CustomError } from "../error/CustomError";
import { friendship } from "../model/friendship";
import { BaseDatabase } from "./BaseDatabase";


export class FriendshipDatabase extends BaseDatabase implements FriendshipRepository {
    private static TABLE_NAME = "friendship"
    makeFriends = async(friendship: friendship): Promise<void> => {
        try {
            await BaseDatabase.connection
            .insert(friendship)
            .from(FriendshipDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
    getAll = async () : Promise<friendship[]> => {
        let result = await BaseDatabase.connection
        .select()
        .from(FriendshipDatabase.TABLE_NAME)
        return result
    }

    getById = async (id:string) :Promise<friendship[]> => {
        let result:friendship[] = await BaseDatabase.connection
        .select()
        .where({FK_user1:id }||{FK_user2:id})
        .from(FriendshipDatabase.TABLE_NAME)
        return result
    }

    deleteById = async(id: string): Promise<void> => {
        try {

            await BaseDatabase.connection
            .delete()
            .where({id})
            .from(FriendshipDatabase.TABLE_NAME)

        } catch (error:any) {
            throw new Error(error.message);   
        }
    }
}