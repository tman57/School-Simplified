import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const Reviews = [
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Senior",
	},
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Freshman",
	},
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Freshman",
	},
];

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Heading as="h1" mb={5}>
					Success Stories
				</Heading>
				<Flex justify="center">
					<Flex
						justify="center"
						textAlign={["center", "center", "center", "left"]}
						flexDir={["column", "column", "column", "row"]}
						maxW={[300, 450, 600, 1200]}
					>
						<Box>
							<Text>"{Reviews[0].review}"</Text>
							<Box>
								<Heading as="h1" size="md">
									{Reviews[0].name}
								</Heading>
								<Heading as="h2" size="xs">
									{Reviews[0].title}
								</Heading>
							</Box>
						</Box>

						<Center
							height={100}
							mx={20}
							display={["none", "none", "none", "block"]}
						>
							<Divider orientation="vertical" bg="white" />
						</Center>

						<Box my={[10, 10, 10, 0]}>
							<Text>"{Reviews[1].review}"</Text>
							<Box>
								<Heading as="h2" size="md">
									{Reviews[1].name}
								</Heading>
								<Heading as="h3" size="xs">
									{Reviews[1].title}
								</Heading>
							</Box>
						</Box>
						<Center
							height={100}
							mx={20}
							display={["none", "none", "none", "block"]}
						>
							<Divider orientation="vertical" bg="white" />
						</Center>
						<Box>
							<Text>"{Reviews[2].review}"</Text>
							<Box>
								<Heading as="h2" size="md">
									{Reviews[2].name}
								</Heading>
								<Heading as="h3" size="xs">
									{Reviews[2].title}
								</Heading>
							</Box>
						</Box>
					</Flex>
				</Flex>
			</ContainerInside>
		</Container>
	);
}