import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Store/configStore";

// refresh webpack server if you changed the YourAppName
function YourAppName({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default YourAppName;
