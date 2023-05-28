import Banner from "./banner";
import Location from "./location";
import Services from "./services";

type PageProps = {
}

const HomePage = ({ }: PageProps) => {

  return (
    <section>
     <Banner />
     <Services />
     <Location />
    </section>
  )
}
export default HomePage;