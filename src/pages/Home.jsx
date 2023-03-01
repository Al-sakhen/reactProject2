import {
    Box,
    Container,
    Grid,
    SkeletonCircle,
    SkeletonText,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import ProductItem from "../components/ProductItem";
import ProductsFilterBy from "../components/ProductsFilterBy";
import { axiosInstance } from "./../api/axios.config";
import { useState } from "react";

const HomePage = () => {
    // const [queryParams, setQueryParams] = useState({
    //     ip: "",
    //     password: "",
    //     domain: "",
    // });
    const [checkedItems, setCheckedItems] = useState([false, false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    const getProductsList = async () => {
        const { data } = await axiosInstance.get(
            `/products?select=images,price,title,description${
                checkedItems[0] ? ",discountPercentage" : ""
            }${checkedItems[1] ? ",category" : ""}${
                checkedItems[2] ? ",brand" : ""
            }`
        );
        return data;
    };
    const { data, isLoading, isFetching } = useQuery(
        ["products", checkedItems],
        () => getProductsList()
    );

    const renderSkeletonProductCards = Array.from({ length: 15 }, (_, idx) => (
        <Box padding="6" boxShadow="lg" bg="transparent" key={idx}>
            <SkeletonCircle size="70" m={"auto"} />
            <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="2" />
        </Box>
    ));
    if (isLoading)
        return (
            <Container maxW="1500px" my={20}>
                <Grid
                    gridTemplateColumns={
                        "repeat(auto-fill, minmax(280px, 1fr))"
                    }
                    gap={5}
                >
                    {renderSkeletonProductCards}
                </Grid>
            </Container>
        );
    return (
        <Container maxW="1500px" my={20}>
            <ProductsFilterBy
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
                isIndeterminate={isIndeterminate}
                allChecked={allChecked}
            />
            <Grid
                gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"}
                gap={5}
            >
                {data.products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;
