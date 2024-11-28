// src/pages/MenuPage.js

import React, { useState, useMemo, useContext } from "react";
import styled from "styled-components";
import menuData from "../utils/menuData";
import MenuItem from "../components/MenuItem";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import {
  FaUtensils,
  FaGlassCheers,
  FaCookie,
  FaList,
  FaCheckSquare,
  FaSquare,
  FaFilter,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"; // Added FaChevronDown and FaChevronUp for dropdown

// Styled Components

const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px; /* Set a maximum width */
  margin: 0 auto; /* Center the container */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  gap: 15px; /* Space between Back Button and title */
  margin-bottom: 20px;
  margin-top: 10px; /* Add space between header and navbar */

  .back-button {
    padding: 8px 16px;
    border-radius: 5px; /* Optional for better button style */

    @media (max-width: 768px) {
      /* Adjust BackButton on mobile */
      padding: 6px 12px;
    }
  }

  h1 {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
    flex: 1; /* Push the title to occupy remaining space */
    text-align: center; /* Center align title on larger screens */

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: left; /* Align title to the left on mobile */
    }
  }

  @media (max-width: 768px) {
    /* Adjust header layout on mobile */
    justify-content: flex-start;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  height: 100%; /* Maintain a consistent height */
  margin-right: 20px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  overflow-y: auto; /* Enable scrolling if content overflows */

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .clear-filters {
    margin-bottom: 20px;
    text-align: center;

    button {
      padding: 10px 20px;
      border: none;
      background-color: #ff4d4d;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-size: 1rem;

      &:hover {
        background-color: #e04343;
      }
    }
  }

  .filter-group {
    margin-bottom: 20px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      text-align: left;
    }

    .filter-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.main`
  flex: 1;

  .top-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    /* Ensure search bar and sort dropdown are on the same line on all devices */
    flex-wrap: nowrap;

    @media (max-width: 768px) {
      /* Remove column direction to keep elements on the same line */
      flex-wrap: nowrap;
      /* Optionally adjust gap for smaller screens */
      gap: 10px;
    }

    .search-bar {
      flex: 1;
      position: relative;

      input {
        width: 100%;
        padding: 12px 40px 12px 35px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;

        &:focus {
          border-color: #4a90e2;
          outline: none;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        font-size: 1.2rem;
        color: #aaa;
      }
    }

    .sort-dropdown select {
      padding: 12px 40px 12px 12px; /* Match the input padding */
      line-height: 1; /* Adjust to match the height alignment */
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;

      &:focus {
        border-color: #4a90e2;
        outline: none;
      }

      label {
        font-weight: bold;
        font-size: 1rem;
      }

      select {
        padding: 8px 12px;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;

        &:focus {
          border-color: #4a90e2;
          outline: none;
        }
      }
    }
  }

  .category-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 5px 10px; /* Add padding for better spacing */
    max-width: 100%; /* Ensure it doesn’t exceed the container width */

    /* Hide scrollbar but allow scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    button {
      padding: 8px 16px;
      border: none;
      background-color: #fff;
      color: #555;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: background-color 0.3s, border-color 0.3s;
      flex-shrink: 0; /* Prevent buttons from shrinking */

      &.active {
        color: #4a90e2;
        border-color: #4a90e2;
        font-weight: bold;
      }

      &:hover {
        background-color: #f9f9f9;
      }
    }

    @media (max-width: 768px) {
      /* Ensure all categories are on one line */
      justify-content: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 5px; /* Reduce gap for smaller screens */
      padding: 5px; /* Adjust padding for compact display */

      /* Hide scrollbar but allow scrolling */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        font-size: 0.9rem; /* Slightly smaller text */
        padding: 6px 10px; /* Adjust padding for compact buttons */
      }
    }
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 4 columns for desktop screens */
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for smaller screens */
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* 2 columns for extra small screens */
    }
  }

  .no-results {
    text-align: center;
    font-size: 1.3rem;
    color: #777;
    margin-top: 40px;
  }
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    font-size: 1.2rem;
    color: ${({ checked }) => (checked ? "#4a90e2" : "#ccc")};
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;

/* Removed MobileFiltersButton component as per request */

/* Added Dropdown for Mobile Filters */
const MobileFiltersDropdown = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
  }

  .dropdown-button {
    width: 100%;
    padding: 12px 16px;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: #357ab8;
    }
  }

  .dropdown-content {
    position: absolute;
    top: 50px; /* Adjust based on button height */
    left: 0;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    .close-button {
      position: absolute;
      top: 15px; /* Adjusted spacing from the top */
      right: 15px; /* Adjusted spacing from the right */
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #333;
    }

    .clear-filters {
      margin-top: 40px; /* Added spacing from the "X" button */
      margin-bottom: 20px;
      text-align: center;

      button {
        padding: 8px 16px;
        border: none;
        background-color: #ff4d4d;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        font-size: 1rem;

        &:hover {
          background-color: #e04343;
        }
      }
    }

    .filter-group {
      margin-bottom: 20px;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        text-align: left;
      }

      .filter-options {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`;

const MenuPage = () => {
  const categories = useMemo(
    () => [
      { name: "All Items", icon: <FaList /> },
      { name: "Food", icon: <FaUtensils /> },
      { name: "Drinks", icon: <FaGlassCheers /> },
      { name: "Desserts", icon: <FaCookie /> },
    ],
    []
  );

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [sortOption, setSortOption] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const { addItem } = useContext(CartContext);

  const filterCategories = useMemo(() => {
    const categoriesMap = {};

    menuData.forEach((item) => {
      item.tags.forEach((tag) => {
        if (["Alcoholic", "Non-Alcoholic"].includes(tag)) {
          categoriesMap["Beverage Type"] =
            categoriesMap["Beverage Type"] || new Set();
          categoriesMap["Beverage Type"].add(tag);
        } else if (["Vegan", "Vegetarian", "Gluten-Free"].includes(tag)) {
          categoriesMap["Dietary"] = categoriesMap["Dietary"] || new Set();
          categoriesMap["Dietary"].add(tag);
        } else if (
          ["Breakfast", "Lunch", "Dinner", "Appetizer"].includes(tag)
        ) {
          categoriesMap["Meal Type"] = categoriesMap["Meal Type"] || new Set();
          categoriesMap["Meal Type"].add(tag);
        } else if (["Spicy", "Sweet"].includes(tag)) {
          categoriesMap["Flavor Profile"] =
            categoriesMap["Flavor Profile"] || new Set();
          categoriesMap["Flavor Profile"].add(tag);
        } else {
          categoriesMap["Miscellaneous"] =
            categoriesMap["Miscellaneous"] || new Set();
          categoriesMap["Miscellaneous"].add(tag);
        }
      });
    });

    const sortedCategories = {};
    Object.keys(categoriesMap).forEach((category) => {
      sortedCategories[category] = Array.from(categoriesMap[category]).sort();
    });

    return sortedCategories;
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategory("All Items");
    setSearchQuery("");
    toast.info("All filters have been cleared.", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: <FaTimes />,
    });
    setIsDropdownOpen(false); // Close dropdown after clearing
  };

  const filteredAndSortedMenu = useMemo(() => {
    let filtered = [...menuData];

    if (selectedCategory !== "All Items") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === "priceLowHigh") return a.price - b.price;
      if (sortOption === "priceHighLow") return b.price - a.price;
      if (sortOption === "popularity") return b.popularity - a.popularity;
      return 0;
    });

    return sorted;
  }, [selectedCategory, selectedTags, sortOption, searchQuery]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton className="back-button" aria-label="Go Back" />
        <h1>Our Delicious Menu</h1>
      </Header>
      <MenuContainer>
        {/* Sidebar Filters (Desktop Only) */}
        <Sidebar>
          <div className="clear-filters">
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
          {Object.keys(filterCategories).map((filterCategory) => (
            <div className="filter-group" key={filterCategory}>
              <h3>{filterCategory}</h3>
              <div className="filter-options">
                {filterCategories[filterCategory].map((tag) => (
                  <FilterOption key={tag} checked={selectedTags.includes(tag)}>
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      aria-label={`Filter by ${tag}`}
                    />
                    {selectedTags.includes(tag) ? (
                      <FaCheckSquare />
                    ) : (
                      <FaSquare />
                    )}
                    <span>{tag}</span>
                  </FilterOption>
                ))}
              </div>
            </div>
          ))}
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          {/* Mobile Filters Dropdown */}
          <MobileFiltersDropdown>
            <button
              className="dropdown-button"
              onClick={toggleDropdown}
              aria-label="Toggle Filters"
            >
              <span>
                <FaFilter /> Filters
              </span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button
                  className="close-button"
                  onClick={toggleDropdown}
                  aria-label="Close Filters"
                >
                  <FaTimes />
                </button>
                <div className="clear-filters">
                  <button onClick={clearFilters}>Clear Filters</button>
                </div>
                {Object.keys(filterCategories).map((filterCategory) => (
                  <div className="filter-group" key={filterCategory}>
                    <h3>{filterCategory}</h3>
                    <div className="filter-options">
                      {filterCategories[filterCategory].map((tag) => (
                        <FilterOption
                          key={tag}
                          checked={selectedTags.includes(tag)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            aria-label={`Filter by ${tag}`}
                          />
                          {selectedTags.includes(tag) ? (
                            <FaCheckSquare />
                          ) : (
                            <FaSquare />
                          )}
                          <span>{tag}</span>
                        </FilterOption>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </MobileFiltersDropdown>

          {/* Top Controls */}
          <div className="top-controls">
            <div className="search-bar">
              <FaSearch />
              <input
                type="text"
                placeholder="Search Items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Menu Items"
              />
            </div>
            <div className="sort-dropdown">
              {/* <label htmlFor="sort-select">Sort By:</label> */}
              <select
                id="sort-select"
                value={sortOption}
                onChange={handleSortChange}
                aria-label="Sort Menu Items"
              >
                <option value="popularity">Popularity</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.name}
                className={selectedCategory === category.name ? "active" : ""}
                onClick={() => handleCategorySelect(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {filteredAndSortedMenu.length === 0 ? (
            <p className="no-results">
              No menu items match the selected filters.
            </p>
          ) : (
            <div className="menu-grid">
              {filteredAndSortedMenu.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </MainContent>
      </MenuContainer>
    </PageContainer>
  );
};

export default MenuPage;
