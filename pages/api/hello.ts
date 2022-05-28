import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req,res) {
    const {db} = await connectToDatabase();

    const data = db.collection("Users").find({})
    console.log(data);
    res.json({message: 'handler works'});
}