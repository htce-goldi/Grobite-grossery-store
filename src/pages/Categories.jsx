import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories.json";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons"; 

export default function ExploreCategories() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <section className="explore-categories">
      <div className="explore-header">
        <h3>Explore Categories</h3>

        <div className="slider-arrows">

          <button onClick={slideLeft} className="btn btn-light">
            <ArrowLeft />
          </button>

          <button onClick={slideRight} className="btn btn-light">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="categories-slider" ref={sliderRef}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => navigate(`/category/${cat.id}`)}
          >
            <img src={cat.icon} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
