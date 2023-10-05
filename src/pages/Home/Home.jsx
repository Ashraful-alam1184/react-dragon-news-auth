import Header from "../shared/Header/Header";
import LeftSightNav from "../shared/LeftSightNav/LeftSightNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSightNav from "../shared/RightSightNav/RightSightNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border mt-20">
          <LeftSightNav></LeftSightNav>
        </div>
        <div className="md:col-span-2 border mt-20">
            <h2 className="text-3xl">News coming soon....</h2>
        </div>
        <div className="border mt-20 p-3">
          <RightSightNav></RightSightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
