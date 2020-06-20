import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
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

  buttonMain: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: 'red',
    color: 'white',
    alignSelf: 'stretch',
  },
});

export default styles;
