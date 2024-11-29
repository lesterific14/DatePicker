import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MonthPicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
    
  };


  const showDatepicker = () => {
    setShowPicker(true);
  };
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Date Picker</Text>
    <Button 
      title="Choose Month" 
      style={styles.cm} 
      onPress={showDatepicker} 
      color="purple"
    />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        /> )}
      <Text style={styles.text}>
         {date.toLocaleString('default', { weekday: 'long'})}, {date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}
      </Text>
      
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'fuchsia',
  }
});

export default MonthPicker;
