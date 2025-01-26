import React from "react";
import Dropdown from "./components/forms/Dropdown/Dropdown"; // Assuming you saved the component in Dropdown.tsx

// Define the DropdownOption type
type DropdownOption = {
  label: string;
  value: string;
};

const App: React.FC = () => {
  // Sample dropdown data (you can replace this with your actual data)
  const dropdownOptions: DropdownOption[] = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
  ];

  const handleDropdownSelect = (value: string) => {
    console.log("Selected value:", value);
    // Do something with the selected value
  };

  return (
    <div>
      <h1>
        <span style={{ color: "#2BA5FF" }}>jetdeck</span>.admin
      </h1>
      <Dropdown
        options={dropdownOptions}
        onSelect={handleDropdownSelect}
        placeholder="Choose an item"
      />
    </div>
  );
};

export default App;
