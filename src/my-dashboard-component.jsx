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
      <Box variant="white" style={{display: 'flex',alignItems: 'center',justifyContent: 'center', flexDirection: 'column'}}>
        <img src="https://magazine25.vteximg.com.br/arquivos/ids/189732-550-550/Lettering-Transfer-para-Balao-Bem-Vindo-Preto-Parabens-22X18-cm----1-Unidade.jpg?v=637366580225570000" alt="logo" style={{width: '250px', display:"flex", justifyContent: 'center'}} />
        <img src="https://i.postimg.cc/FHY1syH0/photo5179356609514678668-removebg-preview.png" alt="logo" style={{width: '150px', display:"flex", justifyContent: 'center'}} />
      </Box>
    </Box>
  )
}

export default Dashboard