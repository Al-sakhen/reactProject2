import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Badge,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SingleProduct({
    thumbnail,
    title,
    price,
    description,
    images,
    category,
    brand,
    stock,
    rating,
}) {
    return (
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex height={"fit-content"}>
                    <Splide
                        aria-label="My Favorite Images"
                        options={{
                            type: "loop",
                            perPage: 1,
                            height: "250px",
                            gap: 9,
                        }}
                    >
                        {images.map((img, idx) => (
                            <SplideSlide key={idx}>
                                <Image
                                    rounded={"md"}
                                    alt={"product image"}
                                    src={thumbnail}
                                    fit={"cover"}
                                    align={"center"}
                                    w={"100%"}
                                    h={{
                                        base: "100%",
                                        sm: "400px",
                                        lg: "500px",
                                    }}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                        >
                            {title}
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.900", "gray.400")}
                            fontWeight={300}
                            fontSize={"2xl"}
                        >
                            {price}$ USD
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    "gray.200",
                                    "gray.600"
                                )}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text fontSize={"lg"}>{description}</Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: "16px", lg: "18px" }}
                                color={useColorModeValue(
                                    "yellow.500",
                                    "yellow.300"
                                )}
                                fontWeight={"500"}
                                textTransform={"uppercase"}
                                mb={"4"}
                            >
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Brand:
                                    </Text>{" "}
                                    <Badge fontWeight={"bold"} colorScheme={"green"}>{brand}</Badge>
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Category:
                                    </Text>{" "}
                                    {category}
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Stock:
                                    </Text>{" "}
                                    {stock}
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Rating:
                                    </Text>{" "}
                                    {rating}/5
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}
