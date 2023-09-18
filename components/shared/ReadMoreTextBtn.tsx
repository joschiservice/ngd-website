import { Box, Text } from "@mantine/core";
import {FiArrowUpRight} from "react-icons/fi";

export function ReadMoreTextBtn() {
    return (
      <Box>
        <Box mt={12}
             sx={(theme) => ({
               display: "inline-flex",
               alignItems: "center",
               position: "relative",
               borderBottom: "2px solid rgba(0, 0, 0, 0)",
               '&:after': {
                 content: "''",
                 position: "absolute",
                 width: "0",
                 height: "2px",
                 display: "block",
                 marginTop: "25px",
                 right: 0,
                 background: "white",
                 transition: "width .5s ease"
               },
               '&:hover:after': {
                 width: "100%",
                 left: "0",
                 background: "white"
               }
             })}>
          <Text color="#ffff" size="sm">Read More</Text>
          <FiArrowUpRight style={{marginLeft: "6px"}} />
        </Box>
      </Box>
    )
  }