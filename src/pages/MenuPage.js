// src/pages/MenuPage.js

import React, { useState, useMemo, useContext } from "react";
import styled from "styled-components";
import menuData from "../utils/menuData";
import MenuItem from "../components/MenuItem";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton"; // Import BackButton
import {
  FaGlassMartiniAlt, // for Appetizer
  FaUtensils, // for Food
  FaCoffee, // for Breakfast
  FaHamburger, // for Lunch
  FaLeaf, // for Dietary
  FaCookie, // for Desserts
  FaGlassCheers, // for Drinks
  FaTimes,
  FaFilter,
  FaSort,
  FaSearch,
  FaFire,
  FaWineBottle,
  FaList, // for All Items
} from "react-icons/fa";

// Styled Components

// 1. ClearFiltersButton
const ClearFiltersButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ff4d4d;
  border-radius: 20px;
  background-color: #fff;
  color: #ff4d4d;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(255, 77, 77, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
`;

// 2. TagButton
const TagButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #4a90e2;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "#4a90e2" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#4a90e2")};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#357ab8" : "#4a90e2")};
    color: #fff;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
`;

// 3. CategoryButtons Container
const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; /* Center align on desktop */
  margin-bottom: 15px;

  @media (min-width: 768px) {
    justify-content: center; /* Centered on desktop */
    margin-bottom: 20px;
  }
`;

// 4. CategoryButton
const CategoryButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #4a90e2;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "#4a90e2" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#4a90e2")};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#357ab8" : "#4a90e2")};
    color: #fff;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

// 5. MenuContainer
const MenuContainer = styled.div`
  padding: 20px 15px;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center; /* Center the title */

    @media (max-width: 576px) {
      font-size: 1.6rem;
    }
  }

  .filters {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .filter-sections {
      display: flex;
      flex-direction: column;
      gap: 15px;

      @media (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }

    .filter-category {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
      }

      .filter-title {
        display: flex;
        align-items: center;
        justify-content: center; /* Centered on mobile */
        gap: 5px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        font-size: 1rem;

        svg {
          color: #4a90e2;
          font-size: 1.2rem;
        }

        @media (max-width: 576px) {
          font-size: 0.9rem;

          svg {
            font-size: 1rem;
          }
        }

        @media (min-width: 768px) {
          justify-content: flex-start; /* Align titles to the left on desktop */
        }
      }

      .tags {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
        justify-items: center;

        @media (min-width: 768px) {
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          justify-items: flex-start;
        }
      }
    }

    /* Clear Filters Button positioned appropriately */
    .clear-filters-container {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 10px;

      @media (min-width: 768px) {
        justify-content: flex-start;
        width: auto;
        margin-top: 0;
      }
    }
  }

  /* Controls Section: Sort By, Category Buttons, Search */
  .controls {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center on mobile */
    gap: 15px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center; /* Center on desktop */
      gap: 20px;
    }
  }

  /* Sort and Search Section */
  .sort-search {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align on mobile */
    justify-content: center; /* Center content vertically */
    gap: 15px;
    font-weight: bold;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    .sort {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1rem;
        color: #333;

        svg {
          font-size: 1rem;
        }

        @media (max-width: 576px) {
          font-size: 0.9rem;

          svg {
            font-size: 0.9rem;
          }
        }
      }

      .sort-select {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #fff;
        cursor: pointer;
        transition: border-color 0.3s ease;
        font-size: 0.9rem;
        display: flex;
        align-items: center;

        &:hover {
          border-color: #4a90e2;
        }

        &:focus {
          outline: none;
          border-color: #4a90e2;
        }

        svg {
          margin-left: 5px;
          font-size: 1rem;
        }

        @media (max-width: 576px) {
          padding: 6px 10px;
          font-size: 0.8rem;

          svg {
            font-size: 0.9rem;
          }
        }
      }
    }

    .search {
      display: flex;
      align-items: center;
      gap: 8px;

      label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1rem;
        font-weight: bold;
        color: #333;

        svg {
          font-size: 1rem;
        }

        @media (max-width: 576px) {
          font-size: 0.9rem;

          svg {
            font-size: 0.9rem;
          }
        }
      }

      .search-container {
        position: relative;
        width: 200px;

        @media (max-width: 576px) {
          width: 150px;
        }

        input {
          padding: 8px 12px 8px 35px;
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 100%;
          transition: border-color 0.3s ease;
          font-size: 0.9rem;

          &:focus {
            outline: none;
            border-color: #4a90e2;
          }

          @media (max-width: 576px) {
            padding: 6px 10px 6px 30px;
            font-size: 0.65rem;
            width: 100%;
          }
        }

        svg {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #aaa;
          font-size: 1rem;

          @media (max-width: 576px) {
            left: 10px;
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  /* No Results Message */
  p.no-results {
    font-size: 1rem;
    color: #666;
    margin-top: 15px;
    text-align: center; /* Center align the message */

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }

  /* Category Section */
  .category {
    margin: 20px 0;

    h2 {
      font-size: 1.6rem;
      color: #4a90e2;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;

      svg {
        color: #4a90e2;
        font-size: 1.2rem;
      }

      @media (max-width: 576px) {
        font-size: 1.4rem;

        svg {
          font-size: 1rem;
        }
      }

      @media (min-width: 768px) {
        justify-content: flex-start; /* Align titles to the left on desktop */
      }
    }

    hr {
      border: 1px solid #ddd;
      margin-bottom: 15px;
    }
  }

  /* Menu Items Grid */
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 10px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr); /* Single column on mobile */
      gap: 15px; /* Reduced gap */
      padding: 0 5px;
    }
  }
