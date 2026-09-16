const Loader = () => {
  return (
    <div className="flex min-h-[250px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>

        <p className="text-sm font-medium text-gray-600">
          Loading technologies...
        </p>
      </div>
    </div>
  );
};

export default Loader;
