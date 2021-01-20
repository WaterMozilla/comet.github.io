/** UI组件源文件，包含整个组件的内容和逻辑 */
import React from "react";
// import * as MyButton from 'comet-ui-doubao';
// import PropTypes from 'prop-types'; {string:xxx,func: xxx}
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

const ButtonTypes = ["default","primary"];
type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = ["large","small","default"];
type ButtonSize = (typeof ButtonSizes)[number];
export interface IButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    children?: React.ReactNode;
    prefixCls?: string;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
};
export interface IButtonState {};
// class 写法
export default class Button extends React.Component<IButtonProps, IButtonState> {
    static defaultProps = {
        prefixCls: 'comet-btn',
        type: 'default',
        size: 'small',
    }
    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.string,
        onClick: PropTypes.func,
    }

    handleClick: React.MouseEventHandler<HTMLElement> = e => {
        console.log('click button here');
    }
    // handleClick = () => {

    // }
    render() {
        const { disabled, prefixCls, className, children, type, size } = this.props;
        let sizeCls = '';
        switch(size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
            break;
        default:
            sizeCls = '';
            break;
        }
        // 构建类
        const classes = classNames(prefixCls,className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
        });
        return <>
            <button 
                disabled={disabled} 
                className={classes}
                onClick={this.handleClick}
            >
                {children}
            </button>
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