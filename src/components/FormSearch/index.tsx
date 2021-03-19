import {Form} from './styles'; 

interface FormSearchProps {
  placeholder: string; 
}

export function FormSearch({placeholder}: FormSearchProps) {
  return (
    <>
      <Form>
        <input type="text" placeholder={placeholder} />
      </Form>
    </>
  )
}