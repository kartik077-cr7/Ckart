import Table from "./components/Table";
import { useState } from "react";
import { driversData } from "./demoData/data";
import './App.css';

function App() {

	const [tableData,setTableData] = useState(driversData);
  const [sortedCol,setSortedCol] = useState({column:1,order:1});
  
	const columns = ["id","first_name","last_name","email","gender","ip_address","time","status","mobile","area","show","edit"]
	console.log("data is ",tableData,"type of data ",typeof(tableData)," ",tableData[0]," holla !!",typeof(tableData[0]));
  
	const compare = (a,b) {
		
		if(a.columns[sortedCol.column] > b.columns[sortedCol.order])
		{
       if(sortedCol.order == 1)
			  return 1;
			 else 
			  return -1;    
		}
		else
		{      
			 if(sortedCol.order == 1)
			  return 1;
			 else 
			  return -1;  

		}
	}

	tableData.sort(compare);
  return (
    <div className="App">
			<Table 
			   data = {driversData}
			   headingColumns={columns}
				 title = "Activities"
			/>
    </div>
  );
}

export default App;
