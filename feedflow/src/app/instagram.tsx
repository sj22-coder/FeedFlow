import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function InstagramScreen() {
  const [connected, setConnected] = useState(false);
  const[connecting,setConnecting]= useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.step}>STEP 3 OF 3</Text>

        <Text style={styles.title}>
          Connect Instagram
        </Text>

        <Text style={styles.subtitle}>
          FeedFlow uses your selected interests
          to improve feed recommendations over time.
        </Text>

        <View style={styles.card}>
          <Text style={styles.icon}>📸</Text>

          <Text style={styles.cardTitle}>
            Instagram Connection 
          </Text>
<Text
  style={[
    styles.status,
    {
      color: connected
        ? "#22C55E"
        : connecting
        ? "#F59E0B"
        : "#EF4444",
    },
  ]}
>
  {connected
    ? "Account Connected ✓"
    : connecting
    ? "Connecting..."
    : "Waiting for Connection"}
</Text>
<Text style={styles.description}>
  {connected
    ? "FeedFlow can now personalize recommendations using your selected interests."
    : "Connect Instagram to begin personalizing your feed experience."}
</Text>
{connected && (
  <View style={styles.connectionInfo}>
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        Username
      </Text>

      <Text style={styles.infoValue}>
        @feedflow_user
      </Text>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        Last Synchronization
      </Text>

      <Text style={styles.infoValue}>
        Just Now
      </Text>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        Connection Health
      </Text>

      <Text
        style={[
          styles.infoValue,
          { color: "#22C55E" },
        ]}
      >
        Healthy
      </Text>
    </View>

    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        FeedFlow Ready
      </Text>

      <Text
        style={[
          styles.infoValue,
          { color: "#22C55E" },
        ]}
      >
        ✓
      </Text>
    </View>
  </View>
)}
<TouchableOpacity
  style={styles.connectButton}
  disabled={connecting || connected}
  onPress={() => {
    setConnecting(true);

    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 1500);
  }}
>
  <Text style={styles.connectText}>
    {connecting
      ? "Connecting..."
      : connected
      ? "Connected ✓"
      : "Connect Account"}
  </Text>
</TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !connected && styles.disabledButton,
          ]}
          disabled={!connected}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.continueText}>
            {connected
              ? "Continue"
              : "Connect Instagram First"}
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
connectionInfo: {
  width: "100%",
  marginBottom: 20,
},

infoRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
},

infoLabel: {
  color: "#94A3B8",
  fontSize: 14,
},

infoValue: {
  color: "#FFFFFF",
  fontWeight: "600",
  fontSize: 14,
},
  step: {
    color: "#7C3AED",
    fontWeight: "700",
    marginBottom: 12,
  },
description: {
  color: "#94A3B8",
  textAlign: "center",
  marginBottom: 20,
},
  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 30,
    maxWidth: 500,
  },

  card: {
    width: "100%",
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    marginBottom: 24,
  },

  icon: {
    fontSize: 50,
    marginBottom: 10,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  status: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  connectButton: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
  },

  connectText: {
    color: "#fff",
    fontWeight: "700",
    fontSize:16,
  },

  continueButton: {
    width: "100%",
    backgroundColor: "#7C3AED",
    paddingVertical: 18,
    borderRadius: 18,
  },

  disabledButton: {
    backgroundColor: "#374151",
  },

  continueText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});