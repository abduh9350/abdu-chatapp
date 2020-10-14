import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat_headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>Abdu</span>
          Hey Guys <span className='chat_timestamp'>3:30</span>
        </p>
        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Jemal</span>Hey{" "}
          <span className='chat_timestamp'>3:35</span>
        </p>
      </div>
      <div className='chat_footer'></div>
    </div>
  );
}

export default Chat;
