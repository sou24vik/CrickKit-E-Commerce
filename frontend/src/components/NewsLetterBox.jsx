const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <p className="text-2xl font-semibold text-blue-800 mb-4">
        Subscribe and Play
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-3/4 lg:w-1/2 flex items-center gap-3 mx-auto"
      >
        <input
          type="email"
          placeholder="Enter Your Email Here"
          required
          className="flex-grow p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600 transition"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white font-bold text-xs px-6 py-2 rounded-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
