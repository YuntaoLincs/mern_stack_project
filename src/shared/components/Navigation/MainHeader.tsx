import { type ReactNode } from "react";
import "./MainHeader.css";

type MainHeaderType = {
  children: ReactNode;
};

const MainHeader = ({ children }: MainHeaderType) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
