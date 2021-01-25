import { Button } from "@chakra-ui/react";

const MyButton = ({ text, check }) => {
  return (
    <Button sx={{ width: "100%", bg: check ? "steelblue" : "coral", my: 2 }}>
      {text}
    </Button>
  );
};

export default MyButton;
