import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
	persist(
		set => ({
			isLoggedIn: false,
			user: null,
			login: user => {
				console.log('Logging in:', user);
				set({ isLoggedIn: true, user: user });
			},
			logout: () => {
				console.log('Logging out');
				set({ isLoggedIn: false, user: null });
			},
			setUser: user => set({ user: user }),
		}),
		{
			name: 'userStorage',
		},
	),
);

export default useUserStore;
