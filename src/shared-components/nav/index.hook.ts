import {useLocation} from "react-router-dom";

import useTheme from "../../theme/useThemeContext.hook";

const useNavbar = () => {
    const {toggleTheme} = useTheme()
    const location = useLocation();
    const pathName = location.pathname

    return {pathName, toggleTheme}
}

export default useNavbar;
