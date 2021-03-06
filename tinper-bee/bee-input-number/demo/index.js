import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 基础示例 ","code":"/**\n *\n* @title 基础示例 \n * @description 最简单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber precision={2} min={0}  value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" 最简单输入控制"},{"example":<Demo2 />,"title":" 默认 iconStyle","code":"/**\n*\n* @title 默认 iconStyle\n* @description 自定义 最大值 max=12,min=5,step=1\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={1}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义 最大值 max=12,min=5,step=1"},{"example":<Demo3 />,"title":" 第二种iconStyle","code":"/**\n*\n* @title 第二种iconStyle\n* @description 自定义max=12,min=5,step=2\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2"},{"example":<Demo4 />,"title":" 默认iconStyle不可用状态","code":"/**\n *\n * @title 默认iconStyle不可用状态\n * @description disabled 的单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber disabled precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" disabled 的单输入控制"},{"example":<Demo5 />,"title":" 第二种iconStyle不可用状态","code":"/**\n*\n* @title 第二种iconStyle不可用状态\n* @description 自定义max=12,min=5,step=2 且设置 disabled 处理\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 8\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tdisabled\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2 且设置 disabled 处理"},{"example":<Demo6 />,"title":" 保留两位小数","code":"/**\r\n*\r\n* @title 保留两位小数\r\n* @description precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { InputNumber } from 'tinper-bee'; \r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: 0\r\n        }\r\n    }\r\n    handleChange = (value) => {\r\n\t\tconsole.log(value)\r\n        this.setState({\r\n            value: value\r\n        })\r\n    }\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<InputNumber\r\n\t\t\t\ticonStyle=\"one\"\r\n\t\t\t\tprecision={2}\r\n\t\t\t\tvalue={this.state.value}\r\n\t\t\t\tonChange={ this.handleChange }\r\n\t\t\t/>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数"},{"example":<Demo7 />,"title":" 显示千分符示例","code":"/**\r\n *\r\n* @title 显示千分符示例\r\n * @description 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值\r\n *\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\r\nimport { InputNumber } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: 0\r\n        }\r\n    }\r\n\r\n    handleChange = (value) => {\r\n        console.log('onChange:   '+value)\r\n        this.setState({\r\n            value: value\r\n        })\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <InputNumber toThousands={true} precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值"},{"example":<Demo8 />,"title":" 基础示例 ","code":"/**\n *\n* @title 基础示例 \n * @description 最简单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: ''\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber  precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" 最简单输入控制"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
