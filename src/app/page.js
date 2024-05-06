import Header from "./component/Header/Header";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Work from "./component/Work/Work";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skill />
      <Work />
    </main>
  );
}
