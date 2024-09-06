import Header from "./components/header";
import CallToAction from "./components/cta";
import About from "./components/about";
import Services from "./components/services";
import Team from "./components/team";
import Unities from "./components/unities";

export default function Home() {
  return (
    <main className="h-[4133px] w-full bg-primary-default flex-row">
      <Header/>
      <CallToAction />
      <About />
      <Services />
      <Team />
      <Unities /> 
    </main>
  )
}
