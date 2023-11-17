import React from "react";
import { useState } from "react";
import editSvg from "../../../assets/images/edit-2.svg";
import { Button, Radio, Select, Option, Checkbox } from "@material-tailwind/react";


const Appbar = () => {
  
  const style = {
    but1: {//first image
      backgroundColor: "#736b6b", width: "08%", color: "black", float: 'left', display: "flex", margin: "20px 0px 0px 20px", borderRADIUS: "1"
    },
    but2: {
      
      float: "left",
      margin: "10px 10px 10px 10px",
    },
    box: {
     display:"flex",
    },
    //manage reserve btn
    manage: {
      backgroundColor: "white", width: "100%", color: "rgb(62, 59, 59)", float: 'left', display: "flex", height: "45px",
    },
    manage2: {
      backgroundColor: "#1d1c1c", color: "rgb(247, 243, 243)",  display: "flex", borderradius: "30px", float: "right",
    }
    
  }
  
  return (
    
    //navbar
    < div >
      <div>
        <nav >
          
          <ul className="flex">
            <li>
              <img src={editSvg} className="" />
            </li>
            <li>
              <Button>Flight</Button>
            </li>
            <li>
              <Button>Hotel</Button>
            </li>
            <li>
              <Button>Flight + Hotel</Button>
            </li>
            <li>
              <Button>Car location</Button>
            </li>
            <li>
              <Button>Travelling Idea</Button>
            </li>
            <li>
              <Select label="Others">
                <Option>Holiday Location</Option>
                <Option>On 20years</Option>
              </Select>
            
            </li>
            
            <li>
             < Button style={style.manage}>
              <img src={editSvg} className="w"/>Manage reservation
             </Button></li>
            <li>
              < Button style={style.manage2}>
              <img src={editSvg} className="w"/>Account | Premium suscription
             </Button>

            </li>
            <li>
              < Button style={style.manage2}>
              <img src={editSvg} className="w"/>nfo-help
             </Button>
            </li>
            <li>
              < Button style={style.manage2}>
              <img src={editSvg} className=""/>Language
                </Button>
               
            </li>
            
          </ul>
        </nav>
      </div>
      <h1>The lowest prices, searched and compared</h1>
      <Button style={style.but1} >
       <img src={editSvg} className={style.but2} alt="edit icon" />flights
      </Button>

       <Button style={style.but1} >
       <img src={editSvg} className={style.but2} alt="edit icon" />Hotels
      </Button>

      <br /><br />
      <div className="yy">
        <ul>
        <Radio name="type" label="Round trip"  className="w-18 h-36"/>
        <Radio name="type" label="One way"  />
        <Radio name="type" label="Multiple destinations"  />
      
      
      <Select className="select" label="Select Version">
        <Option>Economy</Option>
        <Option>Economy Premium</Option>
        <Option>Business class</Option>
        <Option>Premium</Option>
      </Select>
       

      <Checkbox label="Direct flights only" />
      </ul>
        <br />
        </div>

      
    
      <input type="text" placeholder="From" className="my-3" />
      <input type="text" placeholder="To" className="my-3" />
      <input type="date" placeholder="Leaves on the" className="my-3" />
      <input type="date" placeholder="Back on the " className="my-3" />
  
      <Select label="A traveller" className="my-3">
        <Option>Adult(s) (12+)</Option>
        <Option>Child(Children) (2-11yrs)</Option>
        <Option>Baby(Babies) (-2)</Option>
        <Option>Premium</Option>
        <Button className="my-3">Finish</Button>
      </Select>

      <br />

  
      
      <Button className="my-3">Search flight</Button>
    
    </div>
  );
};

 export default Appbar;

