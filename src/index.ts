import express from "express"
import { AddressInfo } from "net"
import cors from 'cors'
import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/postRouter"
import { friendshipRouter } from "./routes/friendshipRouter"

const app = express()

app.use(express.json())

app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running at localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);   
    }
});

app.use('/user', userRouter)

app.use('/post', postRouter)

app.use("/friends", friendshipRouter)