import { useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import Bmiscore from "./components/Bmiscore";
import Form from "./components/Form";

function App() {
  
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState(" Not Calculated ");
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });


  const onFormSub = (w, h) => {
    let b = calBMI(w, h);
    setBmi(b);

    let bType = weightType(b);
    setBmiType(bType);

    
    const range = {
      underWeight: { low: calWeight(18.5) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRange(range);

  };

  const calBMI = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };

  const calWeight = (b, h) => {
    return (b * h * h).toFixed(2);
  };

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Overweight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <div className="flex gap-6 items-center justify-center lg:flex-row flex-col">
      <Form getData={onFormSub} />
      <Bmiscore bmiNo={bmi} bmiName={bmiType} />
      <BmiList range={bmiRange} />
    </div>
  );
}

export default App;
