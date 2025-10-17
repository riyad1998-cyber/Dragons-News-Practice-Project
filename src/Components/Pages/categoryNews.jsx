import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const categoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=> {
        if(id == "0"){
            setCategoryNews(data)
            return;
        }else if(id== "1"){
            const filteredNews =  data.filter(news =>news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }else{
     const filteredNews =  data.filter(news =>news.category_id == id);
        setCategoryNews(filteredNews)
        }
   
    },[data, id]);
    return (
        <div>
           <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> Found </h2>
           <div className='grid grid-cols-1 gap-5'>
           {
            categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
           }
           </div>
        </div>
    );
};

export default categoryNews;