import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚀 FeedFlow</Text>

      <Text style={styles.title}>
        Train Instagram To Show What You Actually Care About
      </Text>

      <Text style={styles.subtitle}>
        Personalize your Instagram recommendations with intelligent automation.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 52,
    marginBottom: 20,
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#7C3AED",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 18,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});