import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

export default function useAuth() {
    return useContext(AuthContext)
}