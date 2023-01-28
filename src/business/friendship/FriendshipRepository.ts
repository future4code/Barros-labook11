import { friendship } from "../../model/friendship";

export interface FriendshipRepository {
    makeFriends(friendship:friendship):Promise<void>
}