import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import {
  setSelectedInterests,
} from "../store/preferencesStore";
const interests = [
  "AI",
  "Technology",
  "Startups",
  "Business",
  "Finance",
  "Gaming",
  "Travel",
  "Fitness",
  "Health",
  "Education",
];

export default function PreferencesScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((item) => item !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.step}>STEP 2 OF 3</Text>

        <Text style={styles.title}>
          Choose Your Interests
        </Text>

        <Text style={styles.subtitle}>
          Select topics you'd like Instagram to show more often.
        </Text>

        <View style={styles.counterCard}>
          <Text style={styles.counter}>
            {selected.length}
          </Text>

          <Text style={styles.counterText}>
            Interests Selected
          </Text>
        </View>

        <View style={styles.chipsContainer}>
          {interests.map((interest) => {
            const active = selected.includes(interest);

            return (
              <TouchableOpacity
                key={interest}
                style={[
                  styles.chip,
                  active && styles.activeChip,
                ]}
                onPress={() => toggleInterest(interest)}
              >
                <Text
                  style={[
                    styles.chipText,
                    active && styles.activeChipText,
                  ]}
                >
                  {interest}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
  style={[
    styles.button,
    selected.length === 0 && styles.disabledButton,
  ]}
  disabled={selected.length === 0}
  onPress={() => {
  setSelectedInterests(selected);
  router.push("/instagram");
}}
>
         <Text style={styles.buttonText}>
  {selected.length === 0
    ? "Select At Least 1 Interest"
    : "Continue"}
</Text>
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
    maxWidth: 700,
    alignItems: "center",
  },

  step: {
    color: "#7C3AED",
    fontWeight: "700",
    marginBottom: 12,
  },

  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },

  counterCard: {
    width: "100%",
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 30,
  },

  counter: {
    fontSize: 50,
    color: "#7C3AED",
    fontWeight: "bold",
  },

  counterText: {
    color: "#94A3B8",
    marginTop: 6,
  },

  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },

  chip: {
    backgroundColor: "#111827",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
    margin: 8,
  },

  activeChip: {
    backgroundColor: "#7C3AED",
  },

  chipText: {
    color: "#fff",
    fontWeight: "600",
  },

  activeChipText: {
    color: "#fff",
  },

  button: {
    width: "100%",
    backgroundColor: "#7C3AED",
    paddingVertical: 18,
    borderRadius: 18,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  disabledButton: {
  backgroundColor: "#374151",
},
});