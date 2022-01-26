import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../authHook/useAuth";
import { Footer } from "../components/Footer";
import { Skill } from "../components/Skill";
import { Header } from "../organisms/Header";
import { SkillApi } from "../services/skillsApi";
import { Container } from "../ui/Container/Container";

export const Home = () => {
	const [skills, setSkills] = useState(null);
	const [error, setError] = useState(null);
	const [title, setTitle] = useState();
	const [username, setUsername] = useState();
	const { token } = useAuth();
	const { state } = useLocation();

	const fetchSkills = async () => {
		const sk = await SkillApi.all(token);
		if (!sk.err) {
			if (!sk.length) return setSkills(null);
			setSkills(sk);
		}
		setError(sk.err);
	};

	useEffect(() => {
		fetchSkills();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!state) {
			const user = sessionStorage.getItem("username");
			setUsername(user)
			setTitle(
				<>
					Welcome {user}!<br /> Here are your Skillzz:
				</>
			);
			return;
		}
		if (state.logedIn) {
			const user = state.logedIn.email.split("@")[0];
			setUsername(user)
			sessionStorage.setItem(
				"username",
				user
			);
			setTitle(
				<>
					Welcome {user}!<br /> Here are your SkillZzz:
				</>
			);
			return;
		}
		if (state.added){
			const user = sessionStorage.getItem("username");
			setTitle(
				<>
					Added skill {state.added.title}. <br/> Here are your SkillZzz, {user}
				</>
			);
			return;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
						Dear {username}, You have no skills yet{" "}
						<Link to="/add">Add</Link>
					</span>
				)}
				<Footer/>
			</Container>
		);
	}
	return (
		<div>
			<Header title="SkillZzz" />
			<p>{title}</p>
			<Container>{skillsSection}</Container>
			<Footer/>
		</div>
	);
};
