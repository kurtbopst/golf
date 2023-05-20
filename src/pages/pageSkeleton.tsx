import type { ReactNode } from "react";
import NavBar from "~/components/Navbar";
import TopBar from "~/components/TopBar";

interface Props {
  children: ReactNode;
}
const PageSkeleton = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="main">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default PageSkeleton;
