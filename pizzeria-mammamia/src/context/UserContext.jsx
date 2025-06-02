import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem("userEmail") || null
  );
  const [userProfile, setUserProfile] = useState(
    () => JSON.parse(localStorage.getItem("userProfile")) || null
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", userEmail);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
    }
  }, [token, userEmail]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    } else {
      localStorage.removeItem("userProfile");
    }
  }, [userProfile]);

  const fetchUserProfile = async () => {
    if (!token) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener perfil");
      }

      const data = await response.json();
      setUserProfile(data);
      return data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    } else {
      setUserProfile(null);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      setToken(data.token);
      setUserEmail(data.email);
      navigate("/");
      return { success: true };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  const register = async (email, password, name) => {
    try {
      const registerData = {
        email: email,
        password: password,
        name: name,
      };

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      const data = await response.json();
      setToken(data.token);
      setUserEmail(data.email);
      navigate("/");
      return { success: true };
    } catch (error) {
      console.error("Error en registro:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setUserEmail(null);
    setUserProfile(null);

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userProfile");

    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        userEmail,
        userProfile,
        loading,
        login,
        register,
        logout,
        fetchUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
