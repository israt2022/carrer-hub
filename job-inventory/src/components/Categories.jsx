import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("/category.json")
        .then(res => res.json())
        .then(res => setCategories(res)); 
    },[]);
    return (
    <>
        {
            categories.map(category => <SingleCategory key={category.id} category={category}/>)
        }
    </>);
}

export default Categories;