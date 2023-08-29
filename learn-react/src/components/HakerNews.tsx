// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import useSWR from "swr";
import fetcher from "../fetcher";

function HakerNews() {
    // const params = useParams();
    // const [list, setList] = useState<number[]>([]);
    // useEffect(() => {
    //     axios
    //         .get(" https://hacker-news.firebaseio.com/v0/topstories.json")
    //         .then((res) => res.data)
    //         .then((data) => setList(data));
    // }, []);

    // return (
    //     <div>
    //         <ul>
    //             {list.map((item) => (
    //                 <HakerNewsItem newsId={item} key={item}></HakerNewsItem>
    //             ))}
    //         </ul>
    //     </div>
    // );
    const [endIndex, setIndex] = useState(10);
    const { data: list, error } = useSWR<number[]>(
        "https://hacker-news.firebaseio.com/v0/topstories.json",
        fetcher
    );

    if (error) return <div>Failed to load data</div>;

    if (list === undefined) return <div>Loading ...</div>;

    return (
        <div>
            <ul>
                {list.slice(0, endIndex).map((item) => (
                    <HakerNewsItem newsId={item} key={item}></HakerNewsItem>
                ))}
            </ul>
            <InView onChange={(inview) => {
                if (endIndex <= list.length) {
                    if (inview) {
                        setIndex(endIndex + 10);
                    }
                }
            }}
            >加载更多</InView>
        </div>
    );
}



function HakerNewsItem(props: { newsId: number }) {
    // const [ news, setNews ] = useState<{
    //     deleted: boolean;
    //     title: string;
    //     url: string;
    //     time: number;

    // }>();
    // useEffect(() => {
    //     axios
    //         .get(` https://hacker-news.firebaseio.com/v0/item/${props.newsId}.json`)
    //         .then((res) => res.data)
    //         .then((data) => setNews(data));
    // }, []);
    // if (news === undefined) return <div>Loading...</div>;
    // if (news.deleted) return null;
    // return (
    //     <div>
    //         <h1>{news.title}</h1>
    //         <a href={news.url}>Link</a>
    //         <p>{new Date(news.time * 1000).toLocaleDateString()}</p>
    //     </div>
    // );
    const { newsId } = props;
    const { data: news, error } = useSWR<{
        deleted: boolean;
        title: string;
        url: string;
        time: number;

    }>(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`, fetcher, {
        errorRetryInterval: 100,
    });

    if (error || news?.deleted === true) return null;

    if (news === undefined) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            <h4>{news.title}</h4>
            {/*
                <a href={news.url}>Link</a>
                <p>{new Date(news.time*1000).toLocaleDateString()}</p>

    */}
        </div>
    );
}

export default HakerNews;