import * as React from "react"
import { Box, Heading } from "@chakra-ui/react"


export default function Navbar () {

    return (
        <Box 
            sx={{
            ".my-box:hover &": {
                color: "green.500",
            },
            }}
        >
            <Heading size="lg" fontSize="50px">
                I'm overriding this heading
            </Heading>
        </Box>
    )
}