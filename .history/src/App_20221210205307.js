import Table from "./components/Table";
import { useState } from "react";
import { driversData } from "./demoData/data";
import './App.css';

function App() {

	const [tableData,setTableData] = useState(driversData);
  const [sortedCol,setSortedCol] = useState({column:1,order:2});
  
	const columns = ["id","first_name","last_name","email","gender","ip_address","time","status","mobile","area","show","edit"];

	Array.prototype.ModernSort = (index,order) => {
		
		const tag = columns[index];
    console.log("tag is ",tag);

		function compare(a,b){

			if(a[tag] > b[tag])
			{
				if(order == 2)
					return 1;
				else 
					return -1;    
			}
			else
			{      
				if(order == 2)
					return -1;
				else 
					return 1;  

			}
		}
};

	const handleFilter = (index,val) => {
		  console.log("Filtering ",index," and val is ",val);
      const temp = tableData;
			setSortedCol({column:index,order:val});
			temp.ModernSort({index,val});
			console.log("new table data is ",tableData);
			setTableData(tableData);
	};

  return (
    <div className="App">
			<Table 
			   data = {driversData}
			   headingColumns={columns}
				 title = "Activities"
				 handleFilter={handleFilter}
			/>
    </div>
  );
}

export default App;
