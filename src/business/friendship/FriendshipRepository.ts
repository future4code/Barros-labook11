import { friendship } from "../../model/friendship";

export interface FriendshipRepository {
    makeFriends(friendship:friendship):Promise<void>

    getAll():Promise<friendship[]>

    getById(id:string):Promise<friendship[]>

    deleteById(id:string):Promise<void>
}