import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useVideo } from "context/videoContext";
import { useToast } from "custom/useToast";

const HomeContent = () => {
  const [category, setCategory] = useState([]);
  const { filterDispatch } = useVideo();
  const { showToast } = useToast();

  const getCategory = () => {
    (async () => {
      try {
        const categoryData = await axios.get("/api/categories");
        setCategory(categoryData.data.categories);
      } catch (error) {
        console.error(error.message);
      }
    })();
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <main className="home-main-container">
        <div className="main-top-section">
          <div className="main-top-info">
            <h3>Manchester United</h3>
            <h2>
              Greatest comebacks of all time. Passion, Emotions and Goals.
            </h2>
            <p>Watch the premier of the epic documentary.</p>
            <button>Watch Now</button>
          </div>
          <img src="assets/united.png" alt="" className="main-top-img" />
        </div>
        <div className="main-bottom-section">
          <h2>Explore by categories</h2>
          <div className="videos-to-try">
            {category.map((cat) => {
              return (
                <ul key={cat._id}>
                  <Link to="/explore">
                    <li
                      onClick={() =>
                        filterDispatch(
                          {
                            type: "SORT_BY_CATEGORY",
                            payload: cat.category,
                          },
                          showToast(
                            `Showing video from ${cat.category} category`,
                            "success"
                          )
                        )
                      }
                    >
                      <img src={cat.thumbnail} alt="category thumbnail" />
                      <p>{cat.category}</p>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeContent;
