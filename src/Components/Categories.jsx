import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch ("/categories.json").then(res=>res.json())
const Categories = () => {
    const categories = use (categoryPromise);

    return (
        <div className='grid grid-cols-1 mt-4 gap-3'>
            <h2 className='font-bold'>All Categories</h2>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default Categories;