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
import toast from "react-hot-toast";
type Message = {
    role: "user" | "assistant";
    content: string;
  };


const Chat = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);

    // handleSubmit - handles new messages input by user
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
    };

    // handleDeleteChats - function that allows user to clear chat
    const handleDeleteChats = async () => {
        try {
          toast.loading("Deleting Chats", { id: "deletechats" });
          await deleteUserChats();
          setChatMessages([]);
          toast.success("Deleted Chats Successfully", { id: "deletechats" });
        } catch (error) {
          console.log(error);
          toast.error("Deleting chats failed", { id: "deletechats" });
        }
      };

    //Displays message confirmation of chats load
    useLayoutEffect(() => {
        if (auth?.isLoggedIn && auth.user) {
          toast.loading("Loading Chats", { id: "loadchats" });
          getUserChats()
            .then((data) => {
              setChatMessages([...data.chats]);
              toast.success("Successfully loaded chats", { id: "loadchats" });
            })
            .catch((err) => {
              console.log(err);
              toast.error("Loading Failed", { id: "loadchats" });
            });
        }
      }, [auth]);

    //If a user attempts to acces /chat page and they are not logged in,
    // they will be redirected to the /login
    useEffect(() => {
        if (!auth?.user) {
          return navigate("/login");
        }
      }, [auth]);
    
    //Page Layout
    return ( <Box
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
                    bgcolor: "rgb(0,0,0)",
                    borderRadius: 5,
                    flexDirection: "column",
                    mx: 3,
                }}> 
                <Avatar
                sx={{
                mx: "auto",
                my: 6,
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
                }}
                >
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
                </Avatar>

                <Typography sx={{ mx: "auto", fontFamily: "Noto Sans", my:3, p:3 }}>
                Welcome to SmartLearnChat! An interactive Chatbot built by Team C.
                </Typography>

                <Typography sx={{ mx: "auto", fontFamily: "Noto Sans", my: 3, p: 3 }}>
                Key Features Include: 
                </Typography>

            <Button
                // A reference to handleDeleteChats that allows users to delete chat history
                // with the click of a button!
                onClick={handleDeleteChats}
                sx={{
                width: "200px",
                my: "auto",
                color: "black",
                fontWeight: "700",
                borderRadius: 3,
                mx: "auto",
                bgcolor: "white",
                ":hover": {
                    bgcolor: red[300],
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
                
                <ChatItem content={ chat.content} role={chat.role} key={index}/>
                ))}
            </Box>

            <div
                style={{
                 width: "100%",
                 borderRadius: 8,
                 backgroundColor: "rgb(0,15,0)",
                 display: "flex",
                 margin: "auto",
                 }}
            >

            {" "}

            <input
                ref={inputRef}
                type="text"
                style={{
                    width: "100%",
                    backgroundColor: "black",
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
             </div>

            
            </Box>
    </Box>
);
};

export default Chat;