import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

import Myrepositories from './my-repositories';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
      operation.setContext({
          headers: {
              authorization: `Bearer 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`
          },
      });
  }
});

// client
//   .query({
//     query: gql`
//       query Getnameandemail {
//         viewer {
//           name
//           email
//         }
//       }
//     `
//   })
//   .then(res => console.log(res));
const query = gql`
  {
    viewer {
      name
      email
    }
  }
`;

console.log("----**----")

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Query query={query}>
      {result => {
        if (result.loading) return <p>loading...</p>;
        if (result.error) return <p>{result.error.message}</p>;
        return (
          <div>
            <h1>Name: {result.data.viewer.name}</h1>
            <p>Email: {result.data.viewer.email}</p>
          </div>
        );
      }}
    </Query> */}
    <Myrepositories></Myrepositories>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
