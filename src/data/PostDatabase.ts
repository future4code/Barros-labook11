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
}