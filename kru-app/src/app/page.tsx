
import { Button, Typography } from "@/components";
import React from "react";
const Homepage = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your logic here
  };
  return (
    <div>
    <Button
        isDisabled={true}
        colorScheme="secondary"
        className="border rounded-full px-4 py-2 w-[100px]"
      >
        Hello
      </Button>
      <Typography
        align="justify"
        variant="bold"
        fontSize="xl"
        className="bg-amber-200"
      >
        សួស្ដីប្រូ !
      </Typography>
    </div>
  );
};

export default Homepage;
