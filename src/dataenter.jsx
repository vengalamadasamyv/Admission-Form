import React, { useState } from "react";
import "./dataenter.css";
import logo from "./gati.png";
import View from "./dataOutput";
import jsPDF from 'jspdf';
import sign from "./sign_main.png";




function Data(){
        // Student Picture
        const [pic,setPic] = useState();
        // Student Name
        const [firstname, setFirstname] =useState();
        // Father Name
        const [fathername, setFathername] =useState();
        // Date of birth
        const [dob, setDob] =useState();
        // Gender
        const [gender, setGender] =useState();
        // Address
        const [address, setAddress] =useState();
        // Phone No
        const [phone, setPhone] =useState();
        // Qualification
        const [qualify, setQualify] =useState();
        // Institute
        const [school, setSchool] =useState();
        // Course
        const [course, setCourse] =useState();
        // Joining Date
        const [jdate, setJdate] =useState();
        

        // View Component
        const [value,setValue] = useState(false);
        // Student picture Function
        function getFile(event){
            setPic(URL.createObjectURL(event.target.files[0]))
        }
        // View Component Function
        var i=2;
        const handleOut=(v)=>{
            v.preventDefault();
            setFirstname(v.target[0].value);
            setFathername(v.target[1].value);
            setDob(v.target[2].value);
            setGender(v.target[3].value);
            setAddress(v.target[4].value);
            setPhone(v.target[5].value);
            setQualify(v.target[6].value);
            setSchool(v.target[7].value);
            setCourse(v.target[8].value);
            setJdate(v.target[9].value);

            console.log(v.target);

            if(i%2 == 0){
                setValue(true)
            }else{
                setValue(false);            
            }
            i++;
        } 

        function generatePDF(){
            // Create jsPDF instance
            const pdf = new jsPDF();
        
            // Content to be added to the PDF
            const content = "GOMATHI AMBAL TYPEWRITING INSTITUTE";
            const content1 = "31, NKG Complex, Sankarankovil Road,";
            const content2 = "Kalugumalai - 628 552.";
            const content3 = "Approval No: 17012";
            const content4 = "Contact No : 7708799828";
            const pic0 = `${pic}`;
            const content5 = `Student Name : ${firstname}`;
            const content6 = `Father's Name : ${fathername}`;
            const content7 = `D.O.B : ${dob}`;
            const content8 = `Gender : ${gender}`;
            const content9 = `Address : ${address}`;
            const content10 = `Phone No : ${phone}`;
            const content11 = `Qualification : ${qualify}`;
            const content12 = `Technical Qualification : ${school}`;
            const content13 = `Course Name : ${course}`;
            const content14 = `Joining Date : ${jdate}`;
            
            // Add content to the PDF
            // pdf.addImage(sign,10,10,50,60,400,300);
            pdf.text(content, 40, 30); // Change coordinates as needed
            pdf.text(content1, 50, 40); // Change coordinates as needed
            pdf.text(content2, 70, 50); // Change coordinates as needed
            pdf.text(content3, 25, 65); // Change coordinates as needed
            pdf.text(content4, 120, 65); // Change coordinates as needed
            pdf.addImage(pic0,85,73,30,40,300,180);
            pdf.setDrawColor(1); // Set border color to black
            pdf.rect(10, 10, 190, 280);
            pdf.text(content5, 30, 130); // Change coordinates as needed
            pdf.text(content6, 30, 140); // Change coordinates as needed
            pdf.text(content7, 30, 150); // Change coordinates as needed
            pdf.text(content8, 30, 160); // Change coordinates as needed
            pdf.text(content9, 30, 170); // Change coordinates as needed
            pdf.text(content10, 30, 190); // Change coordinates as needed
            pdf.text(content11, 30, 200); // Change coordinates as needed
            pdf.text(content12, 30, 210); // Change coordinates as needed
            pdf.text(content13, 30, 220); // Change coordinates as needed
            pdf.text(content14, 30, 230); // Change coordinates as needed
            pdf.addImage(sign,110,250,70,30,400,200);
            // Save the PDF
            pdf.save('admission_form.pdf');
          };
    return(
    <div className="card">
    <div className="name" id="header">
        <p className="name1">GOMATHI AMBAL TYPEWRITING INSTITUTE</p>
        <section className="name2">31 NKG Complex, Sankarankovil Road,</section>
        <section className="name2">Kalugumalai - 628 552.</section>
        <section className="name2">Approval No: 17012</section>
        <section className="name2">Contact No : 7708799828</section>
        <img src={logo} alt="LOGO" className="logo"></img>
    </div>
    <p id="register">Addmission Form</p>
    <div className="content">
        <form onSubmit={(e)=>handleOut(e)}>
        <label>Name</label>
        <input type="text" id="name" placeholder="As Entered in SSLC Marksheet"/><br/>
        <label>Father's Name</label>
        <input type="text" id="fname" placeholder="Your Father's Name"/><br/>
        <label>Date Of Birth</label>
        <input type="date" id="dob"/><br/>
        <label for="gender">Gender</label>
        <select id="gender">
            <option value="Gender Selection">Select a option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select><br/>
        <label>Address</label><br/>
        <textarea rows="4" cols="22" id="address" placeholder="Enter Your Address"></textarea><br/>
        <label>Phone No</label>
        <input type="text" id="phone" placeholder="Enter Your Phone No"/><br/>
        <label>Qualification</label>
        <input type="text" id="qualification" placeholder="Enter Your Qualification"/><br/>
        <label>Technical Qualification</label>
        <input type="text" id="school" placeholder="Enter Your Technical Qualification"/><br/>
        <label for="course">Course</label>
        <select id="course">
            <option value="Course Selection">Select a option</option>
            <option value="Pre-Junior - English">Pre-Junior - English</option>
            <option value="Junior - English">Junior - English</option>
            <option value="senior - English">senior - English</option>
            <option value="Pre-Junior - Tamil">Pre-Junior - Tamil</option>
            <option value="Junior - Tamil">Junior - Tamil</option>
            <option value="senior - Tamil">senior - Tamil</option>
            <option value="COA">COA</option>
        </select><br/>
        <label>Joining Date</label>
        <input type="date" id="join"/><br/>
        <label>Student Picture</label>
        <input type="file" id="pic" onChange={getFile}/><br></br>
        <img src={pic} alt="Student Picture" className="studentPic"></img><br/>
        <button id="but" type="submit">Preview</button>    
        </form>
        
        <button onClick={()=>generatePDF()} className="Gepdf">Generate PDF</button>
    <div>{value?<View stu={pic} fullName={firstname} fName={fathername} birth={dob} sex={gender} add={address} mob={phone} edu={qualify} scl={school} cor={course} join={jdate}/> : <div style={{color:"crimson",fontSize:"22px",fontWeight:"900",padding:"1rem"}}>Preview - Confirm Your Details...!</div>}</div>
      </div>
    </div>
)};
export default Data;

