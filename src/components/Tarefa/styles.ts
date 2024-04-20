import styled from 'styled-components'

export const CardTask = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const TitleTask = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const TagTask = styled.span`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  background-color: #e1a32a;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
`

export const DescriptionTask = styled.textarea`
  display: block;
  width: 100%;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBarTask = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`

export const ButtonTask = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
