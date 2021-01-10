/** UI组件源文件，包含整个组件的内容和逻辑 */
import React from "react";
// import * as MyButton from 'comet-ui-doubao';
import * as PropTypes from 'prop-types';
import './index.less';

const ButtonTypes = ["default","primary"];
type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = ["large","small","default"];
type ButtonSize = (typeof ButtonSizes)[number];
export interface IButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    children?: React.ReactNode;
};
export interface IButtonState {};
// class 写法
export default class Button extends React.Component<IButtonProps, IButtonState> {
    static defaultProps: {
        // default: boolean;
    }
    static propTypes: {
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<"small" | "default" | "large">;
    }
    render() {
        const { children, type } = this.props;
        return <>
            <button className={`comet-btn comet-btn-${type}`}>{children}</button>;
            {/* <MyButton type="primary">我的按钮啊</MyButton> */}
        </>;
    }
}
// hook 写法
// const Button: React.FunctionComponent<IButtonProps> = (props) => {
//     const { children ,type = 'default'} = props;
//     return <button className={type}>{children}</button>;
// };

// 使用hook的优势 : 
// 简化原来写在生命周期中复杂的代码块，
// 完全拥抱函数 