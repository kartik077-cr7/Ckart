import Table from "./components/Table";
import './App.css';



function App() {
  return (
    <div className="App">
			<Table 
			   data = {driversData}
			   headingColumns={["id","first_name","last_name","email","gender","ip_address","time","status","mobile","area","show","edit"]}
				 title = "Activities"
			/>
    </div>
  );
}

export default App;
