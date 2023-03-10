import React, { Component } from "react";
import ReactDOM from 'react-dom';
import moment from 'moment'
import { Box, Flex, Avatar, TagLabel, Text, Stack, Skeleton } from "@chakra-ui/core"
import InputBox from "./inputBox";
import "../../App.css";


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  //Scroll message UI-kit
  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scroll(0, messagesContainer.scrollHeight);
  }

  render() {
    return (
      <React.Fragment>
        <Box
          w="70%"
          h="80vh"
          shadow="lg"
          roundedBottomRight="md"
          className="box-chat"
        >

          <Flex h="100%" position="relative">
            <Flex
              flexDirection="column"
              p={2}
              w="100%" overflowY="auto"
              marginBottom="50px"
              ref={(el) => { this.messagesContainer = el; }}
              style={{ scrollBehavior: "smooth" }}>
              {
                !this.props.loadingData
                  ?
                  this.props.messages.sort((a, b) => new Date(a.time) - new Date(b.time)).map((conversation, i) => (
                    conversation.uid === this.props.userId
                      ?
                      <Stack flexDirection="row-reverse" spacing={1} isInline marginBottom={2} key={i}>
                        {this.props.usersList.map((user, i) =>
                          (user.uid === conversation.uid)
                            ?
                            <div className="msg-img">
                              <Avatar
                                key={i}
                                src={user.img}
                                name={conversation.name}
                                left="5px"
                              />
                            </div>
                            :
                            ''
                        )}
                        <div className="chat-saya" variantColor="blue" shadow="sm">
                          <TagLabel whiteSpace="normal" py={2}>
                            <Stack>
                              <p className="p-chat-saya" >
                                {conversation.msg}
                              </p>
                              <Text color="lightgray.500" fontSize={11}>
                                {moment(conversation.time).fromNow()}
                              </Text>
                            </Stack>
                          </TagLabel>
                        </div>
                      </Stack>
                      :

                      <Stack spacing={1} isInline marginBottom={2} w="100%" key={i}>
                        {this.props.usersList.map((user, i) =>
                          (user.uid === conversation.uid)
                            ?
                            <div className="msg-img">
                              <Avatar
                                key={i}
                                src={user.img}
                                name={conversation.name}
                              />
                            </div>
                            :
                            ''
                        )}

                        <br />

                        <div className="chat-kamu" shadow="sm">
                          <TagLabel whiteSpace="normal" py={2} >
                            <Stack>
                              <p style={{ "fontWeight": "bold" }}>{conversation.name} </p>
                              <p className="p-chat-kamu" >
                                {conversation.msg}
                              </p>
                              <Text color="gray.500" fontSize={11}>
                                {moment(conversation.time).fromNow()}
                              </Text>
                            </Stack>
                          </TagLabel>
                        </div>
                      </Stack>
                  ))
                  :
                  <div>
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                    <Skeleton height="50px" my="10px" />
                  </div>
              }
            </Flex>
            {!this.props.loadingData
              ? <InputBox
                userName={this.props.userName}
                userId={this.props.userId}
                roomName={this.props.roomName}
              />
              : ""
            }
          </Flex>
        </Box>
      </React.Fragment >
    )
  }
}

export default Message;