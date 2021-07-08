import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
	// customerNumberInput: null,
	// handleChangeCN: (event) => {
	// 	set(({customerNumberInput: event.target.value}));
	// },
	// passwordInput: "",
    // handleChangePassword: (event) => {
	// 	set(({passwordInput: event.target.value}));
	// },
	users: [],
	setUsers: (data) => set((state) => (state.users = data)),
    activeCustomer: null,
    setActiveCustomer: (customer) => set(({activeCustomer: customer})),
    modal: "",
    setModal: (modal) => set(({modal})),
    transactionSearchString: "",
    setTransactionSearchString: (newValue) => set(({transactionSearchString: newValue})),
    activeCustomerTransactions: [],
    setActiveCustomerTransactions: (transactions) => set(({activeCustomerTransactions: transactions}))

    
});

const useStore = create(devtools(store));
export default useStore;
