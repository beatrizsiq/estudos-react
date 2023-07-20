import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Text,
    Center,
    Grid,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const textStyles = {
        bg: "#FFFF",
        bgClip: "text",
        fontSize: "2xl",
        fontWeight: "extrabold",
    };
    return (
        <div>
            <Grid
                area={"header"}
                w="100%"
                h="50px"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
                <Center>
                    <Breadcrumb>
                        <BreadcrumbItem isCurrentPage>
                            <NavLink to="/">
                                <Text {...textStyles}>Home</Text>
                            </NavLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <NavLink to="/about">
                                <Text {...textStyles}> About</Text>
                            </NavLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <NavLink to="/products">
                                <Text {...textStyles}>Products</Text>
                            </NavLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Center>
            </Grid>
        </div>
    );
};

export default Navbar;
