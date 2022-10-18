//console.log(props.bmiNo);
//console.log(props)
//Destructuring for props can be done like below :
//const {bmiNo, bmiName} = props;

function Bmiscore({bmiNo, bmiName, changeWeight}) {
  return (
    <div className="flex flex-col gap-6 items-center bg-white shadow-2xl rounded-xl p-6">
      <p className="text-xl font-semibold">Your BMI Score</p>
      <div className="bg-green-600 p-10 rounded-3xl shadow-xl text-white font-bold text-3xl">
        <h1>{bmiNo}</h1>
      </div>
      <h1 className="font-bold text-3xl shadow-2xl text-green-600">
        {bmiName}
      </h1>
      {changeWeight.type === "positive" && (
        <div className="">"You need to lose <span className="font-bold text-green-600">{changeWeight.weight} Kg</span>" </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="">"You need to gain <span className="font-bold text-green-600">{changeWeight.weight} Kg</span>" </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="">"You weight is <span className="font-bold text-green-600">Normal</span>. Maintain it" </div>
      )}
    </div>
    // <div>
    //   {/* <p>Bmiscore : {bmiNo}</p>
    //   <p>BmiType : {bmiName}</p> */}
    // </div>
  );
}

export default Bmiscore;
