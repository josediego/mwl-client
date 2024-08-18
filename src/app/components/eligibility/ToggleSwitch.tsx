import { useState } from "react";

interface ToggleSwitchProps<T> {
  options: T[];
  initialValue: T;
  onChange: (value: T) => void;
}


export function ToggleSwitch<T>({ options, initialValue, onChange }: ToggleSwitchProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T>(initialValue);

  const handleClick = (value: T) => {
    if (value !== selectedValue) {
      setSelectedValue(value);
      onChange(value);
    }
  };

  return (
    <div className="flex items-center border border-[#E3E3E3] w-[92px] h-[23px] rounded-[23px]">
      {options.map(option => (
        <span
          key={option as unknown as string}
          className={`w-full text-sm text-center cursor-pointer rounded-xl ${
            selectedValue === option ? 'bg-[#3C3C3C] text-[#F4F4F4]' : 'text-[#8D8D8D]'
          }`}
          onClick={() => handleClick(option)}
        >
          {String(option)}
        </span>
      ))}
    </div>
  );
}