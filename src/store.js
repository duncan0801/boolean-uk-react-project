import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
	customerNumberInput: null,
	handleChangeCN: (event) => {
		set(({customerNumberInput: event.target.value}));
	},
	passwordInput: "",
    handleChangePassword: (event) => {
		set(({passwordInput: event.target.value}));
	},
	users: [],
	setUsers: (data) => set((state) => (state.users = data)),
    activeUser: "",
    setActiveuser: (user) => set(({activeUser: user})),
    moadal: "",
    setModal: (modal)
});

const useStore = create(devtools(store));
export default useStore;
