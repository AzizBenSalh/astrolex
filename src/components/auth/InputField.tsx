import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  name: string;
  value: string; // Propriété pour la valeur du champ
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Propriété pour gérer le changement
}

export const InputField: FC<InputFieldProps> = ({ icon: Icon, type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value} // Lier la valeur du champ à l'état
          onChange={onChange} // Gérer le changement de valeur
          className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 yy"
        />
        <div className="absolute top-3 left-3">
          <Icon className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
