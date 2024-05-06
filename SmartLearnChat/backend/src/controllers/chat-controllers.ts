import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {OpenAI } from "openai";
import {ChatCompletionMessageParam} from "openai/resources/chat/completions";

export const generateChatCompletion = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { message } = req.body; 
    try{
        // Verify details of the user (get user object)
        const user = await User.findById(res.locals.jwtData.id);
        // If we don't have the user, return 401 response and display message
        if(!user) return res.status(401).json({message:"User not registered OR Token malfunctioned"});
        
        // Create a Thread
        
        // 1st -> Grab chats of current user
        const chats = user.chats.map(({role, content}) => ({
            role, 
            content})) as ChatCompletionMessageParam[];
        chats.push({content:message, role: "user"});
        //Now we want to save chats in the main user object
        user.chats.push({content:message, role:"user"});
        
        // 2nd -> Send all the chats along with the new message to Assistant API
        const openai = new OpenAI({apiKey: process.env.OPEN_AI_SECRET });
        // 3rd -> Get the latest response
        const chatResponse = await openai.chat.completions.create({ 
            model: "gpt-4",
            messages: chats,
        });
        user.chats.push(chatResponse.choices[0].message)
        await user.save();
        return res.status(200).json({ chats: user.chats }); //success
        } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong here" });
      }
};

export const sendChatsToUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user token check
      const user = await User.findById(res.locals.jwtData.id);
      if (!user) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      if (user._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }
      return res.status(200).json({ message: "OK", chats: user.chats });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };

  //A rework of the sendChatsToUser Function
  //Allows user to clear their chat history.
  export const deleteChats = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user token check
      const user = await User.findById(res.locals.jwtData.id);
      if (!user) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      if (user._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }
      //@ts-ignore
      user.chats = [];
      await user.save();
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };