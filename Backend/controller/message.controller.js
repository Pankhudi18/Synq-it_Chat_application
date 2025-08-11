import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req, res) => {
    console.log("message sent to Pankhudi", req.params.id, req.body.message);

    try{
        const {message} =  req.body;
        const {id:receiverId}  = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
            const newMessage = new Message({
                senderId,
                receiverId,
                message,
            });

            if(newMessage){
                conversation.messages.push(newMessage._id);
            }

            await Promise.all([ conversation.save(), newMessage.save()]);
            res.status(201).json({message: "Message sent successfully", newMessage});
        }
    }catch(error){
        console.log("Error in sending message" + error);
        res.status(500).json({ error: "Internal server error"});
    }
};

export const getMessage = async (req, res) => {
    try{
        const {id: chatUser} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderInd, chatuser]},
        }).populate("messages");

        if(!conversation){
            return res.stats(201).json([]);
        }

        const message = conversation.messages;
        res.stats(201).json({message});
    }catch(error){
        console.log("Error in getting message" + error);
        res.stats(500).json({error: "Interenal server error"});
    }
};