import DateSelector from "@/components/DateSelector";
import FilterTabs from "@/components/FilterTabs";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import Colors from "@/constants/Colors";
import { FilterOptions, TASKS } from "@/constants/tasks";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Index = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const filterMap = {
    "To do": "To-do",
    Completed: "Done",

    "In Progress": "In Progress",
  };
  useEffect(() => {
    setFilteredTasks(
      activeFilter === "All"
        ? TASKS
        : TASKS.filter((task) => task.status === filterMap[activeFilter]),
    );
  }, [activeFilter]);
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      {/* Header components */}
      <Header />
      <DateSelector />
      <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Colors.background,
    flex: 1,
    gap: 8,
  },
  list: {
    paddingBottom: 24,
  },
});
