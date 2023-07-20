import React from 'react';
import { useState, useEffect } from 'react';

export default function See() {

    const [datas, setDatas] = useState([]);

    //http://127.0.0.1:8000/api/produits      https://jsonplaceholder.typicode.com/posts

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/produits')
            .then((response) => response.json())
            .then((json) => setDatas(json));
    }, [])

    console.log(datas);
    console.log(datas[1]);
    
    return (
        <>
            <div>
                {datas.map((post) => {
                    return <div> {post.context} </div>;
                })}
            </div>
        </>
    )
}
