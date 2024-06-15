import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export default function useStore() {
    return useContext(StoreContext)
}