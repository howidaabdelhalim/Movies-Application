import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

const GradientHeader = ({ title, navigation }) => (
    <View style={styles.container}>
        <LinearGradient colors={["#8231D8FF", "#242528FF"]} style={styles.header}>
            <TouchableOpacity 
                style={styles.iconContainer} 
                onPress={() => navigation.navigate('Favorite')} 
            >
                <Icon name="star" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </LinearGradient>
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row", 
    alignItems: "center", 
    height: 60,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    left: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginLeft:10,
  },
});

export default GradientHeader;


