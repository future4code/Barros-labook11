import { post } from "../../model/post"

export interface PostRepository {
    insertPost(post:post):Promise<void>
    getAll():Promise<post[]>
    getById(id:string):Promise<post>
    getFeedPosts(id:string[]):Promise<post[]>
}