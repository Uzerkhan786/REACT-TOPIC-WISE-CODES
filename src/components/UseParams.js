// useParams bhi ek hooks he or yaha dynamic component ko render krne me kaam aata he
// , For eg - http://swiggy.com/1234

// iska mtlb yha hota he ki hamara routing me jab bhi params me id ho, usko ye detect kr lete he or 
// hum jaha dynamic id ka use krna chahe kr sakte he

// Code -
//     https: /swiggy.com/144  isme 144 id he, hume isko component me use krna he to iske liye hum 
//     bas const id = useParams() likh denge aa jayega


import { useParams } from "react-router-dom";
function UseParams() {

    const params = useParams();
    console.log(params);
}
export default UseParams;