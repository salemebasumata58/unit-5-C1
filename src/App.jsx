import { useState } from "react";
import './App.css'; 

function App() {
  const [score, setScore] = useState(76);
  const handlscore =(val)=>{
    if(score>101){
      return;
    }
    setScore(score+val)
    console.log("score",score+val)
  }
  const [wicket, setWicket] = useState(2);
  const handlewicket =(val)=>{
    if(score>=101){
      return;
    }
    if(wicket>=12){
      return
    }
   
    setWicket(wicket+val)
    console.log("wicket",wicket+val)
  }

  const [ball, setBall] = useState(50);
  const handleball = (val) =>{
    setBall(ball+val);
  }
  

  const status=()=>{
    if(score>100){
      return (<h1 className="status">India Won</h1>)
    }
  }

  const over =(ball)=>{
    let over=0;
    if(ball>=6){
    over = over +1;
    
    return <h1>{over.ball}</h1>
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
             8.2
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button  className="addScore1" onClick={()=>{
          handlscore(1)
        }}>Add 1</button>
        <button className="addScore4" onClick={()=>{
          handlscore(4)
        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
          handlscore(6)
        }}>Add 6</button>
      </div>

      <div className="addWicket" onClick={()=>{
          handlewicket(1)
        }}>
        Add Wicket
        {/* Increase the count of wicket */}
        <button>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          handleball(1)
        }}>Add 1</button>
      </div>

      {/* /* /* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
       {status()}

    </div>
  );
}

export default App;