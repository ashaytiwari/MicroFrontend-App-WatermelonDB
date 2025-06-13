import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../db';
import { colors } from '../styles/colors';

import { Q } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { NativeModules } from 'react-native';
import { sanitizedRaw } from '@nozbe/watermelondb/RawRecord';;

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
  const wildcardPattern = 'R_30__VJU_';

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


  // const tag = database.adapter._tag
  // const bridge = NativeModules.DatabaseBridge

  // const dirtyRecords = await bridge.query(tag, 'select from ...')
  // const rawRecords = sanitizeQueryResult(dirtyRecords, appSchema.tables['name_of_table'])

  async function fetchWildCardModels() {
    try {

      // const result = await (database.adapter as any).unsafeExecute({
      //   sqls: [
      //     // ['SELECT * FROM product WHERE Title LIKE ? COLLATE NOCASE', [wildcardPattern]],
      //     ['SELECT * FROM product']
      //   ]
      // });

      // const result = await database.adapter.unsafeExecute({
      //   sqlString: 'SELECT * FROM cmsDocuments'
      // });
      // console.log(result, 'fetchWildCardModels result');

      const unsafeQueryRaw: any = {
        table: 'product',
        description: {
          where: [], // Wildcard pattern using SQLite's `_` and `%`
          joinTables: [],
          nestedJoinTables: [],
          sortBy: [],
          sql: {
            sql: 'SELECT * FROM product WHERE Title LIKE ? COLLATE NOCASE',
            values: ['R_30__VJU_'],
          }
        },
        associations: [],
      }

      const result = await database.adapter.unsafeQueryRaw(unsafeQueryRaw);
      console.log(result, 'fetchWildCardModels result');


      // const sqliteAdapter = database.adapter as any;

      // const results = await sqliteAdapter.unsafeSqlQuery(
      //   `SELECT * FROM product WHERE Title LIKE ? COLLATE NOCASE`,
      //   [wildcardPattern]
      // );

      // const results = await database.adapter.query('SELECT * FROM cmsDocuments' as any);
      // const results = await database.ad

      // console.log(results, 'Wildcard results');
    } catch (error) {
      console.log(error, 'fetchWildCardModels error');
    }

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
      <TouchableOpacity style={styles.button} onPress={fetchWildCardModels}>
        <Text style={styles.buttonText}>Fetch Wildcard Models for - {wildcardPattern}</Text>
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