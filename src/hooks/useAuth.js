import {useDispatch, useSelector} from 'react-redux';
import {getAuth, signOut} from "firebase/auth";
import {removeUser} from "../redux/slices/userSlice";

export const useAuth = () => {
  const { email, token, id, admin, userName, date } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };


  return {
    isAuth: Boolean(email),
    isAdmin: admin,
    email,
    token,
    userName,
    id,
    date,
    logout
  };
};