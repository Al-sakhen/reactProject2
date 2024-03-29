import {
    Badge,
    Button,
    Card,
    CardBody,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProductItem = ({
    id,
    price,
    title,
    description,
    brand,
    category,
    discountPercentage,
    thumbnail
}) => {
    return (
        <Card bg="none" border={"1px solid #a8b5c8"}>
            <CardBody>
                <Image
                    src={thumbnail}
                    alt="Green double couch with wooden legs"
                    rounded="full"
                    w={180}
                    h={180}
                    mx={"auto"}
                    objectFit={"cover"}
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md" as="h2" textAlign={"center"}>
                        {title}
                    </Heading>
                    <Text fontSize="sm" textAlign={"center"}>
                        {description}
                    </Text>

                    <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                        <Text fontSize="sm" my={1}>
                            Price:
                            <Badge mx="2" colorScheme="purple">
                                ${price}
                            </Badge>
                        </Text>
                        {brand ? (
                            <Text fontSize="sm" my={1}>
                                Brand:
                                <Badge mx="2" colorScheme="green">
                                    {brand}
                                </Badge>
                            </Text>
                        ) : null}
                        {discountPercentage ? (
                            <Text fontSize="sm" my={1} w={"full"}>
                                Discount:
                                <Badge mx="2" colorScheme="green">
                                    {discountPercentage}%
                                </Badge>
                            </Text>
                        ) : null}
                        {category ? (
                            <Text fontSize="sm" my={1} w={"full"}>
                                Category:
                                <Badge mx="2" colorScheme="purple">
                                    {category}
                                </Badge>
                            </Text>
                        ) : null}
                    </Flex>
                </Stack>
                <Button
                    as={RouterLink}
                    to={`/products/${id}`}
                    colorScheme="purple"
                    size="md"
                    w={"full"}
                    mt={4}
                    transition={".4s ease-out"}
                    _hover={{
                        backgroundColor: "#9f7aea",
                    }}
                >
                    View Details
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductItem;
