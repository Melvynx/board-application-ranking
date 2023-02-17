import { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="default-input"
        className="block mb-2 text-sm font-medium  text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id="default-input"
        className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
};
