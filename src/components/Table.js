import React from 'react';
import Spinner from "./Spinner";

const Table = ({profiles, filtered, loading}) => {



    if (loading) return <Spinner/>;
    return (
        <div className="content-body">
            <section id="horizontal-vertical">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body card-dashboard">
                                    <div className="table-responsive">
                                        <table className="table nowrap scroll-horizontal-vertical">
                                            <thead>
                                            <tr>
                                                <th>First name</th>
                                                <th>Last name</th>
                                                <th>Username</th>
                                                <th>Gender</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Payment Method</th>
                                                <th>Credit Card</th>
                                                <th>Card Number</th>
                                                <th>Longitude</th>
                                                <th>Latitude</th>
                                                <th>Domain</th>
                                                <th>MacAddress</th>
                                                <th>URL</th>
                                                <th>Last Login</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {filtered !== null ? filtered.map(profile => (
                                                <tr key={profile.PhoneNumber}>
                                                    <td>{profile.FirstName}</td>
                                                    <td>{profile.LastName}</td>
                                                    <td>{profile.UserName}</td>
                                                    <td>{profile.Gender}</td>
                                                    <td>{profile.Email}</td>
                                                    <td>{profile.PhoneNumber}</td>
                                                    <td>{profile.PaymentMethod}</td>
                                                    <td>{profile.CreditCardType}</td>
                                                    <td>{profile.CreditCardNumber}</td>
                                                    <td>{profile.Longitude}</td>
                                                    <td>{profile.Latitude}</td>
                                                    <td>{profile.DomainName}</td>
                                                    <td>{profile.MacAddress}</td>
                                                    <td>{profile.URL}</td>
                                                    <td>{profile.LastLogin}</td>
                                                </tr>
                                            )) : profiles.map(profile => (
                                                <tr key={profile.PhoneNumber}>
                                                    <td>{profile.FirstName}</td>
                                                    <td>{profile.LastName}</td>
                                                    <td>{profile.UserName}</td>
                                                    <td>{profile.Gender}</td>
                                                    <td>{profile.Email}</td>
                                                    <td>{profile.PhoneNumber}</td>
                                                    <td>{profile.PaymentMethod}</td>
                                                    <td>{profile.CreditCardType}</td>
                                                    <td>{profile.CreditCardNumber}</td>
                                                    <td>{profile.Longitude}</td>
                                                    <td>{profile.Latitude}</td>
                                                    <td>{profile.DomainName}</td>
                                                    <td>{profile.MacAddress}</td>
                                                    <td>{profile.URL}</td>
                                                    <td>{profile.LastLogin}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Table;