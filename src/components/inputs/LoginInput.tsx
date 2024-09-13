import { Dispatch, SetStateAction } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

interface LoginInputProps {
  type: "email" | "text";
  placeholder: string;
  id?: string;
  onChange: Dispatch<SetStateAction<string>>;
  value?: string;
}

export default function LoginInput({
  type,
  placeholder,
  id,
  onChange,
  value,
}: LoginInputProps) {
  return (
    <div className="flex gap-2 border-b-2 rounded-md">
      {type == "email" && (
        <div className="bg-blue-400 p-2 rounded-md">
          <MdEmail className="text-white" />
        </div>
      )}

      {type == "text" && (
        <div className="bg-blue-400 p-2 rounded-md">
          <FaUser className="text-white" />
        </div>
      )}

      <input
        className="text-xl font-light text-gray-500  focus:ring-0 focus:ring-offset-0 w-full"
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}
