
import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const IDVSlider = ({ visible, onClose }) => {
  const [value, setValue] = useState(84);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.header}>Car Insured Value (IDV)</Text>
          <Text style={styles.subHeader}>Amount insurer pays in case of total damage</Text>

          <Text style={styles.label}>Choose your own IDV</Text>
          <TextInput
            style={styles.input}
            value={`$${value}`}
            editable={false}
          />

          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={2}
            maximumValue={200}
            value={value}
            onValueChange={(val) => setValue(Math.round(val))}
          />

          <Button title="Update" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { padding: 20, backgroundColor: 'white', borderRadius: 10, 
    alignItems: 'center'
   },
  header: { fontSize: 18,
     fontWeight: 'bold' 
    },
  subHeader: { fontSize: 14,
     color: 'gray',
      marginBottom: 20 },
  label: { fontSize: 16,
     marginBottom: 10 
    },
  input: { borderColor: 'gray', borderWidth: 1,
     padding: 10, width: 100,
      textAlign: 'center',
       marginBottom: 20 }
});

export default IDVSlider;
