// @flow
import React from 'react'
import BrowserInfo from '../BrowserInfo'

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
