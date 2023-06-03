import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share Notes
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Simple Note Website</span>
      </h1>
      <p className="desc text-center">
        Create and Share notes to different users.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
