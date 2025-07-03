import BestSeller from "../components/BestSeller";
import Header from "../components/Header";
import LatestCollection from "../components/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox";
// import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Header />
      <LatestCollection />
      <BestSeller />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
