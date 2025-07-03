import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center text-3xl font-bold mb-8 border-b pb-4">
        <Title text1={"About"} text2={"Us"} />
      </div>

      {/* <div className="my-10 flex flex-col md:flex-row gap-16"> */}
      {/* <img
          src={assets.about_img}
          alt="About Us"
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
        /> */}
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          recusandae quibusdam error. Nemo illum nostrum quibusdam illo odio
          reprehenderit ut laudantium maiores. Quam harum laboriosam asperiores
          commodi quisquam minima obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat labore
          dolorum doloremque ratione? Accusantium nesciunt explicabo eveniet
          quaerat illo amet recusandae blanditiis dolore unde quibusdam
          mollitia, minima optio, nulla voluptate.
        </p>
        <h3 className="font-semibold text-lg text-gray-800">Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          beatae error voluptatum, id cum vitae consequuntur tenetur quam atque,
          dolores minima cupiditate fugiat tempora iusto ipsam ab non amet
          ducimus.
        </p>
      </div>
      {/* </div> */}

      <div className="text-4xl py-8 text-center">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="border border-gray-300 rounded-lg p-6 md:p-10 flex flex-col gap-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-lg">Quality Assurance</h4>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, unde.
            Facere nemo, unde beatae velit nostrum voluptatem explicabo!
            Pariatur eligendi et non. Sequi assumenda repudiandae temporibus
            sapiente, quos sunt et?
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 md:p-10 flex flex-col gap-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-lg">Convenience</h4>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, unde.
            Facere nemo, unde beatae velit nostrum voluptatem explicabo!
            Pariatur eligendi et non. Sequi assumenda repudiandae temporibus
            sapiente, quos sunt et?
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 md:p-10 flex flex-col gap-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="font-bold text-lg">Exceptional Customer Service</h4>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, unde.
            Facere nemo, unde beatae velit nostrum voluptatem explicabo!
            Pariatur eligendi et non. Sequi assumenda repudiandae temporibus
            sapiente, quos sunt et?
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
