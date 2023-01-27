import React , {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [gonnaAddExpense, setgonnaAddExpense]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  //toggleing the 'gonnaAddExpense' from true to false and the reverse

  const aboutAddingHandler=()=>{
    setgonnaAddExpense(true);
  }

  const notAddingHandler=()=>{
    setgonnaAddExpense(false);
  }

   
  

  return (
    <div className='new-expense'>
    {
      !gonnaAddExpense && <button onClick={aboutAddingHandler}>Add Expense</button>
    }

      
      { gonnaAddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={notAddingHandler}/> 
       
      }
    </div>
  );
};

export default NewExpense;