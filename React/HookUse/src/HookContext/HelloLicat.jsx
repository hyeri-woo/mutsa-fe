import React from 'react'
import { UserInfo } from './Consumer'

export default function HelloLicat() {
    return (
        <UserInfo.Consumer>
            {(value) => (
                <div>
                <h2>{value.name}</h2>
                <strong>{value.id}</strong>
                </div>
            )}
        </UserInfo.Consumer>
    );
}
