import Table from "./components/Table";
import { useState } from "react";
import { driversData } from "./demoData/data";
import './App.css';

function App() {

	const [tableData,setTableData] = useState[driversData];
  
	console.log("data is ",tableData);

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
