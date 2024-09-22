import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, Modal, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FavoritesContext } from '../screens/FavoriteContext';
import styles from '../styles';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
const imgPath = "https://image.tmdb.org/t/p/w500/";

const Home = ({ navigation }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null); 
  const [dropdownVisible, setDropdownVisible] = useState(false); 

  // Fetch the movies from TMDb API
  useEffect(() => {
    fetchMovies();
  }, []);

  // Filter movies when the search term or rating filter changes
  useEffect(() => {
    filterMovies();
  }, [searchTerm, ratingFilter, movies]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMovies(data.results); 
      setFilteredMovies(data.results); 
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const filterMovies = () => {
    let filtered = movies
      .filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (ratingFilter) {
      const [minRating, maxRating] = ratingFilter;
      filtered = filtered.filter(movie =>
        movie.vote_average >= minRating && movie.vote_average < maxRating
      );
    }

    setFilteredMovies(filtered);
  };

  const handlePress = (movie) => {
    navigation.navigate('Details', { movie }); 
  };

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.id === movie.id)) {
      removeFavorite(movie.id); 
    } else {
      addFavorite(movie); 
    }
  };

  const handleRatingFilter = (range) => {
    setRatingFilter(range);
    setDropdownVisible(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8231D8FF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.searchAndFilterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search movies..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setDropdownVisible(!dropdownVisible)} 
        >
          <Text style={styles.filterButtonText}>
            {ratingFilter ? `Rated ${ratingFilter[0]}-${ratingFilter[1]}` : 'Filter by Rating'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown for rating filter */}
      <Modal
        transparent={true}
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableHighlight onPress={() => handleRatingFilter([1, 5])}>
              <Text style={styles.modalOption}>1 - 5</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([5, 6])}>
              <Text style={styles.modalOption}>5 - 6</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([6, 7])}>
              <Text style={styles.modalOption}>6 - 7</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([7, 8])}>
              <Text style={styles.modalOption}>7 - 8</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([8, 9])}>
              <Text style={styles.modalOption}>8 - 9</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([9, 10])}>
              <Text style={styles.modalOption}>9 - 10</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => handleRatingFilter([0, 10])}>
              <Text style={styles.modalOption}>All Ratings</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image
                source={{ uri: imgPath + item.poster_path }}
                style={styles.moviePoster}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleFavorite(item)}>
              <Icon
                name={favorites.some(fav => fav.id === item.id) ? "star" : "star-outline"}
                size={30}
                color={favorites.some(fav => fav.id === item.id) ? "orange" : "gray"}
                style={{ paddingLeft: 300, marginTop: -38 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;




