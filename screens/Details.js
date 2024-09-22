import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const imgPath = "https://image.tmdb.org/t/p/w500/";

const Details = ({ route }) => {
    const { movie } = route.params;

    return (
    <ScrollView style={styles.container}>
        <Image
        source={{ uri: imgPath + movie.poster_path }}
        style={styles.posterImage}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.details}>Release Date: {movie.release_date}</Text>
        <View style={styles.ratingContainer}>
            <Text style={styles.details}>
                Rating: {movie.vote_average}{" "}
            </Text>
            <Icon name="star" size={20} color="orange" style={styles.starIcon} />
        </View>

        <View style={{ height: 150 }} />
    </ScrollView>
    );
};

export default Details;

