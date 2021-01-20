import React, {useContext, useEffect, useState} from 'react';
import { useSnackbar } from 'react-simple-snackbar'
import Banner from "./Banner";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Result from "./Result";
import Table from "./Table";

import ProfileContext from "../context/profiles/profileContext";

const Content = () => {
    const profileContext = useContext(ProfileContext);

    const {getProfiles, size, profiles, filtered, loading, error} = profileContext;

    const [openSnackbar] = useSnackbar()

    useEffect(() => {
        getProfiles();

        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
            openSnackbar(error)
        }

        //eslint-disable-next-line
    }, [error]);



    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerPage] = useState(20);

    // Get current orders
    const indexOfLastProduct = currentPage * profilesPerPage;
    const indexOfFirstProduct = indexOfLastProduct - profilesPerPage;
    const currentProfiles = profiles.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="content-grid">
            <Banner/>
            <Filter/>
            {/*<Grid profiles={currentProfiles} filtered={filtered} loading={loading} />*/}
            <Table profiles={currentProfiles} filtered={filtered} loading={loading} />
            <Pagination currentPage={currentPage} paginate={paginate} profilesPerPage={profilesPerPage} totalProfiles={size} />
            <Result size={size} result={profilesPerPage} />
        </div>
    );
};

export default Content;