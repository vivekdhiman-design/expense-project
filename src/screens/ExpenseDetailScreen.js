import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const CATEGORY_LABELS = {
  food: { label: '🍔 Food', color: '#FF6B6B' },
  transport: { label: '🚗 Transport', color: '#4ECDC4' },
  shopping: { label: '🛍️ Shopping', color: '#45B7D1' },
  bills: { label: '📄 Bills', color: '#FFA07A' },
  entertainment: { label: '🎬 Entertainment', color: '#96CEB4' },
  health: { label: '💊 Health', color: '#FFEAA7' },
  other: { label: '📦 Other', color: '#DDA0DD' },
};

export default function ExpenseDetailScreen({ route, navigation }) {
  const { expense } = route.params;
  const categoryInfo = CATEGORY_LABELS[expense.category] || CATEGORY_LABELS.other;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.categoryBadge, { backgroundColor: categoryInfo.color }]}>
          <Text style={styles.categoryBadgeText}>{categoryInfo.label}</Text>
        </View>

        <Text style={styles.title}>{expense.title}</Text>

        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Amount</Text>
          <Text style={styles.amountValue}>${expense.amount.toFixed(2)}</Text>
        </View>

        {expense.note ? (
          <View style={styles.noteContainer}>
            <Text style={styles.noteLabel}>Note</Text>
            <Text style={styles.noteText}>{expense.note}</Text>
          </View>
        ) : null}

        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Date</Text>
          <Text style={styles.dateText}>{formatDate(expense.id)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('AddExpense', { expense })}
      >
        <Text style={styles.editButtonText}>Edit Expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 16,
  },
  categoryBadgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  amountLabel: {
    fontSize: 16,
    color: '#999',
  },
  amountValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  noteContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  noteLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  dateContainer: {
    paddingVertical: 12,
  },
  dateLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
