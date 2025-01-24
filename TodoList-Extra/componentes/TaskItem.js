import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono desde la biblioteca

const TaskItem = ({ task, onToggleCompletion, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      {/* Checkbox */}
      <Pressable
        style={[styles.checkbox, task.completed && styles.checkboxChecked]}
        onPress={() => onToggleCompletion(task.id)}
      />

      {/* Texto de la tarea */}
      <Pressable onPress={() => onToggleCompletion(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.taskText,styles.boldText, task.completed && styles.completedText]}>
          {task.text}
        </Text>
      </Pressable>

      {/* Ícono de Basura */}
      <Pressable onPress={() => onDelete(task.id)}>
        <Icon name="trash" size={20} color="#ff0000" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 15,
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  taskText: {
    fontSize: 20,
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold', // Propiedad para hacer texto bold
    fontSize: 18, // Tamaño del texto (opcional)
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskItem;
