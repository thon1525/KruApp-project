import { Button } from "@/components";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Button
        isDisabled={true}
        colorScheme="secondary"
        className="border rounded-full px-4 py-2 w-[100px]"
      >
        Hello
      </Button>
    </div>
  );
};

export default Homepage;
