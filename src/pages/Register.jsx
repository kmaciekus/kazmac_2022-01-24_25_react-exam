import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/FormLogReg";
import { Header } from "../organisms/Header";
import { SkillApi } from "../services/skillsApi";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";
import { FormField } from "../ui/FormFIeld/FormField";
import { Error } from "../components/Error";

export const Register = () => {
	const navigate = useNavigate();
	const user = { email: "", password: "" };
	const [model, setModel] = useState(user);
	const [error, setError] = useState(error);
	const handleUpdate = (update) => setModel(update);
	const handleClick = async () => {
		if (!model.email.length || !model.password.length)
			return setError("Please enter email and password");

		const res = await SkillApi.register(model);
		if (res.err) return setError(res.err);
		setError(null);
		navigate("/login");
	};
	const showError = () => {
		if (error) {
			return (
				<Error error1={error}/>
			);
		}
		return;
	}
	return (
		<>
			<Header title="Register" />
			<Container as="form">
				<Form onUpdate={handleUpdate} />
				{showError}
				<FormField className="buttons">
					<Button
						type="button"
						className="main"
						onClick={handleClick}
					>
						REGISTER
					</Button>
					<Button type="reset">CANCEL</Button>
				</FormField>
			</Container>
		</>
	);
};
