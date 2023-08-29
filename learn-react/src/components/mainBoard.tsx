import axios from "axios";
import { useState } from "react";
import "./Index.css";



//主页

interface User {    //显示在主页？
    avatar?: string;
    email: string;
    nickname?: string;
}

interface Author {
    email: string;
    nickname?: string;
}

interface Message {
    id: number;
    author: Author;
    text: string;
    replies: Author[];
}


function Index() {
    //左侧的用户信息框
    const [userData, setUserData] = useState<User>({    //这里如何连接数据库？
        avatar: "../../avart.png",
        email: "user123@example.com",
        nickname: "User123",
    });
    //中部的留言内容部分
    const [messages, setMessages] = useState<Message[]>([     //这里用不到useState来更新信息吧，毕竟也改不了别人的评论或留言
        {
            id: 1,
            author: {
                email: "user1@example.com",
                nickname: "User1",
            },
            text: "This is the first-level message.",
            replies: [    // replies是什么属性？
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
        }
    ]);

    return (
        <body>
            {/* 导航栏 */}
            <div className="NavigationBar" >
                <ul className="slogen indexul">
                    <li className="indexli"> SNC留言板</li>
                    <li className="indexli" style={{ float: "right" }}> 在这里你可以畅所欲言 </li>
                </ul>
            </div>

            {/* 主页面 */}
            <div className="threeList">
                {/* 左侧 */}
                <div className="Part_userInfo">
                    <img src={userData.avatar} alt="../../avart.png" style={{ width: 64, height: 64, objectFit: "contain", objectPosition: "center center" }} />
                    <p>E-mail:{userData.email}</p>
                    {(userData.nickname === undefined) ? null : <p>nickname:{userData.nickname}</p>}
                </div>

                {/* 中间 */}
                <div className="Part_messBoard">


                </div>

                {/* 右侧 */}
                <div className="Part_ad">

                </div>


            </div>
        </body>
    )
}

export default Index;