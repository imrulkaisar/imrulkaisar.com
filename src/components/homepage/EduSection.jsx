import bg from "@/assets/images/bg/bg-dots.png";
import { Separator } from "@components/ui/separator";

const EduSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="py-20"
    >
      <div className="container-area max-w-4xl space-y-12 bg-fixed">
        <h2 className="section-heading text-center">Education</h2>
        <div className="space-y-8">
          <div className="flex gap-8 items-center">
            <div className="text-6xl w-24 aspect-square flex items-center justify-center border-2 text-gray-400 font-bold">
              1
            </div>
            <div className="space-y-2 flex-grow">
              <h4 className="font-semibold text-2xl">
                Bachelor of Arts (Hons)
              </h4>
              <Separator className="h-1" />
              <p className="font-semibold text-xl">
                English Language and Literature
              </p>
              <p>
                <b>NUB - Northern University Bangladesh</b>, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-6xl w-24 aspect-square flex items-center justify-center border-2 text-gray-400 font-bold">
              2
            </div>
            <div className="space-y-2 flex-grow">
              <h4 className="font-semibold text-2xl">
                Higher School Certificate
              </h4>
              <Separator className="h-1" />
              <p className="font-semibold text-xl">Science</p>
              <p>
                <b>Agricultural University College, Mymensingh</b>, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-6xl w-24 aspect-square flex items-center justify-center border-2 text-gray-400 font-bold">
              3
            </div>
            <div className="space-y-2 flex-grow">
              <h4 className="font-semibold text-2xl">
                Secondary School Certificate
              </h4>
              <Separator className="h-1" />
              <p className="font-semibold text-xl">Science</p>
              <p>
                <b>Purbadhala J. M. Pilot High School</b>, Purbadhala,
                Netrokona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduSection;
