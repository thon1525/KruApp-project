import React from 'react'
interface ButtonProps {
    children: React.ReactNode;
    ClassName?: string;
   ColorScheme?: "primary" | "secondary";
  }

const Button: React.FC<ButtonProps >=({children,ClassName,ColorScheme})=>{
    let colorSchemeClass = "";
  switch (ColorScheme) {
    case 'primary':
      // Code for 'primary' color scheme
      colorSchemeClass = "primary-class"; // Replace with actual class name
      break;
    default:
      // Code for default case
      colorSchemeClass = "default-class"; // Replace with actual class name
      break;
  }
    return (

        <div className={`text-center ${ClassName} `}>
            {children}
        </div>
    )
}
export  {Button}