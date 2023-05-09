import React, { useEffect, useState } from 'react'
import "./HealthCard.css"
import logoJuit from "../../assets/Logo.png"
import { selectUser } from "../../providers/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';

function HealthCard() {
    const user = useSelector(selectUser);
    return (
        <>
            <div>
                <div className="healthContainer">
                    <div className="navbar">
                        <img id='JUITLogo' src={logoJuit} alt="LogoJUIT" />
                        <div className="headings">
                            <div className="JUIT"><strong>Digital Dispensary System</strong></div>
                            <div className="JUIT"><strong>Jaypee University Of Information Technology</strong></div>
                        </div>
                    </div>
                    <div className="personalDetails">
                        <div className="fetchedDetails">
                            <div className="table1">
                                <table className="table">
                                    <thead>
                                        <tr>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Name : </th>
                                            <td>{user.Name}</td>
                                            <td><strong> Mobile No.</strong></td>
                                            <td>{user.Mobile}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Roll No.</th>
                                            <td>{user.Rollno}</td>
                                            <td><strong>Semester</strong></td>
                                            <td>{user.Semester}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Course</th>
                                            <td colspan="2">{user.Course}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cardHeading">Health Records</div>
                            <div className="table2">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Description of the Problem</th>
                                            <th scope="col">Medical Advice Given</th>
                                            <th scope="col">Medical Issued</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">29/01/23</th>
                                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis labore blanditiis sed praesentium error impedit, odio esse nulla doloremque alias veritatis quo nihil dolorem.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat optio minus quam. Repudiandae fugit eligendi perferendis distinctio illum, aliquid perspiciatis, iusto dicta quia minima pariatur.</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">29/01/23</th>
                                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis labore blanditiis sed praesentium error impedit, odio esse nulla doloremque alias veritatis quo nihil dolorem.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat optio minus quam. Repudiandae fugit eligendi perferendis distinctio illum, aliquid perspiciatis, iusto dicta quia minima pariatur.</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">29/01/23</th>
                                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis labore blanditiis sed praesentium error impedit, odio esse nulla doloremque alias veritatis quo nihil dolorem.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat optio minus quam. Repudiandae fugit eligendi perferendis distinctio illum, aliquid perspiciatis, iusto dicta quia minima pariatur.</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">29/01/23</th>
                                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis labore blanditiis sed praesentium error impedit, odio esse nulla doloremque alias veritatis quo nihil dolorem.</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat optio minus quam. Repudiandae fugit eligendi perferendis distinctio illum, aliquid perspiciatis, iusto dicta quia minima pariatur.</td>
                                            <td>No</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default HealthCard