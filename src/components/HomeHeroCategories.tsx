import { Categories } from "@/models/Categories";
import { slugify } from "@/Utils/slugify";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { CenteredLabel } from "./CenteredLabel";

type Props = {
  categories: Categories[]
};

export function HomeHeroCategories({ categories }: Props) {
  return (
    <Grid templateColumns={{ base: "1fr 1fr", md: "2fr 1fr 1fr" }} templateRows={{ base: "130px 154px 130px", md: "200px 260px" }} gap={{ base: "0.5rem", md: "1rem", lg: "2rem" }} templateAreas={{ base: `"cat1 cat1" "cat2 cat3" "cat4 cat4"`, md: `"cat1 cat2 cat3" "cat1 cat4 cat4"` }}>
      {categories.map((cat, index) => {
        const slug = slugify(cat);
        const imageUrl = `/pic-categories-${slug}.jpg`;

        // TODO: Fix the image size crop issue
        return <GridItem fontSize={{ base: "0.85rem", md: "1rem" }} position="relative" w="100%" height="100%" gridArea={`cat${index + 1}`} key={index}><Image src={imageUrl} style={{ objectFit: "cover" }} fill={true} alt={cat} /><CenteredLabel>{cat}</CenteredLabel></GridItem>;
      })}
    </Grid >);
}
