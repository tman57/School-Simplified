import { getBlogListing, getBlogPage } from "@api/notion";
import { Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";
import { BlogListing, BlogPage } from "types";
import { parsePage } from "util/parse_notion";

type BlogPageProps = { page: BlogPage; listing: BlogListing };
export default function BlogPage_({
	page,
	listing,
}: BlogPageProps): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | {listing.title}</title>
			</Head>
			<Container>
				<ContainerInside my={7}>
					<Heading>{listing.title}</Heading>
					{parsePage(page)}
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const blogListings = await getBlogListing();
	let thisListing = null;
	for (const blogListing of blogListings) {
		if (blogListing.id === params.id) {
			thisListing = blogListing;
			break;
		}
	}

	if (!thisListing) {
		return { props: {} };
	}
	const props: BlogPageProps = {
		listing: thisListing,
		page: await getBlogPage(params.id),
	};
	return { props, revalidate: 60 };
}

export async function getStaticPaths() {
	const blogListing = await getBlogListing();
	const paths = blogListing.map((blogListing) => {
		return { params: { id: blogListing.id } };
	});
	return { paths, fallback: true };
}
