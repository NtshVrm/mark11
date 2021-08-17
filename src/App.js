import { useState } from "react";
import "./styles.css";

export default function App() {
  var [luckynum, setluckynum] = useState(0);
  var [sum, setsum] = useState(0);
  var [message, setmessage] = useState("");
  function dateHandler(event) {
    var dob = event.target.value;
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }
    setsum(sum);
  }

  function luckynumHandler(event) {
    var luckynum = event.target.value;
    setluckynum(luckynum);
  }

  function checker() {
    if (sum && luckynum) {
      if (sum % luckynum === 0) {
        var message = "Your Birthdate is Lucky!";
        setmessage(message);
      } else {
        message = "Your Birthdate is Not Lucky!";
        setmessage(message);
      }
    } else {
      message = "Please enter both fields!";
      setmessage(message);
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Is Your Birthday Lucky?</h1>
      </div>

      <div className="dob">
        ENTER DATE OF BIRTH:
        <input type="date" onChange={dateHandler}></input>
      </div>

      <div className="luckynum">
        ENTER YOUR LUCKY NUMBER:
        <input onChange={luckynumHandler}></input>
      </div>

      <div className="check">
        <button onClick={checker}>Check</button>
      </div>

      <div className="text_out">
        <textarea defaultValue={message}></textarea>
      </div>
    </div>
  );
}
