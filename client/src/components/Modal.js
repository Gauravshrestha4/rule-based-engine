import React from "react";
import { Form, Icon, Input, Button, Checkbox, Select } from "antd";
const { Option } = Select;
const campaignList = ["swiggy", "Netflix", "goldenscent", "naamshi"];
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        style={{
          width: 300,
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <h1> Add Rule</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("rule name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Rule Name"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("campaign", {
              rules: [{ required: true, message: "Please Select a campaign!" }]
            })(
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a campaign"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
              >
                {campaignList.map(item =>
                  <Option value={item}>
                    {item}
                  </Option>
                )}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("schedule", {
              rules: [
                {
                  required: true,
                  message: "Please select scheduling time!"
                }
              ]
            })(
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select scheduling time"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="15min">15 Mins</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("action", {
              rules: [
                {
                  required: true,
                  message: "Please select an action!"
                }
              ]
            })(
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="select an action"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="notify">Notify</Option>
              </Select>
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
