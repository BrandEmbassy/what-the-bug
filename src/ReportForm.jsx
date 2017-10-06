// @flow
import React from 'react'

type ReportFormProps = {
  onSubmit: Function
}

function ReportForm(props: ReportFormProps) {
  const {onSubmit} = props;

  return (
    <form onSubmit={onSubmit}>
      <textarea name="description"></textarea>
      <input type="submit" />
    </form>
  )

}

export default ReportForm
