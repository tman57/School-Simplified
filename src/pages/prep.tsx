import {
	Divider,
	Heading,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import Head from "next/head";
import React from "react";


export default function Community(
): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Community</title>
			</Head>
			<Container py={10}>
				<ContainerInside>
					<VStack textAlign="left" spacing={10}>
						<Stack
							textAlign="left"
							direction={{ base: "column", md: "row-reverse" }}
							spacing={{ base: 5, md: 10 }}
							justifyContent="center"
						>
							<VStack flex={2} justifyContent="center">
								<Heading size="2xl">Header</Heading>

								<Text fontSize="lg">
									Information about this page thats TBD
								</Text>
							</VStack>
						</Stack>

						<Stack
							direction={{ base: "column", md: "row" }}
							justify="center"
							spacing={10}
							textAlign="center"
						>
							<VStack
								flex={1}
								backgroundColor="brand.transparent"
								p={8}
								rounded={rounded}
								boxShadow="lg"
								justify="center"
							>
								<Heading>Projects</Heading>
								<Heading size="sm" as="i">
                Header for Projects
								</Heading>
								<Text>
                  Short description about this
                </Text>
								{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
							</VStack>

							<VStack
								flex={1}
								backgroundColor="brand.transparent"
								p={8}
								rounded={rounded}
								boxShadow="lg"
								justify="center"
							>
								<Heading>Events</Heading>
								<Heading size="sm" as="i">
                Header for Events
								</Heading>
								<Text>
                  Short description about this
                </Text>
							</VStack>

							<VStack
								flex={1}
								backgroundColor="brand.transparent"
								p={8}
								rounded={rounded}
								boxShadow="lg"
								justify="center"
							>
								<Heading>Scholarship Table</Heading>
								<Heading size="sm" as="i">
									Header for Scholarship Table
								</Heading>
								<Text>
                  Short description about this
                </Text>
							</VStack>
						</Stack>
					</VStack>
					<Divider borderColor="white" mt={16} />
				</ContainerInside>
			</Container>



		</>
	);
}