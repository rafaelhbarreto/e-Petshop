import {Form} from './styles'; 

export function FormSearch({placeholder}) {
  return (
    <>
      <Form>
        <input type="text" placeholder={placeholder} />
      </Form>
    </>
  )
}