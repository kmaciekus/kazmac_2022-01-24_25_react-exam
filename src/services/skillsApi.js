const { REACT_APP_BASE_URL } = process.env;

export class SkillApi {
	static async all(token) {
		const res = await fetch(`${REACT_APP_BASE_URL}/v1/content/skills`, {
			method: "GET",
			headers: { authorization: `Bearer ${token}` },
		});
		return res.json();
	}

	static async register(user) {
		const res = await fetch(`${REACT_APP_BASE_URL}/v1/auth/register`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return res.json();
	}
	static async login(user) {
		const res = await fetch(`${REACT_APP_BASE_URL}/v1/auth/login`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return res.json();
	}
}
