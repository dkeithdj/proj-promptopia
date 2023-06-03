import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio amet,
        quasi molestias saepe, culpa eum dolorum voluptas neque, quidem repellat
        a quo ut animi quaerat quod velit nam est molestiae!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
