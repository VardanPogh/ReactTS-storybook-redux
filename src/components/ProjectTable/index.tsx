import React from 'react'
import MaterialTable from 'material-table'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import BatteryCharging20Icon from '@material-ui/icons/BatteryCharging20'
import BatteryCharging30Icon from '@material-ui/icons/BatteryCharging30'
import BatteryCharging80Icon from '@material-ui/icons/BatteryCharging80'

import DropDown from '../DropDown'

const data = [
  {
    project: 'test project',
    product: 'test product',
    revision: 'test revision',
    specs: [
      {
        gridScale: 'yes',
        capacity: 'test',
        power: 'test',
      },
    ],
  },
  {
    project: 'test project 1',
    product: 'test product 1',
    revision: 'test revision 1',
    specs: [
      {
        gridScale: 'yes',
        capacity: 'test',
        power: 'test',
      },
    ],
  },
]

const ProjectTable: React.FC = () => {
  return (
    <MaterialTable
      title="Your Products"
      options={{
        actionsColumnIndex: -1,
        // pageSizeOptions: showPageSizeOptions ? [100, 250, 500] : [0],
        // pageSize,
        padding: 'dense',
        headerStyle: {
          color: '#fff',
          backgroundColor: '#014bad',
          fontWeight: 600,
        },
        actionsCellStyle: {
          color: '#014bad',
        },
      }}
      columns={[
        { title: 'Project', field: 'project' },
        { title: 'Product', field: 'product' },
        { title: 'Revision', field: 'revision' },
      ]}
      data={data}
      actions={[
        {
          icon: (): React.ReactElement => <CloudDownloadIcon />,
          tooltip: 'Download PDF',
          onClick: (event, rowData): void =>
            // @ts-ignore
            alert(`You saved ${rowData.project}`),
        },
      ]}
      detailPanel={[
        {
          icon: (): React.ReactElement => (
            <BatteryCharging20Icon style={{ color: '#014bad' }} />
          ),
          tooltip: 'View Details for category 1',
          render: (rowData): React.ReactElement => {
            return (
              <MaterialTable
                title=""
                options={{
                  padding: 'dense',
                  headerStyle: {
                    color: '#fff',
                    backgroundColor: '#707070',
                    fontWeight: 600,
                  },
                  rowStyle: {
                    color: '#707070',
                    fontWeight: 600,
                  },
                  pageSize: 10,
                  pageSizeOptions: [0],
                  search: false,
                }}
                columns={[
                  {
                    title: 'Buying a grid-scale battery?',
                    field: 'gridScale',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="gridScale"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'yes', label: 'yes' },
                            { value: 'no', label: 'no' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Capacity',
                    field: 'capacity',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="capacity"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Power',
                    field: 'power',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="power"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                ]}
                data={rowData.specs}
                editable={{
                  /* eslint-disable */
                  onRowUpdate: (newData, oldData): Promise<any> =>
                    new Promise((resolve, reject) => {
                      // setTimeout(() => {
                      //   const dataUpdate = [...data]
                      //   const index = oldData.tableData.id
                      //   dataUpdate[index] = newData
                      //   console.log([...dataUpdate])

                      //   resolve()
                      // }, 1000)
                      console.log(newData)
                      resolve()
                    }),
                }}
                /* eslint-enable */
              />
            )
          },
        },
        {
          icon: (): React.ReactElement => (
            <BatteryCharging30Icon style={{ color: '#014bad' }} />
          ),
          tooltip: 'View Details for category 2',
          render: (rowData): React.ReactElement => {
            return (
              <MaterialTable
                title=""
                options={{
                  padding: 'dense',
                  headerStyle: {
                    color: '#fff',
                    backgroundColor: '#707070',
                    fontWeight: 600,
                  },
                  rowStyle: {
                    color: '#707070',
                    fontWeight: 600,
                  },
                  pageSize: 10,
                  pageSizeOptions: [0],
                  search: false,
                }}
                columns={[
                  {
                    title: 'Buying a grid-scale battery?',
                    field: 'gridScale',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="gridScale"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Capacity',
                    field: 'capacity',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="capacity"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Power',
                    field: 'power',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="power"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                ]}
                data={rowData.specs}
                editable={{
                  /* eslint-disable */
                  onRowUpdate: (newData, oldData): Promise<any> =>
                    new Promise((resolve, reject) => {
                      // setTimeout(() => {
                      //   const dataUpdate = [...data]
                      //   const index = oldData.tableData.id
                      //   dataUpdate[index] = newData
                      //   console.log([...dataUpdate])

                      //   resolve()
                      // }, 1000)
                      console.log(newData)
                      resolve()
                    }),
                }}
                /* eslint-enable */
              />
            )
          },
        },
        {
          icon: (): React.ReactElement => (
            <BatteryCharging80Icon style={{ color: '#014bad' }} />
          ),
          tooltip: 'View Details for category 3',
          render: (rowData): React.ReactElement => {
            return (
              <MaterialTable
                title=""
                options={{
                  padding: 'dense',
                  headerStyle: {
                    color: '#fff',
                    backgroundColor: '#707070',
                    fontWeight: 600,
                  },
                  rowStyle: {
                    color: '#707070',
                    fontWeight: 600,
                  },
                  pageSize: 10,
                  pageSizeOptions: [0],
                  search: false,
                }}
                columns={[
                  {
                    title: 'Buying a grid-scale battery?',
                    field: 'gridScale',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="gridScale"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Capacity',
                    field: 'capacity',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="capacity"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                  {
                    title: 'Power',
                    field: 'power',
                    editComponent: (props): React.ReactElement => {
                      const { value, onChange } = props
                      return (
                        <DropDown
                          id="power"
                          value={value}
                          onChange={(e): void => onChange(e.target.value)}
                          items={[
                            { value: 'test', label: 'test' },
                            { value: 'test', label: 'test' },
                          ]}
                        />
                      )
                    },
                  },
                ]}
                data={rowData.specs}
                editable={{
                  /* eslint-disable */
                  onRowUpdate: (newData, oldData): Promise<any> =>
                    new Promise((resolve, reject) => {
                      // setTimeout(() => {
                      //   const dataUpdate = [...data]
                      //   const index = oldData.tableData.id
                      //   dataUpdate[index] = newData
                      //   console.log([...dataUpdate])

                      //   resolve()
                      // }, 1000)
                      console.log(newData)
                      resolve()
                    }),
                }}
                /* eslint-enable */
              />
            )
          },
        },
      ]}
    />
  )
}

export default ProjectTable
