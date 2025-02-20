import { UserChart } from "./components/Chart"
import { Statistics } from "./components/Statistics"

 const Dashboard = () => {
  return (
    <main className="flex flex-col gap-3">
      <Statistics/>
      <UserChart/>
    </main>
  )
}

export default Dashboard