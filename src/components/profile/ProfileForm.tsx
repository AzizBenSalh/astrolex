import { User, Mail, Phone } from 'lucide-react';

interface ProfileFormProps {
  name: string;
  email: string;
  phone: string;
  isEditing: boolean;
  onSave: (data: { name: string; email: string; phone: string }) => void;
  onCancel: () => void;
  onChange: (field: string, value: string) => void;
}

export function ProfileForm({ 
  name, 
  email, 
  phone, 
  isEditing, 
  onSave, 
  onCancel, 
  onChange 
}: ProfileFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, email, phone });
  };

  if (!isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <User className="h-5 w-5 text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Name</p>
            <p className="text-white">{name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="h-5 w-5 text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white">{email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="h-5 w-5 text-purple-400" />
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-white">{phone}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-400">Name</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => onChange('name', e.target.value)}
            className="bg-gray-800 block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400">Email</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => onChange('email', e.target.value)}
            className="bg-gray-800 block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400">Phone</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="bg-gray-800 block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}