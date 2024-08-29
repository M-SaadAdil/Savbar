import React from 'react'

export default function Alert(props) {
  return (
    <>
     {props.alert && 
      <div className={`alert alert-${props.alert.qisim}`} role="alert">
        <strong>Notice:</strong> {props.alert.msg}
      </div>}
    </>
  )
}
