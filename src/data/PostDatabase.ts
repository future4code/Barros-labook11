import { PostRepository } from "../business/post/PostRepository";
import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase implements PostRepository {
    private static TABLE_NAME = "labook_posts"

    insertPost = async (post:post) => {
        await BaseDatabase.connection
        .insert(post)
        .from(PostDatabase.TABLE_NAME)
    }
    getAll = async () : Promise<post[]> => {
        let result = await BaseDatabase.connection
        .select()
        .from(PostDatabase.TABLE_NAME)
        return result
    }

    getById = async (id:string) :Promise<post> => {
        let result:post = await BaseDatabase.connection
        .select()
        .where({id})
        .from(PostDatabase.TABLE_NAME)
        return result
    }
    getFeedPosts = async(id: string[]): Promise<post[]> => {
        let result:post[] = await BaseDatabase.connection
        .select()
        .whereIn('author_id', id)
        .from(PostDatabase.TABLE_NAME)
        .orderBy('created_at', 'desc')
    return result
    }
}