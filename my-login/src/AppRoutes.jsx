 import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
 } from "react-router-dom"


 import LoginPage from "./pages/LoginPage";
 import HomePage from "./pages/HomePage"

 import { AuthProvicer, AuthContext } from "./contexts/auth";
import { useContext, useState } from "react";



 const AppRoutes = () => {
    //pra nada só para ficar verdinho no terminal
    const [info,setInfo] = useState('')
    if (info === 0){
        return setInfo('')
    }

    const Private = ({ children }) => {

        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>;
        }

        if(!authenticated){
            return <Navigate to="/login" />;
        }

    
        return children;
 
    }

   

    //user == null
    // authenticated = false

    return(

        <Router>
            <AuthProvicer>

                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={ <Private> <HomePage /> </Private> } />
                </Routes>

            </AuthProvicer>
            
        </Router>

    )
 }

 export default AppRoutes;