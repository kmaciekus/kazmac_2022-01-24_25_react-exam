import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../authHook/useAuth";
import { Skill } from "../components/Skill";
import { Header } from "../organisms/Header";
import { SkillApi } from "../services/skillsApi";
import { Container } from "../ui/Container/Container";

export const Home = () => {
	const [skills, setSkills] = useState();
	const [error, setError] = useState(null);
	const [title, setTitle] = useState();
	const [username, setUsername] = useState();
	const { token } = useAuth();
	const { state } = useLocation();
	
	const fetchSkills = async () => {
		const sk = await SkillApi.all(token);
		if (!sk.err) {
			if (!skills) setSkills(null);
			setSkills(sk);
		}
		setError(sk.err);
	};
	
	const addSkill = (skill) => {
		setSkills((prevState) => [...prevState, skill]);
	};
	useEffect(() => {
		fetchSkills();
	}, []);

	useEffect(() => {
		console.log(state);
		if (!state){
			setUsername(sessionStorage.getItem("username"));
			setTitle(<>Welcome {username}!<br/> Here are your Skillzz:</>);
			return;
		};
		if (state.logedIn) {
			setUsername(state.logedIn.email.split("@")[0]);
			sessionStorage.setItem("username", state.logedIn.email.split("@")[0])
			setTitle(<>Welcome {username}!<br/> Here are your Skillzz:</>);
			return;
		}
		// if (state.added) {
		// 	addSkill(state.added);
		// }
	}, [state]);
	const errorText = !error ? "Loading..." : `${error}`;
	const skillsSection = !skills ? (
		<span>
			You have no skills yet <Link to="/add">Add</Link>
		</span>
	) : (
		skills.map((skill) => <Skill key={skill.id} skill={skill} />)
	);

	if (!skills) {
		return (
			<Container>
				<Header title={errorText} />
				{errorText !== "Loading..." ? (
					<span>
						Try to <Link to="/login"> Login </Link> or{" "}
						<Link to="/register">Register</Link>
					</span>
				) : (
					<span>
						Dear {username}, You have no skills yet <Link to="/add">Add</Link>
					</span>
				)}
			</Container>
		);
	}
	return (
		<div>
			<Header title="SkillZzz" />
			<p>{title}</p>
			<Container>{skillsSection}</Container>
		</div>
	);
};
