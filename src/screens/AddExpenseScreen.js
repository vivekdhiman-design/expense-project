import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';

const CATEGORIES = [
  { id: 'food', label: '🍔 Food', color: '#FF6B6B' },
  { id: 'transport', label: '🚗 Transport', color: '#4ECDC4' },
  { id: 'shopping', label: '🛍️ Shopping', color: '#45B7D1' },
  { id: 'bills', label: '📄 Bills', color: '#FFA07A' },
  { id: 'entertainment', label: '🎬 Entertainment', color: '#96CEB4' },
  { id: 'health', label: '💊 Health', color: '#FFEAA7' },
  { id: 'other', label: '📦 Other', color: '#DDA0DD' },
];

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }
    if (!amount.trim() || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
    if (!category) {
      Alert.alert('Error', 'Please select a category');
      return;
    }

    addExpense({
      title: title.trim(),
      amount: parseFloat(amount),
      category,
      note: note.trim(),
    });

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Lunch at restaurant"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Amount ($)</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryContainer}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryChip,
                  category === cat.id && { backgroundColor: cat.color },
                ]}
                onPress={() => setCategory(cat.id)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === cat.id && styles.categoryTextSelected,
                  ]}
                >
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Note (Optional)</Text>
          <TextInput
            style={[styles.input, styles.noteInput]}
            placeholder="Add a note..."
            value={note}
            onChangeText={setNote}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Expense</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  noteInput: {
    minHeight: 80,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryChip: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
