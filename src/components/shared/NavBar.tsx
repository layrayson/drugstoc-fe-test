import React, { useState, ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../custom/Input";
import debounce from "debounce";
import { useNavBarScroll } from "../../lib/hooks/useNavBarScroll";

const NavBar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const { showNavBar } = useNavBarScroll();
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      navigate(`/books${value ? `?title=${encodeURIComponent(value)}` : ""}`);
    }, 300),
    [navigate]
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <>
      <nav
        className={`px-2 md:px-4 h-16 flex items-center shadow fixed w-full transition-transform duration-300 bg-white  ${
          showNavBar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center flex-grow">
          <div className="flex items-center gap-4 md:gap-28 flex-grow">
            <a href="/" className="flex items-center gap-1">
              <img
                src="/assets/logos/logo.svg"
                alt="brand"
                width={34}
                height={34}
              />
              <h5 className="font-medium text-lg hidden md:block">Book.ly</h5>
            </a>
            <div className="flex-grow">
              <div className="w-1/3">
                <Input
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search for books"
                  className="!h-10 placeholder:!font-normal "
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {<div className="h-16" />}
    </>
  );
};

export default NavBar;
