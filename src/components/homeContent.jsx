import React, { useState, useEffect } from 'react'
import axios from "axios"

const HomeContent = () => {
    const [category, setCategory] = useState([])
    const getCategory = () => {
        (async () => {
            try {
                const categoryData = await axios.get("/api/categories");
                setCategory(categoryData.data.categories);
            } catch (error) {
                console.error(error.message);
            }
        })()
    }

    useEffect(() => {
        getCategory()
    }, []);

    return (
        <>
            <main className="home-main-container">
                <div className="main-top-section">
                    <div className="main-top-info">
                        <h3>Manchester United</h3>
                        <h2>Greatest comebacks of all time. Passion, Emotions and Goals.</h2>
                        <p>Watch the premier of the epic documentary.</p>
                        <button>Watch Now</button>
                    </div>
                    <img src="assets/united.png" alt="" className="main-top-img" />
                </div>
                <div className="main-middle-section">
                    <h2>Explore by categories</h2>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                        <li>Category 5</li>
                        <li>Category 6</li>
                        <li>Category 7</li>
                        <li>Category 8</li>
                        <li>Category 9</li>
                        <li>Category 10</li>
                    </ul>
                </div>
                <div className="main-bottom-section">
                    <h2>Videos to try</h2>
                    <div className="videos-to-try">
                        {category.map((cat) => {
                            return <ul key={cat._id} >
                                <li>
                                    <img src={cat.thumbnail} alt="category thumbnail" />
                                    <p>{cat.category}</p>
                                </li>
                            </ul>
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeContent