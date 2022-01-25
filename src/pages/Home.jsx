import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../authHook/useAuth";
import { Skill } from "../components/Skill";
import { SkillApi } from "../services/skillsApi";
import { Container } from "../ui/Container/Container";

export const Home = () => {
	const [skills, setSkills] = useState();
	const [error, setError] = useState(null);
	const { token } = useAuth();
    const { state } = useLocation();

	const fetchSkills = async () => {
		const sk = await SkillApi.all(token);
		if (!sk.err) {
			setSkills(sk);
		}
		setError(sk.err);
	};

	useEffect(() => {
		fetchSkills();
	}, []);

    useEffect(() => {
        if (!state) return;
        if (state.logedIn) {
            console.log(state.logedIn);
        }
    },[state]);

	const errorText = !error ? "Loading..." : `${error}`;

	if (!skills) {
		return (
			<Container>
				{errorText !== "Loading..." ? (
					<span>
						Try to <Link to="/login"> Login </Link> or{" "}
						<Link to="/register">Register</Link>
					</span>
				) : (
					""
				)}
			</Container>
		);
	}
	return (
		<div>
			<Container>
				{skills.map((skill) => (
					<Skill key={skill.id} skill={skill} />
				))}
			</Container>
		</div>
	);
};
