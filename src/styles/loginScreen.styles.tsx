import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 61,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
  },
  wrapper: {
    width: '100%',
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 67.88,
    height: 20,
  },
  formWrapper: {
    marginTop: 35,
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    marginTop: 24,
    width: '100%',
    maxWidth: 373,
    flex: 1,
    justifyContent: 'space-between',
  },
  forgotPassword: {
    marginTop: 6,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#141414',
  },
  headerWrapper: {
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 33,
    color: '#141414',
  },
  subheaderWrapper: {
    alignItems: 'center',
    marginTop: 12,
    maxWidth: 311,
  },
  subheader: {
    fontSize: 14,
    lineHeight: 19,
    color: '#9F9F9F',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#EAEAEA',
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 18,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#BFBFBF',
  },
  validLoginButton: {
    backgroundColor: '#141414',
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 18,
    borderRadius: 8,
  },
  validLoginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  signup: {
    color: '#9F9F9F',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  equalWidthInputs: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
});
