import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesMapContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, ProductsContainer } from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesMapContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </ProductsContainer>
      )}
    </>
  );
};

export default Category;
