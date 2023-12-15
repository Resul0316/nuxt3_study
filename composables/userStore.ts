import { defineStore } from "pinia";
import type { IRegisterUser } from "~~/types";

export const useUserStore = defineStore("user-store", {
	state: () => ({
		users: [] as IRegisterUser[],
	}),
	actions: {
		// Get all users from DB
		async getAll() {
			try {
				let data = await $fetch<IRegisterUser[]>("/api/users");
				this.users = data;
				return data as IRegisterUser[];
			} catch (err) {
				console.log(err)
			}
		},
		// Create a new user
		async create(username: string, email: string) {
			await $fetch("/api/users/create", {
				method: "POST",
				body: { username, email },
			})
				.catch((err) => {
					console.log(err)
				})
				.then(async () => {
					await this.getAll();
				});
		},
		// Update an user
		async update(id: string, username: string) {
			await $fetch(`/api/users/${id}`, {
				method: "PUT",
				body: { username },
			})
				.catch((err) => {
					console.log(err)
				})
				.then(async () => {
					await this.getAll();
				});
		},
		// delete an user
		async remove(id: string) {
			await $fetch(`/api/users/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					console.log(e)
				})
				.then(async () => {
					await this.getAll();
				});
		},
	},
});
