import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
