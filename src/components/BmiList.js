function BmiList({ range }) {
  console.log(range);
  return (
    <div className="p-4">
      <div className="p-2 border border-green-700">
        <ul className="flex gap-10 text-xl font-bold text-green-600">
          <li>Body Type</li>
          <li>Body Mass Index</li>
          <li>Weight Range</li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-20">
          <li>Underweight</li>
          <li>less than 18.5</li>
          <li>&lt; {range.underWeight.low} Kg</li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-24">
          <li>Normal</li>
          <li> 18.5 - 24.9</li>
          <li>{range.normal.low} - {range.normal.high} </li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-24">
          <li>Overweight</li>
          <li> 25 - 29.9</li>
          <li>{range.overWeight.low} - {range.overWeight.high} </li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-20">
          <li>Obesity Class I</li>
          <li> 30 - 34.9</li>
          <li>{range.obesityOne.low} - {range.obesityOne.high} </li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-20">
          <li>Obesity Class II</li>
          <li> 35 - 39.9</li>
          <li>{range.obesityTwo.low} - {range.obesityTwo.high} </li>
        </ul>
      </div>
      <div className="p-2 border border-green-700">
        <ul className="flex gap-16">
          <li>Obesity Class III</li>
          <li> greater than 40</li>
          <li> &gt; {range.obesityThree.high}</li>
        </ul>
      </div>

      {/* <div className="flex gap-10">
        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <li className="text-2xl text-green-600 font-bold ">Body Type</li>
          <li>Underweight</li>
          <li>Normal</li>
          <li>Overweight</li>
          <li>Obesity Class I</li>
          <li>Obesity Class II</li>
          <li>Obesity Class III</li>
        </ul>

        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <li className="text-2xl text-green-600 font-bold ">Body Mass Index</li>
          <li>less than 18.5</li>
          <li> 18.5 - 24.9</li>
          <li> 25 - 29.9</li>
          <li> 30 - 34.9</li>
          <li> 35 - 39.9</li>
          <li> greater than 40</li>
        </ul>

        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <li className="text-2xl text-green-600 font-bold ">Weight Range</li>
          <li>less than 59.94 Kg</li>
          <li> 59.94 Kg - 80.68 Kg</li>
          <li> 81.00 Kg - 96.88 Kg</li>
          <li> 97.20 Kg - 113.08 Kg</li>
          <li> 113.40 Kg - 129.28 Kg</li>
          <li> greater than 40</li>
        </ul>
      </div> */}
    </div>
  );
}

export default BmiList;
