// src/pages/MenuPage.js

import React, {
  useState,
  useMemo,
  useContext,
  useCallback,
  useEffect,
} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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

// Styled Components (unchanged)
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
    grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop screens */
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

  // Valid Sort Options
  const validSortOptions = ["popularity", "priceLowHigh", "priceHighLow"];

  // Valid Categories
  const validCategories = useMemo(
    () => categories.map((cat) => cat.name),
    [categories]
  );

  // Valid Tags
  const allAvailableTags = useMemo(() => {
    const tagsSet = new Set();
    menuData.forEach((item) => {
      if (Array.isArray(item.tags)) {
        item.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  }, []);

  const filterCategories = useMemo(() => {
    try {
      const categoriesMap = {};

      menuData.forEach((item) => {
        if (!item.tags || !Array.isArray(item.tags)) return; // Skip if tags are invalid
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
            categoriesMap["Meal Type"] =
              categoriesMap["Meal Type"] || new Set();
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
    } catch (error) {
      console.error("Error processing filter categories:", error);
      toast.error("Failed to load filter categories.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return {};
    }
  }, [menuData]); // Added menuData as dependency

  const toggleTag = (tag) => {
    if (!allAvailableTags.includes(tag)) {
      toast.error(`Invalid tag selection: ${tag}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleCategorySelect = (category) => {
    if (!validCategories.includes(category)) {
      toast.error(`Invalid category selection: ${category}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (!validSortOptions.includes(value)) {
      toast.error(`Invalid sort option selected: ${value}`, {
        position: "bottom-right",
        autoClose: 3000,
      });
      setSortOption("popularity"); // Reset to default
      return;
    }
    setSortOption(value);
  };

  const clearFilters = useCallback(() => {
    try {
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
    } catch (error) {
      console.error("Error clearing filters:", error);
      toast.error("Failed to clear filters.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  }, []);

  const filteredAndSortedMenu = useMemo(() => {
    try {
      let filtered = [...menuData];

      if (selectedCategory !== "All Items") {
        filtered = filtered.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (selectedTags.length > 0) {
        filtered = filtered.filter((item) =>
          selectedTags.every(
            (tag) => Array.isArray(item.tags) && item.tags.includes(tag)
          )
        );
      }

      if (searchQuery.trim() !== "") {
        // Sanitize search query to prevent injection
        const sanitizedQuery = searchQuery.replace(/[<>]/g, "");
        filtered = filtered.filter(
          (item) =>
            item.name &&
            item.name.toLowerCase().includes(sanitizedQuery.toLowerCase())
        );
      }

      const sorted = [...filtered].sort((a, b) => {
        if (sortOption === "priceLowHigh") return a.price - b.price;
        if (sortOption === "priceHighLow") return b.price - a.price;
        if (sortOption === "popularity") return b.popularity - a.popularity;
        return 0;
      });

      return sorted;
    } catch (error) {
      console.error("Error filtering and sorting menu:", error);
      toast.error("Failed to load menu items.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return [];
    }
  }, [selectedCategory, selectedTags, sortOption, searchQuery, menuData]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Enhanced search input handler with validation
  const handleSearchChange = (e) => {
    try {
      const value = e.target.value;
      if (value.length <= 100) {
        // Limit to 100 characters
        // Sanitize input to remove potentially harmful characters
        const sanitizedValue = value.replace(/[<>]/g, "");
        setSearchQuery(sanitizedValue);
      } else {
        toast.warn("Search query cannot exceed 100 characters.", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error handling search input:", error);
      toast.error("Failed to process search input.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // Enhanced add to cart handler with error handling
  const handleAddToCart = useCallback(
    (item) => {
      try {
        if (!item || !item.id || !item.name || !item.price) {
          throw new Error("Invalid item data.");
        }
        addItem(item);
        toast.success(`${item.name} added to cart!`);
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error(`Failed to add ${item?.name || "item"} to cart.`);
      }
    },
    [addItem]
  );

  // Effect to validate menuData integrity on mount
  useEffect(() => {
    if (!Array.isArray(menuData)) {
      toast.error("Menu data is corrupted.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  }, []);

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
            <button onClick={clearFilters} aria-label="Clear All Filters">
              Clear Filters
            </button>
          </div>
          {Object.keys(filterCategories).length === 0 ? (
            <p>No filters available.</p>
          ) : (
            Object.keys(filterCategories).map((filterCategory) => (
              <div className="filter-group" key={filterCategory}>
                <h3>{filterCategory}</h3>
                <div className="filter-options">
                  {filterCategories[filterCategory].map((tag) => (
                    <FilterOption
                      key={tag}
                      checked={selectedTags.includes(tag)}
                      htmlFor={`filter-${tag}`}
                    >
                      <input
                        id={`filter-${tag}`}
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => toggleTag(tag)}
                        aria-label={`Filter by ${tag}`}
                      />
                      {selectedTags.includes(tag) ? (
                        <FaCheckSquare aria-hidden="true" />
                      ) : (
                        <FaSquare aria-hidden="true" />
                      )}
                      <span>{tag}</span>
                    </FilterOption>
                  ))}
                </div>
              </div>
            ))
          )}
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          {/* Mobile Filters Dropdown */}
          <MobileFiltersDropdown>
            <button
              className="dropdown-button"
              onClick={toggleDropdown}
              aria-label="Toggle Filters"
              aria-expanded={isDropdownOpen}
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
                  <button onClick={clearFilters} aria-label="Clear All Filters">
                    Clear Filters
                  </button>
                </div>
                {Object.keys(filterCategories).length === 0 ? (
                  <p>No filters available.</p>
                ) : (
                  Object.keys(filterCategories).map((filterCategory) => (
                    <div className="filter-group" key={filterCategory}>
                      <h3>{filterCategory}</h3>
                      <div className="filter-options">
                        {filterCategories[filterCategory].map((tag) => (
                          <FilterOption
                            key={tag}
                            checked={selectedTags.includes(tag)}
                            htmlFor={`mobile-filter-${tag}`}
                          >
                            <input
                              id={`mobile-filter-${tag}`}
                              type="checkbox"
                              checked={selectedTags.includes(tag)}
                              onChange={() => toggleTag(tag)}
                              aria-label={`Filter by ${tag}`}
                            />
                            {selectedTags.includes(tag) ? (
                              <FaCheckSquare aria-hidden="true" />
                            ) : (
                              <FaSquare aria-hidden="true" />
                            )}
                            <span>{tag}</span>
                          </FilterOption>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </MobileFiltersDropdown>

          {/* Top Controls */}
          <div className="top-controls">
            <div className="search-bar">
              <FaSearch aria-hidden="true" />
              <input
                type="text"
                placeholder="Search Items..."
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search Menu Items"
                maxLength={100} // Enforce max length at input level
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
          <div className="category-tabs" role="tablist">
            {categories.map((category) => (
              <button
                key={category.name}
                className={selectedCategory === category.name ? "active" : ""}
                onClick={() => handleCategorySelect(category.name)}
                role="tab"
                aria-selected={selectedCategory === category.name}
                aria-label={`Filter by category ${category.name}`}
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
                <MenuItem
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)} // Pass the enhanced handler
                />
              ))}
            </div>
          )}
        </MainContent>
      </MenuContainer>
    </PageContainer>
  );
};

export default MenuPage;
