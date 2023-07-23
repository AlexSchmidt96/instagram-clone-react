import React from "react";
import './posts.css'
import { Avatar } from "@mui/material";
import MoreHorizeIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Posts({ user, postImage, likes, timestamp }) {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-headerAuthor">
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    {user} * <span>{timestamp}</span>
                </div>
                <MoreHorizeIcon />
            </div>
            <div className="post-image">
                <img alt='' src={postImage} />
            </div>
            <div className="post-footer">
                <div className="post-footerIcons">
                    <div className="post-iconsMain">
                        <FavoriteBorderIcon className="post-icon" />
                        <ChatBubbleOutlineIcon className="post-icon" />
                        <TelegramIcon className="post-icon" />
                    </div>
                    <div className="post-iconSave">
                        <BookmarkBorderIcon className="post-icon" />
                    </div>
                </div>
                <div className="likes">Liked by {likes} people</div>
            </div>
        </div>
    )
}
export default Posts