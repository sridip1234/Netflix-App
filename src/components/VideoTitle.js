const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video top-20 px-6 px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="py-6 text-4xl font-bold">{title}</h1>
        <p className="text-base w-1/4">{overview}</p>
        <div className="my-3">
          <button className=" bg-white text-black py-1 md:py-2 px-3 md:px-5 text-lg  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-2 px-7 text-lg bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;