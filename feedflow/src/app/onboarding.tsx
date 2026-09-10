import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.step}>STEP 1 OF 3</Text>

        <Text style={styles.title}>
          Welcome to FeedFlow
        </Text>

        <Text style={styles.subtitle}>
          FeedFlow helps train Instagram's recommendation system based on your interests.
        </Text>

        <View style={styles.featureCard}>
          <Text style={styles.emoji}>🎯</Text>
          <Text style={styles.cardTitle}>Choose Interests</Text>
          <Text style={styles.cardText}>
            Select topics you want to see more of.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.emoji}>📸</Text>
          <Text style={styles.cardTitle}>Connect Instagram</Text>
          <Text style={styles.cardText}>
            Link your Instagram account.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.emoji}>⚡</Text>
          <Text style={styles.cardTitle}>Improve Recommendations</Text>
          <Text style={styles.cardText}>
            FeedFlow continuously improves your feed.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/preferences")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1020",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  content: {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
},

  step: {
    color: "#7C3AED",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 12,
    transform:[{translateX : -20}]
  },

  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 40,
    maxWidth: 600,
  },

  featureCard: {
  width: 500,
  maxWidth: "90%",
  backgroundColor: "#111827",
  borderRadius: 20,
  padding: 20,
  marginBottom: 16,

  transform: [{ translateX: 15 }],
},

  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardText: {
    color: "#94A3B8",
  },

  button: {
    backgroundColor: "#7C3AED",
    width: 500,
    maxWidth: "90%",
    paddingVertical: 18,
    borderRadius: 18,
    marginTop: 20,
    transform: [{ translateX: 15 }],
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
});