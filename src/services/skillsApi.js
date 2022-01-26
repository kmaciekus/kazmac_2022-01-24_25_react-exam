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
	static async add(token, skill) {
		const res = await fetch(`${REACT_APP_BASE_URL}/v1/content/skills`, {
			method: "POST",
			headers: {
				authorization: `Bearer ${token}`,
				"Content-type": "application/json",
			},
			body: JSON.stringify(skill),
		});
		return res.json();
	}
}
