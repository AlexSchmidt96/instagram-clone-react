import React from "react";
import './reels.css'
import { Avatar } from "@mui/material";

function Reels({ user }) {
    return (
        <div className="reels">
            <div className="reels-avatars">
                <div className="reels-avatar">
                    <div className="avatar-reel">
                        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    </div>
                    <div className="username-reels">
                        <span className="username">{user}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reels