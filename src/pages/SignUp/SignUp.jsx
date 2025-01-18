import React, { useState } from 'react';
import {
  Container,
  FormSection,
  Heading,
  Form,
  Input,
  Button,
  AlternativeLogin,
  LinkedInButton,
  Footer,
  Signupage,
} from '../SignUp/SignUp.styles';
import signup from '../../assets/signup.png';
import google from '../../assets/google.png';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { useSignIn, useSignUp,useUser, useAuth, UserProfile, UserButton } from "@clerk/clerk-react";

// Import the new header component
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';
import { getUserByClerkId } from '../../api/userApi';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isSignedIn, user, isLoaded } = useUser()
  const {
    isLoaded: signInLoaded,
    signIn,
    setActive
  } = useSignIn();
  const {
    isLoaded: signUpLoaded,
    signUp,
    setActive: setSignUpActive,
  } = useSignUp();
  const navigate= useNavigate();

  /**
   * Toggles the visibility of the password field.
   * @returns {void}
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    try {
      const data = await signIn.create({
        identifier: email,
        strategy: "password",
        password: password
      });
      console.log("data", data);
      if (data.status === "complete") {
        // setActive({ sessionId: data.createdSessionId });
        // setSignInActive(data.createdSessionId);
        // await setSignInActive({ session: data.createdSessionId }); 
        console.log("user", user);
        navigate("/validation");  
        //   const data = await getUserByClerkId(user.id);
        //   console.log("data", data);
        // try {
        //   const response = await data.prepareFirstFactor({
        //     strategy: "email_code",
        //   })
        //   console.log("response", response);

        //   navigate("/otpEmail", {
        //     state: {
        //       flow: "SIGN_IN",
        //       // phoneNumber: fullPhoneNumber,
        //       emailAddress: email
        //     },
        //   });
        // } catch (error) {
        //   console.log("error otp", error);
        // }
        
      }


    } catch (error) {
      console.log("Sign-in error:", error);
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: window.location.origin + '/',  // Optional
        redirectUrlComplete: window.location.origin + '/', // Where to go after successful sign-up
      });
    } catch (err) {
      console.error('Google Sign-Up Error:', err);
    }
  };
  const handleLinkedInSignIn = async (e) => {
    e.preventDefault();
    console.log("handleLinkedInSignIn");   
    try {
      //  openSignUp( {
      //    strategy: 'oauth_linkedin_oidc',
      //  })
      // const popup = window.open('', 'linkedinPopup', 'width=600,height=600');
      const data = await signIn.authenticateWithRedirect({
        strategy: 'oauth_linkedin_oidc',
        redirectUrl: window.location.origin + '/',
        redirectUrlComplete: window.location.origin + '/',
      });
      console.log("data", data);
    } catch (err) {
      console.error('LinkedIn Sign-Up Error:', err);
      alert('LinkedIn sign-up failed. Check console for details.');
    }
  };

  return (
    <Container>
      <HeaderWithLogo />
      <UserButton />
      {/* <UserProfile /> */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <FormSection>
          <Heading>Welcome to Next Interview</Heading>
          <Form onSubmit={handleFormSubmit}>
            <Input>
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input>
            <Input>
              <label>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </Input>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label htmlFor="rememberMe" style={{ fontSize: '0.9rem' }}>
                <input id="rememberMe" type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot-password" style={{ color: '#007bff', fontSize: '0.9rem' }}>
                Forgot Password
              </Link>
            </div>

            <Button type="submit">Log In</Button>

            <AlternativeLogin>
              <Link to="/loginPhone">
                <button>
                  <FaMobileAlt /> Log in with Mobile
                </button>
              </Link>
              <button onClick={handleGoogleSignIn}>
                <img src={google} alt="Google Logo" style={{ height: '20px', marginRight: '10px' }} />
                Log in with Google
              </button>
            </AlternativeLogin>

            <LinkedInButton>
              <button onClick={handleLinkedInSignIn}>
                <FaLinkedin /> Log in with LinkedIn
              </button>
            </LinkedInButton>
          </Form>

          <Footer>
            By signing in, I agree to Next Interview's{' '}
            <a href="/privacy-policy">Privacy Policy</a>
            <br />
            and <a href="/terms">Terms of Service</a>.
          </Footer>
        </FormSection>


        <Signupage>
          <img src={signup} alt="Sign Up Illustration" />
        </Signupage>
      </div>
    </Container>
  );
};

export default SignUp;
