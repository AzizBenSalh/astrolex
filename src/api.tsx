// api.tsx

import axios, { AxiosResponse } from 'axios';

// Définition des types pour les données utilisateurs
interface UserCredentials {
  email: string;
  password: string;
}

interface UserRegistrationData extends UserCredentials {
  name: string;
  phone: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}

const API_URL = 'http://localhost:5000/api/auth'; // Remplacez par l'URL de votre serveur backend

// Fonction pour l'inscription d'un utilisateur
export const registerUser = async (userData: UserRegistrationData): Promise<AxiosResponse<AuthResponse>> => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response; // Retourne la réponse complète de l'API
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Fonction pour la connexion d'un utilisateur
export const loginUser = async (userData: UserCredentials): Promise<AxiosResponse<AuthResponse>> => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response; // Retourne la réponse complète de l'API
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};
