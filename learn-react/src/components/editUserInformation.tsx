import "./editUserInformation.css";
import axios from "axios";
import { useState } from "react";




//似乎是编辑用户信息的界面
function EditUserInformation(){
    const userInformation={    //测试信息
        nickname:"testname",
        email:"12306@qq.com",
        avatar:"这是图片",
        password:"123456",
        telephone:"123456789"
    };


    return (
        <div className="background_changeInformation">
            <h1 className="headline">修改用户信息</h1>
            <div className="changeInformationBorder">
            <ul>
                <li className="liStyle">头像：{userInformation.avatar}</li>
                <li>昵称：{userInformation.nickname}</li>         {/*调用上面那个函数里写的信息 */}
                <li>电话：{userInformation.telephone}</li>
                <li>电子邮件:{userInformation.email}</li>
                <li>密码：{userInformation.password}</li>
            </ul>
            <input type="button" className="clickButton" value="修改" />
            <input type="button" className="clickButton" value="注销" />
            <input type="button" className="clickButton" value="返回" />
            </div>
        </div>
    )
}

export default EditUserInformation;