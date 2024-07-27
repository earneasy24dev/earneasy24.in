import { useStore } from "../../store/index";
const Dashboard = () => {
  const user = useStore.getState().user;
  return <h1>Welcome to Dashboard, {user.name}</h1>;
};
export default Dashboard;
