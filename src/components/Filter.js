import React, { useEffect, useContext, useRef } from 'react';
import ProfileContext from "../context/profiles/profileContext";

const Filter = () => {
    const profileContext = useContext(ProfileContext);

    const { filterName, filterCard, filterGender, filtered, clearFilter } = profileContext;

    const text = useRef('');
    const card = useRef('');
    const gender = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = null;
            card.current.value = null;
            gender.current.value = null;
        }

        //eslint-disable-next-line
    }, []);

    const onChangeName = (e) => {
        if (text.current.value !== '') {
            filterName(e.target.value);
        } else {
            clearFilter();
        }
    };

    const onChangeCard = (e) => {
        if (card.current.value !== '') {
            filterCard(e.target.value);
        } else {
            clearFilter();
        }
    };

    const onChangeGender = (e) => {
        if (gender.current.value !== '') {
            filterGender(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <div className="section-filters-bar v2">
            {/*FORM*/}
            <form className="form">
                {/*FORM ITEM*/}
                <div className="form-item split medium">
                    {/*FORM SELECT*/}
                    <div className="form-select">
                        <label htmlFor="quest-filter-show">Gender</label>
                        <select onChange={onChangeGender} ref={gender} id="quest-filter-show" name="quest_filter_show">
                            <option value=''>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">Prefer to skip</option>
                        </select>
                        {/*FORM SELECT ICON*/}
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        {/*FORM SELECT ICON*/}
                    </div>
                    {/*FORM SELECT*/}

                    {/*FORM SELECT*/}
                    <div className="form-select">
                        <label htmlFor="quest-filter-criteria">Payment Method</label>
                        <select onChange={onChangeCard} ref={card} id="quest-filter-criteria" name="quest_filter_criteria">
                            <option value=''>Select</option>
                            <option value="money order">Money Order</option>
                            <option value="cc">Credit Card</option>
                            <option value="check">Cheque</option>
                            <option value="paypal">Paypal</option>
                        </select>
                        {/*FORM SELECT ICON*/}
                        <svg className="form-select-icon icon-small-arrow">
                            <use xlinkHref="#svg-small-arrow"></use>
                        </svg>
                        {/*FORM SELECT ICON*/}
                    </div>
                    {/*FORM SELECT*/}

                    <div className="form-input small">
                        <input ref={text} onChange={onChangeName} type="text" id="friends-search" name="friends_search" placeholder='Search user' />
                    </div>
                </div>
                {/*FORM ITEM*/}
            </form>
            {/*FORM*/}
        </div>
    );
};

export default Filter;