// src/utils/auth.js
import { useRouter } from "vue-router";

// Centralized logout function
export const logoutAll = () => {
  localStorage.clear();
  const router = useRouter();
  router.push("/login");
};
