import reactLogo from "./assets/react.svg";
import typescriptLogo from "./assets/typescript.svg";
import Card from "./components/card";
import { EnvelopeSimple, LinkedinLogo } from "phosphor-react"

export default function App() {
  const cardTags = ["reactjs", "tailwindcss", "supabase"]

  return (
    <>
      <div className="">
        <div className="text-center pt-16">
          <h2 className="font-bold md:text-3xl">Nizar Baihaqi</h2>
          <p className="text-xl">Front-end Web Developer</p>
        </div>
        <div className="md:flex justify-center pt-12">
          <h1 className="pt-0 font-black text-center md:text-4xl">I'm creating</h1>
          <span className="hidden md:inline">{`⠀`}</span>
          <h1 className="font-black text-center md:text-4xl">websites with</h1>
        </div>
        <div className="pt-12 flex justify-center items-center gap-8">
          <img className="w-20" src={reactLogo} alt="React Logo" />
          <img className="w-20" src={typescriptLogo} alt="Typescript Logo" />
        </div>
      </div>
      <div className="my-8 px-3 flex flex-wrap justify-center gap-6 mx-auto max-w-max">
        <Card tags={cardTags}>Todo App</Card>
        <Card tags={cardTags}>E-Commerce</Card>
        <Card tags={cardTags}>Profile Page</Card>
      </div>
      <div>
        <h1 className="text-center">Contact Me</h1>
        <div className="my-4 flex flex-wrap justify-center items-center gap-2">
          <button className="btn flex items-center min-w-max">
            <LinkedinLogo size={32} />
            Nizar Baihaqi
          </button>
          <button className="btn flex items-center min-w-max">
            <EnvelopeSimple size={32} />
            nizarbaihaq@gmail.com
          </button>
        </div>
      </div>
    </>
  );
}
