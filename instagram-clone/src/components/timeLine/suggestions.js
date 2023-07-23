import React from "react";
import './suggestions.css'
import { Avatar } from "@mui/material";

function Suggestion({ user, relations }) {
    return (
        <div className="suggestions">
            <div className="suggestions-usernames">
                <div className="suggestion-username">
                    <div className="username-left">
                        <span className="avatar">
                            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                        </span>
                        <div className="username-info">
                            <span className="username">{user}</span>
                            <span className="relation">{relations}</span>
                        </div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
            </div>
        </div>
    )
}
export default Suggestion