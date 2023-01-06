// import custom components

import Header from "./Header";

export default function Layout({ children }) {
// styles the main html tag
const styles = {
  display: "flex",
  flexDirection: "row"
};
return (
    <>
    <Header />
    {children}
  </>
);}