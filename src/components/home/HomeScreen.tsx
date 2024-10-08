import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button/Button";
import { Input } from "../custom/Input/Input";

const HomeScreen = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (title.trim()) {
      navigate(`/books?title=${encodeURIComponent(title)}`);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute top-8 left-8">
        <img src="/assets/logos/logo.svg" alt="brand" className="h-16 w-16" />
      </div>
      <div className="w-5/6 md:w-1/3 flex gap-x-2 ">
        <div className="flex-grow">
          <Input
            outlineclassname="border-black-500 rounded-lg"
            className="!text-xl placeholder:!text-xl !font-normal placeholder:!font-light h-16 !px-4"
            placeholder="Search for books here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button className="bg-blue-500 !h-16 w-16" onClick={handleSearch}>
          <i className="bx bx-search text-white text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
