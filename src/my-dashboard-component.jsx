// my-dashboard-component.jsx
import React, {useState, useEffect} from  'react';
import { ApiClient } from 'admin-bro'
import { Box, Text } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <Box variant="grey">
      <Box variant="white" style={{display: 'flex', height: '100%', alignItems: 'center',justifyContent: 'cener', flexDirection: 'column', background:"url(https://i.postimg.cc/FHY1syH0/photo5179356609514678668-removebg-preview.png), #fff", backgroundRepeat:"no-repeat",backgroundPosition: 'right bottom',}}>
        <img src="http://www.frutal.mg.gov.br/wp-content/uploads/2017/03/BEM-VINDO-TRANSPARENTE-DE-VERDADE-1024x253.png" alt="logo" style={{width: '650px', display:"flex", justifyContent: 'center', filter: 'invert(302%) sepia(90%) saturate(474%) hue-rotate(343deg) brightness(111%) contrast(105%)'}} />
        {/* <img src="https://i.postimg.cc/FHY1syH0/photo5179356609514678668-removebg-preview.png" alt="logo" style={{width: '150px', display:"flex", justifyContent: 'center'}} /> */}
      </Box>
    </Box>
  )
}

export default Dashboard