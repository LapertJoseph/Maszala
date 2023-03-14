import {create} from 'zustand';

const useStore = create((set) => (
    {
        token: '',
        setToken: (token) => {
            console.log('store.setToken', token);
            set(
                (state) => ({ ...state, token: token})
            )
        }
    }
))

export default useStore;