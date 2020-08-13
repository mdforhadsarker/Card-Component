import { useCreateContext } from '../create-context';
import { appReducer, initialState } from './AppReducer';

const [state, dispatch, provider] = useCreateContext(appReducer, initialState);
export const useAppState = state;
export const useAppDispatch = dispatch;
export const AppProvider = provider;
