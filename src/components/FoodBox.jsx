import { Card, Col, Button, Row } from 'antd';
import React from "react";
import FoodsJSON from "../foods.json";
import { useState } from "react";
import FoodAddNew from './FoodAddNew';
import SearchBar from './SearchBar';
function FoodBox() {
  // form copy
  const [foods, setFood] = useState(FoodsJSON);
  // form submit
  const onFormSubmit = (name, image, calories, servings) => {
    const updatedFoods = [...foods];
    updatedFoods.push({
      name: name,
      image: image,
      calories: calories,
      servings: servings
    });
    setFood(updatedFoods);
  };
  // searchbar filters
  const handleSearch = (searchTerm) => {
    const filteredFood = FoodsJSON.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFood(filteredFood);
  };
  // delete
  const deleteRow = (index) => {
    const updatedFood = [...foods];
    updatedFood.splice(index, 1);
    setFood(updatedFood);
  };
  return (
    <div>
      <FoodAddNew FoodAddNew={onFormSubmit} />
      <SearchBar handleSearch={handleSearch} />
      <Row gutter={[8, 24]}>
        {foods.map((item, index) => {
          const result = item.calories * item.servings;
          return (
            <Col span={8} key={item.name}>
              <Card
                key={item.name}
                title={item.name}
                style={{ height: 350, margin: 10 }}
              >
                <img src={item.image} height={60} alt={item.name} />
                <p>Calories: {item.calories}</p>
                <p>Servings: {item.servings}</p>
                <p>
                  <b>Total Calories: {result}</b> kcal
                </p>
                <Button onClick={() => deleteRow(index)}>Delete</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default FoodBox;
