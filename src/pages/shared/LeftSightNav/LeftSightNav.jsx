import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSightNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold ">All Categories</h2>
      {categories.map((category) => (
        <Link className="block text-xl font-medium ml-8 w-full rounded-lg" 
        key={category.id}
        to={`/category/${category.id}`}
        >{category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSightNav;
