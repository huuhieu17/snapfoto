
import {initReactQueryAuth} from "react-query-auth"
import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from '@/features/Auth';
import storage from '@/utils/storage';
import { CircularProgress } from '@mui/material';

async function handleUserResponse(data: any) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);