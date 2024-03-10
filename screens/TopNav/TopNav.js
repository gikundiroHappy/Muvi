import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Landing from "../Landing";
import Series from "../Series";
import Films from "../Films";

const Top = createMaterialTopTabNavigator();

export const TopNavigation = () => {
    return (
      <Top.Navigator
        tabBarPosition="top"
        screenOptions={{
          tabBarStyle: {
            height: 50,
            backgroundColor: "#1F2123",
          },
          tabBarLabelStyle: {
            color: "white",
            fontWeight: "bold",
            textTransform: 'none'
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#F2B916",
            width: 40,
            left: 50,
            height: 4,
          },
        }}
      >
        <Top.Screen name="Featured" component={Landing}/>
        <Top.Screen name="Series" component={Series} />
        <Top.Screen name="Films" component={Films} />
      </Top.Navigator>
    );
  };