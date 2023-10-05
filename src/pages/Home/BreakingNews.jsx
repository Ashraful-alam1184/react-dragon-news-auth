import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="bg-pink-500 text-white rounded-l-lg">Breaking News</button>
      <Marquee className="bg-base-300 p-3 rounded-r-lg" pauseOnHover={true} speed={80} direction="left">
        
        <h2 className="mr-8 text-black">I can be a React component, multiple React components, or just some
        text..... <Link className="text-red-800" to={'/'}>Read more</Link> </h2>
        <h2 className="mr-8">I can be a React component, multiple React components, or just some
        text..... <Link className="text-red-800" to={'/'}>Read more</Link> </h2>
        <h2 className="mr-8">I can be a React component, multiple React components, or just some
        text..... <Link className="text-red-800" to={'/'}>Read more</Link> </h2>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
