import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [tip, setTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string>("");

  const billNum = parseFloat(bill) || 0;
  const peopleNum = parseFloat(people) || 0;

  const tipAmount = ((billNum * tip) / peopleNum).toFixed(2);
  const totalPerPerson = ((billNum * (1 + tip)) / peopleNum).toFixed(2);
  const showTip = tipAmount === "NaN";
  const showTotal = totalPerPerson === "NaN" || totalPerPerson === "Infinity";

  // Reset

  const handleReset = () => {
    setBill("");
    setPeople("");
    setTip(0);
    setCustomTip("");
  };

  return (
    <div>
      <label>Bill</label>
      <input
        type="number"
        placeholder="$0.00"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>People</label>
      <input
        type="number"
        placeholder="$0.00"
        onKeyDown={(e) => {
          if (e.key === ".") {
            e.preventDefault();
          }
        }}
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <div>
        <button onClick={() => setTip(0.05)}>5%</button>
        <button onClick={() => setTip(0.1)}>10%</button>
        <button onClick={() => setTip(0.15)}>15%</button>
        <button onClick={() => setTip(0.25)}>25%</button>
        <button onClick={() => setTip(0.5)}>50%</button>
        {/* Custom Tip */}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => {
            const value = e.target.value;
            setCustomTip(value);
            const number = parseFloat(value);
            if (!isNaN(number)) {
              setTip(number / 100);
            }
          }}
        />
      </div>

      <div>tip amout / person {showTip ? "$0.00" : tipAmount}</div>
      <div>
        total / person
        {showTotal ? "$0.00" : totalPerPerson}
      </div>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
