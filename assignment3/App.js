import React,{useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, Picker, Button, Image} from 'react-native';

export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue] = useState("val-Hamburger-$15");
  const [picker2SelectedValue, setPicker2SelectedValue] = useState("1");
  const [picker3SelectedValue, setPicker3SelectedValue] = useState("val-Sprite-$5");
  const [picker4SelectedValue, setPicker4SelectedValue] = useState("1");
  const [calculatedValue, setCalculatedValue] = useState("Press CALCULATE to proceed")
  return (
  <SafeAreaView style={styles.container}>
  
    <View>
      <Text style={styles.heading}>Welcome To SFFS System</Text>
    </View>
    
    <View style={styles.imagecontainer}>
      <Image style={styles.image} source={require('./assets/foodlogo.png')}/>
    </View>

    <View style={styles.row}>
      <Text style={styles.pickerheader1}>Food:</Text>
      <Text style={styles.pickerheader2}>Quantity:</Text>
    </View>

    <View style={styles.row}>
        <Picker 
          style={styles.picker1}
          selectedValue = {picker1SelectedValue}
          onValueChange = {(itemValue, itemIndex) => setPicker1SelectedValue(itemValue)}
          >
            <Picker.Item label="Fries-$10" value="val-Fries-$10" />
            <Picker.Item label="Tacos-$15" value="val-Tacos-$15" />
            <Picker.Item label="Hamburger-$15" value="val-Hamburger-$15" />
        </Picker>
        <Picker 
          style={styles.picker2}
          selectedValue = {picker2SelectedValue}
          onValueChange = {(itemValue, itemIndex) => setPicker2SelectedValue(itemValue)}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
    </View>

    <View style={styles.row}>
      <Text style={styles.pickerheader1}>Drinks:</Text>
      <Text style={styles.pickerheader2}>Quantity:</Text>
    </View>

    <View style={styles.row}>
        <Picker 
          style={styles.picker1}
          selectedValue = {picker3SelectedValue}
          onValueChange = {(itemValue, itemIndex) => setPicker3SelectedValue(itemValue)}
          >
            <Picker.Item label="Coke-$6" value="val-Coke-$6" />
            <Picker.Item label="Pepsi-$5" value="val-Pepsi-$5" />
            <Picker.Item label="Sprite-$5" value="val-Sprite-$5" />
        </Picker>
        <Picker 
          style={styles.picker2}
          selectedValue = {picker4SelectedValue}
          onValueChange = {(itemValue, itemIndex) => setPicker4SelectedValue(itemValue)}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
    </View>

    <View style={styles.button}>
        <Button 
          title="CALCULATE"
          onPress = {()=>{
            const lastDigitsforPicker1 = picker1SelectedValue.substr(-2);
            const lastDigitforPicker3 = picker3SelectedValue[picker3SelectedValue.length-1];
            const charToIntforPicker1 = parseInt(lastDigitsforPicker1);
            const charToIntforPicker2 = parseInt(picker2SelectedValue);
            const charToIntforPicker3 = parseInt(lastDigitforPicker3);
            const charToIntforPicker4 = parseInt(picker4SelectedValue);
            setCalculatedValue("Total cost of the order: $" + ((charToIntforPicker3*charToIntforPicker4)+(charToIntforPicker1*charToIntforPicker2)));
            }}
        />
        <Text style={styles.calculate}> {calculatedValue} </Text>
      </View>

      <View>
        <Text style={styles.appdevelop}>App developed by Wilbert Dwiputra Indra, Guriqbal Singh Majhail, Joseph Elias, Alexander Carter</Text>
      </View>

  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffcc'
    },
    heading:{
      marginTop:20,
      paddingTop:50,
      fontWeight:"bold",
      fontSize:24,
      textAlign:"center",
      fontFamily:"serif",
    },
    imagecontainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:25,
      marginBottom:20,
    },
    image:{
      height:150,
      width:150,
    },
    row:{
      paddingLeft:20,
      paddingRight:20,
      flexDirection: 'row',
      marginTop: 10,
    },
    pickerheader1:{
      flex:2,
      fontSize:20,
      fontFamily:"serif",
    },
    pickerheader2:{
      flex:1,
      fontSize:20,
      fontFamily:"serif",
    },
    picker1:{
      flex:2
    },
    picker2:{
      flex:1
    },
    button:{
      marginTop:20,
      paddingLeft:20,
      paddingRight:20,
    },
    calculate:{
      fontWeight:"bold",
      fontSize:20,
      textAlign:"center",
      marginTop:10,
      fontFamily:"sans-serif",
    },
    appdevelop:{
       marginTop:100,
       fontSize:10,
       textAlign:"center",
    },
  });
