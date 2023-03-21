import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';
import Logo from './images/2009__1.png';
import Image from './images/bitcoin-.jpg';
import AboutPage from './components/AboutPage';
import CoingeckoAPI from './components/CoingeckoAPI';
import Footer from './components/Footer';

const App = ({ isSignedIn, guestBook, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    guestBook.getMessages().then(setMessages);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const { fieldset, message, donation } = e.target.elements;

    fieldset.disabled = true;

    await guestBook.addMessage(message.value, donation.value)
    const messages = await guestBook.getMessages()

    setMessages(messages);
    message.value = '';
    donation.value = '0';
    fieldset.disabled = false;
    message.focus();
  };

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }

  return (
    <main>
    
      <nav style={{ display: 'flex', justifyContent: 'space-between'}}>
        <a href="#">
          <img src={Logo} alt="Logo" width="100%" height="50%" />
        </a>
        <ul style={{ display: 'flex', listStyleType: 'none',padding:'2%' }}>
        <li><a href="#home" style={{ color: "#fff", textDecoration: "none", margin: "0 1rem" }}>Home</a></li>
        <li><a href="#about" style={{ color: "#fff", textDecoration: "none", margin: "0 1rem" }}>About</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none", margin: "0 1rem" }}>Contact</a></li>
          <li>
            { isSignedIn
              ? <button onClick={signOut}>Log out</button>
              : <button onClick={signIn}>Log in</button>
            }
          </li>
          
        </ul>
      </nav>
      
      {/* <section id="about" class="flex-container">
        <div class="about-header">
          <h1>About Us</h1>
        </div>
        <img src={''} alt="about image" class="about-image"/>
        <div class="about-text">
          <p>This is a guest book application built with NEAR Protocol.</p>
        </div>
      </section> */}

      {/* <section id="messages" style={{paddingLeft:'45%'}}>
        <h2>Messages</h2>
        { !!messages.length ? <Messages messages={messages}/> : <p>No messages yet.</p> }
      </section> */}

      <section id="form">
        {/* <h2>Add Message</h2> */}
        { isSignedIn
          ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
          : <SignIn/>
        }
      </section>
      <section id="messages" style={{paddingLeft:'45%'}}>
        <h2 style={{color:'orange'}}>Messages</h2>
        { !!messages.length ? <Messages messages={messages}/> : <p>No messages yet.</p> }
      </section>
      {/* <section id="about">
        <h2 style={{color:'blue'}}>About</h2>
        <p>This is a guest book application built with NEAR Protocol.</p>
      </section> */}
      <AboutPage/>
      <CoingeckoAPI/>

      <Footer/>


    </main>
  );
};

export default App;
