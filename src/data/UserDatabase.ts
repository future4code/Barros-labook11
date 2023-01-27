import { UserRepository } from "../business/user/UserRepository";
import { CustomError } from "../error/CustomError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    private static TABLE_NAME = "labook_users"

    insertUser = async(user:user):Promise<void> => {
        try {
            await BaseDatabase.connection
            .insert(user)
            .from(UserDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }
    getUsers = async(): Promise<user[]> => {
        try {
            let result:user[] = await BaseDatabase.connection
            .select('*')
            .from(UserDatabase.TABLE_NAME)
            console.log(result);
            
            return result
        } catch (error:any) {
            throw new CustomError(400, error.message);
            
        }
    }
}