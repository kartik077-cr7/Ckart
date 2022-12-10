import Table from "./components/Table";
import './App.css';

const driversData = [
  {
    id: 1,
    first_name: "Lonnie",
		last_name: "O' Connell ",
		email: "loconnel@gmail.com",
		gender: "Male",
		ip_address: "163.42.164.152",
		airport_code:"OGO",
		time:"7/10/2022",
		status:"TRUE",
		mobile:"707-462-9538",
		area: "9 Coleman Trail",
		show: "FALSE",
		edit: "FALSE"
  },
  {
    id: 2,
    name: 'Valtteri Bottas',
    team: 'Mercedes',
    country: 'Finland',
    dob: '28/08/1989',
    placeOfBirth: 'Nastola, Finland'
  },
  {
    id: 3,
    name: 'Sebastian Vettel',
    team: 'Ferrari',
    country: 'Germany',
    dob: '03/07/1987',
    placeOfBirth: 'Heppenheim, Germany'
  },
  {
    id: 16,
    name: 'Charles Leclerc',
    team: 'Ferrari',
    country: 'Monaco',
    dob: '16/10/1997',
    placeOfBirth: 'Monte Carlo, Monaco'
  },
  {
    id: 33,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    country: 'Netherlands',
    dob: '30/09/1997',
    placeOfBirth: 'Hasselt, Belgium'
  },
  {
    id: 23,
    name: 'Alex Albon',
    team: 'Red Bull Racing',
    country: 'Thailand',
    dob: '23/03/1996',
    placeOfBirth: 'London, England'
  },
  {
    id: 4,
    name: 'Lando Norris',
    team: 'McLaren',
    country: 'United Kingdom',
    dob: '13/11/1999',
    placeOfBirth: 'Bristol, England'
  },
  {
    id: 3,
    name: 'Daniel Ricciardo',
    team: 'Renault',
    country: 'Australia',
    dob: '01/07/1989',
    placeOfBirth: 'Perth, Australia'
  },
  {
    id: 31,
    name: 'Esteban Ocon',
    team: 'Renault',
    country: 'France',
    dob: '17/09/1996',
    placeOfBirth: 'Évreux, Normandy'
  },
  {
    id: 10,
    name: 'Pierre Gasly',
    team: 'AlphaTauri',
    country: 'France',
    dob: '07/02/1996',
    placeOfBirth: 'Rouen, France'
  },
  {
    id: 26,
    name: 'Daniil Kvyat',
    team: 'AlphaTauri',
    country: 'Russian Federation',
    dob: '26/04/1994',
    placeOfBirth: 'Ufa, Russia'
  },
  {
    id: 11,
    name: 'Sergio Perez',
    team: '	Racing Point',
    country: 'Mexico',
    dob: '26/01/1990',
    placeOfBirth: 'Guadalajara, Mexico'
  },
  {
    id: 18,
    name: 'Lance Stroll',
    team: '	Racing Point',
    country: 'Canada',
    dob: '29/10/1998',
    placeOfBirth: 'Montreal, Canada'
  },
  {
    id: 7,
    name: 'Kimi Räikkönen',
    team: 'Alfa Romeo',
    country: 'Finland',
    dob: '17/10/1979',
    placeOfBirth: 'Espoo, Finland'
  },
  {
    id: 99,
    name: 'Antonio Giovinazzi',
    team: 'Alfa Romeo',
    country: 'Italy',
    dob: '14/12/1993',
    placeOfBirth: 'Martina Franca, Italy'
  },
  {
    id: 20,
    name: 'Kevin Magnussen',
    team: 'Haas',
    country: 'Denmark',
    dob: '05/10/1992',
    placeOfBirth: 'Roskilde, Denmark'
  },
  {
    id: 8,
    name: 'Romain Grosjean',
    team: 'Haas',
    country: 'France',
    dob: '17/04/1986',
    placeOfBirth: 'Geneva, Switzerland'
  },
  {
    id: 63,
    name: 'George Russell',
    team: 'Williams',
    country: 'United Kingdom',
    dob: '15/02/1998',
    placeOfBirth: 'King\'s Lynn, England'
  },
  {
    id: 6,
    name: 'Nicholas Latifi',
    team: 'Williams',
    country: 'Canada',
    dob: '29/06/1995',
    placeOfBirth: 'Montreal, Canada'
  },
];


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
