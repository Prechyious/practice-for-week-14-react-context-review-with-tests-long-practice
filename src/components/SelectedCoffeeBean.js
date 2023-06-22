import { useCoffeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
    const { coffeeBean } = useCoffeContext();
    return (
        <div className="selected-coffee">
            <h2>Current Selection: {coffeeBean.name}</h2>
        </div>
    );
};

export default SelectedCoffeeBean;
