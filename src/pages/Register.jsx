import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/FormLogReg";
import { Header } from "../organisms/Header";
import { SkillApi } from "../services/skillsApi";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";
import { FormField } from "../ui/FormFIeld/FormField";
import { Error } from "../components/Error";
import { Footer } from "../components/Footer";

export const Register = () => {
	const navigate = useNavigate();
	const user = { email: "", password: "" };
	const [model, setModel] = useState(user);
	const [error, setError] = useState(null);
	const handleUpdate = (update) => setModel(update);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!model.email.length || !model.password.length)
			return setError("Please enter email and password");

		const res = await SkillApi.register(model);
		if (res.err) return setError(res.err);
		setError(null);
		navigate("/login");
	};
	const showError = error ? <Error error1={error}/> : "";

	return (
		<>
			<Header title="Register" />
			<Container as="form" onSubmit={handleSubmit}>
				<Form onUpdate={handleUpdate} />
				{showError}
				<FormField className="buttons">
					<Button
						type="submit"
						className="main"
					>
						REGISTER
					</Button>
					<Button type="reset">CANCEL</Button>
				</FormField>
			</Container>
			<Footer/>
		</>
	);
};
