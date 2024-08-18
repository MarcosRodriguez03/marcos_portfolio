import Image from "next/image";
import HeaderComponent from "./Components/HeaderComponent";
import CodingJourneyComponent from "./Components/CodingJourneyComponent";
import TestProject from './Assets/TestProject.jpg'

export default function Home() {
  return (
    <main className="h-[2000px] w-max-7xl bg-[#003566]">
      <div className="container mx-auto px-4 md:px-8">

        <HeaderComponent />


        <CodingJourneyComponent Title="CodeStack Academy" TimeFrame="09/2023 - 05/2024" Content="Over 1000 hours of intensive and extensive project-based curriculum and learning, led by instructors specializing in widely used technologies including HTML, CSS, JavaScript, React, Angular, and C#." />
        <CodingJourneyComponent Title="CodeStack Academy" TimeFrame="09/2023 - 05/2024" Content="Over 1000 hours of intensive and extensive project-based curriculum and learning, led by instructors specializing in widely used technologies including HTML, CSS, JavaScript, React, Angular, and C#." />
        <CodingJourneyComponent Title="CodeStack Academy" TimeFrame="09/2023 - 05/2024" Content="Over 1000 hours of intensive and extensive project-based curriculum and learning, led by instructors specializing in widely used technologies including HTML, CSS, JavaScript, React, Angular, and C#." />
      </div>
      {/* this one */}
      <section className="bg-[#dddddd]">
        <div className="container flex justify-between mx-auto px-4 md:px-16 ">
          <div>
            <Image src={TestProject} alt="Main Project" />
          </div>

          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima deserunt iste ducimus repellat debitis dolore nisi esse. Repudiandae natus quas doloribus ipsam atque, animi amet deleniti corrupti praesentium, consequuntur perspiciatis.</p>
          </div>

        </div>
      </section>

      <section className=" container mx-auto">
        <div className="mx-4 md:mx-16 bg-[#67688961] rounded-lg flex">
          <div>
            <Image className="rounded-l-md" src={TestProject} alt="Main Project" />
          </div>

          <div className="p-1 md:p-10">
            <p className="text-center font-bold text-white text-base md:text-3xl">Project Name</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque autem maxime vitae quod a praesentium quo esse quaerat totam ea, architecto consequatur, ad perspiciatis maiores quia saepe, unde possimus libero.
          </div>

        </div>
      </section>


    </main>
  );
}
