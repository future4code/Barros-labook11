import express from "express";
import { FriendshipBusiness } from "../business/friendship/FriendshipBusiness";
import { FriendshipController } from "../controller/FriendshipController";
import { FriendshipDatabase } from "../data/FriendshipDatabase";


export const friendshipRouter = express.Router()

const friendshipDatabase = new FriendshipDatabase()
const friendshipBusiness = new FriendshipBusiness(friendshipDatabase)
const friendshipController = new FriendshipController(friendshipBusiness)

friendshipRouter.post("/create", (req, res) => friendshipController.makeFriends(req, res))