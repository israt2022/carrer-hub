import React from "react";
const SingleCategory = ({category}) => {

    return(
        <div className="single-category-container w-1/4">
            <div className="icon"><img src={category.categoryLogo} alt={category.categoryName} className="category-icon" /></div>
            <div className="category-name">{category.categoryName}</div>
            <div className="category-job-available">{category.jobsAvailable}</div>
        </div>
    )
}
export default SingleCategory;