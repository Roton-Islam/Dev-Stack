import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({ technologies, stack, onAdd }) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-950">
          Explore the Technologies
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Pick the technologies that match your development needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={stack.some((item) => item.id === technology.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
