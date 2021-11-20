import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ContentDetail from "./src/components/ContentDetail";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";


const navigator =createStackNavigator(
  {
    Home: HomeScreen,
    List:ListScreen,
    ContentDetail:ContentDetail
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Bulut MD",
    },
  }
);

export default createAppContainer(navigator);