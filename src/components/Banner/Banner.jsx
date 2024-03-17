import background from "../../assets/images/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mt-12 rounded-3xl"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay rounded-3xl"></div>
      <div className="hero-content text-center">
        <div className="w-2/3 text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Celebrate culinary creativity with Chef's Table – your gateway to a
            world of exquisite flavors and tantalizing recipes. Explore a
            diverse array of dishes crafted by culinary experts, from comforting
            classics to innovative delights. Join us on a gastronomic journey
            where every bite tells a story of passion, taste, and culinary
            artistry.
          </p>
          <div className="flex flex-col justify-center lg:flex-row gap-6">
            <button className="btn bg-[#0BE58A] rounded-full border-none">
              Explore Now
            </button>
            <button className="btn btn-ghost rounded-full text-white border-2 border-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
