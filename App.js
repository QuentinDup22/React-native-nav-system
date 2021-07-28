import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="md-home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Header</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="md-settings" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.content}>
            <Text>Content</Text>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Ionicons name="md-apps" size={24} color="black" /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="md-logo-instagram" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity> 
                <Ionicons name="md-mail" size={24} color="black" /> 
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
  header:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#eee',
    height: 90,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content:{
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#eee',
    height: 80,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
