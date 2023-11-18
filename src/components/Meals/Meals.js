import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealItemForm from './MealItem/MealItemForm';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
   <MealItemForm/>
    </Fragment>
  );
};

export default Meals;
