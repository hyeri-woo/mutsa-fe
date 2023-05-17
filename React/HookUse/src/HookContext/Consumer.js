import React, { createContext } from "react";
import HelloLicat from "./HelloLicat";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const Consumer = () => {
    return (
        <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
            <HelloLicat/>
        </UserInfo.Provider>
    );
};

export {UserInfo, Consumer};