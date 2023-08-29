import React, { useState } from "react";
import axios from "axios";
import "src\components\Index.css";

interface User {
    avatar: string;
    email: string;
    nickname: string;
}

interface Author {
    email: string;
    nickname: string;
}

interface Message {
    id: number;
    author: Author;
    text: string;
    replies: Author[];
}

function App() {
    const [userData, setUserData] = useState<User>({
        avatar: "path_to_avatar.jpg",
        email: "user@example.com",
        nickname: "User123",
    });

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            author: {
                email: "user1@example.com",
                nickname: "User1",
            },
            text: "This is the first-level message.",
            replies: [
                {
                    email: "user2@example.com",
                    nickname: "User2",
                },
                {
                    email: "user3@example.com",
                    nickname: "User3",
                },
                {
                    email: "user4@example.com",
                    nickname: "User4",
                },
            ],
        },
        // More messages...
    ]);

    const handleMessageClick = (messageId: number) => {
        // Navigate to the details page using your preferred navigation method
        // For example, using React Router: history.push(`/message/${messageId}`);
    };

    return (
        <div className="app-container">
            {/* ... Rest of the JSX code ... */}
        </div>
    );
}

export default App;
