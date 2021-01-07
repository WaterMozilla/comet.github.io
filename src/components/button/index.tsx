/** UI组件源文件，包含整个组件的内容和逻辑 */
import React from "react";
import './index.less';
export interface ButtonProps {
    size?: 'small' | "big" | "default";
}
export interface ButtonState {}
export default class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (<div className="wrap"><button className="test">测试ing</button></div>);
    }
}
