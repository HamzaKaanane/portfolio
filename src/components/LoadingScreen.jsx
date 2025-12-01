import ShinyText from "../sections/ShinyText";
import "../sections/ShinyText.css";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f0f0f] z-50">
      <ShinyText text="Loading..." speed={3} className="text-4xl font-bold" />
    </div>
  );
};

export default LoadingScreen;
