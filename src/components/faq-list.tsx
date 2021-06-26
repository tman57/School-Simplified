/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-default-export */
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/faq-item";
import { useState } from "react";

type FaqListProps = {
	list: {
		question: string;
		answer: string;
	}[];
};

export default function FaqList({ list }: FaqListProps): JSX.Element {
	const [expanded, setExpanded] = useState<number[]>([]);

	return (
		<Accordion
			allowMultiple
			onChange={(newExpanded: number[]) => {
				setExpanded(newExpanded);
			}}
		>
			{list.map(({ question, answer }, index): JSX.Element => {
				return (
					<FaqItem
						key={index}
						question={question}
						answer={answer}
						open={!!expanded.includes(index)}
					/>
				);
			})}
		</Accordion>
	);
}
