import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Item from './pages/Item';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Store from './pages/Store';
import Login from './pages/Login';
import Navbar from './components/Navbar';

import './App.css';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/search' element={<Search/>}></Route>
            <Route exact path='/login' element={<Login/>} ></Route>
            <Route exact path='/store' element={<Store/>} ></Route>
            <Route exact path='/item' element={<Item/>} ></Route>
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
