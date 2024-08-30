import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
      {props.alert && 
      <div className={`alert alert-${props.alert.qisim}`} role="alert">
        <strong>Notice:</strong> {props.alert.msg}
      </div>}
    </div>
  )
}
