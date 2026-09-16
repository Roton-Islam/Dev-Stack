const TechnologyCard = ({ technology, isAdded, onAdd }) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 p-2">
          <img src={icon} alt={name} className="h-full w-full object-contain" />
        </div>

        <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{name}</h3>

      <p className="mt-2 min-h-[60px] text-sm leading-5 text-gray-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>

        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {difficulty}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">⭐ {rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;
