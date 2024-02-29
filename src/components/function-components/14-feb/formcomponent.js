import Buttonexample from "./button";

function Formcomponent(){
    return(
        <form>
            <label for="name" id="name" value="name">Name</label>
            <input type="text"></input><br></br>
            <label for="password">password</label>
            <input type="password"></input><br></br>
            <Buttonexample/>
        </form>
    )
}

export default Formcomponent;