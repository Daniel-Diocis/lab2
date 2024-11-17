// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Messages {
    struct MessageContainer {
        string message;
    }

    mapping(string => MessageContainer) public messages;

    function setMessage(string memory msgContent) public {
        messages[msgContent] = MessageContainer(msgContent);
    }

    function getMessage(string memory msgContent) public view returns (MessageContainer memory) {
        return messages[msgContent];
    }
}