import React, { useState } from "react";
import './timeLine.css'
import Suggestion from "./suggestions";
import Posts from "./posts/posts";

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: 'Alex',
            postImage: 'https://wp-s.ru/wallpapers/10/9/463314880930454/krasivyj-zakat-lesnoe-ozero-gory.jpg',
            likes: 21,
            timestamp: '2d',
        },
        {
            user: 'Michel',
            postImage: 'https://w.forfun.com/fetch/23/234eaafd7bda90ede8669c463bbb932d.jpeg',
            likes: 23,
            timestamp: '12h',
        },
        {
            user: 'Daniel',
            postImage: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666377416_55-mykaleidoscope-ru-p-manzaralar-vkontakte-60.jpg',
            likes: 41,
            timestamp: '3d',
        },
        {
            user: 'Lucie',
            postImage: 'https://lookw.ru/1/518/1402242430-oboi-1920h1080.-davaj-ne-videt-melkogo-v-zerkalnom-otrazhenii-21.jpg',
            likes: 55,
            timestamp: '5h',
        },
    ])
    return (
        <div className="timeline">
            <div className="timeline-left">
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
                <Suggestion />
            </div>
        </div>
    )
}
export default Timeline