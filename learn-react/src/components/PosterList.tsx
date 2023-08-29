import { useState } from "react";

const list = [
    { title: "one thing", url: "https://baidu.com" },
    { title: "another thing", url: "https://google.com" }
];
function PosterList() {
    const [list, setList] = useState([
        { title: "some thing", url: "https://baidu.com" },
        { title: "another thing", url: "https://google.com" }
    ]);
    return (
        <>
            <ul>
                {list.map((item, idx) => (
                    <PosterItem {...item} key={idx}></PosterItem>
                ))}
            </ul>
            <button onClick={() => {
                setList([...list,
                { title: "some thing new", url: "https://cn.bing.com" },
                ]);
            }}></button>
        </>
    )
}
function PosterItem(prop:{title:string,url:string}) {


    return (
        <>
            <ul>
                
                {list.map((item, idx) => (
                    <PosterItem {...item} key={idx}></PosterItem>
                ))}
                {item.title}<a href="https://cn.bing.com">link</a>
                
            </ul>
            <button
                onClick={() => {
                    setList([
                        ...list,
                        { title: "new thing", url: "https://cn.bing.com" },
                    ]);
                }}
            ></button>
        </>
    )

}