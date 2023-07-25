import TransactionList from "../components/ TransactionList";
import IncomeForm from "../components/IncomeForm";
import Master from "../layout/Master";

const IncomePage = () => {
  return (
    <Master>
      <h1 className="text-2xl font-bold"> Income Transaction</h1>
      <IncomeForm />
      <TransactionList type="income" />
    </Master>
  );
};

export default IncomePage;
