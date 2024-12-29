import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileStats } from '../../components/profile/ProfileStats';
import { ProfileForm } from '../../components/profile/ProfileForm';
import { TopicStats } from '../../components/profile/TopicStats';

export default function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile, setFavoriteTopic } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    avatar: user?.avatar || ''
  });

  if (!user) {
    navigate('/auth/login');
    return null;
  }

  const handleAvatarChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newAvatar = reader.result as string;
      setFormData(prev => ({ ...prev, avatar: newAvatar }));
      updateProfile({ avatar: newAvatar });
    };
    reader.readAsDataURL(file);
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (data: { name: string; email: string; phone: string }) => {
    updateProfile({ ...data });
    setIsEditing(false);
  };

  const handleFavoriteTopicSelect = (topic: string) => {
    setFavoriteTopic(topic);
  };

  const quizStats = user.quizStats || {
    totalQuizzesTaken: 0,
    topicsAttempted: {},
    highestScore: 0,
    averageScore: 0
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <ProfileHeader
        name={formData.name}
        email={formData.email}
        avatar={formData.avatar}
        onAvatarChange={handleAvatarChange}
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProfileStats
          totalScore={user.totalScore || 0}
          quizzesTaken={quizStats.totalQuizzesTaken}
          highestScore={quizStats.highestScore}
          averageScore={quizStats.averageScore}
        />

        <TopicStats
          topicsAttempted={quizStats.topicsAttempted}
          favoriteTopic={user.favoriteTopic}
          onSelectFavorite={handleFavoriteTopicSelect}
        />

        <div className="bg-gray-900 rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Profile Information</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>

          <ProfileForm
            {...formData}
            isEditing={isEditing}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
            onChange={handleFieldChange}
          />
        </div>
      </div>
    </div>
  );
}