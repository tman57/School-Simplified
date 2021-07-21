/* eslint-disable import/no-default-export */
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type SimplihacksCard = {
	name: string;
	title: string;
	img: string;
};

export default function SimplihacksCard({
	title,
	name,
	img,
}: SimplihacksCard): JSX.Element {
	return (
		<Flex flexDir="column" p="15px" m="5px" align="center">
			<Center
				w="200px"
				h="200px"
				backgroundColor="brand.transparent"
				rounded="50px"
			>
				<Image
					rounded="30px"
					display="block"
					boxSize="165px"
					objectFit="cover"
					alt="staff member"
					src={img}
				/>
			</Center>
			<Box maxW="200px" py="5px">
				<Heading size="md">{name}</Heading>
				<Text size="sm" flexWrap="wrap">
					{title}
				</Text>
			</Box>
		</Flex>
	);
}