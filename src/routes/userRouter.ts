import express from 'express'
import { UserBusiness } from '../business/user/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../data/UserDatabase'

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post("/create", (req,res) => userController.insertUser(req, res))

userRouter.get('/all',(req, res) => userController.getUser(req,res))

userRouter.get("/get/:id", (req, res) => userController.getUserById(req, res))
// userRouter.get("/all", userController.getAll)

