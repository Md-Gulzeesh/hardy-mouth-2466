import React from 'react'

const CategoryItem = ({img_url, title}) => {
  return (
    <div className="categoryItem">
      <span>
        <img
          src={img_url}
          alt={title}
        />
      </span>
      <span>{title}</span>
    </div>
  );
}

export default CategoryItem