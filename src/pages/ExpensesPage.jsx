import TransactionList from "../components/ TransactionList";
import ExpensesForm from "../components/ExpensesForm";
import Master from "../layout/Master";

const ExpensesPage = () => {
  return (
    <Master>
      <h1 className="text-2xl font-bold"> Expenses Transaction</h1>
      <ExpensesForm />
      <TransactionList type="expense" />
    </Master>
  );
};

export default ExpensesPage;
