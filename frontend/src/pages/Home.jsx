import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PopularPrograms from "../components/home/PopularPrograms";
import MembershipPreview from "../components/home/MembershipPreview";
import TrainersPreview from "../components/home/TrainersPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";


const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <PopularPrograms />
      <MembershipPreview />
      <TrainersPreview />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Home;
