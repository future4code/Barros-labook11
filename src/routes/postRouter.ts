import express from 'express'
import { PostBusiness } from '../business/post/PostBusiness'
import { PostController } from '../controller/PostController'
import { UserController } from '../controller/UserController'
import { PostDatabase } from '../data/PostDatabase'

export const postRouter = express.Router()

const postDatabase = new PostDatabase()
const postbusiness = new PostBusiness(postDatabase)
const postController = new PostController(postbusiness)

postRouter.post("/create", (req,res) => postController.insertPost(req, res))

postRouter.get("/all", (req, res) => postController.getAll(req, res))