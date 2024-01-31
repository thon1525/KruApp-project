
import { Button, Dropdown, Typography } from "@/components";
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

      <Dropdown className="my-custom-dropdown left-1/2 text-sm">
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Duplicate</a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Edit</a>
         
        </div>
      </div>
    </Dropdown>

    </div>
  );
};

export default Homepage;
