import React, { FC } from "react";

type FormFieldProps = {
  labelName: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

const FormField: FC<FormFieldProps> = ({
  labelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="bg-[#ECECF1] px-2 py-1 rounded-md text-black font-semibold text-xs"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="shadow-sm focus:ring-[#4649ff] focus:border-[#4649ff] block w-full 
        sm:text-sm border-gray-300 rounded-md p-3 border bg-gray-50 text-gray-900
        outline-none"
        required
      />
    </div>
  );
};

export default FormField;
