import express from "express";
import { FriendshipBusiness } from "../business/friendship/FriendshipBusiness";
import { FriendshipController } from "../controller/FriendshipController";
import { FriendshipDatabase } from "../data/FriendshipDatabase";


export const friendshipRouter = express.Router()

const friendshipDatabase = new FriendshipDatabase()
const friendshipBusiness = new FriendshipBusiness(friendshipDatabase)
const friendshipController = new FriendshipController(friendshipBusiness)

friendshipRouter.get("/all", (req, res) => friendshipController.getAll(req, res))

friendshipRouter.post("/create", (req, res) => friendshipController.makeFriends(req, res))

friendshipRouter.get('/:id', (req, res) => friendshipController.getById(req, res))

friendshipRouter.delete('/:id', (req,res) => friendshipController.deleteById(req,res))

