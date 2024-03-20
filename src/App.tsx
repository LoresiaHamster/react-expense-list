import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import ExpenceList from './components/ExpenceList';
import categories from './components/categories';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'aaa',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 2,
      description: 'bbb',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'ccc',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 4,
      description: 'ddd',
      amount: 10,
      category: 'Utilities',
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className='container'>
      <div className='mb-5'>
        <ExpenseForm />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenceList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
