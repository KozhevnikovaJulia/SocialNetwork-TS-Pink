import React from "react";
import style from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType, DialogArrayPropsType} from "../../redux/Store";
import {AddMessageReduxForm} from "../AddMessageForm/AddMessageForm";
import mainImg from "../../assets/image/candies.jpg"
import { MainImageWrapper } from "../../common/MainImageWrapper/MainImageWrapper";

type DialogsPropsType = {
    sendMessage: (newMessage: any)=> void
    changeMessage: (messageText:string)=> void
    newMessageText: string
    dialogs: Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>
}

export const Dialogs = React.memo ((props:DialogsPropsType) => {
    let DialogElements = props.dialogs.map((dialog: DialogArrayPropsType) => {
        return <Dialog id={dialog.id} name={dialog.name} key={dialog.id}/>
    })
    let MessageElements = props.messages.map((message: MessagesPropsType) => {
        return <Message textMessage={message.textMessage} id={message.id} />
    })

    const addMessage = (value: any) => {
        props.sendMessage(value.newMessage)
    }
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      };
    return (
        <div className={style.dialogsContant}>

            <MainImageWrapper mainImage ={mainImage} title="Dialogs"/>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogs}>
                    {DialogElements}
                </div>
                <div className={style.messages}>
                    <div>{MessageElements}</div>
                    <AddMessageReduxForm onSubmit={addMessage} />
                </div>
            </div>

        </div>
)}
)