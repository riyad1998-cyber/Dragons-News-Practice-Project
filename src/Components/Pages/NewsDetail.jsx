import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailCard from '../NewsDetailCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetail = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});


    useEffect(()=>{
        const newsDetail = data.find(singleNews => singleNews.id.toString() === id);

        setNews(newsDetail)
    },[data, id])
    return (
        <div>
           <header className='py-3'>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
<section className='col-span-9'>
    <h2 className='font-bold mb-5'>News Details</h2>
    <NewsDetailCard news ={news}></NewsDetailCard>
</section>

<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
           </main>
        </div>
    );
};

export default NewsDetail;