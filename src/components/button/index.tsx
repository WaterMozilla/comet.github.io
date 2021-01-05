/** UI组件源文件，包含整个组件的内容和逻辑 */
import React from "react";
export interface ButtonProps {
    size?: "small" | "big" | "default"
}
export interface ButtonState {}
export default class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        return <button>测试ing</button>;
    }
}