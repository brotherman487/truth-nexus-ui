
import { useState, useEffect } from 'react';

export interface ProfileData {
  name: string;
  country: string;
  countryFlag: string;
  darkMode: boolean;
  notifications: boolean;
  profilePrivacy: boolean;
  scanHistory: boolean;
  totalScans: number;
  accuracy: number;
  globalRank: number;
}

const defaultProfile: ProfileData = {
  name: "Alex Thompson",
  country: "Canada",
  countryFlag: "🇨🇦",
  darkMode: true,
  notifications: true,
  profilePrivacy: false,
  scanHistory: true,
  totalScans: 248,
  accuracy: 92,
  globalRank: 124
};

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save profile data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updatedData: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...updatedData }));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return {
    profile,
    updateProfile,
    isEditing,
    toggleEditMode
  };
};
