import { Camera } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatar: string;
  onAvatarChange: (file: File) => void;
}

export function ProfileHeader({ name, email, avatar, onAvatarChange }: ProfileHeaderProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onAvatarChange(file);
    }
  };

  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600"></div>
      <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center">
        <div className="relative group">
          <img
            src={avatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=200&h=200'}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-black object-cover"
          />
          <label className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full text-white cursor-pointer 
                          opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="h-5 w-5" />
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
      </div>
    </div>
  );
}