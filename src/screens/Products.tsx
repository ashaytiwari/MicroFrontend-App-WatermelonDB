import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert, Modal, Platform, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';
import { database } from '../db';

interface IProductsFormStateModel {
  title: string,
  category: string,
  rate: string,
  description: string,
  is_published: boolean
}

const stateObject = {
  title: '',
  category: '',
  rate: '',
  description: '',
  is_published: true
};

const Products = () => {

  const navigation = useNavigation<any>();

  const [showProductEditor, setShowProductEditor] = useState(false);
  const [formState, setFormState] = useState<IProductsFormStateModel>(stateObject);
  const [products, setProducts] = useState<any>([]);

  const productTestCollection = database.get('productTest');

  useEffect(() => {
    fetchTestProducts();
  }, []);

  async function fetchTestProducts() {
    const _products = await productTestCollection.query().fetch();
    setProducts(_products);
  }

  function changeFormValue(name: string, value: any) {
    setFormState((_formState) => {
      return { ..._formState, [name]: value };
    });
  }

  async function saveProduct() {

    let newProduct: any;

    await database.write(async () => {
      newProduct = await database.get('productTest').create((product: any) => {
        product.title = formState.title;
        product.category = formState.category;
        product.rate = formState.rate;
        product.description = formState.description;
        product.is_published = formState.is_published;
      })
    });

    await fetchTestProducts();

    setFormState(stateObject);
    setShowProductEditor(false);
  }

  async function deleteProduct(id: string) {
    try {
      const product = await productTestCollection.find(id);

      await database.write(async () => {
        await product.destroyPermanently(); // or markAsDeleted()
      });

      await fetchTestProducts();

      console.log('Product deleted');
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  }

  function renderTextInputControl(placeholder: string, name: string, value: any) {

    const textInputControlAttributes = {
      style: styles.textInputControl,
      placeholder,
      name,
      value,
      onChangeText(updatedText: string) {
        changeFormValue(name, updatedText)
      },
      multiline: name === 'description' ? true : false,
      numberOfLines: 5,
      rows: 5
    };

    return (
      <TextInput {...textInputControlAttributes} />
    );

  }

  function renderProductEditor() {

    const modalAttributes = {
      visible: showProductEditor,
      onRequestClose() {
        setShowProductEditor(false);
      }
    };

    return (
      <Modal {...modalAttributes} animationType='slide'>
        <View style={styles.editorContainer}>
          <Text style={styles.editorHeading}>Add Product</Text>
          <View style={styles.formWrapper}>
            {renderTextInputControl('Enter Title', 'title', formState.title)}
            {renderTextInputControl('Enter Category', 'category', formState.category)}
            {renderTextInputControl('Enter Rate', 'rate', formState.rate)}
            {renderTextInputControl('Enter Description', 'description', formState.description)}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.borderButton} onPress={() => setShowProductEditor(false)}>
              <Text style={styles.borderButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={saveProduct}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );

  }

  function renderProductItem(product: any) {

    const _product = product.item;

    return (
      <View style={styles.productItem}>
        <Text style={styles.productTitle}>{_product.title}</Text>
        <Text style={styles.productCategoryRate}>{_product.category} - {_product.rate}</Text>
        <Text style={styles.productCategoryRate}>{_product.description}</Text>
        <TouchableOpacity style={styles.button} onPress={() => deleteProduct(_product.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );

  }

  function renderProductList() {

    if (products.length === 0) {
      return (
        <View style={styles.noDataSection}>
          <Text style={styles.noDataMessage}>No Products found!</Text>
        </View>
      );
    }

    const flatListAttributes = {
      data: products,
      keyExtractor: (item: any) => item.id,
      renderItem: (item: any) => renderProductItem(item),
      contentContainerStyle: styles.productsList
    };

    return <FlatList {...flatListAttributes} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Welcome to the Products Screen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShowProductEditor(true)}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.goBack('Home')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
      {renderProductEditor()}
      {renderProductList()}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
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
  borderButton: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  borderButtonText: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editorContainer: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    padding: 20
  },
  editorHeading: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  formWrapper: {
    marginVertical: 40,
    rowGap: 25,
  },
  textInputControl: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 17,
    borderRadius: 5
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
  }
});