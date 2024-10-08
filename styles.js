import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#232427FF",
  },
  searchAndFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: 245,
    height: 50,
    fontWeight: "bold",
    borderColor: "#5F00D4",
    borderWidth: 2,
    marginBottom: 1,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    shadowColor: "#5F00D4",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  movieContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#372A46FF",
    borderRadius: 20,
    elevation: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    overflow: "hidden",
  },
  moviePoster: {
    width: "100%",
    height: 529,
    borderRadius: 20,
    marginBottom: 10,
    borderColor: "#5C36A7",
    borderWidth: 0,
    overflow: "hidden",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#ECE4F8FF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
  },
  headerBackgroundColor: "#5F00D4",
  headerTintColor: "#FFFFFFFF",
  posterImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 2 / 3,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0,
    overflow: "hidden",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#EAE3EFFF",
    marginVertical: 10,
  },
  overview: {
    fontSize: 17,
    color: "#E5EDEEFF",
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    color: "#CACACAFF",
    marginVertical: 5,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  starIcon: {
    marginLeft: 5,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#442865FF",
    borderRadius: 15,
  },
  filterButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#442865FF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalOption: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: "center",
    width: "100%",
  },
});
