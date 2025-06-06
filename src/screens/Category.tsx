import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../db';
import { colors } from '../styles/colors';

import { Q } from '@nozbe/watermelondb';

interface IPaginationStateModel {
  page: number,
  lastFetchedId: null | string
}

const Category = () => {

  const [categories, setCategories] = useState<Array<any>>([]);
  const [paginationState, setPaginationState] = useState<IPaginationStateModel>({
    page: 1,
    lastFetchedId: null
  });

  async function fetchAllCategories() {
    const _categories = await database.get('category').query().fetch();
    setCategories(_categories);
  }

  async function fetchPaginatedData() {

    const lastFetchedQueryClause = paginationState.lastFetchedId ? Q.where('id', Q.gt(paginationState.lastFetchedId)) : Q.where('id', Q.notEq(''));

    let query = database.get('category').query(
      lastFetchedQueryClause,
      Q.sortBy('id', 'asc'),
      Q.take(20)
    );

    const results = await query.fetch();
    setCategories(results);
    setPaginationState((_paginationState) => {
      return {
        page: _paginationState.page + 1,
        lastFetchedId: results[results.length - 1].id
      };
    });
  }

  console.log(paginationState, categories.length);

  function renderCategoryItem(category: any) {
    const _category = category.item;
    return (
      <View style={styles.productItem}>
        <Text style={styles.productTitle}>{_category.Title}</Text>
        <Text style={styles.productCategoryRate}>{_category.PublicationDate}</Text>
      </View>
    );
  }

  function renderCategories() {

    if (categories.length === 0) {
      return (
        <View style={styles.noDataSection}>
          <Text style={styles.noDataMessage}>No Products found!</Text>
        </View>
      );
    }

    const flatListAttributes = {
      data: categories,
      keyExtractor: (item: any) => item.id,
      renderItem: (item: any) => renderCategoryItem(item),
      contentContainerStyle: styles.productsList
    };

    return <FlatList {...flatListAttributes} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Screen</Text>
      <TouchableOpacity style={styles.button} onPress={fetchAllCategories}>
        <Text style={styles.buttonText}>Fetch all categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={fetchPaginatedData}>
        <Text style={styles.buttonText}>Fetch Page {paginationState.page} records only</Text>
      </TouchableOpacity>
      <Text>Total Items shown: {categories.length}</Text>
      {renderCategories()}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f9ff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center'
  },
  noDataSection: {
    marginVertical: 40,
  },
  noDataMessage: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center'
  },
  productsList: {
    rowGap: 20,
    marginVertical: 20
  },
  productItem: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    rowGap: 5
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productCategoryRate: {
    fontSize: 14,
    color: 'grey'
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});