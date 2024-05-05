import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn("mx-auto w-full max-w-screen-3xl px-2.5", className)}>
    {children}
  </div>;
};

export default MaxWidthWrapper;
