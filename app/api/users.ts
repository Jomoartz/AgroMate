import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser as firebaseDeleteUser,
  User as FirebaseUser,
} from 'firebase/auth';

import { log } from '../utility/logger';
import { auth } from '../config/firebaseConfig';

type GenericError = {
  message: string;
};

const register = async (email: string, password: string): Promise<FirebaseUser | GenericError> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    log(new Error(`Registration error: ${error}`));
    return { message: 'Registration failed.' };
  }
};

const login = async (email: string, password: string): Promise<FirebaseUser | GenericError> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    log(new Error(`Login error: ${error}`));
    return { message: 'Login failed.' };
  }
};

const listener = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

const signout = async (): Promise<void> => {
  try {
    await signOut(auth);
    log('User signed out successfully.');
  } catch (error) {
    log(new Error(`Sign out error: ${error}`));
  }
};

const deleteUserAccount = async (): Promise<void | GenericError> => {
  const user = auth.currentUser; 
  if (user) {
    try {
      await firebaseDeleteUser(user);
      log('User account deleted successfully.');
    } catch (error) {
      log(new Error(`Error deleting user: ${error}`));
      return { message: 'Account deletion failed.' };
    }
  } else {
    return { message: 'No user is signed in.' };
  }
};

const re_auth = async (email: string, password: string): Promise<void | GenericError> => {
  const user = auth.currentUser;
  if (!user) {
    return { message: 'No user is signed in.' };
  }

  const credential = EmailAuthProvider.credential(email, password);

  try {
    await reauthenticateWithCredential(user, credential);
    console.log('User re-authenticated successfully.');
    await deleteUserAccount();
  } catch (error) {
    log(new Error(`Error re-authenticating user: ${error}`));
    return { message: 'Re-authentication failed.' };
  }
};

export default { register, login, listener, signout, deleteUserAccount, re_auth };
