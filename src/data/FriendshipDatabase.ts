import { FriendshipRepository } from "../business/friendship/FriendshipRepository";
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
}