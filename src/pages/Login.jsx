import React, { useState } from "react";
import { Container } from "../ui/Container/Container";
import { Form } from "../components/Form";
import { FormField } from "../ui/FormFIeld/FormField";
import { Button } from "../ui/Button/Button";
import { useAuth } from "../authHook/useAuth";

export const Login = () => {
	const { state, login, error } = useAuth();
	const user = { email: "", password: "" };
	const [model, setModel] = useState(user);
	const handleUpdate = (update) => setModel(update);
	const handleClick = async () => {
		const res = await login(model);
		if (res.err) return console.warn(res.err);
		console.log("state: ", state);
	};
	return (
		<Container as="form">
			<Form onUpdate={handleUpdate} />
			<FormField>
				<div style={{ color: "red" }}>{error}</div>
			</FormField>
			<FormField className="buttons">
				<Button type="button" onClick={handleClick}>
					LOGIN
				</Button>
				<Button type="reset">CANCEL</Button>
			</FormField>
		</Container>
	);
};