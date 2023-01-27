import React , {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    //we make sure that only expenses with the filterd year are displayed.
    // we save them inside "filteredExpenses" 
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  
  return (
    <div>
    <Card className="expenses">
        {/* <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
        /> */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      {/* instead of calling each ExpenseItem manually we use "map" */}
      {/* instead of doing: props.items.map .....
          we do the following:
          filteredExpenses.map............
      */}
      {/* {
            
        filteredExpenses.length===0 ? (<p>No expense found</p>) : (
        filteredExpenses.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}

        />
        ))

          )
         

      } */}

      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

    </Card>
    </div>
  );
}

export default Expenses;