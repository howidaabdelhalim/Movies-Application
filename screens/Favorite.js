import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../screens/FavoriteContext';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const imgPath = "https://image.tmdb.org/t/p/w500/";

const Favorite = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>You have not added your favorite movies!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: imgPath + item.poster_path }}
                style={styles.moviePoster}
                resizeMode="cover"
              />
              <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.releaseDate}>{`Release Date: ${item.release_date}`}</Text>
                <Text style={styles.rating}>{`Rating: ${item.vote_average}`}</Text>
                <TouchableOpacity
                  onPress={() => removeFavorite(item.id)} 
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteText}>Delete</Text>
                  <Icon name="delete" size={24} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#232427FF',
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#372A46FF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieDetails: {
    marginLeft: 10,
    flex: 1,
  },
  movieTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFFFF',
    marginBottom: 10,
  },
  releaseDate: {
    color: '#FFFFFF', 
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  deleteButton: {
    width: '40%',
    flexDirection: 'row', 
    alignItems: 'left', 
    justifyContent: 'flex-end',
    backgroundColor: '#7A1717FF', 
    borderRadius: 15,
    padding: 8,
    marginTop: 10, 
    marginLeft: 143,
  },
  deleteText: {
    color: '#ffffff', 
    marginRight: 5, 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Favorite;

