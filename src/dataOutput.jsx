import react from "react";
import logo from "./gati.png";
import "./dataOutput.css";

export default function View(item){
    return(
        <div className="view_card">
            <div className="card">
            <div className="name" id="header">
        <p className="name1">GOMATHI AMBAL TYPEWRITING INSTITUTE</p>
        <section className="name2">31 NKG Complex, Sankarankovil Road,</section>
        <section className="name2">Kalugumalai - 628 552.</section>
        <section className="name2">Approval No: 17012</section>
        <section className="name2">Contact No : 7708799828</section>
        <img src={logo} alt="LOGO" className="logo"></img>
    </div>
    <p id="register">Registration Form</p>
    <img src={item.stu} alt="student Image" className="stupic"></img>
    <div className="details">
        <p>Student Name : {item.fullName}</p>
        <p>Father's Name : {item.fName}</p>
        <p>Date of Birth : {item.birth}</p>
        <p>Gender : {item.sex}</p>
        <p>Address : {item.add}</p>
        <p>Phone No : {item.mob}</p>
        <p>Qualifcation : {item.edu}</p>
        <p>Technical Qualification : {item.scl}</p>
        <p>Course : {item.cor}</p>
        <p>Joining Date : {item.join}</p>

    </div>
            </div>
        </div>
    )
}