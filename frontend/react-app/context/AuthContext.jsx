import { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Provide `authUser` and `setAuthUser` as separate properties in the value object
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);



