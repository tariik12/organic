import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFDocument = ({ selectedProperties, Products, propertyDisplayNames, formatDate, }) => {
  const calculateFontSize = () => {
    const baseFontSize = 12;
    const maxProperties = 5;
    const scaleFactor = 1 - (selectedProperties.length > maxProperties ? (selectedProperties.length - maxProperties) * 0.05 : 0);
    return baseFontSize * scaleFactor;
  };

  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      marginBottom: 10,
    },
    headerText: {
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
      padding: 5,
      fontSize: calculateFontSize(),
    },
    body: {
      flexDirection: "column",
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#f0f0f0",
      marginBottom: 5,
    },
    cell: {
      flex: 1,
      textAlign: "center",
      padding: 5,
      fontSize: calculateFontSize(),
    },
  });

  return (
    <Document>
      <Page size="A4">
        <View style={styles.header}>
          {selectedProperties.map(property => (
            <Text key={property} style={styles.headerText}>
              {propertyDisplayNames[property] || property}
            </Text>
          ))}
        </View>
        <View style={styles.body}>
          {Products.map((Product, index) => (
            <View key={index} style={styles.row}>
              {selectedProperties.map(property => (
                <Text key={property} style={styles.cell}>
                  {property === 'ProductInDate' || property === 'ProductWarrantyDate' ? formatDate(Product[property]) : Product[property]}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFDownload = ({ selectedProperties, Products, propertyDisplayNames, formatDate, fileName }) => {
  return (
    <PDFDownloadLink document={<PDFDocument selectedProperties={selectedProperties} Products={Products} propertyDisplayNames={propertyDisplayNames} formatDate={formatDate} />} fileName={fileName}>
      {({ loading }) => (
        <button
          
          disabled={loading}
        >
          {loading ? 'Loading document...' : 'Download PDF'}
          {/* TODO Button Style */}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownload;
