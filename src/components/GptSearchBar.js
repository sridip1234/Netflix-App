import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  
  const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
        //   ref={searchText}
          type="text"
          className=" p-3 m-3 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        //   onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;