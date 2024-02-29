import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';
import Buttonexample from './components/function-components/14-feb/button';
import Imgcomponent from './components/function-components/14-feb/imgcomponent';
import Unorderlist from './components/function-components/14-feb/listcomponent';
import Tabledata from './components/function-components/14-feb/tabelcomponent';
import Formcomponent from './components/function-components/14-feb/formcomponent';

function App() {
  return (
    <div>
    <Unorderlist/>
    <Tabledata/>
    <Formcomponent/>
    <Buttonexample/>
   
    <Imgcomponent/>
    
    </div>
  );
}

export default App;
