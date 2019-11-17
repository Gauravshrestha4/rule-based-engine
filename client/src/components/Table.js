import React from 'react';
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Rule Name",
    dataIndex: "ruleName",
    key: "ruleName",
    render: text =>
      <a>
        {text}
      </a>
  },
  {
    title: "Campaigns",
    dataIndex: "campaigns",
    key: "campaigns"
  },
  {
    title: "Rule Schedule",
    dataIndex: "ruleSchedule",
    key: "ruleSchedule"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: tags =>
      <span>
       {tags}
      </span>
  },
];

const data = [
  {
    key: "1",
    ruleName: "rule 1",
    campaigns: 'swiggy',
    ruleSchedule: "15 mins",
    status: 'true'
  },
  {
    key: "2",
    ruleName: "rule 2",
    campaigns: 'swiggy',
    ruleSchedule: "15 mins",
    status: 'false'
  },
  {
    key: "3",
    ruleName: "rule 3",
    campaigns: 'swiggy',
    ruleSchedule: "15 mins",
    status: 'false'
  }
];
const DataTable=()=>{
  return(
      <>
      <Table columns={columns} dataSource={data} pagination={false}/> 
      </>
  )
}
export default DataTable 
