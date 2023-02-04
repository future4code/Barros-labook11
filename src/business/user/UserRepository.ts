import { user } from "../../model/user";

export interface UserRepository {
    insertUser(user:user):Promise<void>
    getUsers():Promise<user[]>
    getUserById(id:string):Promise<user>
}