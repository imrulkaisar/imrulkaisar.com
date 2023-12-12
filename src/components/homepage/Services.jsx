import ServiceCard from "@components/shared/ServiceCard";
import webDevelopmentIcon from "@assets/images/icons/web-development.svg";
import responsiveIcon from "@assets/images/icons/responsive-devices.svg";
import applicationIcon from "@assets/images/icons/web-application.svg";
import componentIcon from "@assets/images/icons/components.svg";
import performanceIcon from "@assets/images/icons/performance.svg";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container-area space-y-16">
        <h2 className="section-heading text-center">Services</h2>
        <div className="flex gap-8 justify-center flex-wrap items-start">
          <ServiceCard icon={webDevelopmentIcon} title="Web Development">
            Crafting dynamic and interactive web applications with React.js.
            From user interfaces to complex functionalities, I specialize in
            leveraging React's power for seamless user experiences.
          </ServiceCard>
          <ServiceCard icon={responsiveIcon} title="Responsive Design">
            Designing visually appealing and responsive frontend layouts.
            Ensuring your website looks stunning on all devices, I focus on
            delivering a consistent and engaging user interface.
          </ServiceCard>
          <ServiceCard icon={applicationIcon} title="Single Page Applications">
            Building efficient Single Page Applications for a smooth,
            uninterrupted user experience. Using React, I create SPAs that offer
            fast loading times and a fluid navigation experience.
          </ServiceCard>
          <ServiceCard icon={componentIcon} title="Component Development">
            Creating tailored and reusable components to enhance your web
            projects. From UI elements to complex functionalities, I design and
            implement custom React components for optimal efficiency.
          </ServiceCard>
          <ServiceCard icon={performanceIcon} title="Performance Optimization">
            Optimizing frontend performance for faster load times. Through
            efficient coding practices and performance tuning, I ensure your
            website delivers an exceptional user experience.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
