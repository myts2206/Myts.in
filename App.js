import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UndefinedTasks from "./components/UndefinedTasks";
import BesPrep from "./screens/BesPrep";
import ElectricalPrep from "./screens/ElectricalPrep";
import HomeScreen from "./screens/HomeScreen";
import MathPrep from "./screens/MathPrep";
import MyMotivation from "./screens/MyMotivation"
import PhysPrep from "./screens/PhysPrep";
import Prep from "./screens/Prep";
import StartScreen from "./screens/StartScreen";
const navigator = createStackNavigator({
  Home: HomeScreen,
  UndefinedTasks: UndefinedTasks,
  Motivation: MyMotivation,
  Start: StartScreen,
  Prepo: Prep,
  MathPrep: MathPrep,
  PhysPrep: PhysPrep,
  ElectricalPrep: ElectricalPrep,
  BesPrep: BesPrep,
}, {
  initialRouteName: 'Start',
  defaultNavigationOptions: {
    title: 'myts'
  }
}
)
export default createAppContainer(navigator);