import React, { useContext, useState } from "react";

import "./SideBar.css";

import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(true);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
   await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => {
            extended === true ? setExtended(false) : setExtended(true);
          }}
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {!extended && <p>New Chat</p>}
        </div>

        {!extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) =>{
                return (
                    <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                )
            })}
          
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {!extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {!extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {!extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
