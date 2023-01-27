export enum postType {
    NORMAL="normal",
    EVENT="event"
}

export type post = {
    id:string,
    photo:String,
    description:string,
    type:postType,
    authorId:string
}

export interface postDTO {
    photo:string,
    description:string,
    type:string,
    authorId:string
}