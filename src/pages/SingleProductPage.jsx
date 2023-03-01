import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../api/axios.config";
import { useQuery } from "react-query";
import React from "react";
import { Box, Button, Flex, Image, SkeletonCircle, SkeletonText, useBreakpointValue } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SingleProduct from "./../components/SingleProduct";

const SingleProductPage = () => {
    const { productId } = useParams();
    const variant = useBreakpointValue({
        base: 5,
        md: 10,
    });

    //   console.log(variant)

    const getProduct = async () => {
        const { data } = await axiosInstance.get(`/products/${productId}`);
        return data;
    };

    const { data, isLoading } = useQuery(["product", productId], () =>
        getProduct()
    );

    if (isLoading)
        return (
            <Box padding={variant} boxShadow="lg" mt={25}>
                <SkeletonCircle size="10" />
                <SkeletonText
                    mt="5"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                />
            </Box>
        );

    return (
        <Box padding={variant}>
            <Button colorScheme="cyan" as={Link} to="/" size="sm" fontSize={24}>
                🔙
            </Button>
            <SingleProduct {...data} />
        </Box>
    );
};

export default SingleProductPage;
