import "./pagination.css";

import { useState, useEffect } from "react";
import { array, func } from "prop-types";


const Pagination = ({filteredData, setPaginatedDataHandler}) => {
    const [selectedPageNo, setSelectedPageNo] = useState(1);

    const totalPages = 5;
    const recordsPerPage = 20;

    useEffect(() => {
        setSelectedPageNo(1);
        setPaginatedDataHandler(filteredData.slice(1, recordsPerPage));
    }, [filteredData]);

    const handlePageNumberOnClick = pNo => {
        setSelectedPageNo(pNo);
        setPaginatedDataHandler(filteredData.slice((pNo-1) * recordsPerPage, (pNo * recordsPerPage)));
    }

    const getPageLinks = (totalPages, selectedPageNo) => {
        const pageLinks = [];
        for(let i = 0; i < totalPages; i++) {
            const pageNo = i + 1;
            pageLinks.push(
                <a
                    key={`page-no-${pageNo}`}
                    className={pageNo === selectedPageNo ? "spark-pagination__item spark-pagination__item--active" : "spark-pagination__item"}
                    aria-label={`Go to page ${pageNo}`}
                    aria-current={pageNo === selectedPageNo}
                    onClick={() => handlePageNumberOnClick(pageNo)}
                >{pageNo}</a>
            );
        }

        return pageLinks;
    }

    return (
    <nav className="spark-pagination" aria-label="Pagination navigation">
        <div className="spark-pagination__pages">
            <a className="spark-pagination__arrow spark-pagination__arrow--previous" aria-label="Previous page" disabled>
                <span className="spark-pagination__arrow-text"></span>
            </a>
            {getPageLinks(totalPages, selectedPageNo)}
            <a className="spark-pagination__arrow spark-pagination__arrow--next" aria-label="Next page">
            <span className="spark-pagination__arrow-text"></span>
            </a>
        </div>
    </nav>
    )
};

Pagination.propTypes = {
    filteredData: array.isRequired,
    setPaginatedDataHandler: func.isRequired
};

export default Pagination;