import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3',
      padding: 16,
    },
    picker: {
      flex: 1,
      maxHeight: 74,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginHorizontal: -4,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    item: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 4,
        borderColor: '#e3e3e3',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#999999',
        marginBottom: 12,
    },

    /** FlatList */
    listItems: {
        height: 70, 
        backgroundColor: '#fefefe', 
        padding: 24, 
        justifyContent: 'center',         
        borderRadius: 8,
    },
  });

  export default styles;