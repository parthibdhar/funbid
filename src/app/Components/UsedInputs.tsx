"use client";

type MessageProps = {
  label: string;
  placeholder: string;
};

type SelectProps = {
  label: string;
  options: { value: string; title: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  bg?: boolean;
  register?: any; // You might want to define a more specific type here
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Message: React.FC<MessageProps> = ({ label, placeholder }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  return (
    <>
      <label className="text-border font-semibold">{label}</label>
      <select
        className="w-full mt-2 px-6 py-4 border border-border text-text bg-main rounded"
        onChange={onChange}
      >
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
    </>
  );
};

//input with 
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  bg,
  register,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input
        required
        name={name}
        value={value}
        onChange={onChange}
        {...register}
        type={type}
        placeholder={placeholder}
        className={`w-full text-sm mt-2 p-4 border border-border rounded text-white ${
          bg ? "bg-inputBg" : "bg-dry"
        }`}
      />
    </div>
  );
};
