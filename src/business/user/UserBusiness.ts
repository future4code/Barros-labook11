import { CustomError, InvalidEmail, InvalidInput, InvalidPassword } from "../../error/CustomError";
import { userInputDTO, user } from "../../model/user";
import { UserRepository } from "./UserRepository";
import { v4 as generateId } from 'uuid'



export class UserBusiness {
    constructor(private userDatabase: UserRepository){}

    insertUser = async (user:userInputDTO): Promise<void> => {
        try {
            if (!user.name || !user.email ||!user.password) {
                throw new InvalidInput()
            }
            if (!user.email.includes("@")) {
                throw new InvalidEmail()
            }
            if (user.password.length < 6) {
                throw new InvalidPassword()
            }

            const id = generateId()
            let input = {
                id, 
                name:user.name,
                email:user.email,
                password:user.password
            }
            await this.userDatabase.insertUser(input)
        } catch (error:any) {
            throw new CustomError(error.statusCode||400, error.message || error.sqlMessage);
            
        }
    }
    getUser = async():Promise<user[]> => {
        try {
            return await this.userDatabase.getUsers()
        } catch (error:any) {
            throw new Error(error.message||error.sqlMessage);
            
        }
    }
}