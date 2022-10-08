
export  interface Tweet extends TweetBody{
    _id: string
    _createdAT: string
    _updatedAt: string
    _rev:string
    _type: "tweet"
    blockTweet:boolean
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string

}