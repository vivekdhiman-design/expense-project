import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORY_COLORS = {
  food: '#FF6B6B',
  transport: '#4ECDC4',
  shopping: '#45B7D1',
  bills: '#FFA07A',
  entertainment: '#96CEB4',
  health: '#FFEAA7',
  other: '#DDA0DD',
};

const CATEGORY_ICONS = {
  food: '🍔',
  transport: '🚗',
  shopping: '🛍️',
  bills: '📄',
  entertainment: '🎬',
  health: '💊',
  other: '📦',
};

export default function ExpenseCard({ expense, onPress, onLongPress }) {
  const color = CATEGORY_COLORS[expense.category] || CATEGORY_COLORS.other;
  const icon = CATEGORY_ICONS[expense.category] || CATEGORY_ICONS.other;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {expense.title}
        </Text>
        <Text style={styles.date}>{formatDate(expense.id)}</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  amountContainer: {
    marginLeft: 8,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
});
