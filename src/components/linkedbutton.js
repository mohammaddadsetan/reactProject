import './buttons.css';
import Button from '@mui/material/Button';
export default function Linkedbutton({variant , children , sx}) {
  return (
    <Button variant={variant} sx={sx}>{children}</Button>
  )
}

