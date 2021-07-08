import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({
  uri: 'https://jess-django-react-api.herokuapp.com/graphql/',
  // uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
    {
      todoField(search:"jess"){
        id
        title
        description
        url
        createdAt
        completed
        postedBy {
          username
        }
        likeField{
           id
           userField {
            username
          }
        }
      }
    }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
