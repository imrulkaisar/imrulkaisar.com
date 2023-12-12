import { Progress } from "@components/ui/progress";

const SkillsSection = () => {
  return (
    <section className="container-area max-w-4xl py-16 space-y-12">
      <h2 className="section-heading text-center">My Skills</h2>
      <div className="space-y-5">
        <div className="skill">
          <span className="font-bold text-xl w-52">HTML5</span>
          <Progress value={95} progressColor="bg-[#fe3e0f]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">CSS3</span>
          <Progress value={90} progressColor="bg-[#2963f0]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">JavaScript</span>
          <Progress value={85} progressColor="bg-yellow-500" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">ReactJS</span>
          <Progress value={90} progressColor="bg-[#01a3d2]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">NodeJS</span>
          <Progress value={70} progressColor="bg-[#5ea94c]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">ExpressJS</span>
          <Progress value={60} progressColor="bg-[#fd9226]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">MongoDB</span>
          <Progress value={55} progressColor="bg-[#44a94b]" />
        </div>
        <div className="skill">
          <span className="font-bold text-xl w-52">NextJs</span>
          <Progress value={50} progressColor="bg-black" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
