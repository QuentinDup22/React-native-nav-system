import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const getPics = async () => {
    const response = await fetch('https://picsum.photos/v2/list?limit=24');
    const data = await response.json();
    return data;
}

const GalleryPage = () => {

    React.useEffect(() => {
        getPics().then(data => {
            console.log(data)
        })
    },[]);

    return (
    <View style={styles.content}>
        <Text>Gallery Page</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit tortor. Proin gravida lectus nec sapien tristique convallis. Pellentesque auctor laoreet tincidunt. Nunc eget diam ac velit convallis rhoncus. Praesent suscipit, libero sed facilisis convallis, magna elit cursus libero, et fringilla massa odio sollicitudin mi.</Text>
    </View>
)};

export default GalleryPage

const styles = StyleSheet.create({
    content:{
      flex: 4,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });