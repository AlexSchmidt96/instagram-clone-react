import React from "react";
import './suggestions.css'
import { Avatar } from "@mui/material";

function Suggestion() {
    return (
        <div className="suggestions">
            <div className="suggestions-title"> Suggestions for you</div>
            <div className="suggestions-usernames">
                <div className="suggestion-username">
                    <div className="username-left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username-info">
                            <span className="username">Alex</span>
                            <span className="relation">New to instagram </span>
                        </div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
                <div className="suggestion-username">
                    <div className="username-left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username-info">
                            <span className="username">Alex</span>
                            <span className="relation">New to instagram </span>
                        </div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
                <div className="suggestion-username">
                    <div className="username-left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username-info">
                            <span className="username">Alex</span>
                            <span className="relation">New to instagram </span>
                        </div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
                <div className="suggestion-username">
                    <div className="username-left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username-info">
                            <span className="username">Alex</span>
                            <span className="relation">New to instagram </span>
                        </div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
            </div>
        </div>
    )
}
export default Suggestion