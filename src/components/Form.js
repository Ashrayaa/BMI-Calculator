
import { useState } from "react";

function Form({ getData }) {
  //getData is a prop.
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //preventdefault is given because normallly, HTML will refresh the page after clicking submit button. To avaoid that refreshing this is given.
    if (isNaN(weight) || isNaN(height)) {
      alert("Enter a valid input");
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
    }
  };
  // const getWeight = (e) => {
  //   console.log(e.target.value)
  //   setWeight(e.target.value)
  // }
  return (
    <div className="flex flex-col items-center bg-white shadow-xl p-6 gap-6 rounded-xl">
      <h1 className="text-2xl text-green-600 font-bold ">BMI Calculator</h1>
      <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
        <label>Weight : </label>
        <input
          type="text"
          placeholder="weight in Kg"
          className="p-4 rounded-xl border border-green-600 text-neutral-700 outline-lime-500"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          // onChange={getWeight}
        />

        <label>Height : </label>
        <input
          type="text"
          placeholder="height in m"
          className="p-4 border border-green-600 rounded-xl text-neutral-700 outline-lime-500"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <button 
      
        className="bg-green-600 text-white p-4 text-xl font-bold border rounded-xl hover:bg-amber-600 ">
          Get BMI
        </button>
      </form>
    </div>
  );
}

export default Form;
