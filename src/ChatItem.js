// @flow

import {graphql, useLazyLoadQuery} from 'react-relay';

function ChatItem(props) {
  const chat = useLazyLoadQuery(
    graphql`
      query ChatItemQuery($id: ID!) {
        chatItem(id: $id) {
          __typename
          ... on TextMessage {
            text
          }
          ... on ImageMessage {
            image
          }
          ... on StatusMessage {
            status
          }
        }
      }
    `,
    {id: 'ChatItem:1'},
  );

  return JSON.stringify(chat.chatItem);
}
