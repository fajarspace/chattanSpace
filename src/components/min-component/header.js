import React, { Component } from "react";
import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core"
import "../../App.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Flex borderBottom="" bg="white" roundedTop="md">
          <Box w="100%" p={4}>

            <div class="msger-header-title">
              <i class="fas fa-comment-alt"></i> Chattan .space
            </div>

          </Box>
          <Box w="100%" p={4} display="flex" flexDirection="row-reverse">
            <Menu>
              <MenuButton as={Button} rightIcon="chevron-down" paddingLeft=".5rem">
                <Avatar
                  size="sm"
                  marginRight="5px"
                  src={this.props.profile_picture}
                />
                {this.props.fullName}
              </MenuButton>
              <MenuList onClick={this.props.logout}>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </React.Fragment>
    )
  }
}

export default Header;