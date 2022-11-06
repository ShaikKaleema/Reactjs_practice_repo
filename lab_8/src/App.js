import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const submitMe = (e) =>{
    e.preventDefault();
    calculateBMI();
  };
  const calculateBMI= () =>{
    var heightSquared = (height/100 * height/100);
    var bmi = weight/ heightSquared;
    if(bmi<16){
      window.alert("Hi.."+name+".. you are completely UnderWeight(Severe Thinner)");
    }
    else if (bmi>=16 && bmi<17)
    {
      window.alert("You are moderately underweight");
    }
    else if (bmi>=17 && bmi<18.5){
      window.alert("You are little underWeight");
    }
    else if(bmi>=18.5 && bmi<=24.99){
      window.alert("You are in a healthy weight range");
    }
    else if(bmi>=25 && bmi<= 29.9){
      window.alert("You are overWeight");
    }
    else if (bmi>=30){
      window.alert("youare obese");
    }
    bmi= Math.round(bmi*100)/100;
  }
  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <form onSubmit={submitMe}>
        <label>Enter your name:</label>
        <input type="text" name="name" value={name} onChange={handleName} /><br/>
        <label>Enter your Height</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleHeight}
        /><br/>
        <label>Enter your Weight</label>
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleWeight}
        /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;