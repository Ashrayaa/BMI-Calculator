function BmiList({ range, bmi }) {
  console.log(range);
  return (
    <div className="p-4">
      <div className="p-2 border border-slate-100">
        <ul className="flex gap-10 text-xl font-bold text-green-600">
          <div>Body Type</div>
          <div>Body Mass Index</div>
          <div>Weight Range</div>
        </ul>
      </div>
      <div
        className={
          bmi < 18.5
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-20">
          <div>Underweight</div>
          <div>less than 18.5</div>
          <div>&lt; {range.underWeight.low} Kg</div>
        </ul>
      </div>
      <div
        className={
          18.5 < bmi && bmi < 24.9
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-24">
          <div>Normal</div>
          <div> 18.5 - 24.9</div>
          <div>
            {range.normal.low} Kg - {range.normal.high} Kg{" "}
          </div>
        </ul>
      </div>
      <div
        className={
          25 < bmi && bmi < 29.9
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-24">
          <div>Overweight</div>
          <div> 25 - 29.9</div>
          <div>
            {range.overWeight.low} Kg - {range.overWeight.high} Kg{" "}
          </div>
        </ul>
      </div>
      <div
        className={
          30 < bmi && bmi < 34.9
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-20">
          <div>Obesity Class I</div>
          <div> 30 - 34.9</div>
          <div>
            {range.obesityOne.low} Kg - {range.obesityOne.high} Kg{" "}
          </div>
        </ul>
      </div>
      <div
        className={
          35 < bmi && bmi < 39.9
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-20">
          <div>Obesity Class II</div>
          <div> 35 - 39.9</div>
          <div>
            {range.obesityTwo.low} Kg - {range.obesityTwo.high} Kg{" "}
          </div>
        </ul>
      </div>
      <div
        className={
          bmi > 40
            ? "p-2 border-2 border-red-600"
            : "p-2 border-2 border-slate-100"
        }
      >
        <ul className="flex gap-16">
          <div>Obesity Class III</div>
          <div> greater than 40</div>
          <div> &gt; {range.obesityThree.high} Kg</div>
        </ul>
      </div>

      {/* <div className="flex gap-10">
        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <div className="text-2xl text-green-600 font-bold ">Body Type</div>
          <div>Underweight</div>
          <div>Normal</div>
          <div>Overweight</div>
          <div>Obesity Class I</div>
          <div>Obesity Class II</div>
          <div>Obesity Class III</div>
        </ul>

        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <div className="text-2xl text-green-600 font-bold ">Body Mass Index</div>
          <div>less than 18.5</div>
          <div> 18.5 - 24.9</div>
          <div> 25 - 29.9</div>
          <div> 30 - 34.9</div>
          <div> 35 - 39.9</div>
          <div> greater than 40</div>
        </ul>

        <ul className="text-lg font-semibold flex flex-col items-center gap-2">
          <div className="text-2xl text-green-600 font-bold ">Weight Range</div>
          <div>less than 59.94 Kg</div>
          <div> 59.94 Kg - 80.68 Kg</div>
          <div> 81.00 Kg - 96.88 Kg</div>
          <div> 97.20 Kg - 113.08 Kg</div>
          <div> 113.40 Kg - 129.28 Kg</div>
          <div> greater than 40</div>
        </ul>
      </div> */}
    </div>
  );
}

export default BmiList;
