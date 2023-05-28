import { ReactNode } from "react";
import Headers from "./headers";
import Footer from "./footer";

type PageProps = {
  children: ReactNode
}

const Layouts = (
  { children }: PageProps
) => {

  return (
    <>
      <Headers />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layouts;