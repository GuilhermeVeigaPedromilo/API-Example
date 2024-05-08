import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f7f4eb',
  },

  ContainerB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
  },


  Square: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    width: "75%",
    height: '50%',
  },

  Logo: {
    width: '30%',
    height: '35%',
    margin: "6%",
  },

  Input: {
    width: '75%',
    padding:10,
    margin: '5%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },

  Button: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: '75%',
    padding: 10,
    alignItems: 'center'
  },

  ButtonTxt: {
    color: 'white',
    fontSize: 15,
  }
});

export default styles;
