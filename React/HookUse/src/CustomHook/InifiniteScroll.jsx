import React, {useState, useEffect} from 'react'
import useScrollBottom from './useScrollBottom'
import Loading from './Loading'

function ImageItem({item}) {
    return (
        <li key={item.id} style={{listStyle: "none"}}>
            <img src={item.download_url} alt="" style={{width: 300}}/>
        </li>
    )
}

function ImageList({imageList}) {
    return (
        <ul>
            {imageList.map(item => {
                return <ImageItem item={item}/>
            })}
        </ul>
    )
}

export default function InifiniteScroll() {
    const [images, setImages] = useState([]);
    const [url, setUrl] = useState("https://picsum.photos/v2/list?page=1&limit=5")
    const [fetchPage, setFetchPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScrollBottom();

    const changeUrl = (pageNumber) =>{
        return `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`;
    }
    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("문제");
            }
            const json = await response.json();
            setImages(prev=> {return [...prev, ...json]});
            setIsLoading(false);
        } catch(error) {
            console.error(error);
        }
    }
    useEffect( () => {
        getData();
    }, [url])
    
    useEffect( () => {
        if(isBottom) {
            setFetchPage(prev => prev+1);
            setUrl(changeUrl(fetchPage));
        }
    }, [isBottom]);
    return (
        <>
            <div>InifiniteScroll</div>
            <ImageList imageList={images}/>
            {isLoading && <Loading/>}
        </>
    )
}