`;

// Define the categories array inside the component to ensure it's in scope
const MenuPage = () => {
  // Define the categories array here
  const categories = useMemo(
    () => [
      { name: "All Items", icon: <FaList /> },
      { name: "Food", icon: <FaUtensils /> },
      { name: "Drinks", icon: <FaGlassCheers /> },
      { name: "Desserts", icon: <FaCookie /> },
      // Add more categories as needed
    ],
    []
  );

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [sortOption, setSortOption] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");

  const { addItem } = useContext(CartContext);

  // Define filter categories and their respective tags
  const filterCategories = useMemo(() => {
    const categoriesMap = {};

    menuData.forEach((item) => {
      item.tags.forEach((tag) => {
        // Determine the group/category of each tag
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

    // Convert sets to arrays and sort them
    const sortedCategories = {};
    Object.keys(categoriesMap).forEach((category) => {
      sortedCategories[category] = Array.from(categoriesMap[category]).sort();
    });

    return sortedCategories;
  }, [menuData]);

  // Handle tag button click
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Handle category button click
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTags([]);
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle clearing all filters
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
  };

  // Filter and sort menu items based on selected category, tags, sort option, and search query
  const filteredAndSortedMenu = useMemo(() => {
    let filtered = menuData;

    // Category Filtering
    if (selectedCategory !== "All Items") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Tag Filtering
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }

    // Search Filtering
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === "priceLowHigh") return a.price - b.price;
      if (sortOption === "priceHighLow") return b.price - a.price;
      if (sortOption === "popularity") return b.popularity - a.popularity;
      return 0;
    });

    return sorted;
  }, [selectedCategory, selectedTags, sortOption, searchQuery]);

  // Group menu items by category for display
  const groupedMenu = useMemo(() => {
    return filteredAndSortedMenu.reduce((groups, item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
      return groups;
    }, {});
  }, [filteredAndSortedMenu]);

  // Mapping filter categories to icons
  const filterCategoryIconMapping = {
    "Meal Type": <FaUtensils />,
    Dietary: <FaLeaf />,
    "Beverage Type": <FaGlassCheers />,
    "Flavor Profile": <FaFire />,
    Miscellaneous: <FaFilter />,
  };

  // Mapping tags to icons for filter categories
  const tagIconMapping = {
    Vegan: <FaLeaf />,
    Vegetarian: <FaLeaf />,
    Spicy: <FaFire />,
    "Gluten-Free": <FaLeaf />, // aligned with the previous mapping
    Alcoholic: <FaWineBottle />,
    "Non-Alcoholic": <FaGlassCheers />, // aligned with the previous mapping
    Sweet: <FaCookie />, // aligned with the previous mapping
    Breakfast: <FaCoffee />, // aligned with the previous mapping
    Lunch: <FaHamburger />, // aligned with the previous mapping
    Dinner: <FaUtensils />,
    Appetizer: <FaGlassMartiniAlt />, // aligned with the previous mapping
    Miscellaneous: <FaFilter />,
  };

  return (
    <MenuContainer>
      <BackButton /> {/* Integrate BackButton here */}
      <h1>Our Delicious Menu</h1>
      <div className="filters">
        {/* Tag Filters */}
        <div className="filter-sections">
          {Object.keys(filterCategories).map((filterCategory) => (
            <div className="filter-category" key={filterCategory}>
              <div className="filter-title">
                {filterCategoryIconMapping[filterCategory] || <FaFilter />}
                {filterCategory}
              </div>

              <div className="tags">
                {filterCategories[filterCategory].map((tag) => (
                  <TagButton
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    selected={selectedTags.includes(tag)}
                    aria-pressed={selectedTags.includes(tag)}
                    aria-label={`Filter by ${tag}`}
                  >
                    {tagIconMapping[tag] || <FaFilter />} {tag}
                  </TagButton>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clear Filters Button */}
        {(selectedTags.length > 0 || selectedCategory !== "All Items") && (
          <div className="clear-filters-container">
            <ClearFiltersButton
              onClick={clearFilters}
              disabled={
                selectedTags.length === 0 && selectedCategory === "All Items"
              }
              aria-label="Clear All Filters"
            >
              <FaTimes /> Clear Filters
            </ClearFiltersButton>
          </div>
        )}
      </div>
      {/* Controls Section: Sort By, Category Buttons, Search */}
      <div className="controls">
        {/* Sort and Search */}
        <div className="sort-search">
          {/* Sort Dropdown */}
          <div className="sort">
            <label htmlFor="sort-select">
              <FaSort /> Sort By:
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortOption}
              onChange={handleSortChange}
              aria-label="Sort Menu Items"
            >
              <option value="popularity">Popularity</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* Category Buttons */}
          <CategoryButtons>
            {categories.map((category) => (
              <CategoryButton
                key={category.name}
                onClick={() => handleCategorySelect(category.name)}
                selected={selectedCategory === category.name}
                aria-pressed={selectedCategory === category.name}
                aria-label={`Filter by ${category.name}`}
              >
                {category.icon} {category.name}
              </CategoryButton>
            ))}
          </CategoryButtons>

          {/* Search Bar */}
          <div className="search">
            <label htmlFor="search-input">
              <FaSearch /> Search:
            </label>
            <div className="search-container">
              <input
                id="search-input"
                type="text"
                placeholder="Search for menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Menu Items"
              />
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      {/* Display Menu Items */}
      {Object.keys(groupedMenu).length === 0 ? (
        <p className="no-results">No menu items match the selected filters.</p>
      ) : (
        Object.keys(groupedMenu).map((category) => (
          <div className="category" key={category}>
            <h2>
              {category} <FaUtensils />
            </h2>
            <hr />
            <div className="menu-grid">
              {groupedMenu[category].map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))
      )}
    </MenuContainer>
  );
};

export default MenuPage;
