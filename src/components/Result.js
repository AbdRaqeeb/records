import React, {Fragment} from 'react';

const Result = ({size, result}) => {
    return (
        <Fragment>
            <p className="section-results-text">Showing {result} out of {size} profiles</p>
        </Fragment>
    );
};

export default Result;