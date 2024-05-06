import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import red from "@mui/material/colors/red";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
    deleteUserChats,
    getUserChats,
    sendChatRequest,
  } from "../helpers/api-communicator";
type Message = {
    role: "user" | "assistant";
    content: string;
  };


const Chat = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);
    const handleSubmit = async () => {
        const content = inputRef.current?.value as string;
        if (inputRef && inputRef.current) {
            inputRef.current.value="";
        }
        //newMessage is type Message
        const newMessage: Message = {role:"user", content};
        setChatMessages((prev) => [...prev, newMessage]);
        const chatData = await sendChatRequest(content);
        setChatMessages([...chatData.chats]);
        //Send to backend
    }
    return <Box
    sx = {{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
         gap: 3,
    }}>
        <Box
        sx={{
            display: { md: "flex", xs: "none", sm: "none" },
            flex: 0.2,
            flexDirection: "column",
            }}>
                <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "60vh",
                    bgcolor: "rgb(60,59,58)",
                    borderRadius: 5,
                    flexDirection: "column",
                    mx: 3,
                }}> 
                <Avatar
                sx={{
                mx: "auto",
                my: 2,
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
                }}
                >
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
                </Avatar>

                <Typography sx={{ mx: "auto", fontFamily: "Noto Sans", my:4, p:3 }}>
                Welcome to SmartLearnChat! An interactive Chatbot.
            </Typography>

            <Typography sx={{ mx: "auto", fontFamily: "Noto Sans", my: 4, p: 3 }}>
                Please avoid sharing personal information.
            </Typography>

            <Button
                //onClick={handleDeleteChats}
                sx={{
                width: "200px",
                my: "auto",
                color: "white",
                fontWeight: "700",
                borderRadius: 3,
                mx: "auto",
                bgcolor: red[300],
                ":hover": {
                    bgcolor: red.A400,
                },
                }}
            >
                Clear Conversation
            </Button>
            </Box>
        </Box>
        <Box
            sx={{
            display: "flex",
            flex: { md: 0.8, xs: 2, sm: 2 },
            flexDirection: "column",
            px: 3,
            }}
        >
            <Typography
            sx={{
                fontSize: "40px",
                color: "black",
                mb: 2,
                mx: "auto",
                fontWeight: "600",
            }}
            >
            SmartLearnChat
            </Typography>
            <Box
            sx={{
                width: "100%",
                height: "50vh",
                borderRadius: 3,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
                overflowX: "hidden",
                overflowY: "auto",
                scrollBehavior: "smooth",
            }}
            > {chatMessages.map((chat, index) => (
                //@ts-ignore
                <ChatItem content={ chat.content} role={chat.role} key={index}/>
                ))};
            </Box>

            <div
            style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
            }}
            ></div>

            {" "}

            <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
            />

            <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
              <IoMdSend />
             </IconButton>

            
            </Box>
    </Box>;
};

export default Chat;