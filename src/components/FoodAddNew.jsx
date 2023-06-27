import { Input, Button } from 'antd';
import { useState } from "react";
function FoodAddNew(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.FoodAddNew(name, image, calories, servings);
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="name">Name</label>
                <Input type="text" id='name' name='name' value={name} onChange={handleName} />
                <p>
                    <label htmlFor="image">Image</label>
                    <Input type="text" id='image' value={image} onChange={handleImage} />
                </p>
                <p>
                    <label htmlFor="calories">Calories</label>
                    <Input type="number" id='calories' value={calories} onChange={handleCalories} />
                </p>
                <p>
                    <label htmlFor="servings">Servings</label>
                    <Input type="number" id='servings' value={servings} onChange={handleServings} />
                </p>
                <Button type="primary" htmlType="submit">Add Food</Button>
            </form>
        </div>
    )
}
export default FoodAddNew;