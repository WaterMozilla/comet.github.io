import React, { useState } from 'react';
import FormCreate from './FormCreate';
import Button from '../Button';
import './index.less';
function Form(props:any) {
    // const [value, setValue] = useState('1');
    const { form } = props;
    const { getFieldProps, getFieldsValue, getFieldsErrors } = form;
    return (
        <div>
            {/* <input value={value} onChange={e => e.target.value} /><br/><br/>
            <input value={value} onChange={e => e.target.value} /> */}
            <input {...getFieldProps('username', {
                initialValue: '123',
                validator: [
                    {
                        required: true,
                        message: 'username必填'
                    },
                    {
                        min:2,
                        max:20,
                        message: 'username 必须为2-20个字符之间'
                    }
                ],
            }) } />
            <br/><br/>
            <div {...getFieldsErrors('username')}></div><br/><br/>
            <input {...getFieldProps('age', {
                disabled: (data: any) => {
                    return data.username === '123'
                },
            }) } /><br/><br/>
            <div {...getFieldsErrors('age')}></div><br/><br/>
            <Button type="primary" onClick={() => {
                console.log(getFieldsValue());
            }}>提交</Button>
        </div>
    );
}
/*
    应该在高阶组件FormCreate()里面维护一些数据收集、校验、更新的流程操作
    上面的value, onChange就不需要在我们的<input>等表单项目里单独维护了
*/
export default FormCreate()(Form);

