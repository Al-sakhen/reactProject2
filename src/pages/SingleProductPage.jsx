import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/axios.config";
import { useQuery } from "react-query";
import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

const SingleProductPage = () => {
    const { productId } = useParams();
    // const variant = ;
        
    //   console.log(variant)

    const getProduct = async () => {
        const { data } = await axiosInstance.get(`/products/${productId}`);
        return data;
    };

    const { data, isLoading } = useQuery(["product", productId], () =>
        getProduct()
    );

    if (isLoading) return <h1>loading</h1>;

    return (
        // <h3>hello</h3>
        <Flex
            justify={"center"}
            h="100vh"
            padding={() => useBreakpointValue(
        {
          base: 'outline',
          md: 10,
        },
        {

          fallback: 'md',
        },
      )}
        >
            {data.title}
        </Flex>
    );
};

export default SingleProductPage;
