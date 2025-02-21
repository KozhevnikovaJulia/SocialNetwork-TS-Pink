import React from "react"

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string)=> void
}


export class ProfileStatus extends React.PureComponent< ProfileStatusPropsType > {  
  state = {
    editMode: false,
    status: this.props.status
  } 

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })   
     this.props.updateStatus (this.state.status)
     
  }
  onchangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate = (prevProps: any, prevState: any)=> {
if (prevProps.status !== this.props.status)
this.setState ({
  status: this.props.status
})
  }

  render () {
    return ( 
      <div >
        {this.state.editMode
          ? <div>
            <input onChange = {this.onchangeStatus} autoFocus={true} onBlur ={this.deactivateEditMode} type="text" value={this.state.status} />
          </div>
          : <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
          </div>}
         
      </div>      
)
  }     
}

