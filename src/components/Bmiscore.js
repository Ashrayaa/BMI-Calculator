//console.log(props.bmiNo);
//console.log(props)
//Destructuring for props can be done like below :
//const {bmiNo, bmiName} = props;

function Bmiscore({bmiNo, bmiName}) {
  return (
    <div className="flex flex-col gap-6 items-center bg-white shadow-2xl rounded-xl p-6">
      <p className="text-xl font-semibold">Your BMI Score</p>
      <div className="bg-green-600 p-10 rounded-3xl shadow-xl text-white font-bold text-3xl">
        <h1>{bmiNo}</h1>
      </div>
      <h1 className="font-bold text-3xl shadow-2xl text-green-600">
        {bmiName}
      </h1>
      <p className="text-xl font-semibold">
        "You need to lose <span>20kg</span>"
      </p>
    </div>
    // <div>
    //   {/* <p>Bmiscore : {bmiNo}</p>
    //   <p>BmiType : {bmiName}</p> */}
    // </div>
  );
}

export default Bmiscore;
