import {contactUser} from "../model/contact-model.js"
export const contact =async(req,res)=>{
    try {
        console.log("hello");
        
        const response=req.body
        await contactUser.create(response)
        return res.status(200).json({ msg: "message delivered successfully" });

    } catch (error) {
        return res.status(500).json({ msg: "message not delivered" });
    }
}