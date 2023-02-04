import { CustomError, InvalidInput } from "../../error/CustomError";
import { post, postDTO } from "../../model/post";
import { PostRepository } from "./PostRepository";
import { postType } from "../../model/post";
import { v4 as generateId } from 'uuid'
import { stringify } from "querystring";
import { FriendshipDatabase } from "../../data/FriendshipDatabase";
import { PostDatabase } from "../../data/PostDatabase";

export class PostBusiness {
    constructor(private postDatabase:PostRepository){}

    insertPost = async(post:postDTO):Promise<void> => {
        try {
            let input:any
            if (!post.photo||!post.description||!post.type||!post.authorId) {
                throw new InvalidInput()
            }
            let id = generateId()
            post.type.toLowerCase()
            if (post.type === "normal") {
                input = {
                    id,
                    photo:post.photo,
                    description:post.description,
                    type:postType.NORMAL,
                    author_id:post.authorId
                }
            } else if (post.type == "event"){
                input = {
                    id,
                    photo:post.photo,
                    description:post.description,
                    type:postType.EVENT,
                    author_id:post.authorId
                }
            } else {
                throw new CustomError(400, "Property type must be 'normal' or 'event'");
                
            }
            await this.postDatabase.insertPost(input)
        } catch (error:any) {
            throw new error(error.code||400, error.message||error.sqlMessage)
        }
    }
    getAll = async():Promise<post[]> => {
        try {
            return await this.postDatabase.getAll()
        } catch (error:any) {
            throw new Error(error.message||error.sqlMessage);
            
        }
    }
    getById = async(id:string):Promise<post> => {
        try {
            if (!id) {
                throw new CustomError(400, "Id has to be passed as params")
            }
            
            let result:any = await this.postDatabase.getById(id)
    
            let length = result.length
            console.log(length);
            
            if (result.length <= 0) {
                throw new CustomError(404, "Post not found :/")
            }
            console.log(result);
            
            return result
        
        } catch (error:any) {
            throw new CustomError(404, error.message);
            
        }
    }
    getFeedPosts = async(id:string) => {
        try {
            const friendship = new FriendshipDatabase()
            let allFriends = await friendship.getById(id)
            let idQueries:string[] = []
            for (const friend of allFriends) {
                if (friend.FK_user1 === id) {
                    idQueries.push(friend.FK_user2)
                } else {
                    idQueries.push(friend.FK_user1)
                }
            }
            return await this.postDatabase.getFeedPosts(idQueries)
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }
}