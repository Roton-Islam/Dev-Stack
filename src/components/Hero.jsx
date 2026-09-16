const Hero = () => {
  return (
    <section id="home" className="py-14 md:py-20">
      <div className="section-container grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-500">
            Explore modern web technologies
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-950 md:text-5xl">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Explore modern frontend, backend, database, DevOps, and development
            tools to create perfect technology stack for your next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="primary-button rounded-lg px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/hero-image.png"
            alt="Development stack illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
