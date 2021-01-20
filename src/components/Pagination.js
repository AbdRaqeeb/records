import React from 'react';

const Pagination = ({paginate, profilesPerPage, totalProfiles, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage) ; i++) {
        let active = currentPage === i ? 'active' : '';
        pageNumbers.push(
            <div className={`section-pager-item ${active}`} key={i}>
            <p onClick={() => paginate(i)} className="section-pager-item-text">{i}</p>
        </div>)
    }

    return (
        <div className="section-pager-bar">
            <div className="section-pager">
                {pageNumbers}
            </div>
        </div>
    );
};

export default Pagination;