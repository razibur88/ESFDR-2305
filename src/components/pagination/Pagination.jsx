import React from "react";

const Pagination = ({pageNumber,paginate,next,prev,currentPage}) => {
    
  return (
    <>
     <div className="mt-10 flex justify-end">
     <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a onClick={prev}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pageNumber.map((item,i)=>(
          <li key={i} onClick={()=>paginate(item)}>
            <a
              className={currentPage == i + 1 ? "cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 dark:border-gray-700 border border-gray-300"}
            >
              {item + 1}
            </a>
          </li>
          ))}
         
          <li>
            <a onClick={next}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
     </div>
    </>
  );
};

export default Pagination;
