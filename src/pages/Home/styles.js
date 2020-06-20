import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fontColor: {
    color: 'black',
    textAlign: 'center',
  },

  logo: {
    height: 200,
    width: 200,
  },

  headingTitle: {
    fontSize: 20,
    marginBottom: 20,
  },

  inputText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
  },

  buttonItem: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'stretch',
  },

  buttonText: {
    color: '#ffffff',
  },
});

export default styles;
