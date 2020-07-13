const Table = ({headers,data,body})=>
<table>
<thead>
{headers.map(item=><th>{item}</th>)}
</thead>
<tbody>
{data.map(item=>body(item))}
</tbody>
</table>

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Start editing me</h2>
        <Table 
        data={[{name:`hassan`,age:63},{name:`mustafa`,age:63}]}
        headers={[`name`,`age`]}
        body={({name,age})=><tr>
          <td>{name}</td>
          <td>{age}</td>
        </tr>}

        />
      </div>
    )
  }
}
