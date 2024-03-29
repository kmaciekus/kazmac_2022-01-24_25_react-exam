import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../authHook/useAuth";
import { FormAdd } from "../components/FormAdd";
import { Header } from "../organisms/Header";
import { SkillApi } from "../services/skillsApi";
import { Button } from "../ui/Button/Button";
import { Container } from "../ui/Container/Container";
import { FormField } from "../ui/FormFIeld/FormField";
import { Error } from "../components/Error";
import { Footer } from "../components/Footer";

export const AddSkill = () => {
	const navigate = useNavigate();
	const { token } = useAuth();
	const skill = { title: "", description: "" };
	const [model, setModel] = useState(skill);
	const [error, setError] = useState(null);
	const handleUpdate = (update) => setModel(update);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!model.title.length || !model.description.length)
			return setError("Please enter title and description!");
		const res = await SkillApi.add(token, model);
		if (res.err) return setError(res.err);
		setError(null);
		navigate("/", { state: { added: model } });
	};
	const showError = error ? <Error error1={error} /> : "";

	return (
		<>
			<Header title="Add Skill" />
			<Container as="form" onSubmit={handleSubmit}>
				<FormAdd onUpdate={handleUpdate} />
				{showError}
				<FormField className="buttons">
					<Button
						type="submit"
						className="main"
					>
						ADD
					</Button>
					<Button type="reset">CANCEL</Button>
				</FormField>
			</Container>
			<Footer/>
		</>
	);
};
