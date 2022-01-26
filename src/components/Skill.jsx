import React from "react";
import { Card, CardInfoText, CardTextHolder, CardTitle } from "../ui/Card/Card";

export const Skill = ({ skill }) => {
    const { title, description } = skill;
	return (
		<Card>
			<CardTextHolder>
				<CardTitle>{title}</CardTitle>
			</CardTextHolder>
            <CardTextHolder>
                <CardInfoText>{description}</CardInfoText>
            </CardTextHolder>
		</Card>
	);
};
