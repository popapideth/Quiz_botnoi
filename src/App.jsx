import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState(0);
  const [pattern, setPattern] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Pattern(inputValue);
  };

  const Pattern = (n) => {
    let tempPattern = [];
    // Create the top half of the pattern
    for (let i = 1; i <= n; i++) {
      tempPattern.push('*'.repeat(i));
    }
    // Create the bottom half of the pattern
    for (let i = n - 1; i >= 1; i--) {
      tempPattern.push('*'.repeat(i));
    }
    setPattern(tempPattern);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}

export default App
