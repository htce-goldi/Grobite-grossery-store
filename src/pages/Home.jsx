import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Hero from "../pages/hero.jsx";
import Categories from "./Categories.jsx";
import ProductCard from "./../components/layout/ProductCard.jsx";
import HomeSearch from "../pages/homesearch.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import DealsSection  from "../components/home/DealSection.jsx";
import Footer from "../components/layout/Footer.jsx"

export default function Home() {
  const { products, search } = useSelector((state) => state.products);

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />
      <section className="py-4 bg-light">
        <Container>
          <HomeSearch />
        </Container>
      </section>
      <Categories />
      <Container className="py-5">
        <Row className="g-4">
          {filteredProducts.map((item) => (
            <Col lg={3} md={4} sm={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Container>

      <FeaturedProducts />
<DealsSection/>
     <Footer/>   
       
    </>
  );
}
