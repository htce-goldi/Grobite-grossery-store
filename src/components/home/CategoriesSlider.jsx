import { useRef } from "react";
import { Container } from "react-bootstrap";
import categories from "../../data/categories.json";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

export default function CategoriesSlider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const slide = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="explore-categories">
      <Container>

        <div className="explore-header">
          <h3>Explore Categories</h3>
          <div className="slider-arrows">
            <button onClick={() => slide("left")}>
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => slide("right")}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="categories-slider" ref={sliderRef}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => navigate(`/shop?category=${cat.id}`)}
            >
              <div className="icon-wrap">
                <img src={cat.icon} alt={cat.name} />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
