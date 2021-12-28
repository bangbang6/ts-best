declare type MessageType = 'image' | 'audio' | string;
declare type Message = {
    id: number;
    type: MessageType;
    sendmessage: string;
};
declare let obj: Message;
declare let obj2: Message;
declare let messages: Array<Message>;
declare function getMessage(val: number): Message;
declare function getMessage(val: MessageType, count: number): Message[];
declare let obj1: Message;
