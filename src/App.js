import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ProfileState from "./context/profiles/ProfileState";
import SnackbarProvider from 'react-simple-snackbar'


const App = () => {
    return (
        <ProfileState>
            <SnackbarProvider>
                <Navbar/>
                <Content/>
            </SnackbarProvider>
        </ProfileState>
    );
};

export default App;
