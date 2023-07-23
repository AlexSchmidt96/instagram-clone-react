import React, { useState } from "react";
import './timeLine.css'
import Suggestion from "./suggestions";
import Posts from "./posts/posts";
import Reels from "./reels/reels";

function Timeline() {
    const [posts] = useState([
        {
            user: 'Alex',
            postImage: 'https://wp-s.ru/wallpapers/10/9/463314880930454/krasivyj-zakat-lesnoe-ozero-gory.jpg',
            likes: 21,
            timestamp: '2d',
            relations: 'New to Instagram',
        },
        {
            user: 'Michel',
            postImage: 'https://w.forfun.com/fetch/23/234eaafd7bda90ede8669c463bbb932d.jpeg',
            likes: 23,
            timestamp: '12h',
            relations: 'Followed by Alex',
        },
        {
            user: 'Daniel',
            postImage: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666377416_55-mykaleidoscope-ru-p-manzaralar-vkontakte-60.jpg',
            likes: 41,
            timestamp: '3d',
            relations: 'New to Instagram',
        },
        {
            user: 'Lucie',
            postImage: 'https://lookw.ru/1/518/1402242430-oboi-1920h1080.-davaj-ne-videt-melkogo-v-zerkalnom-otrazhenii-21.jpg',
            likes: 55,
            timestamp: '5h',
            relations: 'Followed by Daniel',
        },
    ])
    return (
        <div className="timeline">
            <div className="timeline-left">
                <div className="timeline-reels">
                    {posts.map((post) => (
                        <Reels user={post.user} />
                    ))}
                </div>
                <div className="timeline-posts">
                    {posts.map((post) => (
                        <Posts user={post.user}
                            postImage={post.postImage}
                            likes={post.likes}
                            timestamp={post.timestamp} />
                    ))}
                </div>
            </div>
            <div className="timeline-right">
                <div className="suggestions-right">
                    <div className="suggestions-title"> Suggestions for you</div>
                    <button className="suggestions-button"> See all</button>
                </div>
                {posts.map((post) => (
                    <Suggestion user={post.user}
                        postImage={post.postImage}
                        relations={post.relations}
                    />
                ))}
                <div className="suggestions-footer">
                    <span className="suggestions-footer-title">About</span>•
                    <span className="suggestions-footer-title">Help</span>•
                    <span className="suggestions-footer-title">Press</span>•
                    <span className="suggestions-footer-title">API</span>•
                    <span className="suggestions-footer-title">Jobs</span>•
                    <span className="suggestions-footer-title">Privacy</span>•
                    <span className="suggestions-footer-title">Terms</span>•
                    <span className="suggestions-footer-title">Locations</span>•
                    <span className="suggestions-footer-title">Language</span>•
                    <span className="suggestions-footer-title">Meta Verified</span>
                </div>
                <div className="suggestions-footer-privacy"> © 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    )
}
export default Timeline