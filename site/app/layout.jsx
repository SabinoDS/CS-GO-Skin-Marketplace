import 'bootstrap/dist/css/bootstrap.css'
import Titulo from '@/components/Titulo'

export const metadata = {
  title: 'Controle de Skins',
  description: 'Sistema de venda de skins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">  
    <head>
      <link rel="shortcut icon" href="../logo.png" type="image/x-icon" />  
    </head>    
      <body>
        <Titulo />
        {children}
      </body>
    </html>
  )
}
